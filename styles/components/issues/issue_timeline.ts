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

import { css, themeVars } from "@lutinglt/gitea-github-theme/core";
import { botLabelStyle } from "@lutinglt/gitea-github-theme/styles/common";

// 时间线
export const timeline = css`
  .repository.view.issue {
    .comment-list {
      /* 时间线本线 */
      .timeline::before {
        /* 不遮挡归档信息框, 归档信息框背景色有透明度时会漏出线 */
        height: calc(100% - 62px);
      }
      .timeline-item,
      .timeline-item-group {
        padding: 12px 0;
        .comment-text-line {
          color: ${themeVars.color.text.light.num1};
        }
        /* 事件 */
        &.event {
          /* 修复覆盖后的位置问题 */
          padding-left: 15px;
          /* 避免锚中批准的头像 */
          .avatar-with-link .avatar {
            width: 20px;
            height: 20px;
          }
          /* 批准时间的头像 */
          /* 头部居中偏移量(头像高度 - 标准行信息高度) / 2: (40px - 32px) / 2 = 4px */
          .timeline-avatar {
            top: -4px;
          }
          /* bot 标签 */
          .comment-text-line .ui.basic.label {
            ${botLabelStyle}
          }
          .badge {
            border: 2px solid ${themeVars.color.body};
          }
          /* 仅匹配只有 badge */
          [class="badge"] {
            background-color: ${themeVars.github.control.bgColor.rest};
            svg {
              color: ${themeVars.color.text.light.num1};
            }
          }
        }
        /* 提交 */
        &.commits-list {
          /* 每个提交之间的间隔 */
          .flex-text-block {
            padding-top: 4px;
          }
          .badge svg {
            color: ${themeVars.color.text.light.num1};
          }
          /* 仅覆盖左侧 commit 不覆盖右侧 SHA */
          a.muted {
            font-size: 12px;
            color: ${themeVars.color.text.light.num1};
            text-decoration-line: underline;
            &:hover {
              color: ${themeVars.color.primary.self};
            }
          }
        }
      }
    }
  }
`;
