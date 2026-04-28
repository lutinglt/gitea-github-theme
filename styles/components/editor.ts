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

export const monaco = css`
  .monaco-editor {
    --vscode-editor-background: ${themeVars.color.body} !important;
    --vscode-editorGutter-background: ${themeVars.color.body} !important;
    // 滚动时固定在顶部的行
    .sticky-widget {
      background: ${themeVars.color.body} !important;
      box-shadow: 0 1px 0 ${themeVars.color.secondary.self} !important;
      width: 100% !important;
    }
  }
`;
