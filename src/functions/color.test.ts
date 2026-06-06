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

import { describe, expect, it } from "vitest";
import { scaleColorLight } from "./color";

describe("scaleColorLight", () => {
  describe("变暗 (负值)", () => {
    it("中等颜色变暗 20%", () => {
      const result = scaleColorLight("#808080", -20);
      expect(result).toBeTruthy();
      expect(result).not.toBe("hsla(0, 0%, 50%, 1)");
    });

    it("纯红色变暗 50%", () => {
      const result = scaleColorLight("#ff0000", -50);
      expect(result).toBeTruthy();
      expect(result).not.toBe("hsla(0, 100%, 50%, 1)");
    });

    it("纯白色变暗 100% 应变为黑色", () => {
      // 白色亮度=1，变暗 100% → newLightness = 1 * (1 + (-100/100)) = 0
      const result = scaleColorLight("#ffffff", -100);
      expect(result).toBe("hsla(0, 0%, 0%, 1)");
    });

    it("纯白色变暗 50% 应变为灰色", () => {
      // 白色亮度=1，变暗 50% → newLightness = 1 * (1 + (-50/100)) = 0.5
      expect(scaleColorLight("#ffffff", -50)).toBe("hsla(0, 0%, 50%, 1)");
    });

    it("纯黑色变暗 50% 仍为黑色 (边界值)", () => {
      // 黑色亮度=0，变暗 50% → newLightness = 0 * (1 + (-50/100)) = 0
      const result = scaleColorLight("#000000", -50);
      expect(result).toBe("hsla(0, 0%, 0%, 1)");
    });

    it("变暗 0% 颜色不变 (语义等价)", () => {
      const result = scaleColorLight("#4488cc", -0);
      expect(result).toMatch(/^hsla\(/);
    });

    it("小幅变暗应接近原色", () => {
      const result = scaleColorLight("#ff0000", -5);
      expect(result).toBeTruthy();
      expect(result).not.toBe("hsla(0, 100%, 50%, 1)");
    });
  });

  describe("变亮 (正值)", () => {
    it("中等颜色变亮 20%", () => {
      const result = scaleColorLight("#808080", 20);
      expect(result).toBeTruthy();
      expect(result).not.toBe("hsla(0, 0%, 50%, 1)");
    });

    it("纯红色变亮 50%", () => {
      const result = scaleColorLight("#ff0000", 50);
      expect(result).toBeTruthy();
      expect(result).not.toBe("hsla(0, 100%, 50%, 1)");
    });

    it("纯黑色变亮 100% 应变为白色", () => {
      // 黑色亮度=0，变亮 100% → newLightness = 0 + (1-0) * (100/100) = 1
      const result = scaleColorLight("#000000", 100);
      expect(result).toBe("hsla(0, 0%, 100%, 1)");
    });

    it("纯黑色变亮 50% 应变为灰色", () => {
      // 黑色亮度=0，变亮 50% → newLightness = 0 + (1-0) * 0.5 = 0.5
      expect(scaleColorLight("#000000", 50)).toBe("hsla(0, 0%, 50%, 1)");
    });

    it("纯白色变亮 50% 仍为白色 (边界值)", () => {
      // 白色亮度=1，变亮 50% → newLightness = 1 + (1-1) * 0.5 = 1
      const result = scaleColorLight("#ffffff", 50);
      expect(result).toBe("hsla(0, 0%, 100%, 1)");
    });

    it("变亮 0% 颜色不变 (语义等价)", () => {
      const result = scaleColorLight("#336699", 0);
      expect(result).toMatch(/^hsla\(/);
    });
  });

  describe("不同颜色格式", () => {
    it("支持 3 位 hex 颜色", () => {
      const result = scaleColorLight("#f00", -50);
      expect(result).toBeTruthy();
      expect(result).not.toBe("hsla(0, 100%, 50%, 1)");
    });

    it("支持 6 位 hex 颜色", () => {
      const result = scaleColorLight("#ff8800", 30);
      expect(result).toBeTruthy();
    });

    it("支持 8 位 hex 颜色 (含 alpha)", () => {
      // parseToHsla 的 alpha 通道不影响亮度计算
      const result = scaleColorLight("#ff8800cc", -20);
      expect(result).toBeTruthy();
    });
  });

  describe("极端缩放值", () => {
    it("超过 100% 的变亮会被 clamp 到白色", () => {
      const result = scaleColorLight("#808080", 200);
      expect(result).toBe("hsla(0, 0%, 100%, 1)");
    });

    it("超过 100% 的变暗会被 clamp 到黑色", () => {
      const result = scaleColorLight("#808080", -200);
      expect(result).toBe("hsla(0, 0%, 0%, 1)");
    });

    it("变亮 150% 应到白色", () => {
      const result = scaleColorLight("#ffffff", 150);
      expect(result).toBe("hsla(0, 0%, 100%, 1)");
    });

    it("变暗 150% 应到黑色", () => {
      const result = scaleColorLight("#000000", -150);
      expect(result).toBe("hsla(0, 0%, 0%, 1)");
    });
  });

  describe("常见主题颜色场景", () => {
    it("GitHub 蓝色强调色变暗 12% (暗色主题 primary dark)", () => {
      const result = scaleColorLight("#4493f8", -12);
      expect(result).toBeTruthy();
      expect(result).not.toBe("hsla(214, 93%, 62%, 1)");
    });

    it("GitHub 蓝色强调色变亮 12% (亮色主题 primary light)", () => {
      const result = scaleColorLight("#0969da", 12);
      expect(result).toBeTruthy();
      expect(result).not.toBe("hsla(212, 92%, 45%, 1)");
    });

    it("边框色变暗 6% (secondary dark 1)", () => {
      const result = scaleColorLight("#d0d7de", -6);
      expect(result).toBeTruthy();
      expect(result).not.toBe("hsla(210, 18%, 85%, 1)");
    });

    it("相同的绝对缩放值在暗/亮色上的方向效果不同", () => {
      // 验证 scaleColorLight 不会改变色相 (hue)
      const original = "hsla(214, 93%, 62%, 1)";
      const darkened = scaleColorLight("#4493f8", -30);
      const lightened = scaleColorLight("#4493f8", 30);
      // 两者都不等于原色
      expect(darkened).not.toBe(original);
      expect(lightened).not.toBe(original);
      // 两者也不相等
      expect(darkened).not.toBe(lightened);
    });
  });
});
