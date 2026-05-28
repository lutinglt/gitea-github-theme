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

import { themeVars } from "@gitea-github-theme/core";
import { primaryButtonHoverStyle, primaryButtonStyle } from "@gitea-github-theme/styles/common";
import { css } from "@linaria/core";
import type { StyleRule } from "@vanilla-extract/css";

const tinyStyle = {
  color: themeVars.github.themeExtra.button.primary.fgColor.accent,
  backgroundColor: themeVars.color.button,
  borderColor: themeVars.color.light.border,
} satisfies StyleRule;

const tinyHoverStyle = {
  color: themeVars.github.button.primary.fgColor.rest,
  backgroundColor: themeVars.github.button.primary.bgColor.hover,
  borderColor: themeVars.github.button.primary.borderColor.hover,
} satisfies StyleRule;

// 设置界面下的按钮
export const button = css`
  /* 不包含管理员的设置界面 */
  .user-main-content,
  .repo-setting-content,
  .user-setting-content,
  .org-setting-content {
    /* 主色调按钮替换为普通按钮 */
    .ui.primary.button {
      color: ${themeVars.color.text.light.self};
      background-color: ${themeVars.color.button};
      border-color: ${themeVars.color.light.border};
      box-shadow: none;
      &:hover {
        background-color: ${themeVars.color.hover.self};
        color: ${themeVars.color.text.self};
        border-color: ${themeVars.color.light.border};
      }
      &:active {
        background-color: ${themeVars.github.button.default.bgColor.active};
        color: ${themeVars.color.text.self};
        border-color: ${themeVars.color.light.border};
      }
    }
    /* 迷你按钮替换为自定义的主色调按钮 (例: SSH 验证按钮) */
    .ui.primary.button.tiny {
      ${tinyStyle}
      &:hover {
        ${tinyHoverStyle}
      }
      &:active {
        background-color: ${themeVars.github.button.primary.bgColor.active};
      }
    }
  }
  /* 所有设置界面 */
  .user-main-content,
  .repo-setting-content,
  .user-setting-content,
  .org-setting-content,
  .admin-setting-content {
    /* 右上角迷你按钮替换会主色调按钮 */
    .ui.attached.header > .ui.right {
      .ui.primary.button.tiny {
        ${primaryButtonStyle}
        padding: 3px 12px;
        min-height: 20px;
        line-height: 20px;
        &:hover {
          ${primaryButtonHoverStyle}
        }
        &:active {
          background-color: ${themeVars.github.button.primary.bgColor.active};
        }
      }
    }
  }
  /* 管理员设置界面下的自定义主色调按钮 */
  .admin-setting-content {
    .ui.primary.button {
      ${tinyStyle}
      padding: 5px 16px;
      line-height: 22px;
      &:hover {
        ${tinyHoverStyle}
      }
      &:active {
        background-color: ${themeVars.github.button.primary.bgColor.active};
        /* 保持鼠标移开时边框颜色和文字颜色不变 */
        border-color: ${themeVars.github.button.primary.borderColor.hover};
        color: ${themeVars.github.button.primary.fgColor.rest};
      }
    }
    .ui.red.button {
      box-shadow: ${themeVars.github.shadow.resting.small};
      padding: 5px 16px;
      line-height: 22px;
    }
  }
`;

export const label = css`
  /* Runner 标签 */
  .runner-container {
    /* 普通标签, runner 状态: 离线, runner 标签 */
    .ui.label {
      border: 1px solid ${themeVars.color.light.border};
    }
  }
`;

// 修复组织设置界面的组织设置中多余的边框
export const fixOrgSetting = css`
  .page-content.organization.settings {
    .org-setting-content {
      border: 0;
    }
  }
`;
