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

import defaultPrimer from "@lutinglt/gitea-github-theme/primer";
import { describe, expect, it } from "vitest";
import { github2ThemeColor } from "./github";
import { primer2GitHubColor } from "./primer";
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
// 测试
// ============================================================================

describe.sequential("github2ThemeColor", () => {
  it("dark 全链快照", () => {
    const githubColor = primer2GitHubColor(defaultPrimer.dark, true);
    expect(theme2ThemeVars(github2ThemeColor(githubColor))).toMatchSnapshot();
  });

  it("light 全链快照", () => {
    const githubColor = primer2GitHubColor(defaultPrimer.light);
    expect(theme2ThemeVars(github2ThemeColor(githubColor))).toMatchSnapshot();
  });

  it("dark 结构完整", () => {
    assertThemeColorStructure(github2ThemeColor(primer2GitHubColor(defaultPrimer.dark, true)), "github-dark");
  });

  it("light 结构完整", () => {
    assertThemeColorStructure(github2ThemeColor(primer2GitHubColor(defaultPrimer.light)), "github-light");
  });

  it("dark isDarkTheme 为 true", () => {
    const githubColor = primer2GitHubColor(defaultPrimer.dark, true);
    expect(github2ThemeColor(githubColor).isDarkTheme).toBe(true);
  });

  it("light isDarkTheme 为 false", () => {
    const githubColor = primer2GitHubColor(defaultPrimer.light);
    expect(github2ThemeColor(githubColor).isDarkTheme).toBe(false);
  });
});
