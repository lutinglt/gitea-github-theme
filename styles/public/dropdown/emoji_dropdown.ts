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
import { css } from "@linaria/core";

// 包含表情的下拉菜单
export const emojiDropdown = css`
  .ui.dropdown.action.select-reaction.active .menu:has(.emoji) {
    display: flex !important;
    flex-direction: row;
    gap: 4px;
    padding: 4px;
    min-width: auto;
    > .item.emoji {
      font-size: 14px;
      min-height: 32px;
      height: 32px;
      margin: 0px;
      &:hover {
        background-color: ${themeVars.github.bgColor.accent.emphasis} !important;
      }
    }
  }
`;
