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
import { fallbackVar } from "@vanilla-extract/css";
import { customThemeVars, otherThemeVars, themeVars } from "src";

export const navbarRight = css`
  #navbar {
    padding: 8px 16px; /* 上下内边距 + .navbar-left & .navbar-right 的 min-height = 64px */
    min-height: 64px;
    .navbar-left,
    .navbar-right {
      min-height: 48px;
    }
    .navbar-left {
      gap: 8px;
      > .item {
        padding: 4px 8px;
        min-height: 20px;
        &.active {
          font-weight: 600;
        }
        &#navbar-logo {
          /* 与下方的用户切换头像对齐 */
          padding-left: 6px;
          &:hover {
            background: unset;
          }
          img {
            height: 32px;
            width: 32px;
          }
        }
      }
    }
    /* 进入用户页面后, 避免注册, 登录和首页等意外覆盖 */
    .navbar-right:has(.user-menu) {
      gap: 8px;
      /* 右侧按钮, 但不包括头像 */
      > .item:not(:last-child) {
        align-items: center;
        justify-content: center;
        gap: 4px;
        border: 1px solid ${themeVars.color.light.border};
        border-radius: ${otherThemeVars.border.radius};
        padding: 0;
        height: 32px;
        min-width: 32px;
        min-height: 32px;
        /* 纠正内容保证居中 */
        .tw-relative {
          height: 16px;
          width: 16px;
        }
        .svg {
          color: ${themeVars.color.text.light.num1};
        }
        /* 带下拉菜单的按钮 */
        &.ui.dropdown {
          padding: 0 8px;
          .text {
            display: grid;
            grid-auto-flow: column;
            align-items: center;
            > svg {
              margin-right: 4px;
            }
            /* 三角号纠正高度保持居中 */
            .not-mobile {
              height: 16px;
            }
          }
          &:hover {
            background-color: ${themeVars.color.nav.hoverBg};
          }
        }
      }
      .item.ui.dropdown {
        /* 头像菜单 */
        &:last-child {
          padding: 0;
          .text {
            /* 不显示头像右侧的小箭头下拉菜单标识 */
            > .not-mobile {
              display: none;
            }
            /* 手机下的用户名 */
            > .only-mobile {
              margin-left: 12px;
              font-weight: 600;
            }
            .navbar-avatar {
              /* 头像 */
              img {
                border-radius: 9999px;
                height: 32px;
                max-height: 32px;
                width: 32px;
                max-width: 32px;
                margin: 0 !important;
              }
              /* 管理员标识 */
              .navbar-admin-badge {
                height: 18px;
                min-width: 18px;
                bottom: calc(100% - 32px);
                left: calc(100% - 11px);
                padding: 2px;
                border-color: ${themeVars.color.nav.bg}; /* 锁定边框色, 避免鼠标悬浮时改变颜色 */
              }
            }
          }
          &.active {
            background: unset;
          }
        }
      }
      /* 通知和计时器的圆点 */
      a.item {
        .notification_count,
        .header-stopwatch-dot {
          background-color: ${themeVars.github.bgColor.accent.emphasis};
          border-radius: 9999px;
          border-color: ${themeVars.color.nav.bg};
          color: ${themeVars.color.white};
          font-size: 9px;
          font-weight: 600;
          top: -15px;
          left: 11px;
        }
      }
    }
    /* 用户菜单 */
    .navbar-right .user-menu {
      width: ${fallbackVar(customThemeVars.userMenuWidth, "192px")};
      max-width: 320px;
      > .header {
        font-size: 14px;
        font-weight: 400;
        margin: 0;
        padding: 16px 16px 8px 16px;
        strong {
          font-weight: 600;
        }
      }
      > .divider {
        margin: 8px;
        width: calc(100% - 16px);
      }
    }
  }
  /* 手机下的导航栏 */
  @media (max-width: 767.98px) {
    #navbar {
      &.navbar-menu-open {
        gap: 8px;
      }
      .navbar-mobile-right {
        gap: 8px;
        > .item {
          align-items: center;
          justify-content: center;
          border: 1px solid ${themeVars.color.light.border};
          border-radius: ${otherThemeVars.border.radius};
          padding: 0;
          height: 32px;
          min-width: 32px;
          min-height: 32px;
          /* 纠正内容保证居中 */
          .tw-relative {
            height: 16px;
            width: 16px;
          }
          .svg {
            margin: 0;
          }
        }
      }
    }
  }
`;

// 二级导航栏
export const secondaryNav = css`
  .page-content > :first-child.secondary-nav {
    margin-bottom: 16px;
    /* 仪表板界面的二级导航栏用户菜单 */
    > .ui.secondary.stackable.menu {
      gap: 0px;
      min-height: 48px;
      > .item {
        /* 修复手机下的菜单按钮没有居中的问题 */
        margin-top: auto;
        margin-bottom: auto;
        > .ui.dropdown > .text {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          svg {
            margin-right: 4px;
          }
        }
      }
      > .right.menu {
        gap: 4px;
      }
    }
  }
`;
