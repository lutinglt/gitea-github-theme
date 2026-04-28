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

// 仓库标签 (私有/公开/内部)
export const repoLabel = css`
  span,
  // 用户切换面板的标签
  .org-visibility div {
    &.ui.basic.label {
      background-color: unset;
      color: ${themeVars.color.text.light.num1};
      font-size: 12px;
      font-weight: 500;
    }
  }
`;
