import { css, otherThemeVars, themeVars } from "src/types/vars";

export const input = css`
  input,
  textarea,
  .ui.input input,
  // 排除可以选择的输入搜索框
  .ui.form input:not([type]):not(.search),
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
    padding: 8px 12px;
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

  .ui.input {
    height: 32px;
  }
  // 由于输入框高度, 需要输入框在表单中垂直居中
  // 管理员页面仓库搜索表单
  .ui.form#repo-search-form {
    align-items: center;
  }
  // 下拉菜单的输入框
  .ui.dropdown.dropdown .menu > .input {
    margin: 12px 10px;
  }
`;
