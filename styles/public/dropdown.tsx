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
      // 忽略隐藏
      > .item:not(.tw-hidden) {
        display: flex !important;
        align-items: center;
        gap: 0.5rem;
        padding: 8px 10px !important;
        border-radius: ${otherThemeVars.border.radius} !important;
        margin: 0 0.5rem;
        &:first-of-type {
          margin-top: 0.5rem;
        }
        // 不知道为什么提交差异对比页面操作中的 cherrypick 按钮无法被选中
        &.cherry-pick-button,
        &:last-of-type {
          margin-bottom: 0.5rem;
        }
        &:hover {
          background-color: ${themeVars.github.control.transparent.bgColor.hover} !important;
        }
        &.selected {
          background-color: ${themeVars.color.active} !important;
          &:hover {
            background-color: ${themeVars.github.control.transparent.bgColor.hover} !important;
          }
        }
        svg {
          color: ${themeVars.color.text.light.num1};
          margin-right: 0.5rem;
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
  // 修复一些菜单下的菜单元素溢出问题
  // 目前主要为分支菜单
  .ui.dropdown .menu .menu {
    border-radius: 12px !important;
  }
  // 修复仪表板切换控制用户按钮阴影被覆盖缺少边框线的问题
  .ui.dropdown .menu.context-user-switch .scrolling.menu {
    box-shadow: ${themeVars.github.shadow.floating.small} !important;
  }
`;

// 选择框的下拉菜单看起来像普通按钮
export const selectionDropdown = css`
  .ui.selection.dropdown,
  .ui.selection.dropdown.active {
    background-color: ${themeVars.color.button};
    border-color: ${themeVars.color.light.border};
    border-radius: ${otherThemeVars.border.radius};
    padding: 8px 16px;
    min-height: 32px;
    &:focus {
      background: ${themeVars.color.button};
      border-color: ${themeVars.color.light.border};
    }
    &:hover {
      background: ${themeVars.color.hover.self};
      border-color: ${themeVars.color.light.border};
    }
  }
  .ui.selection.dropdown.active {
    border-bottom-left-radius: ${otherThemeVars.border.radius} !important;
    border-bottom-right-radius: ${otherThemeVars.border.radius} !important;
  }
`;
