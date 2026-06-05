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

import { css, cssCombine } from "@lutinglt/gitea-github-theme/core";

// 简单的渐变过渡
const transition = css`
  /* 差异对比的代码折叠按钮 */
  .code-expander-button,
  /* 仓库 README 头部的按钮 */
  .file-header-left,
  .file-header-right,
  /* 仪表板仓库列表 */
  .ui.attached.segment.table ul li,
  /* Issue 列表 */
  .issue-list-toolbar .item,
  .flex-list#issue-list > .flex-item,
  /* 分页菜单 */
  .ui.borderless.pagination.menu .item,
  /* 迁移的元素 */
  #navbar .item,
  .header-wrapper .ui.tabular.menu .item,
  .job-step-summary,
  .job-step-logs,
  .job-brief-item,
  .repo-file-cell,
  .tippy-box .flex-items-block .item,
  .clone-panel-tab .item,
  .ui.form select,
  .ui.label,
  .ui.modal,
  .ui.checkbox label:before,
  .ui.checkbox input:checked ~ label:before,
  .ui.checkbox input:not([type="radio"]):indeterminate ~ label:before,
  .ui.selection.dropdown,
  .ui.selection.active.dropdown,
  .ui.selection.active.dropdown:hover,
  .ui.selection.active.dropdown .menu,
  .ui.selection.active.dropdown:hover .menu,
  .ui.vertical.menu .header.item,
  .ui.secondary.menu .item {
    transition: 80ms cubic-bezier(0.33, 1, 0.68, 1);
  }
  /* Gitea 表单元素原始过渡覆盖 */
  /* 排除复选框和单选框 */
  input:not([type="checkbox"], [type="radio"]),
  textarea,
  tr,
  .ui.input textarea,
  .ui.form textarea,
  .ui.form input:not([type]),
  .ui.form input[type="date"],
  .ui.form input[type="datetime-local"],
  .ui.form input[type="email"],
  .ui.form input[type="number"],
  .ui.form input[type="password"],
  .ui.form input[type="search"],
  .ui.form input[type="tel"],
  .ui.form input[type="time"],
  .ui.form input[type="text"],
  .ui.form input[type="file"],
  .ui.form input[type="url"] {
    transition: 80ms cubic-bezier(0.33, 1, 0.68, 1);
  }
  .ui.button {
    transition:
      color 80ms cubic-bezier(0.65, 0, 0.35, 1),
      fill 80ms cubic-bezier(0.65, 0, 0.35, 1),
      background-color 80ms cubic-bezier(0.65, 0, 0.35, 1),
      box-shadow 80ms cubic-bezier(0.65, 0, 0.35, 1),
      /* 位移慢一点, 这样视觉上与颜色变化同步 */ transform 200ms cubic-bezier(0.65, 0, 0.35, 1),
      border-color 80ms cubic-bezier(0.65, 0, 0.35, 1);
    transition-duration: 80ms;
    /* 避免在下拉菜单中点击按钮时出现的抖动 */
    &:active:not(:has(.menu:active)) {
      transform: translateY(1px);
    }
    /* 下拉图标的过渡会导致在下移过程中出现的菜单被短暂遮挡 */
    &.dropdown {
      z-index: 999;
    }
    .button:active {
      transform: none;
    }
  }
`;

export default cssCombine(transition);
