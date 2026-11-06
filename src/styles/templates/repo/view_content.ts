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

const repoButtonRow = css`
  .gitea-github-theme-templates {
    /* 仓库按钮行 */
    &.repo-button-row {
      margin: 0 0 16px 0;
      .repo-button-row-left .repository-summary {
        /* 分支/标签样式 */
        > .item {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          border-radius: ${otherThemeVars.border.radius};
          color: ${themeVars.color.text.light.num1};
          padding: 4px;
          height: 32px;
          min-height: 32px;
          &:hover {
            background-color: ${themeVars.github.control.transparent.bgColor.hover};
            box-shadow: inset 0 0 0 1px ${themeVars.github.control.transparent.borderColor.active};
            text-decoration-line: none;
          }
          svg {
            color: ${themeVars.github.button.invisible.iconColor.rest};
            margin-right: 4px;
          }
          b {
            color: ${themeVars.color.caret};
          }
        }
      }
    }
  }
`;

export default cssCombine(repoButtonRow);
