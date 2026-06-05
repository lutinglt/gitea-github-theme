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

// 仓库 Actions 页面
const actions = css`
  /* 避免锚中设置界面里的 Actions */
  .page-content.repository.actions:not(.settings) .flex-container {
    /* Actions 列表 */
    .flex-container-nav:before {
      content: "Actions";
      display: block;
      font-size: 20px;
      font-weight: 600;
      margin-top: 6px;
      margin-bottom: 8px;
    }
    /* 工作流列表 */
    .flex-container-main {
      /* 工作流列表标题栏菜单 */
      .ui.top.attached.header {
        padding: 16px;
        &:has(+ .ui.info.attached.message) {
          border-bottom: 0;
        }
        .ui.secondary.menu > .ui.dropdown {
          color: ${themeVars.color.text.light.num1};
        }
      }
      /* 事件触发器 */
      .ui.info.attached.message {
        padding: 18px 16px;
        /* 事件触发器按钮 */
        .ui.mini.button {
          padding: 3px 12px;
          min-height: 27px;
          font-size: 12px;
        }
      }
      /* 工作流列表 */
      .ui.attached.segment {
        padding: 0;
        border: 0;
        .run-list {
          border: 1px solid ${themeVars.color.light.border};
          border-bottom-left-radius: ${otherThemeVars.border.radius};
          border-bottom-right-radius: ${otherThemeVars.border.radius};
          border-top: 0;
          font-size: 12px;

          /* 分支标签按钮 */
          .run-list-ref {
            background-color: ${themeVars.github.bgColor.accent.muted};
            border-color: #0000;
            color: ${themeVars.github.fgColor.accent};
            font-family: var(--fonts-monospace);
            font-weight: 400;
            padding: 0px 6px;
            &:hover {
              background-color: ${themeVars.github.bgColor.accent.muted};
              color: ${themeVars.github.fgColor.accent};
              text-decoration-line: underline !important;
            }
          }
          /* 标签右侧任务信息 */
          .run-list-item-right {
            color: ${themeVars.color.text.light.num1};
          }

          .flex-item {
            padding: 16px;
            line-height: 18px;
            .flex-item-leading {
              align-self: flex-start;
              margin-top: 2px;
            }
            .flex-item-main {
              gap: 0.5rem;
            }
            .flex-item-trailing {
              > .ui.label {
                border-radius: ${otherThemeVars.border.radius};
              }
              > .ui.dropdown.jump {
                border-radius: ${otherThemeVars.border.radius};
                color: ${themeVars.color.text.light.num1};
                &:hover {
                  background-color: ${themeVars.github.control.transparent.bgColor.hover};
                }
                .menu > .item {
                  font-size: 12px;
                  gap: 4px;
                  &:hover {
                    color: ${themeVars.color.text.self} !important;
                  }
                }
              }
            }
          }
        }
        /* 分页按钮, GitHub Gitea 修正, 不影响其他配色 */
        .center.page.buttons {
          background: ${themeVars.color.body};
        }
      }
    }
  }
`;

// 工作流禁用标签
const label = css`
  .page-content.repository.actions:not(.settings) .ui.vertical.menu .item > .ui.red.label {
    color: ${themeVars.color.error.text};
    border: 1px solid ${themeVars.color.error.border};
    background: ${themeVars.color.error.bg.self};
  }
`;

// 手动工作流
const runWorkflow = css`
  /* 手动工作流弹窗 */
  #runWorkflowDispatchModal {
    overflow: hidden;
  }
  /* 手动工作流下拉列表 */
  #runWorkflowDispatchForm {
    font-size: 12px;
    /* 描述类标签 */
    .ui.field label {
      font-weight: 600;
    }
    /* use workflow from 描述 */
    .ui.inline.field {
      > :first-child {
        margin-right: 8px;
      }
      > :only-child {
        margin-right: 0;
      }
    }
    /* 分支选择按钮 */
    .ui.dropdown.button.branch-selector-dropdown {
      padding: 3px 21px 3px 12px;
      min-height: 27px;
      gap: 4px;
      font-size: 12px;
      .text {
        line-height: 20px;
      }
    }
    #runWorkflowDispatchModalInputs {
      .ui.field > label {
        margin-bottom: 6px;
      }
      /* 运行工作流按钮 */
      .ui.tiny.button {
        padding: 0px 8px;
        min-height: 27px;
      }
    }
  }
`;

export default cssCombine(actions, label, runWorkflow);
