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

// 工作流详情页标题
export const actionViewHeader = css`
  .action-view-header {
    .action-commit-summary {
      /* yml 文件名 */
      > span:first-child {
        color: ${themeVars.github.fgColor.accent};
        b {
          font-weight: 400;
        }
      }
      a:hover {
        text-decoration: inherit;
      }
      /* 提交哈希 */
      > a.muted:first-of-type {
        text-decoration: underline;
      }
      /* 提交作者 */
      > a.muted:last-of-type {
        font-weight: 600;
      }
      /* 分支标签按钮 */
      .ui.ui.ui.label {
        background-color: ${themeVars.github.bgColor.accent.muted};
        border-radius: ${otherThemeVars.border.radius};
        color: ${themeVars.github.fgColor.accent};
        > a {
          font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace;
          font-weight: 400;
          opacity: 1;
        }
      }
    }
  }
`;

// 工作流左侧作业列表
export const actionViewLeft = css`
  .action-view-left.action-view-left.action-view-left {
    margin-right: 28px;
    max-width: 22vw;
    .left-list-header {
      font-size: 12px;
      font-weight: 600;
      margin-left: 0.5rem;
    }
    /* 双重确保覆盖原始样式 */
    .job-brief-item.job-brief-item {
      border-radius: ${otherThemeVars.border.radius} !important;
      padding: 8px;
      position: relative;
      margin-left: 0.5rem;
      &:hover {
        background-color: ${themeVars.color.console.hoverBg};
      }
      &.selected {
        &:after {
          overflow: visible;
          background: ${themeVars.github.borderColor.accent.emphasis};
          border-radius: ${otherThemeVars.border.radius};
          content: "";
          height: 24px;
          left: calc(0.5rem * -1);
          position: absolute;
          top: calc(50% - 12px);
          width: 4px;
        }
      }
      /* 状态图标 */
      a > span:first-child {
        display: flex;
        align-items: center;
      }
      /* 默认隐藏重新运行按钮 */
      a > svg.link-action {
        display: none;
        color: ${themeVars.color.console.fg.subtle} !important;
        &:hover {
          color: ${themeVars.color.text.self} !important;
        }
      }
      /* 运行时长 */
      a > span:last-child {
        color: ${themeVars.color.console.fg.subtle};
        font-size: 12px;
      }
      /* 鼠标移入时显示重新运行按钮 */
      &:hover a > svg.link-action {
        display: inline-block;
      }
    }
    /* Run Details 列表 */
    .ui.relaxed.list:last-of-type {
      padding: 0;
      .item {
        border-radius: ${otherThemeVars.border.radius} !important;
        padding: 8px;
        &:hover {
          background-color: ${themeVars.color.console.hoverBg};
        }
        a {
          color: inherit;
          &:hover {
            text-decoration: none;
          }
        }
      }
    }
  }
`;

export const actionViewLeftMobile = css`
  @media (max-width: 767.98px) {
    .action-view-left.action-view-left.action-view-left {
      max-width: none;
    }
  }
`;
