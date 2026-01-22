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
    locales: ['zh', 'en'], // 添加英文语言环境
    localeConfigs: {
      en: {
        htmlLang: 'en-GB', // 为英文设置 htmlLang
      },
    },
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
          customCss: [
			'./static/fonts/misans/result.css',  // 1. 先加载字体定义
			require.resolve('./src/css/custom.css'), // 2. 再加载你的样式 
		  ] ,
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
          {
            type: 'localeDropdown', // 添加语言切换下拉菜单
            position: 'right',
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
                label: 'AstroBox爱发电',
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
			  {
			    label: '聪明猫的爱发电',
			    href: 'https://afdian.com/item/18dde340bc6911f0a0515254001e7c00',
			  },
			  {
			    label: 'lladlam的爱发电',
			    href: 'https://www.lladlam.top/posts/afdiandocs/',
			  },
            ],
          },
		  {
			title: '友链',
			items: [
			  {
				label: '米坛社区',
				href: 'https://bandbbs.cn',
			  },
			  {
				label: '小米社区',
				href: 'https://xiaomi.cn',
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