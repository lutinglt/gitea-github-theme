import { hsl, parseToHsl } from "polished";

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
  const hslColor = parseToHsl(color);
  let newLightness;

  if (lightness < 0) {
    newLightness = hslColor.lightness * (1 + lightness / 100); // 变暗
  } else {
    newLightness = hslColor.lightness + (1 - hslColor.lightness) * (lightness / 100); // 变亮
  }

  newLightness = Math.min(1, Math.max(0, newLightness)); // 确保亮度值在 0 到 1 之间
  return hsl(hslColor.hue, hslColor.saturation, newLightness);
}
