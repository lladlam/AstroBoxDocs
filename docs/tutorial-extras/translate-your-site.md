---
sidebar_position: 2
---

# 翻译您的站点

让我们将 `docs/intro.md` 翻译成法语。

## 配置国际化

修改 `docusaurus.config.js` 以添加对 `fr` 区域设置的支持：

```js title="docusaurus.config.js"
export default {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
  },
};
```

## 翻译文档

将 `docs/intro.md` 文件复制到 `i18n/fr` 文件夹：

```bash
mkdir -p i18n/fr/docusaurus-plugin-content-docs/current/

cp docs/intro.md i18n/fr/docusaurus-plugin-content-docs/current/intro.md
```

将 `i18n/fr/docusaurus-plugin-content-docs/current/intro.md` 翻译成法语。

## 启动本地化站点

在法语区域设置下启动您的站点：

```bash
npm run start -- --locale fr
```

您的本地化站点现在可以通过 [http://localhost:3000/fr/](http://localhost:3000/fr/) 访问，并且 \`Getting Started\` 页面已被翻译。

:::caution

在开发过程中，您一次只能使用一种区域设置。

:::

## 添加区域设置下拉菜单

为了在不同语言间无缝导航，请添加一个区域设置下拉菜单。

修改 `docusaurus.config.js` 文件：

```js title="docusaurus.config.js"
export default {
  themeConfig: {
    navbar: {
      items: [
        // highlight-start
        {
          type: 'localeDropdown',
        },
        // highlight-end
      ],
    },
  },
};
```

区域设置下拉菜单现在将出现在导航栏中：

![区域设置下拉菜单](./img/localeDropdown.png)

## 构建本地化站点

为特定区域设置构建您的站点：

```bash
npm run build -- --locale fr
```

或者构建包含所有区域设置的站点：

```bash
npm run build
```