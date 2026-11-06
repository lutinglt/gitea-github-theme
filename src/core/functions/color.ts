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

import { rgba as c2kRgba, hsla, parseToHsla, parseToRgba } from "color2k";

/** 解析颜色后设置指定透明度，返回 rgba 字符串 */
export function rgba(color: string, alpha: number): string {
  const [r, g, b] = parseToRgba(color);
  return c2kRgba(r, g, b, alpha);
}

/**
 * 改变颜色的亮度, 等同于 sass 中的 `color.scale` 函数
 * @param color 颜色值
 * @param lightnessScale 亮度变化比例，负数表示变暗，正数表示变亮
 * @returns 新的颜色值
 * @example
 * const newColor = scaleColorLight("#ff0000", 20); // 变亮
 * const newColor = scaleColorLight("#ff0000", -20); // 变暗
 * 等同于 sass `@use "sass:color"`;
 * color: color.scale(#ff0000, $lightness: 20%)
 * color: color.scale(#ff0000, $lightness: -20%)
 */
export function scaleColorLight(color: string, lightness: number) {
  const [h, s, l] = parseToHsla(color);
  let newLightness;

  if (lightness < 0) {
    newLightness = l * (1 + lightness / 100); // 变暗
  } else {
    newLightness = l + (1 - l) * (lightness / 100); // 变亮
  }

  newLightness = Math.min(1, Math.max(0, newLightness)); // 确保亮度值在 0 到 1 之间
  return hsla(h, s, newLightness, 1);
}
