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

import { flavors } from "@catppuccin/palette";
import { describe, expect, it } from "vitest";
import { catppuccin2ThemeColor } from "./catppuccin";
import { catppuccin2Syntax } from "./catppuccinSyntax";
import { theme2ThemeVars, type ThemeColor } from "./theme";

// ============================================================================
// 辅助工具
// ============================================================================

function collectLeafPaths(obj: unknown, prefix = ""): string[] {
  if (obj === null || obj === undefined) return [];
  if (typeof obj === "string" || typeof obj === "boolean" || typeof obj === "number") return [prefix];
  if (typeof obj === "object") {
    return Object.entries(obj).flatMap(([key, val]) => collectLeafPaths(val, prefix ? `${prefix}.${key}` : key));
  }
  return [];
}

function getByPath(obj: unknown, path: string): unknown {
  const keys = path.split(".");
  let current = obj;
  for (const key of keys) {
    if (current === null || current === undefined || typeof current !== "object") return undefined;
    current = (current as Record<string, unknown>)[key];
  }
  return current;
}

function assertThemeColorStructure(themeColor: ThemeColor, flavor: string) {
  const requiredKeys = [
    "isDarkTheme",
    "primary",
    "primaryContrast",
    "secondary",
    "base",
    "console",
    "diff",
    "other",
    "github",
  ] as const;
  const requiredBaseColors = [
    "red",
    "orange",
    "yellow",
    "olive",
    "green",
    "teal",
    "cyan",
    "blue",
    "violet",
    "purple",
    "pink",
    "brown",
    "black",
    "grey",
    "gold",
    "white",
  ] as const;

  for (const key of requiredKeys) {
    expect(themeColor[key], `${flavor}: 缺少顶层键 '${key}'`).toBeDefined();
  }
  for (const color of requiredBaseColors) {
    expect(themeColor.base[color], `${flavor}: 缺少 base.${color}`).toBeDefined();
  }

  for (const path of collectLeafPaths(themeColor)) {
    const value = getByPath(themeColor, path);
    if (typeof value === "string") {
      const isValid =
        /^#[0-9a-f]{3,8}$/i.test(value) ||
        /^(rgba?|hsla?)\s*\(/i.test(value) ||
        /^var\s*\(/.test(value) ||
        ["unset", "initial", "inherit"].includes(value) ||
        value.startsWith("drop-shadow(") ||
        value.startsWith("inset ") ||
        /^\d/.test(value);
      expect(isValid, `${flavor}: 路径 '${path}' 的值 '${value}' 不是合法颜色值`).toBe(true);
    }
  }

  expect(themeColor.primaryContrast, `${flavor}: primaryContrast 不应等于 primary`).not.toBe(themeColor.primary);
  expect(typeof themeColor.isDarkTheme, `${flavor}: isDarkTheme 应为布尔值`).toBe("boolean");
}

// ============================================================================
// 快照测试
// ============================================================================

describe.sequential("catppuccin2ThemeColor", () => {
  it("mocha (dark) 全链快照", () => {
    expect(theme2ThemeVars(catppuccin2ThemeColor(flavors.mocha))).toMatchSnapshot();
  });

  it("latte (light) 全链快照", () => {
    expect(theme2ThemeVars(catppuccin2ThemeColor(flavors.latte))).toMatchSnapshot();
  });

  it("frappé (dark) 全链快照", () => {
    expect(theme2ThemeVars(catppuccin2ThemeColor(flavors.frappe))).toMatchSnapshot();
  });

  it("macchiato (dark) 全链快照", () => {
    expect(theme2ThemeVars(catppuccin2ThemeColor(flavors.macchiato))).toMatchSnapshot();
  });

  it("mocha 结构完整", () => {
    assertThemeColorStructure(catppuccin2ThemeColor(flavors.mocha), "mocha");
  });

  it("latte 结构完整", () => {
    assertThemeColorStructure(catppuccin2ThemeColor(flavors.latte), "latte");
  });

  it("frappé 结构完整", () => {
    assertThemeColorStructure(catppuccin2ThemeColor(flavors.frappe), "frappé");
  });

  it("macchiato 结构完整", () => {
    assertThemeColorStructure(catppuccin2ThemeColor(flavors.macchiato), "macchiato");
  });

  it("所有暗色主题 github 对象完整", () => {
    for (const flavor of [flavors.mocha, flavors.frappe, flavors.macchiato]) {
      const tc = catppuccin2ThemeColor(flavor);
      expect(tc.github.fgColor).toBeDefined();
      expect(tc.github.bgColor).toBeDefined();
      expect(tc.github.borderColor).toBeDefined();
      expect(tc.github.button).toBeDefined();
      expect(tc.github.control).toBeDefined();
      expect(tc.github.contribution).toBeDefined();
    }
  });
});

describe.sequential("catppuccin2Syntax", () => {
  for (const flavor of [flavors.latte, flavors.frappe, flavors.macchiato, flavors.mocha]) {
    it(`${flavor.name} 快照`, () => {
      expect(catppuccin2Syntax(flavor)).toMatchSnapshot();
    });
  }

  it("所有风味 syntax 含核心键", () => {
    const coreKeys = ["keyword", "bool", "string", "comment", "number", "type", "name", "tag", "variable"];
    for (const flavor of [flavors.latte, flavors.frappe, flavors.macchiato, flavors.mocha]) {
      const syntax = catppuccin2Syntax(flavor);
      for (const key of coreKeys) {
        expect((syntax as Record<string, unknown>)[key], `${flavor.name}: 缺少 syntax.${key}`).toBeDefined();
      }
    }
  });
});

// ============================================================================
// 语义正确性
// ============================================================================

describe("catppuccin 暗/亮模式语义", () => {
  it("dark 主题 isDarkTheme 为 true", () => {
    for (const flavor of [flavors.mocha, flavors.frappe, flavors.macchiato]) {
      expect(catppuccin2ThemeColor(flavor).isDarkTheme, `${flavor.name} 应为暗色`).toBe(true);
    }
  });

  it("light 主题 isDarkTheme 为 false", () => {
    expect(catppuccin2ThemeColor(flavors.latte).isDarkTheme).toBe(false);
  });

  it("dark 主题 base.black 应为深色", () => {
    const dark = catppuccin2ThemeColor(flavors.mocha);
    expect(dark.base.black).not.toBe(dark.base.white);
  });

  it("light 主题 base.black 应为深色", () => {
    const light = catppuccin2ThemeColor(flavors.latte);
    expect(light.base.black).not.toBe(light.base.white);
  });
});
