/*
Migration helper for Yuque (语雀) -> Docusaurus

Usage:
  1. npm install node-fetch@2 jsdom turndown
  2. node scripts/migrate_yuque.js

What this script does:
  - Parse the already-downloaded file docs/astrobox/qaa.html to extract the embedded window.appData JSON and its book.toc
  - For each DOC entry in the TOC, fetch the Yuque page HTML and save raw HTML to docs/astrobox/raw/
  - Extract the main article content (best-effort) and download images into docs/astrobox/assets/
  - Produce a Markdown file per DOC with frontmatter (title, original_url) and HTML fallback content if Turndown is unavailable
  - Produce a manifest JSON docs/astrobox/manifest.json with list of created files

Notes:
  - This is best-effort migration. Manual proofreading is required.
  - If you want strict Markdown conversion, install Turndown (see usage above).
*/

const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch'); // v2
const { JSDOM } = require('jsdom');
let TurndownService;
try {
  TurndownService = require('turndown');
} catch (e) {
  TurndownService = null; // optional
}

const WORKDIR = process.cwd();
const QAA_HTML = path.join(WORKDIR, 'docs', 'astrobox', 'qaa.html');
const RAW_DIR = path.join(WORKDIR, 'docs', 'astrobox', 'raw');
const ASSET_DIR = path.join(WORKDIR, 'docs', 'astrobox', 'assets');
const OUT_DIR = path.join(WORKDIR, 'docs', 'astrobox');

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

ensureDir(RAW_DIR);
ensureDir(ASSET_DIR);
ensureDir(OUT_DIR);

function extractAppData(html) {
  // match: window.appData = JSON.parse(decodeURIComponent("..."));
  const re = /window\.appData\s*=\s*JSON\.parse\(decodeURIComponent\("([\s\S]*?)"\)\);/m;
  const m = html.match(re);
  if (!m) return null;
  try {
    const decoded = decodeURIComponent(m[1]);
    const obj = JSON.parse(decoded);
    return obj;
  } catch (e) {
    console.error('Failed to parse appData JSON:', e.message);
    return null;
  }
}

async function download(url, dest) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to download ${url}: ${res.status}`);
  const buffer = await res.buffer();
  fs.writeFileSync(dest, buffer);
  console.log('Saved', dest);
}

function safeFileName(name) {
  return name.replace(/[\\/:*?"<>|\s]+/g, '-').replace(/-+/g, '-').replace(/^[-.]+|[-.]+$/g, '').toLowerCase();
}

(async function main(){
  if (!fs.existsSync(QAA_HTML)) {
    console.error('Missing file:', QAA_HTML);
    console.error('Please ensure you have saved the main page at docs/astrobox/qaa.html');
    process.exit(1);
  }

  const html = fs.readFileSync(QAA_HTML, 'utf8');
  const appData = extractAppData(html);
  if (!appData || !appData.book || !Array.isArray(appData.book.toc)) {
    console.error('Book TOC not found inside appData. Aborting.');
    process.exit(1);
  }

  const toc = appData.book.toc;
  const base = 'https://www.yuque.com/yulimfish/astrobox/';

  const manifest = [];

  for (const entry of toc) {
    // handle entries of type DOC only
    if (entry.type !== 'DOC') continue;
    const slug = entry.url;
    const title = entry.title || slug;
    const docUrl = base + slug;
    try {
      console.log('\nFetching', docUrl);
      const res = await fetch(docUrl);
      if (!res.ok) {
        console.warn('Failed to fetch', docUrl, res.status);
        continue;
      }
      const body = await res.text();
      const rawPath = path.join(RAW_DIR, `${slug}.html`);
      fs.writeFileSync(rawPath, body, 'utf8');

      // Try to extract article content using known selectors (best-effort)
      const dom = new JSDOM(body);
      const doc = dom.window.document;

      // Common selectors for Yuque/lake content
      const selectors = [
        '.lake-doc .lakex-doc',
        '.lake-doc .lake-content',
        '.lakex-doc',
        '.doc-content',
        '#lakex-doc-content',
        '.yue-doc',
        '.container .doc-body',
        '.article',
        'main'
      ];

      let contentEl = null;
      for (const s of selectors) {
        const el = doc.querySelector(s);
        if (el && el.innerHTML && el.innerHTML.trim().length > 20) {
          contentEl = el;
          break;
        }
      }

      // fallback to body
      if (!contentEl) contentEl = doc.body;

      // download images and rewrite src to local assets
      const imgs = Array.from(contentEl.querySelectorAll('img'));
      for (const img of imgs) {
        let src = img.getAttribute('src') || img.getAttribute('data-src');
        if (!src) continue;
        // absolute URL? if relative, make absolute
        if (src.startsWith('//')) src = 'https:' + src;
        if (src.startsWith('/')) src = 'https://www.yuque.com' + src;

        const urlObj = new URL(src, docUrl);
        const filename = safeFileName(path.basename(urlObj.pathname) || ('img-' + Math.random().toString(36).slice(2,8))) ;
        const ext = path.extname(urlObj.pathname) || '.png';
        const localName = `${slug}-${filename}${ext}`;
        const localPath = path.join(ASSET_DIR, localName);

        try {
          await download(urlObj.href, localPath);
          img.setAttribute('src', `./assets/${localName}`);
        } catch (e) {
          console.warn('Image download failed for', urlObj.href, e.message);
        }
      }

      const contentHtml = contentEl.innerHTML;

      // Convert to Markdown if Turndown available
      let md = '';
      if (TurndownService) {
        try {
          const turndown = new TurndownService({ headingStyle: 'atx' });
          md = turndown.turndown(contentHtml);
        } catch (e) {
          console.warn('Turndown failed, falling back to HTML embed');
          md = null;
        }
      }

      const outBaseName = safeFileName(title) || slug;
      const mdPath = path.join(OUT_DIR, `${outBaseName}.md`);

      const header = `---\ntitle: "${title.replace(/"/g, '\\"')}"\noriginal_url: "${docUrl}"\n---\n\n`;
      if (md) {
        fs.writeFileSync(mdPath, header + md, 'utf8');
      } else {
        // wrap HTML inside Markdown by embedding raw HTML (docusaurus supports it)
        const wrapped = `<!-- migrated from ${docUrl} -->\n\n${header}${contentHtml}`;
        fs.writeFileSync(mdPath, wrapped, 'utf8');
      }

      manifest.push({ title, slug, docUrl, raw: `raw/${slug}.html`, md: `${outBaseName}.md` });
      console.log('Created', mdPath);

    } catch (e) {
      console.error('Error processing', entry, e.message);
    }
  }

  const manifestPath = path.join(OUT_DIR, 'manifest.json');
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2), 'utf8');

  // Output a sidebar snippet file for manual inclusion
  const sidebarItems = manifest.map((m) => `  '${m.md.replace(/\\.md$/, '')}',`).join('\n');
  const sidebarSnippet = `// Auto-generated AstroBox sidebar snippet.\n// Add this into your sidebars.js or export as a new sidebar.\nmodule.exports = {\n  astroboxSidebar: [\n${manifest.map((m)=>`    {type: 'doc', id: 'astrobox/${m.md.replace(/\\.md$/,'')}', label: '${m.title.replace(/'/g, "\\'")}'},`).join('\n')}\n  ]\n};\n`;
  fs.writeFileSync(path.join(OUT_DIR, 'sidebars_snippet.js'), sidebarSnippet, 'utf8');

  console.log('\nMigration finished. Created manifest:', manifestPath);
  console.log('Check docs/astrobox/*.md and docs/astrobox/assets/ for images.');
  console.log('A sidebar snippet was created at docs/astrobox/sidebars_snippet.js — integrate it into your root sidebars.js');
  if (!TurndownService) {
    console.log('\nNOTE: turndown (Markdown conversion) not installed. To enable better Markdown output, run:');
    console.log('  npm install turndown');
    console.log('Then re-run the script.');
  }
})();
