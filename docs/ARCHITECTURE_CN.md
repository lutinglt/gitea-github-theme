# 架构设计：Gitea GitHub Theme

## 项目概述

Gitea GitHub Theme 是一个构建时 CSS 生成框架，为 [Gitea](https://github.com/go-gitea/gitea) 自托管代码平台产出静态
`.css`
主题文件。项目以设计令牌和颜色定义为输入，通过分层管道转换，最终输出 30+ 个压缩后的 CSS 文件，覆盖 7 个主题系列（default、colorblind、tritanopia、pink、gitea、catppuccin、high-contrast）。

**核心原则：** 开发时享受完整的类型安全和 CSS-in-JS 开发体验，浏览器端交付纯静态 CSS，零运行时开销。

---

## 架构分层

```
┌──────────────────────────────────────────────────────────────┐
│                    主题配置层                                  │
│  theme.config.ts: 声明主题系列、颜色类型、显示名称、无障碍元信息 │
└──────────────────────────┬───────────────────────────────────┘
                           │
┌──────────────────────────▼───────────────────────────────────┐
│                    颜色定义层                                  │
│  ┌──────────┐  ┌──────────────┐  ┌───────────────────┐      │
│  │ primer/  │  │  themes/     │  │ themes/catppuccin  │      │
│  │ (自动生成│  │  github.ts   │  │ .ts               │      │
│  │ 的 Primer│  │  gitea*.ts   │  │                    │      │
│  │ 设计令牌)│  │              │  │                    │      │
│  └────┬─────┘  └──────┬───────┘  └─────────┬─────────┘      │
│       │               │                    │                 │
│  primer2GitHubColor   defineTheme   catppuccin2ThemeColor    │
│       │               │                    │                 │
│       ▼               ▼                    ▼                 │
│  GitHubColor      Theme             ThemeColor               │
│                   (colorType:                                │
│                    "github")                                 │
└──────────────────────────┬───────────────────────────────────┘
                           │
┌──────────────────────────▼───────────────────────────────────┐
│                    颜色转换层                                  │
│  src/palette/                                                │
│  ┌────────────┐  ┌────────────┐  ┌──────────────────┐      │
│  │ github.ts  │  │ theme.ts   │  │ gitea.ts         │      │
│  │ GitHubColor│  │ ThemeColor │  │ GiteaColor       │      │
│  │    →       │  │    →       │  │    →             │      │
│  │ ThemeColor │  │ ThemeVars  │  │ ThemeVars        │      │
│  └────────────┘  └────────────┘  └──────────────────┘      │
│                                                              │
│  统一输出: ThemeVars (CSS 变量的扁平键值映射)                   │
└──────────────────────────┬───────────────────────────────────┘
                           │
┌──────────────────────────▼───────────────────────────────────┐
│                    核心框架层                                  │
│  src/core/                                                   │
│  ┌──────────────┐  ┌──────────┐  ┌───────────────────┐      │
│  │ theme.ts     │  │ css.ts   │  │ chroma.ts         │      │
│  │ createTheme()│  │ css()    │  │ codemirror.ts     │      │
│  │ defineTheme()│  │cssCombine│  │ meta.ts           │      │
│  └──────┬───────┘  │cssStyle()│  └───────────────────┘      │
│         │          └────┬─────┘                              │
│         │               │                                    │
│  vanilla-extract 适配器 (src/vanilla-extract.ts)              │
│  ┌──────────────────────────────────────────────────┐       │
│  │  setAdapter() → 拦截 appendCss,                  │       │
│  │  registerClassName, registerComposition          │       │
│  │  → 在构建时将全部 CSS 序列化为字符串              │       │
│  └──────────────────────────────────────────────────┘       │
└──────────────────────────┬───────────────────────────────────┘
                           │
┌──────────────────────────▼───────────────────────────────────┐
│                    样式覆写层                                  │
│  styles/                                                     │
│  ┌──────────┐  ┌──────────────┐  ┌──────────────────┐      │
│  │ public/  │  │ components/  │  │ templates/       │      │
│  │ (基础    │  │ (页面级别    │  │ (模板专属样式)    │      │
│  │  元素)   │  │  样式)       │  │                  │      │
│  └──────────┘  └──────────────┘  └──────────────────┘      │
│  common/ (可复用 CSS 片段: 按钮、标签、动画等)                │
│                                                              │
│  每个文件使用 css`...` 模板字面量                              │
│  → 在导出边界用 cssCombine() 拼接 → 单个 CSS 字符串            │
└──────────────────────────┬───────────────────────────────────┘
                           │
┌──────────────────────────▼───────────────────────────────────┐
│                    构建管道                                    │
│  src/vite-plugin/index.ts (Vite 插件)                        │
│                                                              │
│  config() 钩子:                                              │
│    1. 动态导入 theme.config.ts                                │
│    2. 解析所有主题条目 + 生成 auto 自动主题                    │
│                                                              │
│  generateBundle() 钩子:                                      │
│    1. 导入 styles/ → CSS 字符串 (public + components)        │
│    2. 对每个主题条目:                                         │
│       a. compileCSS(createThemeMetaInfo + createTheme)       │
│       b. lightningcss.transform() → 压缩                     │
│       c. 追加样式覆写 (仅非 auto 主题)                        │
│       d. emitFile 输出 .css 资源                             │
│    3. 对 auto 主题: 生成 @import 声明                         │
└──────────────────────────┬───────────────────────────────────┘
                           │
                           ▼
                    dist/theme-github-*.css
```

---

## 核心设计模式

### 1. Vanilla-Extract 适配器劫持

**解决的问题：**
Vanilla-extract 是一个零运行时 CSS-in-JS 库，在构建时通过其 Vite/esbuild 插件生成静态 CSS 文件。但 Gitea 主题需要单文件 CSS 输出，并且需要对主题生成过程进行编程控制（每个主题一个输出文件、自动生成 auto 主题等）。

**方案：** 绕过 vanilla-extract 的默认插件，直接使用其底层适配器 API。

在 [src/vanilla-extract.ts](src/vanilla-extract.ts) 中：

```typescript
export function compileCSS(compileFn: () => void): string {
  // 1. 安装自定义适配器，将 CSS 对象捕获到数组
  setAdapter({
    appendCss: css => capturedCssObjs.push(css),
    registerClassName: className => localClassNames.add(className),
    registerComposition: composition => composedClassLists.push(composition),
    // ... 其他回调实现为空操作
  });

  // 2. 设置文件作用域用于调试
  setFileScope(getCallerInfo(1));

  // 3. 执行调用方的 vanilla-extract API 调用
  compileFn();

  // 4. 拆除适配器
  endFileScope();
  removeAdapter();

  // 5. 将捕获的 CSS 对象序列化为字符串
  return transformCss({
    localClassNames: Array.from(localClassNames),
    composedClassLists,
    cssObjs: capturedCssObjs,
  }).join("\n");
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

实现在 [src/palette/theme.ts](src/palette/theme.ts) 的 `theme2ThemeVars()` 函数中。

### 3. CSS 变量命名约定

**解决的问题：** Gitea 期望特定命名模式的 CSS 变量（`--color-primary-dark-1`、`--color-red-badge-bg`
等）。我们在 TypeScript 中需要类型安全的访问方式（`themeVars.color.primary.dark.num1`）。

**方案：** 使用 vanilla-extract 的 `createGlobalThemeContract` 配合自定义 `varMapper`。

在 [src/types/vars.ts](src/types/vars.ts) 中：

```typescript
function varMapper(prefix: string | null = null) {
  return (value: string | null, path: string[]) => {
    if (value === null) {
      // 从路径自动生成名称: ["color","primary","dark","num1"] → "color-primary-dark-1"
      path = path.filter(item => item !== "self"); // 移除 "self" 键
      path = path.map(item => item.replace(/^num/, "")); // 去掉 "num" 前缀
      value = path.join("-");
    }
    if (prefix) value = `${prefix}-${value}`;
    return value;
  };
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

在 [src/core/css.ts](src/core/css.ts) 中：

```typescript
export function css(strings: TemplateStringsArray, ...values: CSSInterpolation[]): CSSString {
  const result = strings.reduce((acc, s, i) => acc + s + String(values[i] ?? ""), "");
  // 构建时校验: lightningcss 解析并报告语法错误
  transform({ filename: getCallerInfo(1), code: Buffer.from(result) });
  return result as CSSString;
}
```

如果开发者编写了无效 CSS，构建会立即失败，并附带指向问题模板字面量的 `文件:行号`
信息。这能捕捉到原本只能通过浏览器 DevTools 才能发现的错误。

**权衡：** 每次 `css` 模板调用都会执行一次
`transform()`。对于约 60 个样式文件，这会为初始构建增加约 200ms（一次性开销，后续由 Bun 的模块缓存加速）。

---

## Vite 构建管道

构建由自定义 Vite 插件在 [src/vite-plugin/index.ts](src/vite-plugin/index.ts) 中编排：

### 阶段一：配置解析（`config` 钩子）

1. 通过 Bun 原生 TypeScript + package exports 自引用（`@lutinglt/gitea-github-theme/theme.config.ts`）动态导入
   `theme.config.ts`
2. 遍历每个主题系列，为每个主题变体生成条目（dark、light、soft-dark、frappe、macchiato 等）
3. 当系列同时具有 dark 和 light 变体时，自动生成 `auto` 主题条目
4. 创建占位入口文件（Vite 需要至少一个输入）

### 阶段二：CSS 生成（`generateBundle` 钩子）

对每个 **非 auto 主题**：

1. 调用 `compileCSS()`，传入一个函数，该函数内部：
   - 创建 Gitea 主题元信息（`createThemeMetaInfo`）——设置
     `--theme-color-scheme`、`--theme-display-name`、`--theme-colorblind-type`
   - 创建主题 CSS 变量（`createTheme`）——生成所有 `--color-*` 和 `--github-*` 变量、全局样式、关键帧动画、代码高亮
2. 捕获的 CSS 字符串通过 `lightningcss.transform()` 进行压缩
3. 追加公共样式覆写（`styles/`）

对每个 **auto 主题**：

1. 生成 `@import` 声明，配合 `prefers-color-scheme` 媒体查询，引用对应的暗/亮主题文件
2. 包含主题元信息，供 Gitea 识别为自动颜色主题

### CSS 输出结构

```
theme-github-dark.css:
  ├── @keyframes (overlayAppear, overlayAppearDown, overlayAppearUp)
  ├── gitea-theme-meta-info { --theme-color-scheme: dark; ... }
  ├── :root { --theme-version: "1.26.2.260605"; --is-dark-theme: true; ... }
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

---

## 颜色系统深入

### 颜色缩放计算

[src/functions/color.ts](src/functions/color.ts) 中的 `scaleColorLight()` 实现了 Sass `color.scale()` 算法：

```
变暗:  newL = currentL × (1 + scale/100)    [scale < 0]
变亮:  newL = currentL + (1 - currentL) × (scale/100)  [scale > 0]
```

这是**比例缩放**，并非线性偏移。其意义在于：

- `color.scale(#000000, $lightness: 50%)` → 50% 灰色（而非"比黑色暗 50%"，那仍然是黑色）
- `color.scale(#ffffff, $lightness: -50%)` → 50% 灰色（而非"比白色亮 50%"，那仍然是白色）
- 比例方法确保在亮度两端都能产生视觉上有意义的变化

### ThemeColor → ThemeVars 派生

[src/palette/theme.ts](src/palette/theme.ts) 中的 `theme2ThemeVars()` 接收
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
styles/index.ts
  ├── public/index.ts    (基础元素、按钮、输入框、下拉菜单、菜单、表格)
  ├── components/index.ts (导航栏、热力图、议题、仓库文件、Actions 等)
  └── templates/index.ts  (模板特定样式)
```

每个叶子模块导出 `default cssCombine(...)`，将 CSS 片段串联在一起。这种显式组合使依赖关系图可见，避免了 CSS `@import` 或
`@use` 的隐式排序问题。

### cssStyle() 可复用片段

[src/core/css.ts](src/core/css.ts) 中的 `cssStyle()` 允许提取可复用的 CSS 属性集，同时保留 vanilla-extract 的类型检查：

```typescript
// 在 styles/common/button.ts 中:
export const primaryButtonStyle = cssStyle({
  color: themeVars.github.button.primary.fgColor.rest,
  backgroundColor: themeVars.github.button.primary.bgColor.rest,
  borderColor: themeVars.github.button.primary.borderColor.rest,
  boxShadow: themeVars.github.shadow.resting.small,
});

// 在 styles/public/button.ts 中:
const baseButton = css`
  .ui.primary.button {
    ${primaryButtonStyle}
  }
`;
```

这在最终输出静态 CSS 字符串的系统中保留了类型安全（vanilla-extract 校验属性名和值类型）。

---

## 目录结构

```
├── theme.config.ts         # 主题系列声明（框架入口点）
├── src/
│   ├── index.ts            # 公共 API 导出
│   ├── core/               # 核心框架
│   │   ├── theme.ts        # createTheme、defineTheme（颜色 → CSS 变量）
│   │   ├── css.ts          # css()、cssCombine()、cssStyle()
│   │   ├── chroma.ts       # Chroma（服务端）语法高亮
│   │   ├── codemirror.ts   # CodeMirror（客户端）语法高亮
│   │   ├── meta.ts         # Gitea 主题元信息（color scheme, display name）
│   │   └── types.d.ts      # MapLeafNodes、CSSVarFunction、Tokens
│   ├── palette/            # 颜色转换与变换
│   │   ├── theme.ts        # ThemeColor → ThemeVars（简化 API）
│   │   ├── github.ts       # GitHubColor → ThemeColor（Primer 路径）
│   │   ├── gitea.ts        # GiteaColor → ThemeVars（原生路径）
│   │   ├── catppuccin.ts   # CatppuccinFlavor → ThemeColor
│   │   ├── primer.ts       # Primer 令牌 → GitHubColor / Chroma / CodeMirror
│   │   ├── display.ts      # Display color scale → GitHubColor 覆写
│   │   └── catppuccinSyntax.ts  # Catppuccin 语法高亮
│   ├── functions/          # 工具函数
│   │   ├── color.ts         # scaleColorLight（Sass color.scale）+ rgba 转换
│   │   └── var.ts          # extractVarName（CSS 变量名提取）
│   ├── types/              # 类型定义与 CSS 变量契约
│   │   ├── color/          # 颜色结构定义（primary, secondary, named, 等）
│   │   └── vars.ts         # createGlobalThemeContract + varMapper
│   ├── vite-plugin/        # 构建工具
│   │   ├── index.ts        # 主 Vite 插件
│   │   ├── themeConfig.ts  # defineThemeConfig、TypeScript 类型
│   │   └── utils.ts        # buildFullThemeName、buildFullDisplayName
│   ├── vanilla-extract.ts  # 适配器劫持（compileCSS、captureStyle）
│   ├── selectors.ts        # 共享 CSS 选择器（root、chroma、codeMirror、emoji）
│   └── utils.ts            # deepOverride、getCallerInfo
├── styles/                 # CSS 样式覆写
│   ├── common/             # 可复用 CSS 片段（按钮、标签、动画）
│   ├── public/             # 基础元素（按钮、输入框、下拉菜单、菜单、表格）
│   ├── components/         # 页面特定样式（导航栏、热力图、仓库、议题、Actions）
│   └── templates/          # 模板特定样式
├── themes/                 # 颜色主题定义
│   ├── github.ts           # GitHub 主题颜色（来自 Primer 令牌）
│   ├── giteaDark.ts        # Gitea 暗色主题颜色（原生格式）
│   ├── giteaLight.ts       # Gitea 亮色主题颜色（原生格式）
│   └── catppuccin.ts       # Catppuccin 主题颜色
├── primer/                 # 自动生成的 Primer 设计令牌（来自 @primer/primitives）
├── scripts/                # 构建与工具脚本
│   ├── buildPrimerTSToken.ts  # 从 @primer/primitives 生成 primer/ TypeScript 令牌
│   ├── syncTheme.ts        # 同步构建产物到远程 Gitea 实例
│   ├── updateGitea.ts      # 更新 Gitea 参考文件
│   ├── translate.ts        # 生成本地化/翻译文件
│   └── version.ts          # 版本管理
├── dist/                   # 构建产物（30+ CSS 文件）
└── templates/              # 可选的 Gitea Go 模板覆写
```

---

## 关键设计决策与权衡

### 决策一：Vanilla-Extract 仅用于 CSS 编写，不用于运行时

**选择：** 使用 vanilla-extract 的 `createGlobalTheme`/`createGlobalThemeContract`
进行类型安全的 CSS 变量生成，但通过适配器劫持在构建时序列化为静态 CSS 字符串。

**放弃：** 使用 vanilla-extract 内置 Vite 插件（生成按模块拆分的 CSS 文件，不适合单文件主题输出）。

**权衡：** 适配器 API 无官方文档，可能在 vanilla-extract 版本间变化。通过锁定 `@vanilla-extract/css`
版本并使用快照测试检测 CSS 输出变化来缓解风险。

### 决策二：单文件 CSS 输出

**选择：** 每个主题是包含所有变量和所有样式覆写的单个 CSS 文件。

**放弃：** 通过 `@import` 链拆分为多个 CSS 文件（Gitea 主题系统每个主题只加载一个 CSS 文件）。

**权衡：** 样式覆写在所有主题文件中重复嵌入（约 60KB × 30 个主题 ≈
1.8MB 冗余）。这是 Gitea 的约束而非设计选择。替代方案（独立 common.css）需要 Gitea 支持多文件主题加载。

### 决策三：LightningCSS 同时用于语法校验和输出压缩

**选择：** 使用 LightningCSS 进行构建时 CSS 语法校验（在 `css()` 模板标签中）和输出压缩（在 Vite 插件中）。

**放弃：** PostCSS（更慢）、esbuild CSS（功能不够完整）、完全不校验。

**权衡：** LightningCSS 较宽容——它会从许多语法错误中恢复而非抛出异常。这意味着 `css()`
中的"校验"能捕获严重错误，但可能静默接受某些边缘情况。构建产物快照测试部分补偿了这个不足。

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
映射支持 IDE。收益：无论作为依赖使用还是本地开发，导入路径完全一致；`src/`、`styles/`、`themes/`
三个目录之间没有路径混淆。

---

## 添加新主题

### 快速路径（15 个颜色定义）

1. 创建 `themes/my-theme.ts`：

```typescript
import { defineTheme } from "@lutinglt/gitea-github-theme/core";
import type { ThemeColor, Syntax } from "@lutinglt/gitea-github-theme/core";

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
  console: {
    /* Actions 日志颜色 */
  },
  diff: {
    /* 代码差异颜色 */
  },
  other: {
    /* body、text、input、shadow 等 */
  },
  github: {
    /* GitHub 专有变量 */
  },
};

const syntaxColor: Syntax = {
  /* 代码高亮色 */
};

export default defineTheme({ colorType: "theme", themeColor, syntaxColor });
```

2. 在 `theme.config.ts` 中注册：

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

如需像素级精准的 GitHub 颜色匹配，使用 `github` 路径直接映射 Primer 设计令牌。完整映射参考见 `themes/github.ts` 和
`src/palette/github.ts`。

---

## 测试策略

| 层级     | 测试类型 | 位置                         | 验证内容                                                                                        |
| -------- | -------- | ---------------------------- | ----------------------------------------------------------------------------------------------- |
| 工具函数 | 单元测试 | `src/utils.test.ts`          | `deepOverride` 行为、`getCallerInfo` 堆栈解析                                                   |
| 计算函数 | 单元测试 | `src/functions/*.test.ts`    | `scaleColorLight` 数值计算、`extractVarName` 解析                                               |
| 核心框架 | 单元测试 | `src/core/css.test.ts`       | `css()` 校验、`cssCombine()` 组合、`cssStyle()` 序列化                                          |
| 调色板   | 快照测试 | `src/palette/*.test.ts`      | 完整颜色转换链路（Primer → ThemeColor → ThemeVars、Catppuccin → ThemeColor → ThemeVars 等）     |
| 调色板   | 结构测试 | `src/palette/github.test.ts` | 颜色值合法性（所有叶子节点都是有效 CSS 颜色字符串）、必需键存在                                 |
| 构建产物 | 集成测试 | `src/build-output.test.ts`   | 预期文件存在、CSS 内容有效性（变量存在、无调试残留、hex 小写、color-scheme 匹配）、文件体积上限 |

---

## 相关文档

- [CONTRIBUTING_CN.md](CONTRIBUTING_CN.md) — 开发环境配置与贡献指南
- [README.md](README.md) — 用户面安装与使用
- [README_CN.md](README_CN.md) — 中文用户安装与使用
- [primer/README.md](primer/README.md) — 自动生成的 Primer 令牌说明
- [CHANGELOG.md](CHANGELOG.md) — 发布历史
