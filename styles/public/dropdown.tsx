import { animation } from "src/core/theme";
import { css, otherThemeVars, themeVars } from "src/types/vars";

export const dropdown = css`
  .ui.dropdown,
  .ui.menu .ui.dropdown {
    .menu {
      animation: ${animation};
      // 统一所有下拉菜单的样式
      margin-top: 0.35em !important;
      background-color: ${themeVars.color.menu} !important;
      border: unset !important;
      border-radius: 12px !important;
      box-shadow: ${themeVars.github.shadow.floating.small} !important;

      > .item {
        padding: 8px 10px !important;
        border-radius: ${otherThemeVars.border.radius} !important;
        margin: 0 0.5rem;
        &:first-child {
          margin-top: 0.5rem;
        }
        &:last-child {
          margin-bottom: 0.5rem;
        }
        &:hover {
          background-color: ${themeVars.github.control.transparent.bgColor.hover} !important;
        }
        &.active,
        &.selected {
          background-color: ${themeVars.color.active} !important;
          &:hover {
            background-color: ${themeVars.github.control.transparent.bgColor.hover} !important;
          }
        }
      }
      > .divider {
        margin: 0.5rem 0;
      }
      &:after {
        display: none !important;
      }
    }
  }
  // 修复下拉菜单元素溢出问题
  // 用户菜单
  .user-menu>.item,
  // Issue/PR 菜单
  .ui.menu .ui.dropdown.item .menu .item {
    width: auto;
  }
  // 去掉下拉菜单的边框线
  // 设置里的下拉菜单
  .ui.selection.dropdown .menu > .item {
    border: unset;
  }
`;
