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

import { css, cssCombine, otherThemeVars, themeVars } from "@lutinglt/gitea-github-theme/core";

// 分页菜单
const paginationMenu = css`
  .ui.borderless.pagination.menu {
    align-items: center;
    background-color: unset;
    border: 0;
    gap: 4px;
    min-height: fit-content;
    .item.item {
      border-radius: ${otherThemeVars.border.radius};
      min-width: 32px;
      min-height: 32px;
      height: 32px;
      justify-content: center;
      /* 避免一些 hover 效果调整内容 */
      padding: 5px 10px !important;
      &.active {
        background: ${themeVars.github.bgColor.accent.emphasis};
        color: ${themeVars.github.button.primary.fgColor.rest};
      }
      /* 设置透明边框线避免 hover 时元素大小变化 */
      &:not(.active) {
        border: 1px solid #ffffff00;
        &:hover {
          background: unset;
          border-color: ${themeVars.color.secondary.self};
        }
      }
      &.navigation {
        &:not(.disabled) {
          span,
          svg {
            color: ${themeVars.color.primary.self};
          }
        }
        /* 对齐文字 */
        svg {
          margin-top: 2px;
        }
      }
    }
  }
`;

export default cssCombine(paginationMenu);
