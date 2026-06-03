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

import { themeVars, toCSS } from "@gitea-github-theme/core";

export const deleteHoverActiveStyle = toCSS({
  "&:hover": {
    backgroundColor: `${themeVars.github.control.danger.bgColor.hover} !important`,
    color: `${themeVars.github.control.danger.fgColor.hover} !important`,
  },
  "&:active": {
    backgroundColor: `${themeVars.github.control.danger.bgColor.active} !important`,
    color: `${themeVars.github.control.danger.fgColor.hover} !important`,
    boxShadow: `inset 0 0 0 1px ${themeVars.github.control.transparent.borderColor.active}`,
  },
});
