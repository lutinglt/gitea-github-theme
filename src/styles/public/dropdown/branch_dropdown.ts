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

import { css, cssCombine, customThemeVars, otherThemeVars, themeVars } from "@lutinglt/gitea-github-theme/core";
import { animationDown, underlineNavActiveItemAfterStyle } from "@lutinglt/gitea-github-theme/styles/common";
import { fallbackVar } from "@vanilla-extract/css";

// 分支菜单
const branchDropdown = css`
  .ui.dropdown.branch-selector-dropdown > .menu {
    width: ${fallbackVar(customThemeVars.branchMenuWidth, "320px")};
    max-width: 640px;
    > .menu > .item {
      ${animationDown};
      height: 32px;
    }
    /* 分支/标签切换 */
    > .branch-tag-tab {
      > .branch-tag-item {
        border: 0;
        border-radius: ${otherThemeVars.border.radius};
        font-weight: 400;
        padding: 6px 8px;
        height: 32px;
        margin-bottom: 8px;
        position: relative;
        svg {
          display: none;
        }
        &.active {
          font-weight: 600;
          &:after {
            ${underlineNavActiveItemAfterStyle}
          }
        }
        &:hover {
          background: ${themeVars.github.control.transparent.bgColor.hover};
          box-shadow: inset 0 0 0 1px ${themeVars.github.control.transparent.borderColor.active};
        }
      }
    }
    /* 分支/标签切换下的分割线 */
    .branch-tag-divider {
      margin-top: 0 !important;
    }
  }
`;

// 手机页面下的分支菜单
const branchDropdownMobile = css`
  @media (max-width: 767.98px) {
    /* 修复手机下分支菜单宽度过宽 */
    .ui.dropdown.branch-selector-dropdown > .menu {
      width: auto;
    }
  }
`;

export default cssCombine(branchDropdown, branchDropdownMobile);
