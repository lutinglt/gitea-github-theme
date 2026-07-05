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

// 工作流详情页标题
const actionViewHeader = css`
  .action-view-header.action-view-header {
    margin: 16px 0;
    .action-info-summary {
      .ui.basic.button {
        font-size: 14px;
      }
      .ui.dropdown.compact.button {
        z-index: 3; /* 避免被遮挡, 比 ActionViewLeft 的 z-index 高 */
        > .menu > .item {
          align-items: start;
        }
      }
    }
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
        border-color: #0000;
        > a {
          font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace;
          font-weight: 400;
          opacity: 1;
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
`;

// 工作流左侧作业列表
const actionViewLeft = css`
  .action-view-left.action-view-left.action-view-left {
    margin-right: 28px;
    min-width: 224px;
    max-width: 18vw;
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

const actionViewLeftMobile = css`
  @media (max-width: 767.98px) {
    .action-view-left.action-view-left.action-view-left {
      max-width: none;
    }
  }
`;
// 工作流顶部作业输出的总结信息
const actionViewJobSummary = css`
  .action-view-right.action-view-right {
    gap: 16px;
    .action-view-right-panel.job-summary-section {
      overflow: visible;
      .job-summary-section-header {
        display: none;
      }
      /* 作业输出总结列表 */
      .job-summary-list {
        padding: 0;
        gap: 16px;
        .job-summary-item {
          padding: 0;
          background: ${themeVars.color.body};
          box-shadow: ${themeVars.github.shadow.resting.small};
          border: 1px solid ${themeVars.color.light.border};
          border-radius: ${otherThemeVars.border.radius};
          /* 作业名称 */
          .job-summary-header {
            background: ${themeVars.color.box.header};
            border-top-left-radius: ${otherThemeVars.border.radius};
            border-top-right-radius: ${otherThemeVars.border.radius};
            border-bottom: 1px solid ${themeVars.color.light.border};
            padding: 12px 20px;
            margin-bottom: 0;
            font-size: 16px;
            font-weight: 600;
            &::after {
              content: "summary";
              font-size: inherit;
              font-weight: inherit;
              display: inline;
              margin-left: 4px;
            }
          }
          /* 作业输出总结内容 */
          .job-summary-body {
            padding: 16px 20px;
          }
        }
      }
    }
  }
`;

export default cssCombine(actionViewHeader, actionViewLeft, actionViewLeftMobile, actionViewJobSummary);
