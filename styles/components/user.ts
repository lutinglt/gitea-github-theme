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

import { css, themeVars } from "src/types/vars";

// 用户点星仓库列表
export const stars = css`
  .page-content.user.profile {
    .stars {
      > .flex-list {
        > .flex-item {
          padding: 24px 0;
          &:first-child {
            padding-top: 14px;
          }
          // 仓库头像
          > .flex-item-leading {
            img,
            svg {
              color: ${themeVars.color.text.light.num1};
            }
          }
          // 仓库信息
          > .flex-item-main {
            // 仓库标题
            > .flex-item-header {
              // 仓库名称
              > .flex-item-title {
                font-size: 20px;
                gap: 8px;
                // 仓库中间的间隔线
                &:not(a) {
                  color: ${themeVars.color.primary.self};
                }
              }
              // 仓库语言, 星标
              > .flex-item-trailing {
                color: ${themeVars.color.text.light.num1};
                gap: 16px;
                font-size: 12px;
                > .flex-text-inline .color-icon {
                  width: 12px;
                  height: 12px;
                  margin-right: 0 !important;
                }
              }
            }
            // 描述和更新时间
            > .flex-item-body {
              margin-top: 10px;
              // 更新时间
              &:last-child {
                font-size: 12px;
              }
            }
            // 主题标签
            > .label-list {
              margin-top: 10px;
            }
          }
        }
      }
    }
  }
`;

// 用户信息卡片
export const profileCard = css`
  .page-content.user.profile {
    #profile-avatar-card {
      #profile-avatar {
        img.ui.avatar {
          border-radius: 9999px;
        }
      }
    }
  }
`;
