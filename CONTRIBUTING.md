# Contributing Guide

## Directory Structure

| Directory         | Description                                                       |
| ----------------- | ----------------------------------------------------------------- |
| src               | Theme generation framework and utilities                          |
| src/core          | Theme generation framework (CSS vars, syntax highlighting styles) |
| src/functions     | Theme utilities (color calculations, etc.)                        |
| src/palette       | Theme palettes (GitHub / Gitea / Catppuccin)                      |
| src/types         | Theme color variable type definitions                             |
| src/vite-plugin   | Theme Vite build plugin                                           |
| styles            | Theme style overrides                                             |
| styles/common     | Reusable CSS style fragments                                      |
| styles/public     | Base element or cross-page element styles                         |
| styles/components | Page-specific styles                                              |
| styles/templates  | Template-specific styles                                          |
| themes            | Color theme definitions                                           |
| primer            | Auto-generated Primer design tokens                               |
| scripts           | Build and utility scripts                                         |
| templates         | Gitea template overrides (optional)                               |
| gitea             | Upstream Gitea reference files                                    |
| screenshots       | Theme screenshots                                                 |

## Contribution Notes

Style contributions are not recommended, as Gitea themes are ultimately delivered as a single CSS file, which introduces
issues like ordering/override conflicts and broad-reaching style impacts.

Each developer has their own approach, making it difficult for review to catch these issues, greatly increasing
maintenance difficulty.

If you have confirmed understanding of Gitea's style layout and the project's approach, please first file an Issue to
confirm scope and expected results, then develop and submit a PR.

If you believe you have a better approach, feel free to submit an Issue.

> [!IMPORTANT]
>
> When submitting a PR, please run `bun commit`

## Development Environment

The theme depends on the Bun runtime. Please ensure Bun is installed in your environment. Bun 1.3.14 or later is
recommended.

Please use VSCode for development and install the recommended extensions in the repository.

If you prefer fewer extensions, you must install the `vscode-styled-components` extension, which is used for rendering
and checking CSS template strings in TypeScript.

VSCode 1.102.0 or later is recommended for development, as this version and above support hex color rendering in
TypeScript code.

## Development Workflow

### Install Dependencies

```bash
bun install
```

### Set Environment Variables

Create a `.env` file in the project root. Refer to `.env.example` for available variables.

Environment variables are used to send compiled themes to a server for quick preview.

### Compile Themes

Compile and sync to remote server for preview:

```bash
bun bundle:dev
```

Compile all themes:

```bash
bun bundle
```

Format project code:

```bash
bun format
```

For PR submission — check and compile all project code with formatting:

```bash
bun commit
```

## Development Conventions

`src`, `styles`, and `themes` are the project's main directories.

When referencing across modules, use package exports paths. For example:
`import { defineTheme } from "@lutinglt/gitea-github-theme/core"`

When referencing files within the same module, use relative paths. For example: `import { defineTheme } from "./theme"`

## Color Theme Contributions

Theme file naming format: `themeName.ts`, used together with `theme.config.ts` registration.

If a theme has both dark and light variants, the framework automatically generates an auto color theme.

The project accepts custom themes and will include them in published releases, but the project owner does not
participate in their maintenance or review.

Please add your author info at the top of the color theme file so Issue reporters can `@` mention you.

It is recommended to use `defineTheme` with the `ThemeColor` type to define theme colors. The framework will
automatically compute and generate all Gitea CSS variables.

Color calculation functions can be imported from `@lutinglt/gitea-github-theme/core` (`scaleColorLight`), or use the
`polished` library.

Example: `themes/my-theme.ts`

```ts
/**
 * @author your-name
 * @description theme description
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
  /* Custom code highlight colors, or import from another theme */
};

export default defineTheme({ colorType: "theme", themeColor, syntaxColor });
```

To use Gitea's native color format, use `colorType: "gitea"` with the `GiteaColor` type:

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

After completing theme color development, register the theme series in `theme.config.ts`, compile it, and take
screenshots in a Gitea instance. Place them in the `screenshots` directory with filenames matching the theme names.
(Cloning the repository is recommended to avoid leaking personal information.)

Then add screenshot information to `README.md`.

For color reuse patterns, see the colorblind theme implementation in `themes/github.ts`.

## Theme Style Contributions

Theme styles use the `css()` template string for development. Strings are processed by LightningCSS and support CSS
nesting syntax. Do not use SCSS functions; for complex processing, use TypeScript libraries such as the bundled
`polished` library.

For complex logic, it is recommended to extract it into functions under the `src/functions` directory.

All colors used in theme styles must use color variables. Import them via
`import { themeVars } from "@lutinglt/gitea-github-theme/core"`.

When using theme-specific color variables like `${themeVars.github.xxx}`, please add the file and variable to the
corresponding variable's comment in `src/types/color/github`.

For small border-radius values (6px), use the global border-radius variable. Import via
`import { otherThemeVars } from "@lutinglt/gitea-github-theme/core"` and use `${otherThemeVars.border.radius}`.
