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

const summaryView = css`
  .action-view-right:has(.action-run-summary-view) {
    min-height: auto;
  }
  .action-view-right:has(.action-run-summary-view) {
    .action-view-right-panel {
      background: unset;
      box-shadow: none;
      border: unset;
      .action-run-summary-view {
        > div {
          border: 1px solid ${themeVars.color.light.border};
          border-radius: ${otherThemeVars.border.radius};
          box-shadow: ${themeVars.github.shadow.resting.small};
          margin-bottom: 16px;
          &:last-child {
            margin-bottom: 0;
          }
        }
        /* 工作流运行信息 */
        .action-run-summary-block {
          background: ${themeVars.color.body};
          padding: 16px 20px;
          > div {
            gap: 4px;
          }
          /* 工作流触发信息 */
          > .action-run-summary-trigger {
            .action-run-summary-trigger-content {
              gap: 4px;
              /* 工作流触发者头像 */
              .action-run-summary-user .ui.avatar {
                border-radius: 9999px;
              }
              /* 工作流触发分支 */
              .action-run-summary-branch-label {
                background: ${themeVars.github.bgColor.accent.muted};
                color: ${themeVars.github.fgColor.accent};
                min-height: unset;
                line-height: unset;
              }
            }
          }
        }
        /* 流程图 */
        .workflow-graph {
          /* 流程图工作流信息标题 */
          .graph-header {
            border-top-left-radius: ${otherThemeVars.border.radius};
            border-top-right-radius: ${otherThemeVars.border.radius};
            padding: 16px 20px;
            /* 流程图信息 */
            .graph-stats {
              font-size: 12px;
            }
            /* 流程图操作按钮组 */
            .graph-controls {
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
                opacity: 1;
              }
              /* 高亮连线 */
              .highlighted-edge {
                stroke-width: 2.5px;
              }
              /* 高亮节点 */
              .job-node-group.related-node {
                filter: ${themeVars.github.shadow.resting.medium};
              }
              /* 统一节点上的端口 */
              .job-node-group,
              .highlighted-edge-layer {
                .node-port {
                  r: 5;
                  stroke: ${themeVars.color.menu};
                  stroke-width: 3px;
                }
              }
              .job-node-group {
                /* 节点 */
                .job-rect {
                  fill: ${themeVars.github.workflowCardBg};
                  stroke: ${themeVars.color.light.border};
                  stroke-width: 1px;
                }
                /* 节点上的端口 */
                .node-port {
                  fill: ${themeVars.github.bgColor.neutral.emphasis};
                }
                /* 节点上的步骤状态图标 */
                .job-row-main,
                /* 任务组节点 */
                .graph-list-row-main,
                /* 矩阵节点 */
                .matrix-panel-summary-row {
                  span {
                    display: inline-flex; /* 使图标垂直居中 */
                  }
                }
                /* 节点中的任务项 */
                .graph-list-row {
                  padding: 6px;
                  border-radius: ${otherThemeVars.border.radius};
                }
                .job-name,
                .graph-list-row-name {
                  font-size: 12px;
                }
                .grouped-panel,
                .matrix-panel {
                  padding: 6px 8px; /* 避免被端口遮挡 */
                }
                /* 矩阵节点 */
                .matrix-panel {
                  .matrix-panel-label {
                    font-size: 10px;
                    color: ${themeVars.color.text.self};
                    padding-left: 6px;
                  }
                  .matrix-panel-jobs {
                    padding: 6px 0 0 0;
                  }
                  .matrix-panel-collapsed {
                    padding: 10px 0 0 8px;
                    .matrix-panel-toggle {
                      padding-left: 0;
                      padding-top: 4px;
                    }
                  }
                }
              }
              /* 高亮连线 */
              .highlighted-edge-layer {
                /* 节点上的端口 */
                .node-port {
                  fill: ${themeVars.color.workflowEdgeHover};
                }
                /* 节点之间的连线 */
                .node-edge {
                  stroke: ${themeVars.color.workflowEdgeHover};
                }
              }
            }
            /* 流程图上有鼠标悬停时 */
            .graph-svg.has-hover {
              .job-node-group:not(.related-node) {
                opacity: 0.5;
                .job-rect {
                  fill: ${themeVars.color.console.bg};
                  stroke: ${themeVars.color.console.border};
                }
              }
              .node-edge:not(.highlighted-edge) {
                opacity: 0.5;
              }
            }
          }
        }
      }
    }
  }
`;

export default cssCombine(summaryView);
