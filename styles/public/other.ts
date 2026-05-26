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

import { otherThemeVars, themeVars } from "@gitea-github-theme/core";
import { css } from "@linaria/core";

export const text = css`
  /* 默认颜色是 --color-text-light, 主题下此颜色是亮白色, 修改为灰色 */
  /* release 页面下一些描述信息的文本颜色 */
  .tw-text-text-light {
    color: ${themeVars.color.text.light.num1} !important;
  }
`;
// 一些列表头, 比如工单的搜索标签里程碑栏
export const listHeader = css`
  .list-header {
    align-items: center;
    align-content: center;
  }
`;

export const svg = css`
  /* 已标星的图标 */
  .octicon-star-fill {
    color: ${themeVars.github.button.star.iconColor} !important;
  }
  /* VSCode 图标 */
  .gitea-vscode {
    color: #007acc !important;
  }
  /* VSCodium 图标 */
  .gitea-vscodium {
    color: #429cf0 !important;
  }
  /* 重新打开工单按钮设置为绿色 */
  .tw-text-green {
    .octicon-issue-reopened,
    &.octicon-issue-reopened {
      color: ${themeVars.github.fgColor.success} !important;
    }
  }
  /* 关闭工单按钮设置为紫色 */
  .tw-text-red {
    .octicon-issue-closed,
    &.octicon-issue-closed {
      color: ${themeVars.github.fgColor.done} !important;
    }
  }
`;
// 头像
export const avatar = css`
  img.ui.avatar,
  .ui.avatar img,
  .ui.avatar svg {
    background-color: ${themeVars.github.avatar.bgColor};
    box-shadow: 0 0 0 1px ${themeVars.github.avatar.borderColor};
  }
`;
// 切换按钮
export const toggle = css`
  .ui.toggle.checkbox {
    label {
      &:before {
        border-radius: ${otherThemeVars.border.radius};
        border: 1px solid ${themeVars.color.light.border};
        height: 24px;
        width: 44px;
      }
      &:after {
        background: ${themeVars.color.input.background};
        border-radius: ${otherThemeVars.border.radius};
        border: 1px solid ${themeVars.color.light.border};
        height: 21px;
        width: 23px;
        top: 1.5px;
        bottom: 1.5px;
      }
    }
    /* 滑块在左 */
    input ~ label:after {
      left: 1.5px;
    }
    /* 滑块在右 */
    input:checked ~ label:after {
      left: 19.5px;
    }
  }
`;
