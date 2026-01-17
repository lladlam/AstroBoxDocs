import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'b2f'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/authors',
    component: ComponentCreator('/blog/authors', '0b7'),
    exact: true
  },
  {
    path: '/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/blog/authors/all-sebastien-lorber-articles', '4a1'),
    exact: true
  },
  {
    path: '/blog/authors/yangshun',
    component: ComponentCreator('/blog/authors/yangshun', 'a68'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '89a'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '9ad'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'e9f'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '704'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '858'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '299'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '00d'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'd2b'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/search',
    component: ComponentCreator('/search', '5de'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '5f4'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '192'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'e32'),
            routes: [
              {
                path: '/docs/astrobox-for-ios/started',
                component: ComponentCreator('/docs/astrobox-for-ios/started', '297'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/astrobox/account',
                component: ComponentCreator('/docs/astrobox/account', 'f7f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/astrobox/connect',
                component: ComponentCreator('/docs/astrobox/connect', 'ad2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/astrobox/disclaimer',
                component: ComponentCreator('/docs/astrobox/disclaimer', 'bec'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/astrobox/function',
                component: ComponentCreator('/docs/astrobox/function', '594'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/astrobox/other',
                component: ComponentCreator('/docs/astrobox/other', '1d5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/astrobox/resource',
                component: ComponentCreator('/docs/astrobox/resource', 'bef'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/astrobox/started',
                component: ComponentCreator('/docs/astrobox/started', '488'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/快应用',
                component: ComponentCreator('/docs/category/快应用', '993'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/astrobox',
                component: ComponentCreator('/docs/category/astrobox', '150'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/astrobox-for-ios',
                component: ComponentCreator('/docs/category/astrobox-for-ios', '61b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/quickapp/started',
                component: ComponentCreator('/docs/quickapp/started', '12e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/start',
                component: ComponentCreator('/docs/start', '023'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
