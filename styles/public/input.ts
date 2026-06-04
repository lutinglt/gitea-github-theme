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

import { css, otherThemeVars, themeVars } from "@lutinglt/gitea-github-theme/core";

export const input = css`
  textarea,
  /* 排除复选框和单选框 */
  input:not([type=checkbox],[type=radio]),
  .ui.input input:not([type=checkbox],[type=radio]),
  /* 排除可以选择的输入搜索框 */
  .ui.form input:not([type]):not(.search),
  .ui.form select,
  .ui.form textarea,
  .ui.form input[type="date"],
  .ui.form input[type="datetime-local"],
  .ui.form input[type="email"],
  .ui.form input[type="file"],
  .ui.form input[type="number"],
  .ui.form input[type="password"],
  .ui.form input[type="search"],
  .ui.form input[type="tel"],
  .ui.form input[type="text"],
  .ui.form input[type="time"],
  .ui.form input[type="url"] {
    box-shadow: ${themeVars.github.shadow.inset};
    border-radius: ${otherThemeVars.border.radius};
    padding: 8px 12px;
    &:focus,
    &:focus-visible {
      background: ${themeVars.color.body};
      border-color: ${themeVars.github.borderColor.accent.emphasis};
      /* 向内部添加一个 1px 的边框 */
      box-shadow: inset 0 0 0 1px ${themeVars.github.borderColor.accent.emphasis};
      outline: none;
    }
  }
  .ui.input {
    height: 32px;
  }
  /* 由于输入框高度, 需要输入框在表单中垂直居中 */
  /* 管理员页面仓库搜索表单 */
  .ui.form#repo-search-form {
    align-items: center;
  }
  /* 下拉菜单的输入框 */
  .ui.dropdown.dropdown .menu > .input {
    margin: 12px 10px;
  }
`;
// 复选框和单选框
export const checkBoxAndRadio = css`
  /* 复选框 */
  input[type="checkbox"],
  .ui.checkbox input[type="checkbox"] {
    background-color: ${themeVars.color.body};
    border-color: ${themeVars.github.borderColor.emphasis};
    &:checked,
    &:indeterminate {
      background-color: ${themeVars.github.bgColor.accent.emphasis};
      border-color: ${themeVars.github.bgColor.accent.emphasis};
    }
    &::before {
      background-color: ${themeVars.github.fgColor.onEmphasis};
    }
  }
  /* 单选框 */
  input[type="radio"],
  .ui.checkbox input[type="radio"] {
    background-color: ${themeVars.color.body};
    border-color: ${themeVars.github.borderColor.emphasis};
    &:checked {
      background-color: ${themeVars.github.fgColor.onEmphasis};
      border-color: ${themeVars.github.bgColor.accent.emphasis};
    }
  }
`;
