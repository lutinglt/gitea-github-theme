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

export default cssCombine(comment, commentForm);
