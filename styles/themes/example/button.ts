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

import { css, cssCombine, cssStyle, themeVars } from "@lutinglt/gitea-github-theme/core";

const exampleStyle = cssStyle({
  backgroundColor: themeVars.color.body,
  color: themeVars.color.text.self,
  padding: 16,
  "&:hover": {
    backgroundColor: themeVars.color.hover.self,
  },
});

const exampleCSS1 = css`
  .ui.button {
    ${exampleStyle}
    font-size: 16px;
  }
`;

const exampleCSS2 = css`
  .ui.button {
    font-weight: 600;
  }
`;

export default cssCombine(exampleCSS1, exampleCSS2);
