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

import { extractVarName } from "src/functions";
import { css, otherThemeVars, themeVars } from "src/types/vars";

// 工单&PR 列表
export const issueList = css`
  // 仓库页面的里程碑列表菜单栏
  .page-content.repository.milestones,
  .page-content.repository.milestone-issue-list,
  .page-content.repository.issue-list {
    ${extractVarName(otherThemeVars.checkbox.size)}: 16px;
    // 头部筛选菜单栏
    .issue-list-toolbar {
      align-items: center;
      align-content: center;
      background-color: ${themeVars.color.box.header};
      border: 1px solid ${themeVars.color.light.border};
      border-bottom: 0;
      border-top-left-radius: ${otherThemeVars.border.radius};
      border-top-right-radius: ${otherThemeVars.border.radius};
      height: 48px;
      padding: 8px;
      margin-top: 16px;
      .issue-list-toolbar-left {
        // 复选框
        input {
          margin: 0 8px !important;
        }
        > .ui.compact.menu {
          align-items: center;
          border: 0;
          > .item {
            background: unset !important;
            border-radius: ${otherThemeVars.border.radius};
            color: ${themeVars.color.text.light.num1};
            padding: 0px 8px;
            height: 30px;
            &:before {
              display: none;
            }
            &:hover {
              background: ${themeVars.github.control.transparent.bgColor.hover} !important;
            }
            &.active {
              color: ${themeVars.color.text.self};
              font-weight: 700;
            }
          }
        }
      }
      .issue-list-toolbar-right > .ui.menu {
        align-items: center;
        > .item {
          color: ${themeVars.color.text.light.num1};
        }
        > .ui.button {
          padding: 0 12px;
          height: 32px;
        }
      }
      img.ui.avatar {
        border-radius: 9999px;
      }
      &#issue-actions {
        .issue-list-toolbar-right > .ui.menu > .item {
          padding: 0 12px;
          height: 32px;
          background: ${themeVars.color.button};
          border: 1px solid ${themeVars.color.light.border};
          color: ${themeVars.color.text.self};
          &:hover {
            background: ${themeVars.color.hover.self};
          }
        }
      }
    }
  }
  // 里程碑详细页面的 Issue 列表
  .page-content.repository.milestone-issue-list,
  // 顶部仪表板的 Issue 列表
  .page-content.dashboard.issues,
  // 用户订阅的 Issue 列表
  .page-content.user.notification,
  // 仓库 Issue 列表
  .page-content.repository.issue-list {
    .flex-list#issue-list {
      border: 1px solid ${themeVars.color.light.border};
      border-bottom-left-radius: ${otherThemeVars.border.radius};
      border-bottom-right-radius: ${otherThemeVars.border.radius};
      img.ui.avatar {
        border-radius: 9999px;
      }
      > .flex-item {
        align-items: center;
        padding: 0;
        min-height: 64px;
        &:last-child {
          border-bottom-left-radius: ${otherThemeVars.border.radius};
          border-bottom-right-radius: ${otherThemeVars.border.radius};
        }
        &:hover {
          background-color: ${themeVars.color.hover.opaque};
        }
        &:has(:checked) {
          background-color: ${themeVars.github.bgColor.accent.muted};
        }
        > .flex-item-leading {
          align-self: flex-start;
          margin-top: 14px;
          margin-left: 16px;
          > .flex-text-inline {
            margin-top: 0px !important;
            // 复选框
            input {
              margin-right: 8px !important;
            }
          }
        }
        > .flex-item-main {
          gap: 4px;
          .flex-item-header {
            padding-top: 8px;
          }
          .flex-item-body {
            font-size: 12px;
            padding-bottom: 8px;
          }
        }
        > .flex-item-trailing {
          margin-right: 32px;
        }
      }
    }
  }
  // 里程碑列表
  // [TODO] 暂时排除项目的列表
  .page-content.repository.milestones:not(.projects) .milestone-list {
    border: 1px solid ${themeVars.color.light.border};
    border-bottom-left-radius: ${otherThemeVars.border.radius};
    border-bottom-right-radius: ${otherThemeVars.border.radius};
    .milestone-card {
      padding: 8px 16px 10px 16px;
      .milestone-header {
        h3 {
          font-size: 16px;
          font-weight: 500;
        }
        div span {
          font-size: 14px;
          font-weight: 600;
        }
      }
    }
    .milestone-toolbar {
      font-size: 12px;
      .group > a {
        font-size: 13px;
      }
    }
  }
`;

// 避免手机/平板下菜单错位
export const issueListMobile = css`
  @media (max-width: 1023.98px) {
    .page-content.repository.milestones,
    .page-content.repository.milestone-issue-list,
    .page-content.repository.issue-list {
      .issue-list-toolbar {
        height: auto;
      }
    }
  }
`;

// 置顶 Issue
export const issuePins = css`
  #issue-pins {
    gap: 12px;
    margin-bottom: 16px;
    .issue-card {
      padding: 16px 12px;
      .content {
        .issue-card-title {
          font-size: 16px;
          font-weight: 600;
        }
        svg {
          color: ${themeVars.color.text.light.num1};
          height: 100%;
          margin-right: 3px;
        }
        .meta {
          font-size: 12px;
          padding-top: 4px;
        }
      }
      .issue-card-bottom {
        display: none;
      }
    }
    img.ui.avatar {
      border-radius: 9999px;
    }
  }
`;
