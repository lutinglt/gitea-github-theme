# 贡献指南

## 目录结构

| 目录              | 说明                         |
| ----------------- | ---------------------------- |
| src               | 主题生成框架与辅助工具的包   |
| src/core          | 主题生成框架                 |
| src/functions     | 主题辅助工具                 |
| src/types         | 主题的颜色变量定义           |
| styles            | 主题样式                     |
| styles/components | 具体页面的元素的样式         |
| styles/public     | 基础元素或跨页面的元素的样式 |
| themes            | 颜色主题                     |

## 贡献说明

不推荐主题样式贡献, 因为 Gitea 主题最终是由单个 CSS 文件提供, 所以会有先后顺序覆盖, 样式影响广泛等问题.

开发者每个人的思路不一样, 审核很难看出这些问题, 会极大增加维护难度.

如果确定理解了 Gitea 的样式布局和我的思路, 请先提交 Issue 确认工作量和预期效果, 然后再开发提交 PR.

如果认为有更好的思路, 欢迎提交 Issue.

> [!IMPORTANT]
>
> 提交 PR 时, 请执行 `npm run commit`

## 开发环境

主题仅依赖于 Node.js 环境, 请确保你的环境中已经安装了 Node.js, 推荐使用 Node.js 20 或以上版本.

请使用 VSCode 开发, 并安装仓库中推荐的插件.

如果不喜欢多余的插件, 请务必安装 `vscode-styled-components` 插件, 此插件用于渲染和检查 TypeScript 中的 CSS 模板字符串.

推荐使用 VSCode 1.102.0 版本以上开发, 此版本以上提供 TypeScript 代码中 16 进制颜色的支持.

## 开发流程

### 安装依赖

```bash
npm install
```

### 设置环境变量

在项目根目录下创建 `.env` 文件, 变量参考 `.env.example` 文件.

环境变量用于发送编译后的主题到服务器上, 快速预览主题.

### 编译主题

编译开发中的主题

```bash
npm run dev
```

编译所有主题

```bash
npm run build
```

格式化项目中的代码

```bash
npm run format
```

用于 PR, 检查并编译项目中的所有代码并进行格式化

```bash
npm run commit
```

## 开发规范

`src`, `styles`, `themes` 为项目的主目录, 主目录下的第一个目录为模块.

主目录或主目录下模块互相引用时, 请使用绝对路径, 例如 `import { defineTheme } from "src"`

模块下的文件互相引用时, 请使用相对路径, 例如 `import { defineTheme } from "./theme"`

## 颜色主题贡献

颜色主题名称格式: `主题名称-dark.css.ts` 或 `主题名称-light.css.ts`, 分别表示深色和亮色主题.

如果主题有深色和亮色模式, 会自动生成自动颜色主题, 不需要手动添加.

项目接受自定义主题并会附加到发布的版本中, 但项目所有者不参与维护和审核.

请在颜色主题文件头部附加自己的作者信息, 方便 Issue 提问者找到你 `@`.

推荐使用 `import { defineTheme } from "src"` 导入主题生成框架, 然后使用 `defineTheme` 函数生成主题,
defineTheme 中设置了一些经过计算得到的 Gitea 变量可以减少工作量, 具体请查看函数说明.

颜色计算函数可以从 `src/functions` 导入, 例如 `import { scaleColorLight } from "src/functions"`, 或者使用 `polished` 库.

例: `themes/主题名称-dark.css.ts`

```ts
/**
 * @author 你的名字
 * @description 主题描述
 */
import { defineTheme } from "src";
export default defineTheme({
  ...
});
// 使用其他主题颜色作为基础
import dark from "themes/dark";
export default defineTheme({
  ...dark,
  ...
});
```

如果不需要自定义代码高亮色, 则不传递 chroma 参数, 框架会自动根据主题的暗色或亮色生成代码高亮色.

如果需要完全自定义每个 Gitea 变量, 请导入 `import type { Theme } from "src"`

例: `themes/主题名称-dark.css.ts`

```ts
/**
 * @author 你的名字
 * @description 主题描述
 */
import type { Theme } from "src";
export default theme: Theme = {
 ...
};
```

完成主题颜色开发后, 请在某个仓库的代码文件列表页, 打开 Code 菜单选择 Tea Cli 进行截图, 并放入 `screenshots`
目录下, 截图名与主题名相同. (推荐克隆 Github 的 actions/checkout 仓库, 该仓库信息较全, 避免泄露个人隐私)

然后将截图信息添加到 `README.md` 文件中, 可以在折叠部分中添加自己的说明.

## 主题样式贡献

主题样式使用 TypeScript 的 css 模板字符串开发, 该模板字符串会经过 sass 预处理器处理, 支持 SCSS 语法并且主题只接受 SCSS 嵌套语法, 请不要使用 CSS 语法, 如果一定要用请说明原因.

请尽量不要使用 SCSS 的函数, `vscode-styled-components` 插件会报错, 请使用 TypeScript 相关库处理, 比如主题自带的
`polished` 库.

推荐需要使用复杂处理时, 提取逻辑到 `src/functions` 目录下的函数中, 然后在 `src/styles` 目录下的样式文件中使用.

主题样式中使用到的所有颜色必须使用颜色变量, 颜色变量导入 `import { themeVars } from "src/types/vars"`

涉及到主题自己的颜色变量 `${themeVars.github.xxx}`, 在使用时请将使用的文件和变量添加到对应变量的注释中
`src/types/color/github`

小型圆角(6px)请使用全局圆角变量, 圆角变量导入 `import { otherThemeVars } from "src/types/vars"`
`${otherThemeVars.border.radius}`
