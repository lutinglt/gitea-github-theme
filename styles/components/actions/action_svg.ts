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

// 修改 action 页面 svg 颜色 (主要为了覆盖工作流状态中的白色图标)
export const actionSVG = css`
  .page-content.repository.actions,
  .action-view-header,
  .action-view-body {
    svg {
      color: ${themeVars.color.text.light.num1};
      &.tw-text-text,
      &.tw-text-text-light {
        color: ${themeVars.color.text.light.num1} !important;
      }
    }
  }
`;
