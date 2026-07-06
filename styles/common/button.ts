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

import { cssStyle, themeVars } from "@lutinglt/gitea-github-theme/core";

/** 普通按钮样式 */
export const basicButtonStyle = cssStyle({
  backgroundColor: themeVars.color.button,
  color: themeVars.color.text.light.self,
  border: `1px solid ${themeVars.color.light.border}`,
  boxShadow: "none",
  "&:hover": {
    backgroundColor: themeVars.color.hover.self,
    color: themeVars.color.text.self,
    borderColor: themeVars.color.light.border,
  },
  "&:active": {
    backgroundColor: themeVars.github.button.default.bgColor.active,
    color: themeVars.color.text.self,
    borderColor: themeVars.color.light.border,
  },
});

/** 主色调按钮样式 */
export const primaryButtonStyle = cssStyle({
  color: themeVars.github.button.primary.fgColor.rest,
  backgroundColor: themeVars.github.button.primary.bgColor.rest,
  borderColor: themeVars.github.button.primary.borderColor.rest,
  boxShadow: themeVars.github.shadow.resting.small,
});

/** 主色调按钮悬停样式 */
export const primaryButtonHoverStyle = cssStyle({
  color: themeVars.github.button.primary.fgColor.rest,
  backgroundColor: themeVars.github.button.primary.bgColor.hover,
  borderColor: themeVars.github.button.primary.borderColor.hover,
});
