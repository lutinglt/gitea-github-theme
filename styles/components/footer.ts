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

export const footer = css`
  .page-footer {
    background-color: ${themeVars.color.body};
    border-top: 0;
    color: ${themeVars.color.text.light.num1};
    font-size: 12px;
    gap: 32px;
    justify-content: center;
    padding: 16px 0 40px 0;
    > .left-links {
      gap: 4px;
      a {
        color: ${themeVars.color.text.light.num1};
        &:hover {
          color: ${themeVars.color.primary.self};
        }
      }
      strong {
        font-weight: 400;
      }
    }
    > .right-links {
      gap: 16px;
      > .ui.dropdown {
        font-size: 12px;
        &:hover {
          color: ${themeVars.color.primary.self};
        }
        > .flex-text-inline {
          gap: 4px;
        }
      }
      > a {
        border-left: 0;
        color: ${themeVars.color.text.light.num1};
        padding-left: 0;
        margin-left: 0;
        &:hover {
          color: ${themeVars.color.primary.self};
        }
      }
      // 主题按钮&菜单项
      .ui.dropdown .theme-menu-item {
        gap: 4px;
      }
      // 主题菜单
      .menu.theme-menu > .item > .theme-menu-item {
        padding: 0;
      }
    }
  }
`;
