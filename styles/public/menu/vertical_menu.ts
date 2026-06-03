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

import { css, otherThemeVars, themeVars } from "@gitea-github-theme/core";
import { activeItemAfterStyle } from "@gitea-github-theme/styles/common";

export const verticalMenu = css`
  /* 垂直菜单, 用于左侧边栏 */
  /* 设置页面中的菜单, Actions 工作流菜单, WorkflowRuns Job 菜单 */
  .ui.vertical.menu {
    /* 去除边框, 和背景色同色 */
    background: ${themeVars.color.body};
    border: 0;
    /* 设置页面的菜单头部 */
    .header.item {
      color: ${themeVars.color.text.light.num1} !important;
      font-size: 1.5rem;
      font-weight: 700;
      background: unset;
      margin-bottom: 0.5rem;
    }
    /* 菜单项被悬停时的背景色, 限制a标签, 避免为子菜单多余渲染 */
    a.item {
      &:hover {
        background: ${themeVars.github.control.transparent.bgColor.hover};
        box-shadow: inset 0 0 0 1px ${themeVars.github.control.transparent.borderColor.active};
      }
      &:active {
        background-color: ${themeVars.github.control.transparent.bgColor.active};
      }
    }
    /* 菜单项 */
    .item,
    .item > summary {
      font-size: 1.1rem;
      background: unset;
      border-radius: ${otherThemeVars.border.radius};
      padding: 6px 8px;
    }
    /* Actions 菜单的圆角覆盖 */
    > .item,
    > .active.item {
      &:first-child,
      &:last-child {
        border-radius: ${otherThemeVars.border.radius};
      }
    }
    /* 去除菜单项的边框线 */
    .item:before {
      background: unset;
    }
    /* 激活的菜单项 */
    .active.item,
    .active.item > summary {
      font-weight: 600;
      border-radius: ${otherThemeVars.border.radius};
    }
    /* 添加伪元素, 用于指示当前激活的菜单项 */
    .active.item:after {
      ${activeItemAfterStyle};
    }
    /* 部分菜单项的子菜单 */
    details.item {
      /* 子菜单的标题 */
      summary:hover {
        background: ${themeVars.github.control.transparent.bgColor.hover};
        box-shadow: inset 0 0 0 1px ${themeVars.github.control.transparent.borderColor.active};
      }
      /* 子菜单的选项 */
      .menu .item {
        color: ${themeVars.color.text.self};
      }
      /* 子菜单的选项被激活 */
      &:has(.active.item) {
        > summary {
          font-weight: 600;
          background: ${themeVars.color.active};
          /* 收回状态,悬停色 */
          &:hover {
            background: ${themeVars.github.control.transparent.bgColor.hover};
          }
          &:active {
            background-color: ${themeVars.github.control.transparent.bgColor.active};
          }
        }
        &:after {
          ${activeItemAfterStyle};
        }
        /* 子菜单的选项 */
        .active.item {
          background: ${themeVars.color.active};
          font-weight: 400;
          &:hover {
            background: ${themeVars.github.control.transparent.bgColor.hover};
          }
          &:active {
            background-color: ${themeVars.github.control.transparent.bgColor.active};
          }
        }
        /* 子菜单展开时 */
        &[open] {
          > summary {
            background: unset;
            &:hover {
              background: ${themeVars.github.control.transparent.bgColor.hover};
            }
            &:active {
              background-color: ${themeVars.github.control.transparent.bgColor.active};
            }
          }
          &:after {
            display: none;
          }
        }
      }
    }
  }
`;
