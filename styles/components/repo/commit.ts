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
import { otherThemeVars, themeVars } from "src";

// 提交列表
export const commit = css`
  .page-content.repository.commits {
    /* 提交列表 (选择器保证同等优先级覆盖了 gitea 原生的样式) */
    .ui.attached.table.segment.commit-table tbody.commit-list {
      /* 作者 */
      .author {
        img.ui.avatar {
          border-radius: 9999px;
        }
        /* 作者名称 */
        .author-wrapper {
          display: flex;
          color: ${themeVars.color.text.light.num1};
        }
      }
      /* SHA 标签 */
      .sha {
        a.ui.label.commit-id-short {
          padding: 2px 8px;
          height: 28px;
          margin-top: 0.375rem;
          margin-bottom: 0.375rem;
          margin-left: -8px;
        }
      }
      /* 提交信息 */
      .message {
        /* tag 标签 */
        a.ui.basic.label {
          border-radius: 9999px;
          border-width: 1.5px;
          padding: 3px 8px !important;
          margin-left: 4px;
        }
      }
      /* 提交信息右侧 */
      .tw-text-right {
        relative-time,
        svg {
          color: ${themeVars.color.text.light.num1};
        }
      }
      tr {
        /* 整行悬停色 */
        &:hover {
          background-color: ${themeVars.color.hover.opaque};
        }
        /* 偶数行悬停色 */
        &:nth-child(2n):hover {
          background-color: ${themeVars.color.hover.opaque} !important;
        }
        /* 尾行圆角 */
        &:last-child {
          td:first-child {
            border-bottom-left-radius: ${otherThemeVars.border.radius};
          }
          td:last-child {
            border-bottom-right-radius: ${otherThemeVars.border.radius};
          }
        }
      }
    }
  }
`;

export const commitStatus = css`
  .flex-text-inline[data-global-init="initCommitStatuses"] {
    padding: 3px;
    margin-top: 2px;
    border-radius: ${otherThemeVars.border.radius};
    &:hover {
      background-color: ${themeVars.github.control.transparent.bgColor.hover};
    }
    svg {
      width: 16px;
      height: 16px;
      min-width: 16px;
      min-height: 16px;
    }
  }
`;

// 提交图
export const commitGraph = css`
  .page-content.repository #git-graph-container {
    img.ui.avatar {
      border-radius: 9999px;
    }
    /* 提交图的 SHA 标签 */
    li .ui.label.commit-id-short {
      height: 25px;
      /* 验证提交 SHA 标签 */
      &.commit-is-signed {
        span.ui.label.commit-is-signed {
          height: 25px;
        }
      }
    }
  }
`;
