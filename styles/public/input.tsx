import { css, otherThemeVars, themeVars } from "src/types/vars";

export const input = css`
  input,
  textarea,
  .ui.input input,
  .ui.form input:not([type]),
  .ui.form select,
  .ui.form textarea,
  .ui.form input[type="date"],
  .ui.form input[type="datetime-local"],
  .ui.form input[type="email"],
  .ui.form input[type="file"],
  .ui.form input[type="number"],
  .ui.form input[type="password"],
  .ui.form input[type="search"],
  .ui.form input[type="tel"],
  .ui.form input[type="text"],
  .ui.form input[type="time"],
  .ui.form input[type="url"] {
    &:focus,
    &:focus-visible {
      background: ${themeVars.color.body} !important;
      border-radius: ${otherThemeVars.border.radius};
      border-color: ${themeVars.github.borderColor.accent.emphasis};
      // 向内部添加一个 1px 的边框
      box-shadow: inset 0 0 0 1px ${themeVars.github.borderColor.accent.emphasis};
      outline: none;
    }
  }
`;
