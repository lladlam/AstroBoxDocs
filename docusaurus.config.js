// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'AstroBox第三方帮助文档',
  tagline: '为AstroBox与快应用开发者提供用户使用文档',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://abdocs.lladlam.top',
  baseUrl: '/',

  organizationName: 'lladlam',
  projectName: 'AstroBoxDocs',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'zh',
    locales: ['zh'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/lladlam/astroboxdocs/tree/main',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/lladlam/astroboxdocs/tree/main',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      
      // --- Algolia 搜索与 AI 配置 ---
      algolia: {
        appId: 'AXZ3GZ11QM',
        apiKey: 'e56138bb932c2dc41733485c2639238f',
        indexName: 'AstroBoxDocs',
        
        // 使用最新的 Ask AI 助手 ID
        askAi: 'q9e1c7kBLvhZ',
        
        contextualSearch: true,
        insights: true,
        searchPagePath: 'search',
      },
      
      navbar: {
        title: 'AstroBox第三方帮助文档',
        logo: {
          alt: 'AstroBox Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '文档',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '链接',
            items: [
              {
                label: 'QQ群',
                href: 'https://qm.qq.com/q/JceseeqRk4',
              },
              {
                label: '爱发电',
                href: 'https://afdian.com/a/astralsight',
              },
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/lladlam/astroboxdocs',
              },
            ],
          },
        ],
        copyright: `版权所有 © ${new Date().getFullYear()} AstralSightStudios , The site made with ❤ by lladlam ，Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;