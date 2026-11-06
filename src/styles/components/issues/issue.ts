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
import { activeItemAfterStyle } from "@lutinglt/gitea-github-theme/styles/common";

const button = css`
  /* 工单&PR标题右侧按钮 */
  .repository.view.issue .issue-title-buttons > .ui.button {
    padding: 0 12px;
    height: 32px;
  }
`;

const babel = css`
  .issue-content-left {
    .badge {
      box-shadow: inset 0 0 0 1px ${themeVars.github.control.transparent.borderColor.active};
      /* 时间线打开状态标签 */
      &.tw-bg-green {
        color: ${themeVars.github.button.primary.fgColor.rest} !important;
        background-color: ${themeVars.github.bgColor.success.emphasis} !important;
      }
      /* 时间线关闭状态标签 */
      &.tw-bg-red {
        color: ${themeVars.github.button.primary.fgColor.rest} !important;
        background-color: ${themeVars.github.bgColor.done.emphasis} !important;
      }
      /* 时间线合并状态标签 */
      &.tw-bg-purple {
        color: ${themeVars.github.button.primary.fgColor.rest} !important;
        background-color: ${themeVars.github.bgColor.done.emphasis} !important;
      }
    }
  }
  /* 工单&PR状态标签 */
  .ui.label.issue-state-label {
    border-radius: 25px !important;
    &.green {
      color: ${themeVars.github.button.primary.fgColor.rest} !important;
      background-color: ${themeVars.github.bgColor.success.emphasis} !important;
      border-color: ${themeVars.github.bgColor.success.emphasis} !important;
      box-shadow: inset 0 0 0 1px ${themeVars.github.borderColor.success.emphasis};
    }
    &.red {
      color: ${themeVars.github.button.primary.fgColor.rest} !important;
      background-color: ${themeVars.github.bgColor.done.emphasis} !important;
      border-color: ${themeVars.github.bgColor.done.emphasis} !important;
      box-shadow: inset 0 0 0 1px ${themeVars.github.borderColor.done.emphasis};
    }
    &.purple {
      color: ${themeVars.github.button.primary.fgColor.rest} !important;
      background-color: ${themeVars.github.bgColor.done.emphasis} !important;
      border-color: ${themeVars.github.bgColor.done.emphasis} !important;
      box-shadow: inset 0 0 0 1px ${themeVars.github.borderColor.done.emphasis};
    }
  }
`;

// PR 分支标签
const prBranch = css`
  .repository.view.issue .pull-desc code,
  #issue-list .branches .branch {
    color: ${themeVars.github.fgColor.accent};
    background-color: ${themeVars.github.bgColor.accent.muted};
    border-radius: ${otherThemeVars.border.radius};
    font-family: var(--fontStack-monospace, ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, monospace);
    font-size: 12px;
    padding: 0 5px;
    line-height: 18px;
  }

  .repository.view.issue .pull-desc code {
    padding-top: 3px;
    padding-bottom: 3px;
    a:hover {
      text-decoration-line: none;
    }
  }
`;

const dropdown = css`
  .repository {
    /* Issue/PR 列表下的所有筛选菜单 */
    &.issue-list .ui.dropdown .menu, .ui.menu .ui.dropdown .menu,
    /* Issue/PR 详情下的右侧的上半部分选项菜单 */
    &.issue.view .issue-content-right .ui.dropdown .scrolling.menu {
      .item:hover:after {
        ${activeItemAfterStyle}
      }
    }
  }
`;

// 工单标题
const issueTitle = css`
  .page-content.repository.issue {
    .issue-title-header {
      .issue-title-meta {
        .issue-state-label {
          padding: 6px 9px !important;
        }
        .time-desc {
          color: ${themeVars.color.text.light.num1};
        }
      }
    }
  }
`;

export default cssCombine(button, babel, prBranch, dropdown, issueTitle);
