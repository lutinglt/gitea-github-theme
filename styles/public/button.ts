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

import { css, cssCombine, themeVars } from "@lutinglt/gitea-github-theme/core";
import {
  basicButtonStyle,
  primaryButtonHoverStyle,
  primaryButtonStyle,
} from "@lutinglt/gitea-github-theme/styles/common";

// 普通按钮和主色调按钮
const baseButton = css`
  .ui.button {
    min-height: 30px;
    font-weight: 500;
    padding: 9px 16px;
    &.ui {
      gap: 8px;
    }
  }
  .ui.button:not(.primary):not(.red) svg {
    color: ${themeVars.color.text.light.num1};
  }
  /* 主色调按钮 */
  .ui.primary {
    &.button,
    /* 按钮组, PR 里的压缩合并按钮 */
    &.buttons .button {
      ${primaryButtonStyle}
      &:hover {
        ${primaryButtonHoverStyle}
      }
      &:active {
        ${primaryButtonHoverStyle}
        background-color: ${themeVars.github.button.primary.bgColor.active};
      }
      svg {
        color: inherit;
      }
    }
    /* 按钮组整体有阴影 */
    &.buttons {
      box-shadow: ${themeVars.github.shadow.resting.small};
      .button {
        /* 按钮组里的按钮无阴影 */
        box-shadow: none;
      }
    }
  }
  /* 主色调基本按钮和普通按钮一样 */
  /* 作者的关注按钮 */
  .ui.basic.primary.button {
    ${basicButtonStyle}
  }
  /* 普通按钮边框色不变 */
  .ui.basic.button,
  /* 仓库点星等数字标签按钮边框色不变 */
  .ui.labeled.button > .label {
    &:hover {
      border-color: ${themeVars.color.light.border};
    }
  }

  /* 普通按钮激活时背景色 */
  .ui.button:active,
  .ui.basic.buttons .button:active,
  .ui.basic.button:active,
  .ui.basic.buttons .active.button,
  .ui.basic.active.button,
  .ui.basic.buttons .active.button:hover,
  .ui.basic.active.button:hover {
    background-color: ${themeVars.github.button.default.bgColor.active};
  }
`;
// 绿色按钮
const greenButton = css`
  .ui.green.button,
  .ui.green.buttons .button {
    /* 覆盖默认的白色, 避免 Catppuccin 类似的主题下对比度太低 */
    color: ${themeVars.github.button.primary.fgColor.rest};
    box-shadow: ${primaryButtonStyle.boxShadow};
  }
`;
// 红色按钮
const redButton = css`
  .ui.red.button,
  .ui.basic.red.buttons .button,
  .ui.basic.red.button {
    color: ${themeVars.github.button.danger.fgColor.rest};
    background-color: ${themeVars.github.button.danger.bgColor.rest};
    /* 一些按钮边框色为红色, 比如危险操作区, 统一为暗色边框和 github 一致 */
    border-color: ${themeVars.color.light.border};
    &:hover {
      color: ${themeVars.github.button.danger.fgColor.hover};
      background-color: ${themeVars.github.button.danger.bgColor.hover};
      border-color: ${themeVars.github.button.danger.borderColor.hover};
      box-shadow: ${themeVars.github.shadow.resting.small};
    }
    &:active {
      color: ${themeVars.github.button.danger.fgColor.hover};
      background-color: ${themeVars.github.button.danger.bgColor.active};
      border-color: ${themeVars.github.button.danger.borderColor.hover};
      box-shadow: ${themeVars.github.shadow.resting.small};
    }
  }
`;

// 修复按钮高度
const fixButtonHeight = css`
  /* 修复一些主色调或者其他小按钮的高度避免过高 */
  .ui.small.buttons .button,
  .ui.ui.ui.ui.small.button {
    min-height: 26px;
    height: 32px;
  }
  /* 修复仓库页仓库操作按钮高度对齐和修正 */
  .repo-button-row .ui.button {
    min-height: 32px;
    height: 32px;
  }
  /* 修复因上面小按钮高度导致仓库星标克隆等按钮高度过高 */
  .repo-header {
    .ui.ui.ui.ui.small.compact.button,
    .ui.labeled.button > .label {
      height: 28px;
      min-height: 28px;
      line-height: 1.5;
    }
  }
  .ui.ui.ui.ui.small.button.compact .ui.tiny.buttons .button,
  .ui.ui.ui.ui.tiny.button {
    min-height: 20px;
  }
`;

const fixButton = css`
  /* 修复关注&派生 hover 意外点亮右侧 label 左边框 */
  .ui.ui.ui.ui.small.button {
    z-index: 0;
  }
  /* 代码复制按钮 */
  .ui.button.code-copy {
    padding: 4px 6px;
    min-height: 28px;
  }
`;

export default cssCombine(baseButton, greenButton, redButton, fixButtonHeight, fixButton);
