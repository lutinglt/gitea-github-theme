### ⚠️ Breaking Changes

- Because the project uses Lightning CSS to transpile CSS nesting code, it will contain a large number of :is()
  selectors, and browsers below Chrome 88 are not supported. Using browsers below Chrome 88 may cause many styling
  issues. Please update to Chrome 88 or above.

### ✨ Feature

- Adapt the theme color identification and color blindness identification to the new version of Gitea.
- The theme name for red-green color blindness has been synchronized with GitHub, providing a more accurate display of
  the name.
- The CSS transpilation engine has been switched from SASS to LightingCSS. Thanks to the optimization provided by
  LightingCSS, the CSS file size has been reduced by 10%.

### 🌈 Style

- Add transition animation to the repository/organization buttons on the dashboard page.

#### Adaptation for version 1.26

- Synchronize avatar administrator logo. #29
- Synchronize workflow graph page style.
- Synchronize the grid color of the transparent part in the SVG background.
- Link color of the synchronous workflow log page.
- Optimize the style of the actions page.
- Synchronization shortcut key prompt style.
- Synchronize the style of the pop-up window for file search results in the repository.
- Synchronize code highlighting colors and styles for online file editors.

#### More aligned with GitHub style

- Optimize the style of checkboxes and radiobuttons. #29
- Optimize the border shadow effect of the dashboard.
- Synchronize the border shadow of the log panel on the workflow details page.
- Synchronize the input box shadows.
- Synchronized toggle button style.
- Optimize code highlighting color.
- Synchronized manual triggering of workflow pop-up style.
- Optimize the style of the page when opening the warehouse file.
- Synchronize the style of list items when they are selected in the Issue & PR list.
- Synchronize button colors when the mouse is hovering and when it is clicked.

### 🐞 Fix

- Fix the style of the PR page creation. #27
- Fix the redundant shadow and animation of the "Switch User" button on the dashboard.
- Fix the border of the self-check panel in the maintenance panel in the management settings.
- Fix the issue of excessively wide branch menu width on the mobile page.
- Fix the issue of the step list width being too narrow on the workflow details page under the mobile page.
- Fix the color change logic of buttons in the pink theme when interacting in bright mode.
