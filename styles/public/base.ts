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

const body = css`
  body {
    line-height: 1.5;
  }
  a {
    text-underline-offset: 0.2rem; /* 0.2rem 可以始终保持下划线不受 overflow: hidden 的影响 */
  }
  /* 默认代码块 */
  code:not(.code-inner) {
    padding: 0.2em 0.4em;
  }
  /* 快捷键提示(输入框内) */
  kbd {
    background-color: #0000;
    font-size: 12px;
    box-shadow: none;
    padding: 4px;
    min-width: 20px;
    line-height: 10px;
  }
`;

export default cssCombine(body);
