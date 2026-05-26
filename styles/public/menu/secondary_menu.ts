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
import { css } from "@linaria/core";

export const secondaryMenu = css`
  /* 二级菜单, 比如 Issue/PR/Actions 的筛选菜单 */
  .ui.secondary.menu {
    .item {
      padding: 0px 12px;
      height: 32px;
      font-weight: 500;
      &.active,
      &:first-child {
        border-radius: ${otherThemeVars.border.radius};
      }
    }
    a.item:hover {
      background: ${themeVars.github.control.transparent.bgColor.hover};
    }
  }
  /* 二级导航栏, 比如仓库的导航栏, 仓库列表的导航栏, 探索的类型导航栏 */
  .ui.secondary.pointing.menu {
    .overflow-menu-items {
      gap: 4px;
      .item {
        padding: 5px 8px !important;
        margin-block-start: 0.5rem;
        margin-block-end: 0.5rem;
        margin-bottom: 0.5rem !important;
      }
    }
    .item {
      font-weight: 400; /* 二级导航栏不需要加粗 */
    }
    .active.item,
    .dropdown.item,
    .link.item,
    a.item {
      border-radius: ${otherThemeVars.border.radius};
      color: ${themeVars.color.text.self};
      svg {
        margin-right: 8px;
      }
    }
    .active.item {
      /* 取消激活时的下划线, 需要为透明, 保持间距 */
      border-color: #ffffff00;
      /* 模仿 github 的下划线 */
      span:after {
        content: "";
        background: ${themeVars.github.underlineNav.borderColor.active};
        border-radius: ${otherThemeVars.border.radius};
        bottom: calc(50% - 1.8rem);
        height: 2px;
        position: absolute;
        right: 50%;
        transform: translate(50%, -50%);
        width: 100%;
        z-index: 1;
      }
    }
  }
  /* 修复仓库页面下的二级导航栏的下划线因浏览器 BUG 导致显示的异常问题(导致下划线和分割线重叠变粗) */
  .page-content.repository .ui.secondary.pointing.menu {
    border-bottom: none !important;
  }
`;
