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

import { css, customThemeVars, otherThemeVars, themeVars } from "@lutinglt/gitea-github-theme/core";
import { animationDown } from "@lutinglt/gitea-github-theme/styles/common";
import { fallbackVar } from "@vanilla-extract/css";

// 分支菜单
export const branchDropdown = css`
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

// 手机页面下的分支菜单
export const branchDropdownMobile = css`
  @media (max-width: 767.98px) {
    /* 修复手机下分支菜单宽度过宽 */
    .ui.dropdown.branch-selector-dropdown > .menu {
      width: auto;
    }
  }
`;
