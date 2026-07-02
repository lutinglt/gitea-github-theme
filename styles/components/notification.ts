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

// 用户订阅/关注页面
const notification = css`
  .page-content.user.notification {
    > .ui.container {
      > .ui.attached.segment {
        border: 0;
        padding: 0;
        > .divider {
          display: none;
        }
        /* 订阅列表 */
        &:has(#issue-list) {
          > .flex-left-right {
            align-items: center;
            align-content: center;
            background-color: ${themeVars.color.box.header};
            border: 1px solid ${themeVars.color.light.border};
            border-bottom: 0;
            border-top-left-radius: ${otherThemeVars.border.radius};
            border-top-right-radius: ${otherThemeVars.border.radius};
            height: 52px;
            padding: 8px;
            /* 左侧菜单 */
            > .tw-flex:first-child > .ui.compact.menu {
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
            /* 右侧菜单 */
            > .ui.secondary.menu:last-child {
              align-items: center;
              > .item {
                color: ${themeVars.color.text.light.num1};
              }
              > .ui.button {
                padding: 0 12px;
                height: 32px;
              }
            }
          }
        }
        /* 关注列表 */
        > .items-with-main:not([id]) {
          border: 1px solid ${themeVars.color.light.border};
          border-radius: ${otherThemeVars.border.radius};
          > .item {
            padding: 16px;
            > .item-main {
              gap: 4px;
              > .item-header {
                > .item-title {
                  gap: 12px;
                }
                > .item-trailing {
                  color: ${themeVars.color.text.light.num1};
                  font-size: 12px;
                  font-weight: 400;
                  gap: 16px;
                  .color-icon {
                    width: 12px;
                    height: 12px;
                    margin-right: 0 !important;
                  }
                }
              }
              > .item-body:last-child {
                font-size: 12px;
              }
            }
          }
        }
      }
      /* 通知列表 */
      &:has(#notification_table) {
        > .flex-left-right:first-child {
          background-color: ${themeVars.color.box.header};
          border: 1px solid ${themeVars.color.light.border};
          border-bottom: 0;
          border-top-left-radius: ${otherThemeVars.border.radius};
          border-top-right-radius: ${otherThemeVars.border.radius};
          height: 52px;
          padding: 8px;
          margin-bottom: 0 !important;
          /* 左侧菜单 */
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
              .notifications-unread-count {
                margin-left: 4px;
              }
            }
          }
        }
        /* 通知全部确认按钮 */
        .ui.ui.ui.ui.mini.button {
          height: 32px;
        }
      }
      /* 通知列表 */
      #notification_table {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        color: ${themeVars.color.text.light.num1};
        > .notifications-item {
          border-top: 1px solid ${themeVars.color.light.border};
          padding: 12px !important;
          &:first-child {
            border-top: 0;
          }
          &:last-child {
            border-bottom-left-radius: ${otherThemeVars.border.radius};
            border-bottom-right-radius: ${otherThemeVars.border.radius};
            &:hover {
              border-bottom-left-radius: 0;
            }
          }
          &:hover {
            background: ${themeVars.github.bgColor.accent.muted};
            box-shadow: 2px 0 0 ${themeVars.github.borderColor.accent.emphasis} inset;
            color: ${themeVars.color.text.self};
          }
          > .tw-self-start:has(svg) {
            margin-top: 1px !important;
            line-height: 1;
          }
          > .notifications-link > div {
            &:first-child {
              font-size: 12px !important;
            }
            &:last-child {
              font-size: 14px !important;
            }
          }
          > .notifications-updated {
            font-size: 12px;
          }
          > .notifications-buttons {
            .interact-bg {
              background: ${themeVars.github.bgColor.accent.muted} !important;
              color: ${themeVars.color.text.light.num1};
              padding: 8px !important;
              &:hover {
                background: ${themeVars.github.control.transparent.bgColor.hover} !important;
                color: ${themeVars.color.text.self};
              }
            }
          }
        }
      }
    }
  }
`;

export default cssCombine(notification);
