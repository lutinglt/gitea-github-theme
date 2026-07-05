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
import { botLabelStyle, deleteHoverActiveStyle } from "@lutinglt/gitea-github-theme/styles/common";

// 评论
const comment = css`
  .comment .comment-container {
    img.ui.avatar {
      border-radius: 9999px;
    }
    /* 去除评论标题左侧指向头像的小箭头 */
    .comment-header,
    &:target .comment-header {
      &:before,
      &:after {
        display: none;
      }
    }
    /* 评论焦点样式 */
    &:target {
      .comment-container {
        border-color: ${themeVars.github.borderColor.accent.emphasis} !important;
        box-shadow: 0 0 0 1px ${themeVars.color.primary.self} !important;
      }
    }
    .comment-header {
      padding: 4px 4px 4px 16px;
      min-height: 38px;
      .comment-header-left {
        /* bot 标签 */
        .ui.basic.label {
          ${botLabelStyle}
        }
        a:has(relative-time) {
          text-decoration: underline;
        }
        /* 已编辑按钮 */
        .content-history-menu {
          color: ${themeVars.color.text.light.num1} !important;
          .menu .item {
            font-size: 12px;
            .ui.avatar {
              height: 20px;
              width: 20px;
            }
          }
        }
      }
    }
    .comment-header-right {
      > .item,
      > .label {
        color: ${themeVars.color.text.light.num1};
      }
      > .ui.label {
        background-color: initial;
        font-size: 12px;
        height: 20px;
        padding: 0 6px;
      }
      .context-dropdown {
        height: 28px;
        padding: 0 6px;
        border-radius: ${otherThemeVars.border.radius};
        &:hover {
          background-color: ${themeVars.github.control.transparent.bgColor.hover};
          box-shadow: inset 0 0 0 1px ${themeVars.github.control.transparent.borderColor.active};
        }
        &:active {
          background-color: ${themeVars.github.control.transparent.bgColor.active};
          box-shadow: inset 0 0 0 1px ${themeVars.github.control.transparent.borderColor.active};
        }
        a.context-menu {
          display: flex;
          align-items: center;
          &:hover {
            color: inherit;
          }
        }
        /* 评论菜单的删除按钮 */
        .menu .item.delete-comment {
          color: ${themeVars.color.red.self};
          ${deleteHoverActiveStyle}
        }
      }
    }
    /* 表情菜单按钮头部+底部 */
    .ui.dropdown.action.select-reaction > a {
      display: flex;
      align-items: center;
      justify-content: center;
      background: ${themeVars.color.button};
      border-radius: 9999px;
      border: 1px solid ${themeVars.color.light.border};
      color: ${themeVars.color.text.light.num1};
      padding: 0px 8px !important;
      height: 28px;
      width: 28px;
    }
    /* 底部表情栏 */
    .bottom-reactions {
      .ui.ui.ui.label {
        background-color: unset !important;
        border-radius: 9999px;
        border-color: ${themeVars.color.light.border};
        &:hover {
          background-color: ${themeVars.color.reaction.hoverBg} !important;
          border-color: ${themeVars.color.light.border};
        }
        .reaction {
          font-size: 12px;
        }
        .reaction-count {
          color: ${themeVars.color.text.light.self};
          font-weight: 500;
          margin-left: 0;
        }
      }
      /* 显示表情菜单按钮 */
      .select-reaction {
        padding: 0;
        /* 两个表情按钮看着怪怪的, 很难受 */
        /* visibility: visible; */
      }
    }
  }
`;

// 评论书写框
const commentForm = css`
  .repository .comment.form .content .segment {
    &::before,
    &::after {
      display: none;
    }
  }
`;

// PR 界面的 PR 操作评论
const prMerge = css`
  .repository.view.issue .comment-list .timeline-item.pull-merge-box {
    /* 头像 */
    .timeline-avatar {
      border-radius: 9999px;
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${themeVars.github.button.primary.fgColor.rest} !important;
      border-radius: ${otherThemeVars.border.radius};
      /* 操作评论边框 */
      + .content > .ui.segment {
        border-width: 1.5px;
      }
      svg {
        width: 24px;
        height: 24px;
      }
      &.tw-text-text-light {
        background-color: ${themeVars.color.text.light.num1};
      }
      &.tw-text-green {
        background-color: ${themeVars.github.bgColor.success.emphasis};
        + .content > .ui.segment {
          border-color: ${themeVars.github.bgColor.success.emphasis};
        }
      }
      &.tw-text-purple {
        background-color: ${themeVars.github.bgColor.done.emphasis};
        + .content > .ui.segment {
          border-color: ${themeVars.github.bgColor.done.emphasis};
        }
      }
      &.tw-text-yellow {
        background-color: ${themeVars.github.bgColor.attention.emphasis};
        + .content > .ui.segment {
          border-color: ${themeVars.github.bgColor.attention.emphasis};
        }
      }
      &.tw-text-red {
        background-color: ${themeVars.github.bgColor.danger.emphasis};
        + .content > .ui.segment {
          border-color: ${themeVars.github.bgColor.danger.emphasis};
        }
      }
    }
    .avatar-content-left-arrow {
      &::before,
      &::after {
        display: none;
      }
      /* 合并信息和操作 */
      .merge-section {
        /* 检查状态 */
        .item.commit-status-toggle {
          padding: 16px;
          font-size: 16px;
          font-weight: 600;
          .btn {
            color: ${themeVars.color.text.light.num1} !important;
            font-size: 14px;
            font-weight: 400;
          }
        }
        .item {
          /* 覆盖 Gitea 的样式 */
          + .item {
            border-top: 0;
          }
          &:has(+ .item) {
            border-bottom: 1px solid ${themeVars.color.light.border};
          }
          /* 检查状态列表 */
          .commit-status-list {
            background: ${themeVars.color.console.bg};
            padding: 0 8px;
            .commit-status-item {
              padding: 0;
              margin: 0px 16px;
              height: 37px;
              &:hover {
                background-color: ${themeVars.color.hover.opaque};
                border-radius: ${otherThemeVars.border.radius};
                padding-left: 14px;
                padding-right: 14px;
                margin-left: 2px;
                margin-right: 2px;
              }
              &:first-child {
                margin-top: 8px;
              }
              &:last-child {
                margin-bottom: 8px;
              }
              .gt-ellipsis span {
                font-size: 12px;
                margin-left: 4px;
              }
              a {
                color: ${themeVars.color.text.light.num1};
                &:hover {
                  color: ${themeVars.color.primary.self};
                }
              }
            }
          }
        }
      }
    }
  }
`;
export default cssCombine(comment, commentForm, prMerge);
