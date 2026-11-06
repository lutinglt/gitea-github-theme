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

import { css, cssCombine, customThemeVars, otherThemeVars, themeVars } from "@lutinglt/gitea-github-theme/core";
import { underlineNavActiveItemAfterStyle } from "@lutinglt/gitea-github-theme/styles/common";

/** 克隆按钮 */
const cloneButton = css`
  .ui.ui.ui.compact.primary.button[data-global-init="initRepoClonePanel"] {
    padding: 0 12px;
  }
`;

/** 克隆按钮的弹窗 */
const clonePanel = css`
  .tippy-box {
    .clone-panel-popup {
      /*标题和克隆地址 */
      > .clone-panel-field {
        margin-left: 16px;
        margin-right: 16px;
        /* 标题 */
        &:first-of-type {
          font-weight: 600;
          margin-top: 16px;
        }
      }
      /* 按钮组 */
      .clone-panel-tab {
        display: flex;
        gap: 8px;
        margin-left: 16px;
        /* 按钮 */
        .item {
          color: ${themeVars.color.text.self};
          font-weight: 400;
          padding: 6px 8px;
          margin: 8px 0;
          &:hover {
            background: ${themeVars.github.control.transparent.bgColor.hover};
            box-shadow: inset 0 0 0 1px ${themeVars.github.control.transparent.borderColor.active};
            border-radius: ${otherThemeVars.border.radius};
          }
          &.active {
            font-weight: 600;
            &:after {
              ${underlineNavActiveItemAfterStyle}
            }
          }
        }
        .item.active {
          border-bottom: 0;
          position: relative;
        }
      }
      /* 克隆地址 */
      .ui.input.action {
        > input {
          border: 1px solid ${themeVars.color.light.border};
          border-radius: ${otherThemeVars.border.radius};
          font-family: var(--fontStack-monospace, ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, monospace);
          min-width: 150px;
          max-width: 400px;
          width: ${customThemeVars.cloneMenuWidth};
          &:hover {
            border: 1px solid ${themeVars.color.light.border};
            border-radius: ${otherThemeVars.border.radius};
          }
          &:focus,
          &:focus-visible {
            border-color: ${themeVars.github.borderColor.accent.emphasis};
          }
        }
        .ui.ui.ui.button {
          background-color: unset;
          border: unset;
          border-radius: ${otherThemeVars.border.radius};
          color: ${themeVars.color.text.light.num1};
          padding: 0;
          width: 32px;
          height: 32px;
          margin-left: 5px;
          &:hover {
            background-color: ${themeVars.github.control.transparent.bgColor.hover};
            box-shadow: inset 0 0 0 1px ${themeVars.github.control.transparent.borderColor.active};
          }
          svg {
            width: 16px;
            height: 16px;
          }
        }
      }
      /* 面板操作列表之间的分割线 */
      .divider {
        margin: 0;
      }
      /* 面板操作列表 */
      .clone-panel-list {
        margin: 8px;
        .item {
          border-radius: ${otherThemeVars.border.radius};
          padding: 6px 8px;
          height: 32px;
          margin: 0;
          gap: 4px;
          svg {
            color: ${themeVars.color.text.light.num1} !important; /* 覆盖 .gitea-vscodium 颜色 */
            margin-right: 4px;
          }
        }
        > .item {
          &:hover {
            color: ${themeVars.color.text.self};
            text-decoration: none;
            background: ${themeVars.github.control.transparent.bgColor.hover};
            box-shadow: inset 0 0 0 1px ${themeVars.github.control.transparent.borderColor.active};
            &:active {
              background: ${themeVars.github.control.transparent.bgColor.active};
            }
          }
        }
      }
    }
  }
`;

export default cssCombine(cloneButton, clonePanel);
