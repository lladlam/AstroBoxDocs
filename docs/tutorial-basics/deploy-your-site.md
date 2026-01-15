---
sidebar_position: 5
---

# 部署您的站点

Docusaurus 是一个 **静态站点生成器**（也称为 **[Jamstack](https://jamstack.org/)**）。

它将您的站点构建为简单的 **静态 HTML、JavaScript 和 CSS 文件**。

## 构建您的站点

为生产环境构建您的站点：

```bash
npm run build
```

静态文件将在 `build` 文件夹中生成。

## 部署您的站点

在本地测试您的生产构建：

```bash
npm run serve
```

现在，`build` 文件夹中的内容在 [http://localhost:3000/](http://localhost:3000/) 提供服务。

现在，您可以轻松地将 `build` 文件夹部署到 **几乎任何地方**，**免费** 或成本极低（请阅读 **[部署指南](https://docusaurus.io/docs/deployment)**）。
