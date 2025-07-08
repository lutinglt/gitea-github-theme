import { animation } from "src/core/theme";
import { css, otherThemeVars, themeVars } from "src/types/vars";
import { activeItemAfterStyle } from "styles/public/menu";

export const dropdown = css`
  .ui.dropdown,
  .ui.menu .ui.dropdown {
    .menu {
      animation: ${animation};
      // 统一所有下拉菜单的样式
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
        &.active,
        &.selected {
          &:after {
            content: "";
            ${activeItemAfterStyle};
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
  // 向下弹出的下拉菜单向下偏移
  .ui.dropdown:not(.upward),
  .ui.menu .ui.dropdown:not(.upward) {
    .menu {
      margin-top: 0.35em !important;
    }
  }
  // 向上弹出的下拉菜单向上偏移
  .ui.dropdown.upward,
  .ui.menu .ui.dropdown.upward {
    .menu {
      margin-bottom: 0.35em !important;
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
  // 排除可以选择的输入搜索框和创建仓库的拥有者
  .ui.selection.dropdown:not(.search):not(.ellipsis-text-items),
  .ui.selection.dropdown.active:not(.search):not(.ellipsis-text-items) {
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
    // 悬停提供伪元素
    .item:hover:after {
      content: "";
      ${activeItemAfterStyle};
    }
  }
  // 这个按钮项目前只在创建仓库的拥有者
  // 不实现伪元素, 因为 .item 设置溢出的元素会被截断
  .ui.selection.dropdown.ellipsis-text-items,
  .ui.selection.dropdown.activeellipsis-text-items {
    &:focus {
      background: ${themeVars.color.button};
      border-color: ${themeVars.color.light.border};
    }
    &:hover {
      background: ${themeVars.color.hover.self};
      border-color: ${themeVars.color.light.border};
    }
  }
  // 选择输入框效果和输入框 focus 效果一样
  .ui.selection.dropdown.active.search {
    background: ${themeVars.color.body};
    // 向内部添加一个 1px 的边框
    box-shadow: inset 0 0 0 1px ${themeVars.github.borderColor.accent.emphasis};
    outline: none;
  }
  // 覆盖选择输入框向上弹出时的 hover 效果, 原阴影会覆盖加厚的边框线
  .ui.upward.active.selection.dropdown:hover {
    box-shadow: inset 0 0 0 1px ${themeVars.github.borderColor.accent.emphasis};
  }
  // 由于之前的排除导致样式优先级变高, 小按钮去除圆角
  .ui.action.input > .dropdown.small:not(:first-child) {
    border-radius: 0;
  }
  // 排除一些小按钮, 例如软件包类型, 通常相邻有元素
  .ui.selection.dropdown.active:not(.small) {
    border-bottom-left-radius: ${otherThemeVars.border.radius} !important;
    border-bottom-right-radius: ${otherThemeVars.border.radius} !important;
  }
  // 修复选择框的下拉菜单向上显示时的样式问题
  .ui.upward.selection.dropdown.visible:not(.small),
  .ui.active.upward.selection.dropdown:not(.small) {
    border-top-left-radius: ${otherThemeVars.border.radius}!important;
    border-top-right-radius: ${otherThemeVars.border.radius}!important;
  }
`;
