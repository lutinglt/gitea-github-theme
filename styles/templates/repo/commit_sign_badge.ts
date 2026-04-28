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

import { css, otherThemeVars, themeVars } from "src/types/vars";

export const commitSignBadge = css`
  a.ui.label.commit-id-short.github-theme-commit-sha {
    gap: 8px;
    padding: unset;
    margin: unset;
    height: 26px;
    margin: 0 4px;
    &.commit-is-signed {
      &:hover {
        background-color: unset !important;
      }
      span.ui.label.commit-sign-badge.commit-is-signed {
        margin: unset;
      }
    }
    .github-theme-sha {
      border-radius: ${otherThemeVars.border.radius};
      font-family:
        -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji",
        "Segoe UI Emoji";
      font-weight: 500;
      padding: 0px 8px;
      height: 26px;
      min-width: 85px; // 非等宽字体导致不对齐, 目前看到最大长度为 83px
      display: flex;
      align-items: center;
      justify-content: center;
      &:hover {
        background-color: ${themeVars.color.hover.self};
      }
    }
  }
  .ui.label.commit-sign-badge.github-theme-commit-sign-badge {
    font-family:
      -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji",
      "Segoe UI Emoji";
    font-weight: 500;
  }
`;
