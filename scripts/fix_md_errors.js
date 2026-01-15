/**
 * fix_md_errors.js
 *
 * 用法：在项目根目录运行
 *   node scripts/fix_md_errors.js
 *
 * 作用：清理 docs/astrobox/*.md 中残留会触发 MDX 表达式解析的 JS/内联脚本，
 * - 备份原始 MD 到 docs/astrobox/raw-md/
 * - 移除 <script> 和 <style> 块
 * - 移除 window.appData / window.__webpack_nonce__ 等行
 * - 移除元素上的 on* 事件属性（如 onclick）
 * - 在不破坏代码块的前提下，把花括号 { } 在正文中替换为 HTML 实体以避免 MDX 将其解析为 JS 表达式
 *
 * 注意：脚本尽力做到安全自动化，但复杂场景仍需人工校对。
 */

const fs = require('fs');
const path = require('path');

const DIR = path.join(process.cwd(), 'docs', 'astrobox');
const RAWDIR = path.join(DIR, 'raw-md-backup');
if (!fs.existsSync(DIR)) {
  console.error('目录不存在：', DIR);
  process.exit(1);
}
if (!fs.existsSync(RAWDIR)) fs.mkdirSync(RAWDIR, { recursive: true });

function splitByFences(text) {
  // 把文本按 ```code``` fence 切分，保留分隔符
  const parts = text.split(/(```[\s\S]*?```)/g);
  return parts;
}

function escapeOutsideFences(text) {
  const parts = splitByFences(text);
  for (let i = 0; i < parts.length; i++) {
    const p = parts[i];
    if (/^```/.test(p)) {
      // code fence - 不处理
      continue;
    }
    // 1) 移除 <script>...</script> 和 <style>...</style>
    let out = p.replace(/<script[\s\S]*?<\/script>/gi, '');
    out = out.replace(/<style[\s\S]*?<\/style>/gi, '');
    // 2) 移除 window.appData = ... 以及 window.__webpack_nonce__ = ... 等单行/多行 JS
    out = out.replace(/window\.appData\s*=\s*JSON\.parse\([\s\S]*?\);?/gi, '');
    out = out.replace(/window\.__webpack_nonce__\s*=\s*[^;\r\n]*;?/gi, '');
    // 3) 移除元素上的 onXXX 属性（例如 onclick="..." 或 onmouseover='...')
    out = out.replace(/\s+on[a-zA-Z]+=("[^"]*"|'[^']*'|[^\s>]+)/gi, '');
    // 4) 将剩余的尖括号内的 JS 事件样式尽量清理（例如 javascript: 链接）
    out = out.replace(/href\s*=\s*("javascript:[^"]*"|'javascript:[^']*')/gi, '');
    // 5) 将花括号替换为实体，防止 MDX 将 { } 解析成表达式
    //    注意：不在 code fence 中处理，所以保留代码块内的原样
    out = out.replace(/\{/g, '&#123;').replace(/\}/g, '&#125;');
    // 6) 压缩连续空行
    out = out.replace(/\n{3,}/g, '\n\n');
    parts[i] = out;
  }
  return parts.join('');
}

const files = fs.readdirSync(DIR).filter(f => f.endsWith('.md'));
if (files.length === 0) {
  console.log('未找到任何 .md 文件于', DIR);
  process.exit(0);
}

files.forEach(file => {
  try {
    const p = path.join(DIR, file);
    const s = fs.readFileSync(p, 'utf8');
    // 备份原始 md
    fs.writeFileSync(path.join(RAWDIR, file), s, 'utf8');

    // 分离 frontmatter
    let fm = '';
    let body = s;
    const m = s.match(/^(---[\s\S]*?---\s*)/);
    if (m) {
      fm = m[1];
      body = s.slice(m[1].length);
    }

    const cleaned = escapeOutsideFences(body);

    const out = fm + '\n' + cleaned.trim() + '\n';
    fs.writeFileSync(p, out, 'utf8');
    console.log('已处理', file);
  } catch (e) {
    console.error('处理失败', file, e && e.message);
  }
});

console.log('\n处理完成。请运行项目构建或 dev server 以验证。');
