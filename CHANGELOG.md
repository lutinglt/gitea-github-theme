### ⚠️ Breaking Changes

- Starting from this version, CSS nesting will no longer be expanded, which will reduce the volume by 40% and improve
  loading speed,ensure styles are applied correctly by keeping Chrome/Edge >= 120, Firefox >= 121, Safari >= 16.5.

### 🎉 The theme framework is now stable

- The core internal generation framework of the theme has been refactored, with build speed optimized to under 1 second.
  There are three ways to define a theme, and you can choose according to your needs. Custom themes also support
  additional custom styles. Feel free to check out CONTRIBUTING.md and the project’s internal documentation to
  contribute your own themes!

- All currently known GitHub color themes have been adapted, with additional support for custom pink, Gitea colors, and
  Catppuccin colors.

### ✨ Feature

- Add high contrast color themes.
- Add default to the base default theme display name to sort it together when there are many themes in the list.
  `GitHub Dark` -> `GitHub Default Dark`

### 🌈 Style

- Optimize catppuccin theme colors.

#### More GitHub-like style

- Fine tune the heatmap colors of pink soft dark theme.
- Optimize heat map style.
- Optimize the style of workflow log pages.
- Synchronize the style of the notification prompt (small dots).

### 🐞 Fix

- Fix the missing highlight style when hovering the heatmap mouse.
- Fix the last commit avatar on the repo homepage being blocked.
- Fix the hovering and activation colors of the sub items in the second level menu of warehouse filtering on the
  dashboard page.
- Fix some green label styles.
- Fix Runner task status label style.
- Fix the style of PR comment operation panel.
