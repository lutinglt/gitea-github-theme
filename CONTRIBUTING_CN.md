# 贡献指南

## 目录结构

| 目录              | 说明                                      |
| ----------------- | ----------------------------------------- |
| src               | 主题生成框架与辅助工具的包                |
| src/core          | 主题生成框架（CSS 变量、语法高亮样式）    |
| src/functions     | 主题辅助工具（颜色计算等）                |
| src/palette       | 主题调色板（GitHub / Gitea / Catppuccin） |
| src/types         | 主题颜色变量类型定义                      |
| src/vite-plugin   | 主题的 Vite 构建插件                      |
| styles            | 主题样式覆盖                              |
| styles/common     | 可复用的 CSS 样式片段                     |
| styles/public     | 基础元素或跨页面元素的样式                |
| styles/components | 具体页面的样式                            |
| styles/templates  | 模板专属样式                              |
| themes            | 颜色主题定义                              |
| primer            | 自动生成的 Primer 设计令牌                |
| scripts           | 构建和工具脚本                            |
| templates         | Gitea 模板覆盖（可选）                    |
| gitea             | 上游 Gitea 参考文件                       |
| screenshots       | 主题截图                                  |

## 贡献说明

不推荐主题样式贡献, 因为 Gitea 主题最终是由单个 CSS 文件提供, 所以会有先后顺序覆盖, 样式影响广泛等问题.

开发者每个人的思路不一样, 审核很难看出这些问题, 会极大增加维护难度.

如果确定理解了 Gitea 的样式布局和我的思路, 请先提交 Issue 确认工作量和预期效果, 然后再开发提交 PR.

如果认为有更好的思路, 欢迎提交 Issue.

> [!IMPORTANT]
>
> 提交 PR 时, 请执行 `bun commit`

## 开发环境

主题依赖于 Bun 环境, 请确保你的环境中已经安装了 Bun, 推荐使用 Bun 1.3.14 或以上版本.

请使用 VSCode 开发, 并安装仓库中推荐的插件.

如果不喜欢多余的插件, 请务必安装 `vscode-styled-components` 插件, 此插件用于渲染和检查 TypeScript 中的 CSS 模板字符串.

推荐使用 VSCode 1.102.0 版本以上开发, 此版本以上提供 TypeScript 代码中 16 进制颜色的支持.

## 开发流程

### 安装依赖

```bash
bun install
```

### 设置环境变量

在项目根目录下创建 `.env` 文件, 变量参考 `.env.example` 文件.

环境变量用于发送编译后的主题到服务器上, 快速预览主题.

### 编译主题

编译并同步到远程服务器预览

```bash
bun bundle:dev
```

编译所有主题

```bash
bun bundle
```

格式化项目中的代码

```bash
bun fmt
```

用于 PR, 检查并编译项目中的所有代码并进行格式化

```bash
bun commit
```

## 开发规范

`src`, `styles`, `themes` 为项目的主目录.

跨模块引用时使用 package exports 路径, 例如 `import { defineTheme } from "@lutinglt/gitea-github-theme/core"`

同模块内文件互相引用时使用相对路径, 例如 `import { defineTheme } from "./theme"`

## 颜色主题贡献

主题文件命名格式: `主题名称.ts`，配合 `theme.config.ts` 注册使用。

如果主题同时有深色和亮色变体, 框架会自动生成 auto 自动颜色主题.

项目接受自定义主题并会附加到发布的版本中, 但项目所有者不参与维护和审核.

请在颜色主题文件头部附加自己的作者信息, 方便 Issue 提问者找到你 `@`.

推荐使用 `defineTheme` 配合 `ThemeColor` 类型来定义主题颜色, 框架会自动计算生成所有 Gitea CSS 变量.

颜色计算函数可从 `@lutinglt/gitea-github-theme/core` 导入 `scaleColorLight` 和 `rgba`, 或使用 `color2k` 库进行额外颜色操作.

例: `themes/主题名称.ts`

```ts
/**
 * @author 你的名字
 * @description 主题描述
 */
import { defineTheme, scaleColorLight } from "@lutinglt/gitea-github-theme/core";
import type { ThemeColor, Syntax } from "@lutinglt/gitea-github-theme/core";

const themeColor: ThemeColor = {
  isDarkTheme: true,
  primary: "#0969da",
  primaryContrast: "#f0f6fc",
  secondary: "#30363d",
  base: { red: "#f85149", orange: "#d29922" /* ... */ },
  console: {
    /* ... */
  },
  diff: {
    /* ... */
  },
  other: {
    /* ... */
  },
  github: {
    /* ... */
  },
};

const syntaxColor: Syntax = {
  /* 自定义代码高亮色, 或导入使用其他主题的代码高亮色 */
};

export default defineTheme({ colorType: "theme", themeColor, syntaxColor });
```

如需使用 Gitea 原生颜色格式, 使用 `colorType: "gitea"` 配合 `GiteaColor` 类型:

```ts
import type { GiteaColor, Syntax } from "@lutinglt/gitea-github-theme/core";
import { defineTheme } from "@lutinglt/gitea-github-theme/core";

const giteaColor: GiteaColor = {
  /* ... */
};
const syntaxColor: Syntax = {
  /* ... */
};
export default defineTheme({ colorType: "gitea", themeColor: giteaColor, syntaxColor });
```

完成主题颜色开发后, 在 `theme.config.ts` 中注册主题系列, 编译后在 Gitea 实例中截图放入 `screenshots`
目录, 截图名与主题名相同. (推荐克隆本仓库, 避免泄露个人隐私)

然后将截图信息添加到 `README.md` 文件中.

颜色复用案例可参考 `themes/github.ts` 的色盲主题实现.

## 主题样式贡献

主题样式使用 `css()`
模板字符串开发，字符串经过 LightningCSS 处理, 支持 CSS 嵌套语法。请勿使用 SCSS 函数，如需复杂处理请使用 TypeScript 相关库，比如项目自带的
`color2k` 库。

推荐需要复杂处理时，提取逻辑到 `src/functions` 目录下的函数中。

主题样式中使用到的所有颜色必须使用颜色变量，导入 `import { themeVars } from "@lutinglt/gitea-github-theme/core"`

涉及到主题自己的颜色变量 `${themeVars.github.xxx}`，在使用时请将使用的文件和变量添加到对应变量的注释中
`src/types/color/github`

小型圆角 (6px) 请使用全局圆角变量，导入
`import { otherThemeVars } from "@lutinglt/gitea-github-theme/core"`，`${otherThemeVars.border.radius}`
