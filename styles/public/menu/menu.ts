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

import { css, cssCombine, themeVars } from "@lutinglt/gitea-github-theme/core";
import { labelStyle } from "@lutinglt/gitea-github-theme/styles/common";

const menu = css`
  .ui.menu {
    min-height: 32px;
    .item {
      line-height: 21px;
    }
  }
  .menu .item svg {
    color: ${themeVars.color.text.light.num1};
  }
  /* 菜单默认悬浮色更改 */
  .ui.menu a.item,
  .ui.secondary.pointing.menu a.item,
  .ui.secondary.menu .dropdown.item {
    &:hover {
      background: ${themeVars.github.control.transparent.bgColor.hover};
      box-shadow: inset 0 0 0 1px ${themeVars.github.control.transparent.borderColor.active};
    }
  }
  /* 一些水平小型菜单的颜色更改 */
  .small-menu-items .item {
    background-color: ${themeVars.color.body} !important;
    &:hover {
      background: ${themeVars.github.control.transparent.bgColor.hover} !important;
    }
  }
  /* 一些菜单的悬浮色更改 */
  .ui.segment .ui.tabular.menu,
  .header-wrapper .ui.tabular.menu,
  .ui.secondary.pointing.menu {
    .item,
    .active.item {
      &:hover {
        background: ${themeVars.github.control.transparent.bgColor.hover};
      }
    }
  }
  /* 菜单标签样式 */
  .ui.menu .item > .label:not(.floating) {
    ${labelStyle}
  }
`;

export default cssCombine(menu);
