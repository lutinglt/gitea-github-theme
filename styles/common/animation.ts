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

import { selectors, toCSS } from "@gitea-github-theme/core";

// 出现动画
export const animation = toCSS({
  animation: selectors.overlayAppear,
  animationDuration: "80ms",
  animationFillMode: "forwards",
  animationTimingFunction: "ease-in",
});

// 向下出现动画
export const animationDown = toCSS({
  animation: selectors.overlayAppearDown,
  animationDuration: "200ms",
  animationTimingFunction: "cubic-bezier(0.33, 1, 0.68, 1)",
});

// 向上出现动画
export const animationUp = toCSS({
  animation: selectors.overlayAppearUp,
  animationDuration: "200ms",
  animationTimingFunction: "cubic-bezier(0.33, 1, 0.68, 1)",
});
