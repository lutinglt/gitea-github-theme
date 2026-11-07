# 架构设计：Gitea GitHub Theme

## 项目概述

Gitea GitHub Theme 是一个构建时 CSS 生成框架，为 [Gitea](https://github.com/go-gitea/gitea) 自托管代码平台产出静态
`.css`
主题文件。项目以设计令牌和颜色定义为输入，通过分层管道转换，最终输出 33 个压缩后的 CSS 文件（24 个实体主题与
9 个自动派生的 auto 主题），覆盖 9 个主题系列（default、colorblind、tritanopia、high-contrast、
high-contrast-colorblind、high-contrast-tritanopia、pink、gitea、catppuccin）。

**核心原则：** 开发时享受完整的类型安全和 CSS-in-JS 开发体验，浏览器端交付纯静态 CSS，零运行时开销。

---

## 架构分层

```
上游数据：@primer/primitives、@catppuccin/palette、Gitea 上游参考文件
   │ scripts/（buildPrimerTSToken.ts、updateGitea.ts、updateArcGreen.ts）
   ▼
assets/：primer/*.ts（自动生成的令牌）、gitea*/（上游参考快照）
   │
   ▼
① 主题配置层  src/themeConfig.ts（9 个主题系列）+ src/themes/（配色声明）
   │
   ▼
② 颜色转换层  src/palette/（github / theme / gitea 三条路径 → ThemeVars）
   │
   ▼
③ 核心框架层  src/core/color.ts（GitHubColor / GiteaColor / ThemeColor 输入类型）
              src/core/gitea/vars.ts（CSS 变量契约）
              src/core/theme.ts（createTheme、判别联合分派）
              src/core/css.ts（css、cssCombine、cssStyle）
              src/vanilla-extract.ts（适配器劫持 → CSS 字符串）
   │
   ▼
④ 样式覆写层  src/styles/（public、components、templates、common、themes）
   │
   ▼
⑤ 构建编排    src/vite-plugin/index.ts
              vite.config.ts 静态导入 themeConfig 并传入插件
              config()：设置虚拟占位入口（Vite 需要至少一个 input）
              generateBundle()：清空占位产物 → 展开主题并生成 auto →
                  compileCSS() → lightningcss 压缩 → 拼接三级样式 → emitFile
   │
   ▼
dist/theme-github-*.css（33 个纯静态 CSS，无 JS 产物）
```

---

## 核心设计模式

### 1. Vanilla-Extract 适配器劫持

**解决的问题：**
Vanilla-extract 是一个零运行时 CSS-in-JS 库，在构建时通过其 Vite/esbuild 插件生成静态 CSS 文件。但 Gitea 主题需要单文件 CSS 输出，并且需要对主题生成过程进行编程控制（每个主题一个输出文件、自动生成 auto 主题等）。

**方案：** 绕过 vanilla-extract 的默认插件，直接使用其底层适配器 API。

在 [src/vanilla-extract.ts](../src/vanilla-extract.ts) 中：

```typescript
export function compileCSS(compileFn: () => void): string {
  // 1. 安装自定义适配器，将 CSS 对象捕获到数组
  setAdapter({
    appendCss: css => capturedCssObjs.push(css),
    registerClassName: className => localClassNames.add(className),
    registerComposition: composition => composedClassLists.push(composition),
    // ... 其他回调实现为空操作
  })

  // 2. 设置文件作用域用于调试
  setFileScope(getCallerInfo(1))

  // 3. 执行调用方的 vanilla-extract API 调用
  compileFn()

  // 4. 拆除适配器
  endFileScope()
  removeAdapter()

  // 5. 将捕获的 CSS 对象序列化为字符串
  return transformCss({
    localClassNames: Array.from(localClassNames),
    composedClassLists,
    cssObjs: capturedCssObjs,
  }).join("\n")
}
```

**工作原理：**

1. `compileCSS` 包装一个同步函数，该函数内部调用 vanilla-extract
   API（`createGlobalTheme`、`globalStyle`、`globalKeyframes` 等）
2. 自定义适配器拦截所有 CSS 生成调用，将它们捕获到内存数组
3. 函数执行完毕后，`transformCss()` 将捕获的对象序列化为 CSS 字符串
4. 适配器被拆除，不留下任何全局副作用

**安全性保证：** 每次 `compileCSS` 调用完全自包含：安装 → 捕获 → 序列化 → 拆除。调用之间无状态泄漏。

**关键洞察：** Vanilla-extract 的 `createGlobalThemeContract` + `createGlobalTheme` 完全适配此模式——它们仅在
`createGlobalTheme` 调用期间产生 CSS，而该调用恰好发生在我们的捕获范围内。

### 2. 三条颜色输入管道

**解决的问题：**
不同的颜色主题来源有不同的数据结构。Primer 设计令牌（来自 GitHub）有数百个嵌套键。Catppuccin 有自己的调色板结构。Gitea 的原生格式使用扁平结构。需要同时支持这三种。

**方案：** 三条转换路径，全部汇聚到 `ThemeVars`：

```
Primer 令牌 ──→ GitHubColor ──→ ThemeColor ──→ ThemeVars
Catppuccin flavor ────────────→ ThemeColor ──→ ThemeVars
GiteaColor ──────────────────────────────────→ ThemeVars
```

`GitHubColor`、`GiteaColor`、`ThemeColor` 三个输入类型集中定义在
[src/core/color.ts](../src/core/color.ts)，由 `@lutinglt/gitea-github-theme/core` 统一导出；`src/palette/`
只负责转换函数，不再导出这些类型。主题声明与转换链均从 `core` 引用类型。

每条路径有不同的复杂度要求：

| 路径     | 适用场景                  | 复杂度                       | 示例                        |
| -------- | ------------------------- | ---------------------------- | --------------------------- |
| `github` | 完整 Primer 令牌合规      | 高（数百个映射键）           | Default、色盲、高对比度主题 |
| `theme`  | 15 个基础色定义自定义主题 | 低（自动派生 200+ CSS 变量） | Catppuccin、社区主题        |
| `gitea`  | Gitea 原生颜色格式        | 中（直接映射）               | Gitea 兼容主题              |

**设计理由：** `theme`
路径是"入门路径"——贡献者只需定义 15 个语义色（`red`、`orange`、`yellow`、……、`white`）加上 primary 和 secondary。框架自动计算：

- 7 级亮度变体（dark-1 到 dark-7、light-1 到 light-7）
- 9 级透明度变体（alpha-10 到 alpha-90）
- Badge 颜色及其 hover 状态
- 消息颜色（error/success/warning/info）
- ANSI 控制台颜色
- 方向感知（暗/亮主题下的缩放方向反转）

实现在 [src/palette/theme.ts](../src/palette/theme.ts) 的 `theme2ThemeVars()` 函数中。

### 3. CSS 变量命名约定

**解决的问题：** Gitea 期望特定命名模式的 CSS 变量（`--color-primary-dark-1`、`--color-red-badge-bg`
等）。我们在 TypeScript 中需要类型安全的访问方式（`themeVars.color.primary.dark.num1`）。

**方案：** 使用 vanilla-extract 的 `createGlobalThemeContract` 配合自定义 `varMapper`。

在 [src/core/gitea/vars.ts](../src/core/gitea/vars.ts) 中：

```typescript
function varMapper(prefix: string | null = null) {
  return (value: string | null, path: string[]) => {
    if (value === null) {
      // 从路径自动生成名称: ["color","primary","dark","num1"] → "color-primary-dark-1"
      path = path.filter(item => item !== "self") // 移除 "self" 键
      path = path.map(item => item.replace(/^num/, "")) // 去掉 "num" 前缀
      value = path.join("-")
    }
    if (prefix) value = `${prefix}-${value}`
    return value
  }
}
```

由此创建了双向映射：

| TypeScript 访问                                | CSS 变量                               |
| ---------------------------------------------- | -------------------------------------- |
| `themeVars.color.primary.self`                 | `--color-primary`                      |
| `themeVars.color.primary.dark.num1`            | `--color-primary-dark-1`               |
| `themeVars.github.button.primary.bgColor.rest` | `--github-button-primary-bgColor-rest` |
| `syntaxVars.keyword`                           | `--color-syntax-keyword`               |
| `customThemeVars.cloneMenuWidth`               | `--custom-clone-menu-width`            |

### 4. 构建时 CSS 语法校验

**解决的问题：** 模板字面量中的 CSS 可能包含语法错误，这些错误只有到浏览器运行时才会显现。

**方案：** `css()` 模板标签在构建时使用 lightningcss 校验 CSS 语法。

在 [src/core/css.ts](../src/core/css.ts) 中：

```typescript
export function css(strings: TemplateStringsArray, ...values: CSSInterpolation[]): CSSString {
  const result = strings.reduce((acc, s, i) => acc + s + String(values[i] ?? ""), "")
  // 构建时校验: lightningcss 解析并报告语法错误
  transform({ filename: getCallerInfo(1), code: Buffer.from(result) })
  return brandCSS(result)
}
```

如果开发者编写了无效 CSS，构建会立即失败，并附带指向问题模板字面量的 `文件:行号`
信息。这能捕捉到原本只能通过浏览器 DevTools 才能发现的错误。

**权衡：** 每次 `css` 模板调用都会执行一次
`transform()`。对于 79 个样式文件，这会为初始构建增加约 200ms（一次性开销，后续由 Bun 的模块缓存加速）。

---

## Vite 构建管道

构建由自定义 Vite 插件在 [src/vite-plugin/index.ts](../src/vite-plugin/index.ts) 中编排。配置并非由插件动态导入：
`vite.config.ts` 静态导入 `@lutinglt/gitea-github-theme/themeConfig`，并将其作为参数传给
`giteaGitHubTheme(themeConfig)`。

### 阶段一：输入准备（`config` 钩子）

`config()` 只返回 `build.rolldownOptions.input = virtual:gitea-github-theme-placeholder`；插件通过 `resolveId` 与
`load` 提供该虚拟占位模块。Vite 需要至少一个输入才能触发 `generateBundle`，而最终产物全部由 `emitFile` 生成。

### 阶段二：主题解析与 CSS 生成（`generateBundle` 钩子）

1. 清空占位入口产生的全部 chunk/asset
2. 遍历 `themeConfig.themeSeries` 展开 9 个系列的主题条目；系列同时具备 dark 与 light 变体时，自动追加 `auto` 主题条目
3. 用 lightningcss 压缩 `globalStyles`
4. 对每个主题调用 `compileCSS()`，内部执行 `createThemeMetaInfo`（设置 `--theme-color-scheme`、
   `--theme-display-name`、`--theme-colorblind-type`）；实体主题还会执行 `createTheme`（生成全部 `--color-*`、
   `--github-*` 变量、全局样式、关键帧动画、代码高亮），auto 主题只生成元信息。随后压缩结果
5. 按 `globalStyles` < `themeSeries.styles` < `entry.styles` 的优先级拼接样式覆写（仅非 auto 主题）
6. `auto` 主题改为输出两条带 `prefers-color-scheme` 的 `@import`，引用对应的暗/亮主题文件，并附主题元信息
7. `emitFile({ type: "asset", fileName })` 输出 CSS 资源，不产出任何 JS chunk

### CSS 输出结构

```
theme-github-dark.css:
  ├── @keyframes (overlayAppear, overlayAppearDown, overlayAppearUp)
  ├── gitea-theme-meta-info { --theme-color-scheme: dark; ... }
  ├── :root { --theme-version: "<version>.YYMMDD"; --is-dark-theme: true; ... }
  ├── :root { --color-primary: #4493f8; --color-primary-contrast: ... }
  ├── ... (200+ 个 CSS 变量声明)
  ├── .chroma { ... } (代码语法高亮)
  ├── .code-editor-container { ... } (CodeMirror 高亮)
  └── <公共样式覆写> (~60KB 单行压缩)

theme-github-auto.css:
  ├── @import "./theme-github-dark.css" (prefers-color-scheme: dark);
  ├── @import "./theme-github-light.css" (prefers-color-scheme: light);
  └── gitea-theme-meta-info { --theme-color-scheme: auto; ... }
```

其中 `--theme-version` 由 `src/core/theme.ts` 的 `getThemeVersion()` 按 `${pkg.version}.YYMMDD` 生成。

---

## 颜色系统深入

### 颜色缩放计算

[src/core/functions/color.ts](../src/core/functions/color.ts) 中的 `scaleColorLight()` 实现了 Sass `color.scale()`
算法：

```
变暗:  newL = currentL × (1 + scale/100)    [scale < 0]
变亮:  newL = currentL + (1 - currentL) × (scale/100)  [scale > 0]
```

这是**比例缩放**，并非线性偏移。其意义在于：

- `color.scale(#000000, $lightness: 50%)` → 50% 灰色（而非"比黑色暗 50%"，那仍然是黑色）
- `color.scale(#ffffff, $lightness: -50%)` → 50% 灰色（而非"比白色亮 50%"，那仍然是白色）
- 比例方法确保在亮度两端都能产生视觉上有意义的变化

### ThemeColor → ThemeVars 派生

[src/palette/theme.ts](../src/palette/theme.ts) 中的 `theme2ThemeVars()` 接收
`ThemeColor`（15 个基础色 + 元数据），派生完整的 `ThemeVars`（200+ 个 CSS 变量值）：

1. **主色阶（Primary scale）**：7 个暗色变体、7 个亮色变体、9 个透明度变体、hover/active 状态——全部从一个 hex 颜色生成
2. **副色阶（Secondary scale）**：13 个暗色变体、4 个亮色变体、9 个透明度变体、按钮 hover/active 状态
3. **命名颜色**（15 个基础色中的 13 个）：每个生成 self/light/dark-1/dark-2/badge-self/badge-bg/badge-hover-bg
4. **语义消息色**：bg/border/text，配合 rgba 透明度和饱和度调整
5. **ANSI 颜色**：从命名色映射的 16 色调色板
6. **方向感知**：`isDarkTheme` 标志反转缩放方向——暗色主题中"dark"变体走向更亮的方向（为保持对比度）

---

## 样式覆写策略

### 选择器优先级层级

样式覆写使用 Gitea 现有的 DOM 选择器。覆写策略遵循优先级阶梯：

1. **颜色变量**——所有颜色引用主题中的 CSS 变量（绝不硬编码 hex 值）
2. **元素级覆写**——基础元素如 `.ui.button`、`#navbar`、`input`
3. **组件级覆写**——页面特定区域：heatmap、issues、actions、仓库页面
4. **`!important` 逃离**——仅在 Gitea 通过内联 `style` 属性设置颜色时使用（如热力图贡献方块）

### cssCombine() 显式组合

样式通过 `cssCombine()` 调用树组合在一起：

```
src/styles/index.ts
  ├── public/index.ts    (基础元素、按钮、输入框、下拉菜单、菜单、表格)
  ├── components/index.ts (导航栏、热力图、议题、仓库文件、Actions 等)
  └── templates/index.ts  (模板特定样式)
```

每个叶子模块导出 `default cssCombine(...)`，将 CSS 片段串联在一起。这种显式组合使依赖关系图可见，避免了 CSS `@import` 或
`@use` 的隐式排序问题。

### cssStyle() 可复用片段

[src/core/css.ts](../src/core/css.ts) 中的 `cssStyle()`
允许提取可复用的 CSS 属性集，同时保留 vanilla-extract 的类型检查：

```typescript
// 在 src/styles/common/button.ts 中:
export const primaryButtonStyle = cssStyle({
  color: themeVars.github.button.primary.fgColor.rest,
  backgroundColor: themeVars.github.button.primary.bgColor.rest,
  borderColor: themeVars.github.button.primary.borderColor.rest,
  boxShadow: themeVars.github.shadow.resting.small,
})

// 在 src/styles/public/button.ts 中:
const baseButton = css`
  .ui.primary.button {
    ${primaryButtonStyle}
  }
`
```

这在最终输出静态 CSS 字符串的系统中保留了类型安全（vanilla-extract 校验属性名和值类型）。

---

## 目录结构

```
├── src/
│   ├── themeConfig.ts       # 主题系列声明（9 个系列）
│   ├── themeConfig.test.ts  # 构建产物契约测试
│   ├── env.d.ts             # 部署/开发环境变量类型
│   ├── utils.ts             # deepOverride、getCallerInfo
│   ├── vanilla-extract.ts   # 适配器劫持（compileCSS、captureStyle）
│   ├── core/                # 核心框架
│   │   ├── index.ts         # 公共 API 导出
│   │   ├── theme.ts         # createTheme、defineTheme（颜色 → CSS 变量）
│   │   ├── css.ts           # css()、cssCombine()、cssStyle()
│   │   ├── chroma.ts        # Chroma（服务端）语法高亮
│   │   ├── codemirror.ts    # CodeMirror（客户端）语法高亮
│   │   ├── meta.ts          # Gitea 主题元信息
│   │   ├── selectors.ts     # 共享 CSS 选择器
│   │   ├── types.ts         # MapLeafNodes、CSSVarFunction、Tokens
│   │   ├── color.ts         # GitHubColor / GiteaColor / ThemeColor 输入类型（公共 API）
│   │   ├── functions/       # 工具函数
│   │   │   ├── color.ts     # scaleColorLight（Sass color.scale）+ rgba 转换
│   │   │   └── var.ts       # extractVarName（CSS 变量名提取）
│   │   └── gitea/           # 类型定义与 CSS 变量契约
│   │       ├── index.ts     # 由契约形状派生的类型
│   │       ├── vars.ts      # createGlobalThemeContract + varMapper
│   │       └── color/       # 颜色结构定义（primary、secondary、named 等）
│   ├── palette/             # 颜色转换与变换（含 __snapshots__/）
│   │   ├── theme.ts         # ThemeColor → ThemeVars（简化 API）
│   │   ├── github.ts        # GitHubColor → ThemeColor（Primer 路径）
│   │   ├── gitea.ts         # GiteaColor → ThemeVars（原生路径）
│   │   ├── catppuccin.ts    # CatppuccinFlavor → ThemeColor
│   │   ├── primer.ts        # Primer 令牌 → GitHubColor / Chroma / CodeMirror
│   │   ├── display.ts       # Display color scale → GitHubColor 覆写
│   │   └── catppuccinSyntax.ts  # Catppuccin 语法高亮
│   ├── styles/              # CSS 样式覆写
│   │   ├── common/          # 可复用 CSS 片段（按钮、标签、动画）
│   │   ├── public/          # 基础元素（按钮、输入框、下拉菜单、菜单、表格）
│   │   ├── components/      # 页面特定样式（导航栏、热力图、仓库、议题、Actions）
│   │   ├── templates/       # 模板特定样式
│   │   └── themes/          # 第三方主题扩展示例
│   ├── themes/              # 颜色主题定义
│   │   ├── github.ts        # GitHub 主题颜色（来自 Primer 令牌）
│   │   ├── giteaDark.ts     # Gitea 暗色主题颜色（原生格式）
│   │   ├── giteaLight.ts    # Gitea 亮色主题颜色（原生格式）
│   │   ├── giteaArcGreen.ts # Arc Green 主题颜色
│   │   ├── catppuccin.ts    # Catppuccin 主题颜色
│   │   └── index.ts         # 三族主题汇总
│   └── vite-plugin/         # 构建工具
│       ├── index.ts         # 主 Vite 插件
│       ├── themeConfig.ts   # defineThemeConfig、TypeScript 类型
│       └── utils.ts         # buildFullThemeName、buildFullDisplayName
├── assets/                  # 上游数据与生成的令牌
│   ├── index.ts             # 数据出口（primer / Primer）
│   ├── primer/              # 自动生成的 Primer 设计令牌（来自 @primer/primitives）
│   ├── gitea/               # 上游 Gitea 参考模板与主题 CSS
│   └── gitea-theme/         # 第三方 Arc Green 颜色来源
├── scripts/                 # 上游同步、生成与部署脚本
│   ├── buildPrimerTSToken.ts  # 从 @primer/primitives 生成 assets/primer/*.ts
│   ├── themes.config.ts     # Primer token 构建输入
│   ├── updateGitea.ts       # 按版本同步 Gitea 参考文件
│   ├── updateArcGreen.ts    # 同步第三方 Arc Green CSS
│   ├── translate.ts         # 合并上游翻译 → dist/options/locale
│   ├── syncTheme.ts         # scp 同步构建产物到 Gitea 实例
│   ├── version.ts           # 输出版本号供 release 使用
│   └── utils.ts             # pkg、rootDir、代理
├── templates/               # 可选的 Gitea Go 模板覆写
├── options/locale/          # 模板使用的自定义翻译词条
├── docs/                    # 中英双语文档
├── dist/                    # 构建产物（33 个 CSS）
└── *.config.ts              # vite / vitest / oxlint / oxfmt 配置
```

---

## 关键设计决策与权衡

### 决策一：Vanilla-Extract 仅用于 CSS 编写，不用于运行时

**选择：** 使用 vanilla-extract 的 `createGlobalTheme`/`createGlobalThemeContract`
进行类型安全的 CSS 变量生成，但通过适配器劫持在构建时序列化为静态 CSS 字符串。

**放弃：** 使用 vanilla-extract 内置 Vite 插件（生成按模块拆分的 CSS 文件，不适合单文件主题输出）。

**权衡：** 适配器 API 无官方文档，可能在 vanilla-extract 版本间变化。通过调色板快照测试与构建产物契约测试检测 CSS
输出变化，并在升级 `@vanilla-extract/css` 时重点回归来缓解风险。

### 决策二：单文件 CSS 输出

**选择：** 每个主题是包含所有变量和所有样式覆写的单个 CSS 文件。

**放弃：** 通过 `@import` 链拆分为多个 CSS 文件（Gitea 主题系统每个主题只加载一个 CSS 文件）。

**权衡：** 样式覆写在 24 个实体主题文件中重复嵌入（约 60KB × 24 ≈ 1.4MB 冗余，`dist` 合计约
2.6MB）。这是 Gitea 的约束而非设计选择。替代方案（独立 common.css）需要 Gitea 支持多文件主题加载。

### 决策三：LightningCSS 同时用于语法校验和输出压缩

**选择：** 使用 LightningCSS 进行构建时 CSS 语法校验（在 `css()` 模板标签中）和输出压缩（在 Vite 插件中）。

**放弃：** PostCSS（更慢）、esbuild CSS（功能不够完整）、完全不校验。

**权衡：** LightningCSS 较宽容——它会从许多语法错误中恢复而非抛出异常。这意味着 `css()`
中的"校验"能捕获严重错误，但可能静默接受某些边缘情况。调色板快照测试与构建产物的结构断言部分补偿了这个不足。

### 决策四：仅支持 Bun 运行时

**选择：** 要求 Bun ≥ 1.3.14 用于开发和构建。

**放弃：** 跨运行时支持（Node + Bun）。

**权衡：**
限制了贡献者环境。收益：原生 TypeScript 执行（无 ts-node/esbuild 开销）、一致的堆栈追踪格式（用于调试工具）、更快的构建速度（Bun 原生打包器）。

### 决策五：包自引用用于内部导入

**选择：** 即使在同一个包内也使用 `@lutinglt/gitea-github-theme/core` 风格的导入，通过 `package.json` 中的 `exports`
映射实现。

**放弃：** 全程使用相对路径导入。

**权衡：** 需要 `tsconfig.json` 中的 `paths`
映射支持 IDE。收益：无论作为依赖使用还是本地开发，导入路径完全一致；`src/core`、`src/styles`、`src/themes`
等模块之间没有路径混淆。

---

## 添加新主题

### 快速路径（15 个颜色定义）

1. 创建 `src/themes/my-theme.ts`：

```typescript
import { defineTheme } from "@lutinglt/gitea-github-theme/core"
import type { ThemeColor, Syntax } from "@lutinglt/gitea-github-theme/core"

const themeColor: ThemeColor = {
  isDarkTheme: true,
  primary: "#8b5cf6", // 强调色（紫色）
  primaryContrast: "#ffffff",
  secondary: "#27272a", // 边框色
  base: {
    red: "#ef4444",
    orange: "#f97316",
    yellow: "#eab308",
    olive: "#84cc16",
    green: "#22c55e",
    teal: "#14b8a6",
    cyan: "#06b6d4",
    blue: "#3b82f6",
    violet: "#8b5cf6",
    purple: "#a855f7",
    pink: "#ec4899",
    brown: "#a16207",
    black: "#18181b",
    grey: "#71717a",
    gold: "#eab308",
    white: "#fafafa",
  },
  console: {/* Actions 日志颜色 */},
  diff: {/* 代码差异颜色 */},
  other: {/* body、text、input、shadow 等 */},
  github: {/* GitHub 专有变量 */},
}

const syntaxColor: Syntax = {/* 代码高亮色 */}

export default defineTheme({ colorType: "theme", themeColor, syntaxColor })
```

2. 在 `src/themeConfig.ts` 中注册：

```typescript
{
  themeSeriesName: "my-theme",
  themes: {
    dark: { theme: myDarkTheme },
    // 可选: 添加 light 变体后自动生成 auto 主题
    light: { theme: myLightTheme },
  },
}
```

3. 运行 `bun bundle`——主题 CSS 将出现在 `dist/` 目录中。

### 完整路径（Primer 令牌）

如需像素级精准的 GitHub 颜色匹配，使用 `github` 路径直接映射 Primer 设计令牌。完整映射参考见 `src/themes/github.ts` 和
`src/palette/github.ts`。

---

## 测试策略

| 层级     | 测试类型 | 位置                           | 验证内容                                                                                        |
| -------- | -------- | ------------------------------ | ----------------------------------------------------------------------------------------------- |
| 工具函数 | 单元测试 | `src/utils.test.ts`            | `deepOverride` 行为、`getCallerInfo` 堆栈解析                                                   |
| 计算函数 | 单元测试 | `src/core/functions/*.test.ts` | `scaleColorLight` 数值计算、`extractVarName` 解析                                               |
| 核心框架 | 单元测试 | `src/core/css.test.ts`         | `css()` 校验、`cssCombine()` 组合、`cssStyle()` 序列化                                          |
| 调色板   | 快照测试 | `src/palette/*.test.ts`        | 完整颜色转换链路（Primer → ThemeColor → ThemeVars、Catppuccin → ThemeColor → ThemeVars 等）     |
| 调色板   | 结构测试 | `src/palette/github.test.ts`   | 颜色值合法性（所有叶子节点都是有效 CSS 颜色字符串）、必需键存在                                 |
| 构建产物 | 集成测试 | `src/themeConfig.test.ts`      | 预期文件存在、CSS 内容有效性（变量存在、无调试残留、hex 小写、color-scheme 匹配）、文件体积上限 |

---

## 相关文档

- [CONTRIBUTING_CN.md](CONTRIBUTING_CN.md) — 开发环境配置与贡献指南
- [README.md](README.md) — 用户面安装与使用
- [README_CN.md](README_CN.md) — 中文用户安装与使用
- [assets/primer/README.md](../assets/primer/README.md) — 自动生成的 Primer 令牌说明
- [CHANGELOG.md](CHANGELOG.md) — 发布历史
