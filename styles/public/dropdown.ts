import { animationDown, animationUp } from "src/core/theme";
import { fallbackVar } from "src/functions";
import { css, customThemeVars, otherThemeVars, themeVars } from "src/types/vars";
import { activeItemAfterStyle } from "styles/public/menu";

export const dropdown = css`
  .ui.dropdown,
  .ui.menu .ui.dropdown {
    .menu {
      animation: ${animationDown};
      // 统一所有下拉菜单的样式
      background-color: ${themeVars.color.menu} !important;
      border: unset !important;
      border-radius: 12px !important;
      box-shadow: ${themeVars.github.shadow.floating.small} !important;
      // 忽略隐藏
      > .item:not(.tw-hidden) {
        display: flex !important;
        align-items: center;
        align-content: center;
        padding: 6px 8px !important;
        min-height: 32px;
        border-radius: ${otherThemeVars.border.radius} !important;
        gap: 4px;
        &:not(.emoji) {
          margin: 0 8px;
        }
        &:not(.emoji):first-of-type {
          margin-top: 8px;
          // 工单详细页面的标签菜单中的清除选中标签按钮
          &.clear-selection {
            margin-top: 0px;
          }
        }
        // 不知道为什么提交差异对比页面操作中的 cherrypick 按钮无法被选中
        &.cherry-pick-button,
        // 下一个 item 是最后一个并且被隐藏时, 目前仅在顶部导航栏工单和 PR 仪表板的菜单中出现
        &:has(+ .tw-hidden:last-of-type),
        &:not(.emoji):last-of-type {
          margin-bottom: 8px;
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
        &.active,
        &.selected {
          &:after {
            content: "";
            ${activeItemAfterStyle};
          }
        }
        svg {
          margin-top: 2px;
          margin-right: 2px;
        }
        // 复选框对齐
        .ui.checkbox input[type="checkbox"] {
          height: 100%;
        }
        // 修复 Wiki 页面下搜索框中搜索时, 显示隐藏的项目
        &.filtered {
          display: none !important;
        }
      }
      // 当筛选后, 让菜单提供边距, 因为无法确定保留的是菜单中哪个 item
      // 不是所有菜单都提供边距方式, 原因为比如会导致分支菜单中的查看所有分支上间隔缺失, 这种方式单独为 Wiki 菜单做处理
      // 有筛选(.filtered)且有筛选结果(.selected)时提供菜单边距, 没结果时提供会导致多余的菜单边框线
      &:has(> .item.filtered):has(> .item.selected) {
        padding: 8px 0px;
        > .item {
          &:first-of-type {
            margin-top: 0;
          }
          &:last-of-type {
            margin-bottom: 0;
          }
        }
      }
      > .divider {
        margin: 8px 0;
      }
      &:after {
        display: none !important;
      }
    }
  }
  // 向下弹出的下拉菜单向下偏移
  .ui.dropdown:not(.upward),
  .ui.menu .ui.dropdown:not(.upward) {
    > .menu {
      margin-top: 4px !important;
    }
  }
  // 向上弹出的下拉菜单向上偏移
  .ui.dropdown.upward,
  .ui.menu .ui.dropdown.upward {
    > .menu {
      animation: ${animationUp};
      margin-bottom: 4px !important;
    }
  }
  // 修复 wiki 的页面下拉菜单圆角
  .ui.floating.dropdown > .menu {
    border-radius: 12px !important;
  }
  // 修复嵌套菜单的圆角问题, wiki 页面和组织页面的用户下拉菜单
  .ui.dropdown .menu {
    .scrolling.menu {
      border-radius: 0 0 12px 12px !important;
    }
    // 修复仪表板切换用户按钮菜单下无创建组织按钮时的菜单圆角
    &.context-user-switch {
      .scrolling.menu:last-child {
        border-radius: 0 0 12px 12px !important;
      }
    }
  }
  // 修复下拉菜单元素溢出问题
  // 用户菜单
  .user-menu>.item,
  // Issue/PR 菜单
  .ui.menu .ui.dropdown.item .menu .item {
    width: calc(100% - 16px); // 减去上方 item 的 margin 左右边距
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
  // 修复按钮阴影被覆盖缺少边框线的问题
  // 仓库动态页面的右侧按钮, 比如时间周期
  .ui.floating.dropdown .menu,
  // 仪表板切换控制用户按钮
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
  // 修复顶部导航栏工单管理/请求合并页面搜索框旁的选择下拉框按钮内容过窄
  .list-header-search .ui.action.input > .dropdown.small {
    padding: 8px 40px 8px 16px;
  }
  // 发布版本页面的分支按钮, 覆盖 Gitea 的样式, 避免按钮元素高度不一致
  .repository.new.release .target .selection.dropdown {
    padding-top: 8px;
    padding-bottom: 8px;
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
  .ui.selection.dropdown.active.search.upward:hover {
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
  // 修复因为上面的排除导致的圆角问题
  // 具体工单页面下依赖菜单选择框
  #new-dependency-drop-list.ui.selection.dropdown.active,
  // 提交图分支选择框
  #git-graph-container #flow-select-refs-dropdown {
    border-bottom-right-radius: 0 !important;
  }
  // 修复选择框的下拉菜单向上显示时的样式问题
  .ui.upward.selection.dropdown.visible:not(.small),
  .ui.active.upward.selection.dropdown:not(.small) {
    border-top-left-radius: ${otherThemeVars.border.radius} !important;
    border-top-right-radius: ${otherThemeVars.border.radius} !important;
  }
  // 工单标签菜单中的标签换行和颜色
  // 标签页面的标签选择框
  .page-content.repository.labels .ui.selection.dropdown.active,
  // 创建仓库页面的标签选择框
  .ui.search.selection.dropdown {
    > .menu > .item {
      flex-direction: column;
      align-items: flex-start;
      > i {
        color: ${themeVars.color.text.light.num1};
      }
    }
  }
`;

export const fixSelectionDropdown = css`
  // 具体工单页面下依赖菜单选择框
  #new-dependency-drop-list.ui.selection.dropdown {
    // 高度对齐问题, 应该与 input 框高度一致
    min-height: 32px;
  }
`;

// 分支菜单
export const branchDropdown = css`
  .ui.dropdown.branch-selector-dropdown > .menu {
    width: ${fallbackVar(customThemeVars.branchMenuWidth, "320px")};
    max-width: 640px;
    > .menu > .item {
      animation: ${animationDown};
      height: 32px;
    }
    // 分支/标签切换
    > .branch-tag-tab {
      > .branch-tag-item {
        font-weight: 500;
        padding: 8px 12px;
        height: 32px;
        line-height: 1.15;
        svg {
          display: none;
        }
        &.active {
          background: ${themeVars.color.body};
        }
        &:hover {
          color: inherit;
          &:not(.active) {
            background: ${themeVars.color.hover.self};
            border: 1px solid ${themeVars.color.secondary.self};
            border-bottom: 0;
            border-top-left-radius: ${otherThemeVars.border.radius};
            border-top-right-radius: ${otherThemeVars.border.radius};
          }
        }
      }
    }
  }
`;

// 包含表情的下拉菜单
export const emojiDropdown = css`
  .ui.dropdown.action.select-reaction.active .menu:has(.emoji) {
    display: flex !important;
    flex-direction: row;
    gap: 4px;
    padding: 4px;
    min-width: auto;
    > .item.emoji {
      font-size: 14px;
      min-height: 32px;
      height: 32px;
      margin: 0px;
      &:hover {
        background-color: ${themeVars.github.bgColor.accent.emphasis} !important;
      }
    }
  }
`;
