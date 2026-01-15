---
sidebar_position: 1
---

# 管理文档版本

Docusaurus 可以管理您的文档的多个版本。

## 创建文档版本

为您的项目发布 1.0 版本：

```bash
npm run docusaurus docs:version 1.0
```

`docs` 文件夹被复制到 `versioned_docs/version-1.0` 并创建 `versions.json`。

您的文档现在有两个版本：

- `1.0` 对应 `http://localhost:3000/docs/` 的 1.0 版本文档
- `current` 对应 `http://localhost:3000/docs/next/` 的 **即将发布、未发布的文档**

## 添加版本下拉菜单

为了在不同版本间无缝导航，请添加一个版本下拉菜单。

修改 `docusaurus.config.js` 文件：

```js title="docusaurus.config.js"
export default {
  themeConfig: {
    navbar: {
      items: [
        // highlight-start
        {
          type: 'docsVersionDropdown',
        },
        // highlight-end
      ],
    },
  },
};
```

文档版本下拉菜单将出现在导航栏中：

![文档版本下拉菜单](./img/docsVersionDropdown.png)

## 更新现有版本

可以在各自的文件夹中编辑版本化文档：

- `versioned_docs/version-1.0/hello.md` 更新 `http://localhost:3000/docs/hello`
- `docs/hello.md` 更新 `http://localhost:3000/docs/next/hello`