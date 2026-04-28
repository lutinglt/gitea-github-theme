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

import { animationDown } from "src/core/styles";
import { css, themeVars } from "src/types/vars";

export const modal = css`
  .ui.modal {
    ${animationDown};
    border: 1.5px solid ${themeVars.color.light.border};

    > .header {
      background-color: ${themeVars.color.menu};
      border-bottom: 1.5px solid ${themeVars.color.light.border};
    }

    > .content,
    form > .content {
      background-color: ${themeVars.color.menu};
    }

    > .actions,
    .content + .actions,
    .content + form > .actions {
      background-color: ${themeVars.color.menu};
      border-top: 1.5px solid ${themeVars.color.light.border};
    }
    .actions > .ui.button {
      padding: 8px 12px;
    }
  }
`;
