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

import { cssStyle, otherThemeVars, themeVars } from "@lutinglt/gitea-github-theme/core";

/** 激活项后缀样式
 * @example 菜单激活子项前面的竖线, 方便识别
 */
export const activeItemAfterStyle = cssStyle({
  content: `""`,
  backgroundColor: themeVars.github.borderColor.accent.emphasis,
  borderRadius: otherThemeVars.border.radius,
  height: "24px",
  left: "-8px",
  position: "absolute",
  top: "calc(50% - 12px)",
  width: "4px",
});
