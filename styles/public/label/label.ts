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

import { css, themeVars } from "@gitea-github-theme/core";
import { labelStyle } from "@gitea-github-theme/styles/common";

export const label = css`
  .ui.label {
    border: 1px solid ${themeVars.github.counter.borderColor};
  }
  /* 所有标签, 但不包括 a 标签 */
  /* a 标签比如仓库点星等按钮旁边的数字标签按钮,提交图中的 tag 标签 */
  div.label,
  span.label,
  /* 包含多个标签的元素, 比如 Issue/PR 详情页中的时间线上的标签 */
  span.labels-list a.label {
    &.ui.ui.ui {
      border-radius: 9999px;
      ${labelStyle}
      line-height: 18px;
      &.mini {
        line-height: 16px;
      }
      /* 多个标签的组合标签的圆角修复 */
      &.scope-parent {
        .scope-left {
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
        }
        .scope-middle {
          border-radius: 0;
        }
        .scope-right {
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
        }
      }
    }
  }
  div,
  span {
    &.ui.ui.ui.label {
      /* 主色调标签 */
      &.primary {
        background-color: unset;
        border: 1px solid ${themeVars.color.primary.self};
        color: ${themeVars.color.primary.self};
      }
      /* 红色标签 */
      &.red {
        background-color: unset;
        border: 1px solid ${themeVars.github.borderColor.done.emphasis};
        color: ${themeVars.color.purple.self};
      }
      /* 橙色标签 */
      &.orange {
        background-color: unset;
        border: 1px solid ${themeVars.github.borderColor.attention.emphasis};
        color: ${themeVars.color.yellow.self};
      }
      /* 黄色标签 */
      &.yellow {
        background-color: unset;
        border: 1px solid ${themeVars.github.borderColor.attention.emphasis};
        color: ${themeVars.color.orange.self};
      }
      /* 黄绿色标签 */
      &.olive {
        background-color: unset;
        border: 1px solid ${themeVars.color.olive.self};
        color: ${themeVars.color.olive.self};
      }
      /* 绿色标签 */
      &.green {
        background-color: unset;
        border: 1px solid ${themeVars.github.borderColor.success.emphasis};
        color: ${themeVars.color.green.self};
      }
      /* 紫色标签 */
      &.purple {
        background-color: unset;
        border: 1px solid ${themeVars.github.borderColor.done.emphasis};
        color: ${themeVars.color.purple.self};
      }
    }
  }
  .ui.small.label {
    font-size: 12px;
  }
  .ui.mini.label {
    font-size: 10px;
  }
`;
