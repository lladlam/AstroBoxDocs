---
sidebar_position: 1
---

# Var Watchface Integration Document (V0.0.1)

:::tips PLEASE NOTE

This document originates from azumachiaki's ![Yuque Document](https://www.yuque.com/azumachiaki/uu6lym/qi0rq5xae43759so?singleDoc#%20%E3%80%8AVar%E8%A1%A8%E7%9B%98%E6%8E%A5%E5%85%A5%E6%96%87%E6%A1%A3%EF%BC%88V0.0.1%EF%BC%89%E3%80%8B). <mark class="pink">This article is a repost only; for detailed information, please contact azumachiaki@163.com</mark>

Author: azumachiaki. Reposted by lladlam with authorization. Copyright belongs to azumachiaki.

<mark class="pink">This website is not responsible for any resources downloaded by users from third-party links.</mark>
:::

## Overview

This document will be continuously updated to introduce how to quickly and cost-effectively enable your watchface to display course content from the Var Timetable. If you have any reasonable or practical ideas, feel free to contact me. I will carefully consider your suggestions and implement them whenever possible.

Contact Email: azumachiaki@163.com

## Agreement

<mark>**If you use my components to create related watchfaces, I may collect and publicly publish information related to your resources, such as download links or post addresses, so that other users can download or purchase them. If you do not wish for me to do this, please inform me in advance.**</mark>

**Suggestion**: To make it easier for users to find and use, I strongly recommend adding labels like (Var Integrated), (Var), or other easily identifiable marks to your work's title or tags.

**For Free Resources**: We encourage the creation and sharing of free resources. Therefore, you may use the components I provide for free creation and distribution. Before doing so, you only need to send your work's download link or original file, post link, preview images, introduction, and your common contact information to my email. You do not need to wait for my reply to proceed with public release.

**For Paid Resources**: You may use my components to create and sell paid resources, but you must obtain my authorization. I may charge a small authorization fee. In return, I will provide a series of services, including fine-tuning or even customizing component content and styles to better fit your creative vision.

**For Deep Cooperation**: It is an honor to have your appreciation. I am very willing to establish deeper cooperation with you to co-create even more exciting content. If you have any ideas, feel free to contact me for discussion at any time.

## Obtaining Resources

As of now, I have only produced 4 types of general-purpose components for public use, so your suggestions are particularly important right now. This will help me create more practical component specifications.

Component Parameters: Length 100px, Width 30px (horizontal rectangle), Font size 26px, Text color white, Long text automatically handled with a marquee effect.

Download Link: ![Click to Download](https://azumachiaki.com/varcell/v0.0.1/re.zip)

## Importing Components into Your Watchface

Currently, the most mainstream and powerful watchface editor is the open-source editor Easyface, created by m0tral, with Chinese localization by xinghengCN.

Quick Download Link: ![Click here to Download](https://azumachiaki.com/tools/ef.zip)

Importing Components:

1. Create a folder named `app/lua` within your Easyface project folder.
2. Place the downloaded `.lua` component into the `_lua` folder.
3. Create a new basic container in the project, then rename the container to "app_lua%2F[filename of the lua component]". The container size should match the component size.

The Lua component is now successfully imported into your watchface project.