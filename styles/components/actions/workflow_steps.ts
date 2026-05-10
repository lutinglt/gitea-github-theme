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

import { css } from "@linaria/core";
import { themeVars } from "src";
import { animationDown } from "styles/common";

// 工作流右侧作业步骤日志详情
export const actionViewRight = css`
  .action-view-right {
    box-shadow: ${themeVars.github.shadow.resting.small};
    /* 提前加载高度和滚动条 */
    min-height: calc(100vh - 245px);
    /* 作业详情页标题 */
    .job-info-header {
      padding: 16px 12px 16px 24px !important;
      height: 80px !important;
      .job-info-header-left {
        .job-info-header-title {
          color: ${themeVars.github.fgColor.accent} !important;
        }
        .job-info-header-detail {
          margin-top: 8px;
        }
      }
      .job-info-header-right {
        .ui.dropdown {
          > .button {
            background: unset;
            border: unset;
            padding: 7px !important;
            &:hover {
              background: ${themeVars.github.control.transparent.bgColor.hover};
            }
          }
          .menu > .item > i.icon {
            margin-right: 2px;
          }
        }
      }
    }

    .job-step-container {
      padding: 8px;
      .job-step-section {
        margin: 0 4px 4px;
        /* 步骤标题, 双重确保覆盖原始样式 */
        .job-step-summary.job-step-summary {
          color: ${themeVars.color.console.fg.subtle};
          padding: 8px !important;
          height: 36px;

          &.selected {
            /* 滚动时固定在顶部的高度与 job-info-header 高度相同 */
            top: 80px;
          }

          &.step-expandable:hover {
            color: ${themeVars.color.console.fg.subtle};
          }

          .tw-mr-2:not(.svg) svg.svg {
            margin: 1.5px 6px 0px 2px;
          }
          /* 绿色步骤状态改为白色 */
          svg.tw-text-green {
            color: ${themeVars.color.console.fg.subtle} !important;
          }

          &.selected {
            /* 不被 hover 效果影响 */
            color: ${themeVars.color.console.fg.self} !important;
            background-color: ${themeVars.color.console.activeBg} !important;

            svg.tw-text-green {
              color: ${themeVars.color.console.fg.self} !important;
            }
          }
          /* 步骤耗时 */
          .step-summary-duration {
            font-size: 12px;
            font-family: var(--fonts-monospace);
          }
        }
        /* 步骤日志 */
        .job-step-logs {
          ${animationDown};
          /* 日志字体颜色白色 */
          .job-log-line {
            color: ${themeVars.color.console.fg.self};
            /* 日志 */
            .log-msg:hover {
              /*被 hover 时覆盖 ANSI 颜色 */
              * {
                color: ${themeVars.color.console.fg.self};
              }
              /* 日志超链接 */
              a:hover {
                color: ${themeVars.color.primary.self} !important;
              }
            }
          }
        }
      }
    }
  }
`;
