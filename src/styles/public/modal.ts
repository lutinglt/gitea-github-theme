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

import { css, cssCombine, themeVars } from "@lutinglt/gitea-github-theme/core";
import { animationDown } from "@lutinglt/gitea-github-theme/styles/common";

const modal = css`
  .ui.ui.modal {
    ${animationDown};
    border: 1.5px solid ${themeVars.color.light.border};
    border-radius: 12px;

    > :first-child:not(.icon):not(.dimmer) {
      border-top-left-radius: 12px;
      border-top-right-radius: 12px;
    }
    > :last-child:not(.icon):not(.dimmer) {
      border-bottom-left-radius: 12px;
      border-bottom-right-radius: 12px;
    }
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
      border-radius: 0 0 12px 12px;
    }
    .actions > .ui.button {
      padding: 8px 12px;
    }
  }
`;

const modalFix = css`
  /* 覆盖默认的动画 */
  .ui.modal.transition {
    ${animationDown}
  }
`;

export default cssCombine(modal, modalFix);
