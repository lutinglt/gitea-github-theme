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

export const repoFileLastCommit = css`
  /* 仓库页和文件列表文件夹页的最后一次提交 */
  .repository.file.list #repo-files-table .gitea-github-theme-templates.repo-file-line.repo-file-last-commit {
    padding-right: 10px;
    /* 提交时间 */
    .gitea-github-theme-latest-time {
      color: ${themeVars.color.text.light.num1};
      font-size: 12px;
    }
    /* 提交历史按钮 */
    .gitea-github-theme-latest-commit {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      border-radius: ${otherThemeVars.border.radius};
      padding: 0px 8px;
      min-height: 28px;
      height: 28px;
      font-size: 12px;
      font-weight: 500;
      &:hover {
        background-color: ${themeVars.github.control.transparent.bgColor.hover};
        box-shadow: inset 0 0 0 1px ${themeVars.github.control.transparent.borderColor.active};
        color: inherit;
        text-decoration-line: none;
      }
      svg {
        color: ${themeVars.github.button.invisible.iconColor.rest};
      }
    }
  }
`;
