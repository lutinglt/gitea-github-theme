# Architecture: Gitea GitHub Theme

## Project Overview

Gitea GitHub Theme is a build-time CSS generation framework that produces static `.css` theme files for the
[Gitea](https://github.com/go-gitea/gitea) self-hosted code platform. The project takes design tokens and color
definitions as input, transforms them through a layered pipeline, and outputs 30+ minified CSS files covering 7 theme
series (default, colorblind, tritanopia, pink, gitea, catppuccin, high-contrast).

**Core principle:** Full type safety and CSS-in-JS developer experience at build time, pure static CSS delivered to the
browser with zero runtime overhead.

---

## Architecture Layers

```
┌──────────────────────────────────────────────────────────────┐
│                  Theme Configuration Layer                     │
│  theme.config.ts: declares theme series, color types,         │
│  display names, accessibility metadata                        │
└──────────────────────────┬───────────────────────────────────┘
                           │
┌──────────────────────────▼───────────────────────────────────┐
│                  Color Definition Layer                        │
│  ┌──────────┐  ┌──────────────┐  ┌───────────────────┐      │
│  │ primer/  │  │  themes/     │  │ themes/catppuccin  │      │
│  │ (auto-   │  │  github.ts   │  │ .ts               │      │
│  │ generated│  │  gitea*.ts   │  │                    │      │
│  │ Primer   │  │              │  │                    │      │
│  │ tokens)  │  │              │  │                    │      │
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
│                  Color Transformation Layer                    │
│  src/palette/                                                │
│  ┌────────────┐  ┌────────────┐  ┌──────────────────┐      │
│  │ github.ts  │  │ theme.ts   │  │ gitea.ts         │      │
│  │ GitHubColor│  │ ThemeColor │  │ GiteaColor       │      │
│  │    →       │  │    →       │  │    →             │      │
│  │ ThemeColor │  │ ThemeVars  │  │ ThemeVars        │      │
│  └────────────┘  └────────────┘  └──────────────────┘      │
│                                                              │
│  Unified output: ThemeVars (flat key-value map of CSS vars)   │
└──────────────────────────┬───────────────────────────────────┘
                           │
┌──────────────────────────▼───────────────────────────────────┐
│                  Core Framework Layer                          │
│  src/core/                                                   │
│  ┌──────────────┐  ┌──────────┐  ┌───────────────────┐      │
│  │ theme.ts     │  │ css.ts   │  │ chroma.ts         │      │
│  │ createTheme()│  │ css()    │  │ codemirror.ts     │      │
│  │ defineTheme()│  │cssCombine│  │ meta.ts           │      │
│  └──────┬───────┘  │cssStyle()│  └───────────────────┘      │
│         │          └────┬─────┘                              │
│         │               │                                    │
│  vanilla-extract adapter (src/vanilla-extract.ts)             │
│  ┌──────────────────────────────────────────────────┐       │
│  │  setAdapter() → intercepts appendCss,            │       │
│  │  registerClassName, registerComposition          │       │
│  │  → serializes all CSS to strings at build time   │       │
│  └──────────────────────────────────────────────────┘       │
└──────────────────────────┬───────────────────────────────────┘
                           │
┌──────────────────────────▼───────────────────────────────────┐
│                  Style Override Layer                          │
│  styles/                                                     │
│  ┌──────────┐  ┌──────────────┐  ┌──────────────────┐      │
│  │ public/  │  │ components/  │  │ templates/       │      │
│  │ (base    │  │ (page-level  │  │ (template-       │      │
│  │  elements│  │  styles)     │  │  specific styles) │      │
│  └──────────┘  └──────────────┘  └──────────────────┘      │
│  common/ (reusable CSS fragments: buttons, labels, anims)    │
│                                                              │
│  Each file uses css`...` template literals                   │
│  → composed with cssCombine() at export boundary             │
└──────────────────────────┬───────────────────────────────────┘
                           │
┌──────────────────────────▼───────────────────────────────────┐
│                  Build Pipeline                                │
│  src/vite-plugin/index.ts (Vite plugin)                      │
│                                                              │
│  config() hook:                                              │
│    1. Dynamically import theme.config.ts                      │
│    2. Resolve all theme entries + generate auto themes        │
│                                                              │
│  generateBundle() hook:                                      │
│    1. Import styles/ → CSS string (public + components)      │
│    2. For each theme entry:                                  │
│       a. compileCSS(createThemeMetaInfo + createTheme)       │
│       b. lightningcss.transform() → minify                   │
│       c. Append style overrides (non-auto themes only)       │
│       d. emitFile → output .css asset                        │
│    3. For auto themes: generate @import declarations         │
└──────────────────────────┬───────────────────────────────────┘
                           │
                           ▼
                    dist/theme-github-*.css
```

---

## Core Design Patterns

### 1. Vanilla-Extract Adapter Hijacking

**Problem solved:** Vanilla-extract is a zero-runtime CSS-in-JS library that generates static CSS files at build time
via its Vite/esbuild plugin. However, Gitea themes need single-file CSS output and programmatic control over the theme
generation process (one output file per theme, auto theme generation, etc.).

**Solution:** Bypass vanilla-extract's default plugin and use its low-level adapter API directly.

In [src/vanilla-extract.ts](src/vanilla-extract.ts):

```typescript
export function compileCSS(compileFn: () => void): string {
  // 1. Install custom adapter to capture CSS objects into arrays
  setAdapter({
    appendCss: css => capturedCssObjs.push(css),
    registerClassName: className => localClassNames.add(className),
    registerComposition: composition => composedClassLists.push(composition),
    // ... other callbacks implemented as no-ops
  });

  // 2. Set file scope for debugging
  setFileScope(getCallerInfo(1));

  // 3. Execute the caller's vanilla-extract API calls
  compileFn();

  // 4. Tear down adapter
  endFileScope();
  removeAdapter();

  // 5. Serialize captured CSS objects to strings
  return transformCss({
    localClassNames: Array.from(localClassNames),
    composedClassLists,
    cssObjs: capturedCssObjs,
  }).join("\n");
}
```

**How it works:**

1. `compileCSS` wraps a synchronous function that calls vanilla-extract APIs (`createGlobalTheme`, `globalStyle`,
   `globalKeyframes`, etc.)
2. The custom adapter intercepts all CSS generation calls, capturing them into in-memory arrays
3. After the function executes, `transformCss()` serializes the captured objects into CSS strings
4. The adapter is torn down, leaving no global side effects

**Safety guarantee:** Each `compileCSS` call is fully self-contained: install → capture → serialize → teardown. No state
leaks between calls.

**Key insight:** Vanilla-extract's `createGlobalThemeContract` + `createGlobalTheme` fit this pattern perfectly—they
only produce CSS during `createGlobalTheme` calls, which happen exactly within our capture scope.

### 2. Three Color Input Pipelines

**Problem solved:** Different color theme sources have different data structures. Primer design tokens (from GitHub)
have hundreds of nested keys. Catppuccin has its own palette structure. Gitea's native format uses a flat structure. All
three need to be supported.

**Solution:** Three conversion paths, all converging on `ThemeVars`:

```
Primer tokens ──→ GitHubColor ──→ ThemeColor ──→ ThemeVars
Catppuccin flavor ──────────────→ ThemeColor ──→ ThemeVars
GiteaColor ────────────────────────────────────→ ThemeVars
```

Each path has different complexity requirements:

| Path     | Use case                     | Complexity                       | Examples                           |
| -------- | ---------------------------- | -------------------------------- | ---------------------------------- |
| `github` | Full Primer token compliance | High (hundreds of mapped keys)   | Default, colorblind, high-contrast |
| `theme`  | 15 base colors, custom theme | Low (auto-derives 200+ CSS vars) | Catppuccin, community themes       |
| `gitea`  | Gitea native color format    | Medium (direct mapping)          | Gitea-compatible themes            |

**Design rationale:** The `theme` path is the "onboarding path"—contributors only need to define 15 semantic colors
(`red`, `orange`, `yellow`, …, `white`) plus primary and secondary. The framework automatically computes:

- 7-level lightness variants (dark-1 through dark-7, light-1 through light-7)
- 9-level alpha variants (alpha-10 through alpha-90)
- Badge colors and their hover states
- Message colors (error/success/warning/info)
- ANSI console colors
- Direction-aware (scale direction reversed for dark/light themes)

Implemented in `theme2ThemeVars()` in [src/palette/theme.ts](src/palette/theme.ts).

### 3. CSS Variable Naming Convention

**Problem solved:** Gitea expects specific CSS variable naming patterns (`--color-primary-dark-1`,
`--color-red-badge-bg`, etc.). We need type-safe access in TypeScript (`themeVars.color.primary.dark.num1`).

**Solution:** Use vanilla-extract's `createGlobalThemeContract` with a custom `varMapper`.

In [src/types/vars.ts](src/types/vars.ts):

```typescript
function varMapper(prefix: string | null = null) {
  return (value: string | null, path: string[]) => {
    if (value === null) {
      // Auto-generate name from path: ["color","primary","dark","num1"] → "color-primary-dark-1"
      path = path.filter(item => item !== "self"); // remove "self" key
      path = path.map(item => item.replace(/^num/, "")); // strip "num" prefix
      value = path.join("-");
    }
    if (prefix) value = `${prefix}-${value}`;
    return value;
  };
}
```

This creates a bidirectional mapping:

| TypeScript access                              | CSS variable                           |
| ---------------------------------------------- | -------------------------------------- |
| `themeVars.color.primary.self`                 | `--color-primary`                      |
| `themeVars.color.primary.dark.num1`            | `--color-primary-dark-1`               |
| `themeVars.github.button.primary.bgColor.rest` | `--github-button-primary-bgColor-rest` |
| `syntaxVars.keyword`                           | `--color-syntax-keyword`               |
| `customThemeVars.cloneMenuWidth`               | `--custom-clone-menu-width`            |

### 4. Build-Time CSS Syntax Validation

**Problem solved:** CSS in template literals can contain syntax errors that only surface at browser runtime.

**Solution:** The `css()` template tag validates CSS syntax at build time using lightningcss.

In [src/core/css.ts](src/core/css.ts):

```typescript
export function css(strings: TemplateStringsArray, ...values: CSSInterpolation[]): CSSString {
  const result = strings.reduce((acc, s, i) => acc + s + String(values[i] ?? ""), "");
  // Build-time validation: lightningcss parses and reports syntax errors
  transform({ filename: getCallerInfo(1), code: Buffer.from(result) });
  return result as CSSString;
}
```

If a developer writes invalid CSS, the build fails immediately with `file:line` info pointing to the problematic
template literal. This catches errors that would otherwise only be discovered through browser DevTools.

**Trade-off:** Each `css` template call invokes `transform()` once. For ~60 style files, this adds ~200ms to the initial
build (one-time cost, subsequent builds benefit from Bun's module cache).

---

## Vite Build Pipeline

The build is orchestrated by a custom Vite plugin in [src/vite-plugin/index.ts](src/vite-plugin/index.ts):

### Phase 1: Configuration Resolution (`config` hook)

1. Dynamically import `theme.config.ts` via Bun native TypeScript + package exports self-reference
   (`@lutinglt/gitea-github-theme/theme.config.ts`)
2. Iterate over each theme series, generating entries for each theme variant (dark, light, soft-dark, frappe, macchiato,
   etc.)
3. When a series has both dark and light variants, auto-generate an `auto` theme entry
4. Provide a virtual module entry (Vite needs at least one input to trigger `generateBundle`)

### Phase 2: CSS Generation (`generateBundle` hook)

For each **non-auto theme**:

1. Call `compileCSS()` with a function that:
   - Creates Gitea theme meta info (`createThemeMetaInfo`) — sets `--theme-color-scheme`, `--theme-display-name`,
     `--theme-colorblind-type`
   - Creates theme CSS variables (`createTheme`) — generates all `--color-*` and `--github-*` variables, global styles,
     keyframe animations, code highlighting
2. Minify captured CSS via `lightningcss.transform()`
3. Append public style overrides (`styles/`)

For each **auto theme**:

1. Generate `@import` declarations with `prefers-color-scheme` media queries referencing the corresponding dark/light
   theme files
2. Include theme meta info so Gitea recognizes it as an auto color theme

### CSS Output Structure

```
theme-github-dark.css:
  ├── @keyframes (overlayAppear, overlayAppearDown, overlayAppearUp)
  ├── gitea-theme-meta-info { --theme-color-scheme: dark; ... }
  ├── :root { --theme-version: "1.26.2.260605"; --is-dark-theme: true; ... }
  ├── :root { --color-primary: #4493f8; --color-primary-contrast: ... }
  ├── ... (200+ CSS variable declarations)
  ├── .chroma { ... } (syntax highlighting)
  ├── .code-editor-container { ... } (CodeMirror highlighting)
  └── <public style overrides> (~60KB single-line minified)

theme-github-auto.css:
  ├── @import "./theme-github-dark.css" (prefers-color-scheme: dark);
  ├── @import "./theme-github-light.css" (prefers-color-scheme: light);
  └── gitea-theme-meta-info { --theme-color-scheme: auto; ... }
```

---

## Color System Deep Dive

### Color Scale Calculation

`scaleColorLight()` in [src/functions/color.ts](src/functions/color.ts) implements the Sass `color.scale()` algorithm:

```
darken:  newL = currentL × (1 + scale/100)         [scale < 0]
lighten: newL = currentL + (1 - currentL) × (scale/100)  [scale > 0]
```

This is **proportional scaling**, not linear offset. Its significance:

- `color.scale(#000000, $lightness: 50%)` → 50% gray (not "50% darker than black", which is still black)
- `color.scale(#ffffff, $lightness: -50%)` → 50% gray (not "50% lighter than white", which is still white)
- The proportional approach ensures visually meaningful changes at both brightness extremes

### ThemeColor → ThemeVars Derivation

`theme2ThemeVars()` in [src/palette/theme.ts](src/palette/theme.ts) takes `ThemeColor` (15 base colors + metadata) and
derives the full `ThemeVars` (200+ CSS variable values):

1. **Primary scale**: 7 dark variants, 7 light variants, 9 alpha variants, hover/active states — all from a single hex
   color
2. **Secondary scale**: 13 dark variants, 4 light variants, 9 alpha variants, button hover/active states
3. **Named colors** (13 of 15 base colors): each generates self/light/dark-1/dark-2/badge-self/badge-bg/badge-hover-bg
4. **Semantic message colors**: bg/border/text with rgba transparency and saturation adjustments
5. **ANSI colors**: 16-color palette mapped from named colors
6. **Direction-aware**: `isDarkTheme` flag reverses scale direction — "dark" variants in dark themes go toward lighter
   values (to maintain contrast)

---

## Style Override Strategy

### Selector Priority Hierarchy

Style overrides use Gitea's existing DOM selectors. The override strategy follows a priority ladder:

1. **Color variables** — All colors reference CSS variables from the theme (never hardcoded hex values)
2. **Element-level overrides** — Base elements like `.ui.button`, `#navbar`, `input`
3. **Component-level overrides** — Page-specific areas: heatmap, issues, actions, repo pages
4. **`!important` escape hatch** — Only used when Gitea sets colors via inline `style` attributes (e.g., heatmap
   contribution squares)

### cssCombine() Explicit Composition

Styles are composed together via a `cssCombine()` call tree:

```
styles/index.ts
  ├── public/index.ts    (base elements, buttons, inputs, dropdowns, menus, tables)
  ├── components/index.ts (navbar, heatmap, issues, repo files, Actions, etc.)
  └── templates/index.ts  (template-specific styles)
```

Each leaf module exports `default cssCombine(...)`, chaining CSS fragments together. This explicit composition makes the
dependency graph visible and avoids the implicit ordering issues of CSS `@import` or `@use`.

### cssStyle() Reusable Fragments

`cssStyle()` in [src/core/css.ts](src/core/css.ts) enables extracting reusable CSS property sets while retaining
vanilla-extract's type checking:

```typescript
// In styles/common/button.ts:
export const primaryButtonStyle = cssStyle({
  color: themeVars.github.button.primary.fgColor.rest,
  backgroundColor: themeVars.github.button.primary.bgColor.rest,
  borderColor: themeVars.github.button.primary.borderColor.rest,
  boxShadow: themeVars.github.shadow.resting.small,
});

// In styles/public/button.ts:
const baseButton = css`
  .ui.primary.button {
    ${primaryButtonStyle}
  }
`;
```

This preserves type safety (vanilla-extract validates property names and value types) in a system that ultimately
outputs static CSS strings.

---

## Directory Structure

```
├── theme.config.ts         # Theme series declaration (framework entry point)
├── src/
│   ├── index.ts            # Public API exports
│   ├── core/               # Core framework
│   │   ├── theme.ts        # createTheme, defineTheme (color → CSS variables)
│   │   ├── css.ts          # css(), cssCombine(), cssStyle()
│   │   ├── chroma.ts       # Chroma (server-side) syntax highlighting
│   │   ├── codemirror.ts   # CodeMirror (client-side) syntax highlighting
│   │   ├── meta.ts         # Gitea theme meta info (color scheme, display name)
│   │   └── types.d.ts      # MapLeafNodes, CSSVarFunction, Tokens
│   ├── palette/            # Color conversion and transformation
│   │   ├── theme.ts        # ThemeColor → ThemeVars (simplified API)
│   │   ├── github.ts       # GitHubColor → ThemeColor (Primer path)
│   │   ├── gitea.ts        # GiteaColor → ThemeVars (native path)
│   │   ├── catppuccin.ts   # CatppuccinFlavor → ThemeColor
│   │   ├── primer.ts       # Primer tokens → GitHubColor / Chroma / CodeMirror
│   │   ├── display.ts      # Display color scale → GitHubColor overrides
│   │   └── catppuccinSyntax.ts  # Catppuccin syntax highlighting
│   ├── functions/          # Utility functions
│   │   ├── color.ts         # scaleColorLight (Sass color.scale) + rgba wrapper
│   │   └── var.ts          # extractVarName (CSS variable name extraction)
│   ├── types/              # Type definitions and CSS variable contracts
│   │   ├── color/          # Color structure definitions (primary, secondary, named, etc.)
│   │   └── vars.ts         # createGlobalThemeContract + varMapper
│   ├── vite-plugin/        # Build tooling
│   │   ├── index.ts        # Main Vite plugin
│   │   ├── themeConfig.ts  # defineThemeConfig, TypeScript types
│   │   └── utils.ts        # buildFullThemeName, buildFullDisplayName
│   ├── vanilla-extract.ts  # Adapter hijacking (compileCSS, captureStyle)
│   ├── selectors.ts        # Shared CSS selectors (root, chroma, codeMirror, emoji)
│   └── utils.ts            # deepOverride, getCallerInfo
├── styles/                 # CSS style overrides
│   ├── common/             # Reusable CSS fragments (buttons, labels, animations)
│   ├── public/             # Base elements (buttons, inputs, dropdowns, menus, tables)
│   ├── components/         # Page-specific styles (navbar, heatmap, repo, issues, Actions)
│   └── templates/          # Template-specific styles
├── themes/                 # Color theme definitions
│   ├── github.ts           # GitHub theme colors (from Primer tokens)
│   ├── giteaDark.ts        # Gitea dark theme colors (native format)
│   ├── giteaLight.ts       # Gitea light theme colors (native format)
│   └── catppuccin.ts       # Catppuccin theme colors
├── primer/                 # Auto-generated Primer design tokens (from @primer/primitives)
├── scripts/                # Build and utility scripts
│   ├── buildPrimerTSToken.ts  # Generate primer/ TypeScript tokens from @primer/primitives
│   ├── syncTheme.ts        # Sync build artifacts to remote Gitea instance
│   ├── updateGitea.ts      # Update Gitea reference files
│   ├── translate.ts        # Generate localization/translation files
│   └── version.ts          # Version management
├── dist/                   # Build output (30+ CSS files)
└── templates/              # Optional Gitea Go template overrides
```

---

## Key Design Decisions & Trade-offs

### Decision 1: Vanilla-Extract for CSS authoring only, not runtime

**Choice:** Use vanilla-extract's `createGlobalTheme`/`createGlobalThemeContract` for type-safe CSS variable generation,
but serialize to static CSS strings at build time via adapter hijacking.

**Rejected:** Using vanilla-extract's built-in Vite plugin (outputs per-module CSS files, unsuitable for single-file
theme output).

**Trade-off:** Adapter API is undocumented and may change between vanilla-extract versions. Mitigated by locking
`@vanilla-extract/css` version and using snapshot tests to detect CSS output changes.

### Decision 2: Single-file CSS output

**Choice:** Each theme is a single CSS file containing all variables and all style overrides.

**Rejected:** Splitting into multiple CSS files via `@import` chains (Gitea's theme system loads one CSS file per
theme).

**Trade-off:** Style overrides are duplicated across all theme files (~60KB × 30 themes ≈ 1.8MB redundancy). This is a
Gitea constraint, not a design choice. The alternative (separate common.css) would require Gitea to support multi-file
theme loading.

### Decision 3: LightningCSS for both syntax validation and output minification

**Choice:** Use LightningCSS for build-time CSS syntax validation (in `css()` template tag) and output minification (in
Vite plugin).

**Rejected:** PostCSS (slower), esbuild CSS (less feature-complete), no validation at all.

**Trade-off:** LightningCSS is lenient—it recovers from many syntax errors rather than throwing. This means validation
in `css()` catches severe errors but may silently accept certain edge cases. Build output snapshot tests partially
compensate for this.

### Decision 4: Bun-only runtime

**Choice:** Require Bun ≥ 1.3.14 for development and building.

**Rejected:** Cross-runtime support (Node + Bun).

**Trade-off:** Limits contributor environments. Benefits: native TypeScript execution (no ts-node/esbuild overhead),
consistent stack trace format (for debugging utilities), faster builds (Bun native bundler).

### Decision 5: Package self-referencing for internal imports

**Choice:** Use `@lutinglt/gitea-github-theme/core` style imports even within the same package, via `exports` mappings
in `package.json`.

**Rejected:** Relative path imports everywhere.

**Trade-off:** Requires `paths` mappings in `tsconfig.json` for IDE support. Benefits: import paths are consistent
whether used as a dependency or developed locally; no path confusion between `src/`, `styles/`, and `themes/`
directories.

---

## Adding a New Theme

### Quick Path (15 color definitions)

1. Create `themes/my-theme.ts`:

```typescript
import { defineTheme } from "@lutinglt/gitea-github-theme/core";
import type { ThemeColor, Syntax } from "@lutinglt/gitea-github-theme/core";

const themeColor: ThemeColor = {
  isDarkTheme: true,
  primary: "#8b5cf6", // accent color (purple)
  primaryContrast: "#ffffff",
  secondary: "#27272a", // border color
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
    /* Actions log colors */
  },
  diff: {
    /* Code diff colors */
  },
  other: {
    /* body, text, input, shadow, etc. */
  },
  github: {
    /* GitHub-specific variables */
  },
};

const syntaxColor: Syntax = {
  /* Code highlighting colors */
};

export default defineTheme({ colorType: "theme", themeColor, syntaxColor });
```

2. Register in `theme.config.ts`:

```typescript
{
  themeSeriesName: "my-theme",
  themes: {
    dark: { theme: myDarkTheme },
    // Optional: add light variant for auto theme generation
    light: { theme: myLightTheme },
  },
}
```

3. Run `bun bundle` — the theme CSS will appear in `dist/`.

### Full Path (Primer tokens)

For pixel-perfect GitHub color matching, use the `github` path with direct Primer design token mapping. See
`themes/github.ts` and `src/palette/github.ts` for the full mapping reference.

---

## Testing Strategy

| Layer        | Test type       | Location                     | What it verifies                                                                                                                 |
| ------------ | --------------- | ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| Utility      | Unit tests      | `src/utils.test.ts`          | `deepOverride` behavior, `getCallerInfo` stack parsing                                                                           |
| Functions    | Unit tests      | `src/functions/*.test.ts`    | `scaleColorLight` numeric computation, `extractVarName` parsing                                                                  |
| Core         | Unit tests      | `src/core/css.test.ts`       | `css()` validation, `cssCombine()` composition, `cssStyle()` serialization                                                       |
| Palette      | Snapshot tests  | `src/palette/*.test.ts`      | Full color conversion chains (Primer → ThemeColor → ThemeVars, Catppuccin → ThemeColor → ThemeVars, etc.)                        |
| Palette      | Structure tests | `src/palette/github.test.ts` | Color value validity (all leaf nodes are valid CSS color strings), required keys exist                                           |
| Build output | Integration     | `src/build-output.test.ts`   | Expected files exist, CSS content validity (vars present, no debug residue, hex lowercase, color-scheme match), file size limits |

---

## Related Documents

- [CONTRIBUTING.md](CONTRIBUTING.md) — Development environment setup and contribution guide
- [README.md](README.md) — User-facing installation and usage
- [README_CN.md](README_CN.md) — Chinese user installation and usage
- [primer/README.md](primer/README.md) — Auto-generated Primer token documentation
- [CHANGELOG.md](CHANGELOG.md) — Release history
