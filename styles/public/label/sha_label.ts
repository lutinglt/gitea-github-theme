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

// 提交中的 SHA 标签
export const shaLabel = css`
  a.ui.label.sha,
  a.ui.label.commit-id-short {
    border: unset;
    background-color: unset;
    color: ${themeVars.color.text.light.num1};
    font-size: 12px;
    font-weight: 500;
    // 仪表盘页的提交 SHA 标签居中对齐
    margin-top: 2px;
    &:hover {
      background-color: ${themeVars.color.label.hoverBg};
    }
    // 验证提交 SHA 标签
    &.commit-is-signed {
      border: unset !important;
      background-color: unset !important;
      &:hover {
        background-color: ${themeVars.color.label.hoverBg} !important;
      }
      span.ui.label.commit-is-signed {
        margin-left: 5px;
        height: 25px;
      }
      img.ui.avatar {
        border-radius: 9999px;
      }
    }
  }
  // 修复带验证的提交 SHA 标签的高度
  .ui.label.commit-id-short {
    height: 25px;
  }
  // 验证提交附带的图标
  span.ui.label.commit-is-signed {
    height: 25px;
    min-width: 35px;
    justify-content: center;
    // 验证信任
    &.sign-trusted {
      border: 1.5px solid ${themeVars.color.green.badge.self} !important;
      color: ${themeVars.color.green.badge.self} !important;
      &:hover {
        background-color: ${themeVars.color.green.badge.hover.bg} !important;
      }
    }
    // 验证未信任
    &.sign-untrusted {
      border: 1.5px solid ${themeVars.color.yellow.badge.self} !important;
      color: ${themeVars.color.yellow.badge.self} !important;
      &:hover {
        background-color: ${themeVars.color.yellow.badge.hover.bg} !important;
      }
    }
    // 验证未匹配
    &.sign-unmatched {
      border: 1.5px solid ${themeVars.color.orange.badge.self} !important;
      color: ${themeVars.color.orange.badge.self} !important;
      &:hover {
        background-color: ${themeVars.color.orange.badge.hover.bg} !important;
      }
    }
    // 验证警告
    &.sign-warning {
      border: 1.5px solid ${themeVars.color.red.badge.self} !important;
      color: ${themeVars.color.red.badge.self} !important;
      &:hover {
        background-color: ${themeVars.color.red.badge.hover.bg} !important;
      }
    }
    span {
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
  }
  span.ui.label.commit-is-signed,
  .ui.label.commit-id-short,
  .ui.label.commit-sign-badge {
    font-size: 12px;
    .ui.avatar {
      border-radius: 9999px;
    }
  }
`;
