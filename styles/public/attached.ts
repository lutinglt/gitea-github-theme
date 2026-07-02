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

const attached = css`
  /* 设置右面板的内容 */
  .user-main-content,
  .repo-setting-content,
  .user-setting-content,
  .org-setting-content,
  .admin-setting-content,
  /* 仓库动态页面 */
  /* 新建页面内容 */
  .page-content.repository.new-repo,
  .page-content.repository.new.migrate,
  .page-content.repository.new.fork,
  .page-content.organization.new.org {
    .ui.top.attached.header {
      border: 0;
      font-size: 20px;
      font-weight: 400;
      background-color: unset !important;
      margin-bottom: 0.25rem;
      padding-left: 0;
      padding-right: 0;
      > .ui.right {
        right: 0;
      }
    }
    .ui.attached.segment {
      background-color: unset;
      border-top-left-radius: ${otherThemeVars.border.radius} !important;
      border-top-right-radius: ${otherThemeVars.border.radius} !important;
      border-bottom-left-radius: 0 !important;
      border-bottom-right-radius: 0 !important;
      border: 1px solid ${themeVars.color.light.border} !important;
      + .ui.attached.segment {
        border-top-width: 0 !important;
        border-top-left-radius: 0 !important;
        border-top-right-radius: 0 !important;
      }
      /* 隐藏的元素下面的元素, 目前仅适用于在后台控制中的自我检查 */
      &.tw-hidden + .ui.attached.segment {
        border-top-width: 1px !important;
        border-top-left-radius: ${otherThemeVars.border.radius} !important;
        border-top-right-radius: ${otherThemeVars.border.radius} !important;
      }
      /* 元素和元素之间有隐藏的元素 */
      &:has(+ .tw-hidden) + .ui.attached.segment + .ui.attached.segment {
        border-top-width: 0 !important;
        border-top-left-radius: 0 !important;
        border-top-right-radius: 0 !important;
      }
      &:has(+ :not(.ui.attached.segment)),
      &:last-child {
        border-bottom-left-radius: ${otherThemeVars.border.radius} !important;
        border-bottom-right-radius: ${otherThemeVars.border.radius} !important;
      }
    }
    .ui.attached.segment.error {
      border: 1px solid ${themeVars.color.error.border} !important;
    }
  }
`;

// 仓库活动页面下的边框线修复
const fixActivity = css`
  .page-content.repository.commits .flex-container-main:has(.ui.header.activity-header) {
    > .ui.attached.segment {
      border-radius: 0;
      &:has(+ :not(.ui.attached.segment)) {
        border-bottom-left-radius: ${otherThemeVars.border.radius};
        border-bottom-right-radius: ${otherThemeVars.border.radius};
      }
      &:only-of-type {
        border-radius: ${otherThemeVars.border.radius};
      }
    }
  }
`;

export default cssCombine(attached, fixActivity);
