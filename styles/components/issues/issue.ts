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
import { activeItemAfterStyle } from "@gitea-github-theme/styles/common";
import { css } from "@linaria/core";

export const button = css`
  /* 工单&PR标题右侧按钮 */
  .repository.view.issue .issue-title-buttons > .ui.button {
    padding: 0 12px;
    height: 32px;
  }
`;

export const babel = css`
  .issue-content-left {
    .badge {
      box-shadow: inset 0 0 0 1px ${themeVars.github.control.transparent.borderColor.active};
      /* 时间线打开状态标签 */
      &.tw-bg-green {
        background-color: ${themeVars.github.bgColor.success.emphasis} !important;
      }
      /* 时间线关闭状态标签 */
      &.tw-bg-red {
        background-color: ${themeVars.github.bgColor.done.emphasis} !important;
      }
      /* 时间线合并状态标签 */
      &.tw-bg-purple {
        background-color: ${themeVars.github.bgColor.done.emphasis} !important;
      }
    }
  }
  /* 工单&PR状态标签 */
  .ui.label.issue-state-label {
    border-radius: 25px !important;
    &.green {
      color: ${themeVars.color.white} !important;
      background-color: ${themeVars.github.bgColor.success.emphasis} !important;
      border-color: ${themeVars.github.bgColor.success.emphasis} !important;
      box-shadow: inset 0 0 0 1px ${themeVars.github.borderColor.success.emphasis};
    }
    &.red {
      color: ${themeVars.color.white} !important;
      background-color: ${themeVars.github.bgColor.done.emphasis} !important;
      border-color: ${themeVars.github.bgColor.done.emphasis} !important;
      box-shadow: inset 0 0 0 1px ${themeVars.github.borderColor.done.emphasis};
    }
    &.purple {
      color: ${themeVars.color.white} !important;
      background-color: ${themeVars.github.bgColor.done.emphasis} !important;
      border-color: ${themeVars.github.bgColor.done.emphasis} !important;
      box-shadow: inset 0 0 0 1px ${themeVars.github.borderColor.done.emphasis};
    }
  }
`;

// PR 分支标签
export const prBranch = css`
  .repository.view.issue .pull-desc code,
  #issue-list .flex-item-body .branches .branch {
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

export const dropdown = css`
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

// PR 界面的 PR 操作评论
export const prMerge = css`
  .repository.view.issue .comment-list .timeline-item.pull-merge-box {
    /* 头像 */
    .timeline-avatar {
      border-radius: 9999px;
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      svg {
        width: 24px;
        height: 24px;
      }
      /* PR 界面的 PR 操作评论 */
      &.text {
        color: ${themeVars.color.white} !important;
        border-radius: ${otherThemeVars.border.radius};
        /* 操作评论边框 */
        + .content > .ui.attached.segment {
          border-width: 1.5px;
        }
        &.grey {
          background-color: ${themeVars.color.text.light.num1};
        }
        &.green {
          background-color: ${themeVars.github.bgColor.success.emphasis};
          + .content > .ui.attached.segment {
            border-left-color: ${themeVars.github.bgColor.success.emphasis};
            border-right-color: ${themeVars.github.bgColor.success.emphasis};
            &:first-child {
              border-top-color: ${themeVars.github.bgColor.success.emphasis};
            }
            &:last-child {
              border-bottom-color: ${themeVars.github.bgColor.success.emphasis};
            }
          }
        }
        &.purple {
          background-color: ${themeVars.github.bgColor.done.emphasis};
          + .content > .ui.attached.segment {
            border-left-color: ${themeVars.github.bgColor.done.emphasis};
            border-right-color: ${themeVars.github.bgColor.done.emphasis};
            &:first-child {
              border-top-color: ${themeVars.github.bgColor.done.emphasis};
            }
            &:last-child {
              border-bottom-color: ${themeVars.github.bgColor.done.emphasis};
            }
          }
        }
        &.yellow {
          background-color: ${themeVars.github.bgColor.attention.emphasis};
          + .content > .ui.attached.segment {
            border-left-color: ${themeVars.github.bgColor.attention.emphasis};
            border-right-color: ${themeVars.github.bgColor.attention.emphasis};
            &:first-child {
              border-top-color: ${themeVars.github.bgColor.attention.emphasis};
            }
            &:last-child {
              border-bottom-color: ${themeVars.github.bgColor.attention.emphasis};
            }
          }
        }
        &.red {
          background-color: ${themeVars.github.bgColor.danger.emphasis};
          + .content > .ui.attached.segment {
            border-left-color: ${themeVars.github.bgColor.danger.emphasis};
            border-right-color: ${themeVars.github.bgColor.danger.emphasis};
            &:first-child {
              border-top-color: ${themeVars.github.bgColor.danger.emphasis};
            }
            &:last-child {
              border-bottom-color: ${themeVars.github.bgColor.danger.emphasis};
            }
          }
        }
      }
    }
    /* 检查状态 */
    .commit-status-panel {
      .commit-status-header {
        background: ${themeVars.color.body};
        padding: 16px;
        font-size: 16px;
        font-weight: 600;
        .ui.right {
          color: ${themeVars.color.text.light.num1};
          font-size: 14px;
          font-weight: 400;
        }
      }
      /* 检查状态列表 */
      .commit-status-list {
        background: ${themeVars.color.menu};
        .commit-status-item {
          border-radius: ${otherThemeVars.border.radius};
          padding: 2px 8px;
          margin: 0px 8px;
          height: 37px;
          &:first-child {
            margin-top: 8px;
          }
          &:last-child {
            margin-bottom: 8px;
          }
          &:hover {
            background-color: ${themeVars.color.hover.opaque};
          }
        }
      }
    }
    /* 合并信息和操作 */
    .merge-section {
      color: ${themeVars.color.text.light.num1};
      padding: 16px;
      display: grid;
      gap: 8px;
      &::before,
      &::after {
        display: none;
      }
    }
  }
`;

// 工单标题
export const issueTitle = css`
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
