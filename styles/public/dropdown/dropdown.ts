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

import { animationDown, animationUp } from "src/core/styles";
import { css, otherThemeVars, themeVars } from "src/types/vars";
import { activeItemAfterStyle } from "styles/public/menu";

export const dropdown = css`
  .ui.dropdown,
  .ui.menu .ui.dropdown {
    .menu {
      ${animationDown};
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
          top: 3px;
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
      ${animationUp};
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
  .ui.floating.dropdown .menu {
    box-shadow: ${themeVars.github.shadow.floating.small} !important;
  }
`;
