/*!
 * Copyright (c) https://github.com/lutinglt
 *
 * See the NOTICE file distributed with this work for additional
 * information regarding copyright ownership.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { otherThemeVars, themeVars } from "@gitea-github-theme/core";
import { activeItemAfterStyle } from "@gitea-github-theme/styles/common";
import { css } from "@linaria/core";

// 选择框的下拉菜单看起来像普通按钮
export const selectionDropdown = css`
  /* 排除可以选择的输入搜索框和创建仓库的拥有者 */
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
    /* 悬停提供伪元素 */
    .item:hover:after {
      content: "";
      ${activeItemAfterStyle};
    }
  }
  /* 修复 Gitea 1.26 增加的阴影样式 */
  .ui.selection.dropdown,
  .ui.selection.dropdown.active {
    /* 修复 Gitea 1.26 多余的阴影 */
    &:hover {
      box-shadow: none;
      /* 修复 Gitea 1.26 覆盖的阴影 */
      .menu {
        box-shadow: ${themeVars.github.shadow.floating.small};
      }
    }
  }
  /* 修复顶部导航栏工单管理/请求合并页面搜索框旁的选择下拉框按钮内容过窄 */
  .list-header-search .ui.action.input > .dropdown.small {
    padding: 8px 40px 8px 16px;
  }
  /* 发布版本页面的分支按钮, 覆盖 Gitea 的样式, 避免按钮元素高度不一致 */
  .repository.new.release .target .selection.dropdown {
    padding-top: 8px;
    padding-bottom: 8px;
  }
  /* 这个按钮项目前只在创建仓库的拥有者 */
  /* 不实现伪元素, 因为 .item 设置溢出的元素会被截断 */
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
  /* 选择输入框效果和输入框 focus 效果一样 */
  .ui.selection.dropdown.active.search {
    background: ${themeVars.color.body};
    /* 向内部添加一个 1px 的边框 */
    box-shadow: inset 0 0 0 1px ${themeVars.github.borderColor.accent.emphasis};
    outline: none;
  }
  /* 覆盖选择输入框向上弹出时的 hover 效果, 原阴影会覆盖加厚的边框线 */
  .ui.selection.dropdown.active.search.upward:hover {
    box-shadow: inset 0 0 0 1px ${themeVars.github.borderColor.accent.emphasis};
  }
  /* 由于之前的排除导致样式优先级变高, 小按钮去除圆角 */
  .ui.action.input > .dropdown.small:not(:first-child) {
    border-radius: 0;
  }
  /* 排除一些小按钮, 例如软件包类型, 通常相邻有元素 */
  .ui.selection.dropdown.active:not(.small) {
    border-bottom-left-radius: ${otherThemeVars.border.radius} !important;
    border-bottom-right-radius: ${otherThemeVars.border.radius} !important;
  }
  /* 修复 Gitea 1.26 (:not(:focus)) 导致的小按钮右边框出现问题, 例如软件包类型, 通常相邻有元素 */
  .ui.action.input:not([class*="left action"]) > .ui.small.dropdown.selection {
    border-right: none;
  }
  /* 修复因为上面的排除导致的圆角问题 */
  /* 具体工单页面下依赖菜单选择框 */
  #new-dependency-drop-list.ui.selection.dropdown.active,
  /* 提交图分支选择框 */
  #git-graph-container #flow-select-refs-dropdown {
    border-bottom-right-radius: 0 !important;
  }
  /* 修复选择框的下拉菜单向上显示时的样式问题 */
  .ui.upward.selection.dropdown.visible:not(.small),
  .ui.active.upward.selection.dropdown:not(.small) {
    border-top-left-radius: ${otherThemeVars.border.radius} !important;
    border-top-right-radius: ${otherThemeVars.border.radius} !important;
  }
  /* 工单标签菜单中的标签换行和颜色 */
  /* 标签页面的标签选择框 */
  .page-content.repository.labels .ui.selection.dropdown.active,
  /* 创建仓库页面的标签选择框 */
  .page-content.repository.new-repo .ui.search.selection.dropdown {
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
  /* 具体工单页面下依赖菜单选择框 */
  #new-dependency-drop-list.ui.selection.dropdown {
    /* 高度对齐问题, 应该与 input 框高度一致 */
    min-height: 32px;
  }
`;
