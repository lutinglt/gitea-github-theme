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

import { css, cssCombine, themeVars } from "@lutinglt/gitea-github-theme/core";

const summaryView = css`
  .action-view-right:has(.action-run-summary-view) {
    min-height: auto;
  }
  .action-view-right .action-run-summary-view {
    /* 工作流运行信息 */
    .action-run-summary-block {
      background: ${themeVars.color.body};
      border-color: ${themeVars.color.console.border};
      > .flex-text-block {
        /* 工作流触发方式和触发时间 */
        &:first-child {
          font-size: 12px;
          gap: 4px;
        }
        /* 工作流运行状态和运行时间 */
        &:last-child {
          color: ${themeVars.color.console.fg.self};
          gap: 8px;
          span {
            font-weight: 600;
            line-height: 1;
          }
        }
      }
    }
    /* 流程图 */
    .workflow-graph {
      /* 流程图工作流信息标题 */
      .graph-header {
        background: ${themeVars.color.console.bg};
        border-bottom: 0;
        padding: 16px;
        gap: 16px;
        /* 流程图标题(目前仅为解释, 内容为 Workflow Dependencies), 无需显示 */
        .graph-title {
          display: none;
        }
        /* 流程图信息 */
        .graph-stats {
          align-self: flex-start;
          font-size: 12px;
          column-gap: 4px;
        }
        /* 流程图操作按钮组 */
        > .flex-text-block {
          gap: 8px;
          .ui.compact.tiny.button {
            width: 28px;
            height: 28px;
            min-height: 28px;
            padding: 0;
          }
        }
      }
      /* 流程图 */
      .graph-container {
        background: ${themeVars.color.console.bg};
        .graph-svg {
          /* 节点之间的连线 */
          .node-edge {
            stroke: ${themeVars.color.light.border};
            stroke-width: 2px;
          }
          /* 高亮连线 */
          .highlighted-edge {
            stroke-width: 3px !important;
          }
          &:has(.highlighted-edge) {
            /* 有高亮线时, 降低其他线的颜色, 避免后面 path 未高亮元素遮挡高亮线 */
            .node-edge {
              opacity: 0.3;
              &.highlighted-edge {
                opacity: 1;
              }
            }
          }
          .job-node-group {
            /* 节点 */
            .job-rect {
              fill: ${themeVars.github.workflowCardBg};
              stroke-width: 1px;
            }
            /* 节点上的端口 */
            .node-port {
              r: 5.5;
              fill: ${themeVars.github.bgColor.neutral.emphasis};
              stroke: ${themeVars.color.menu};
              stroke-width: 3px;
            }
            &:hover {
              filter: ${themeVars.github.shadow.resting.medium};
              /* 保留 Gitea 节点悬浮色, 因为无法实现 GitHub 悬浮时降低其他节点颜色 */
              .job-rect {
                fill: ${themeVars.color.hover.self};
              }
              /* 节点上的端口 */
              .node-port {
                fill: ${themeVars.color.workflowEdgeHover};
              }
            }
            /* 节点上的步骤状态图标 */
            .job-status-icon-wrap {
              span {
                line-height: 1; /* 使图标垂直居中 */
              }
            }
          }
        }
      }
    }
  }
`;

export default cssCombine(summaryView);
