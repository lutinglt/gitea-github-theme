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

import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.resolve(__dirname, "..");
const DIST_DIR = path.join(ROOT_DIR, "dist");
const PREFIX = "theme-github-";

// ============================================================================
// #4: 构建产物基本验证
// ============================================================================

/** 从 theme.config.ts 推导的预期主题文件名 */
const EXPECTED_THEME_FILES = [
  // default
  `${PREFIX}dark.css`,
  `${PREFIX}light.css`,
  `${PREFIX}soft-dark.css`,
  `${PREFIX}auto.css`,
  // colorblind
  `${PREFIX}colorblind-dark.css`,
  `${PREFIX}colorblind-light.css`,
  `${PREFIX}colorblind-auto.css`,
  // tritanopia
  `${PREFIX}tritanopia-dark.css`,
  `${PREFIX}tritanopia-light.css`,
  `${PREFIX}tritanopia-auto.css`,
  // pink
  `${PREFIX}pink-dark.css`,
  `${PREFIX}pink-light.css`,
  `${PREFIX}pink-soft-dark.css`,
  `${PREFIX}pink-auto.css`,
  // gitea
  `${PREFIX}gitea-dark.css`,
  `${PREFIX}gitea-light.css`,
  `${PREFIX}gitea-auto.css`,
  // catppuccin
  `${PREFIX}catppuccin-mocha.css`,
  `${PREFIX}catppuccin-latte.css`,
  `${PREFIX}catppuccin-frappe.css`,
  `${PREFIX}catppuccin-macchiato.css`,
  `${PREFIX}catppuccin-auto.css`,
  // high contrast
  `${PREFIX}high-contrast-dark.css`,
  `${PREFIX}high-contrast-light.css`,
  `${PREFIX}high-contrast-soft-dark.css`,
  `${PREFIX}high-contrast-auto.css`,
  // high contrast colorblind
  `${PREFIX}high-contrast-colorblind-dark.css`,
  `${PREFIX}high-contrast-colorblind-light.css`,
  `${PREFIX}high-contrast-colorblind-auto.css`,
  // high contrast tritanopia
  `${PREFIX}high-contrast-tritanopia-dark.css`,
  `${PREFIX}high-contrast-tritanopia-light.css`,
  `${PREFIX}high-contrast-tritanopia-auto.css`,
];

/** auto 主题文件名列表 */
const AUTO_THEME_FILES = EXPECTED_THEME_FILES.filter(f => f.includes("-auto-") || f.endsWith("-auto.css"));

/** 非 auto 主题文件名列表 */
const SOLID_THEME_FILES = EXPECTED_THEME_FILES.filter(f => !AUTO_THEME_FILES.includes(f));

describe("构建产物基本验证", () => {
  // 确保有构建产物
  try {
    const hasCss = fs.existsSync(DIST_DIR) && fs.readdirSync(DIST_DIR).some(f => f.endsWith(".css"));
    if (!hasCss) {
      execSync("bun run bundle", { cwd: ROOT_DIR, stdio: "pipe" });
    }
  } catch {
    execSync("bun run bundle", { cwd: ROOT_DIR, stdio: "pipe" });
  }

  it("dist 目录存在且包含主题文件", () => {
    expect(fs.existsSync(DIST_DIR)).toBe(true);
    const files = fs.readdirSync(DIST_DIR).filter(f => f.endsWith(".css"));
    expect(files.length, "dist 目录中应有 CSS 主题文件").toBeGreaterThan(0);
  });

  it("所有预期主题文件都存在", () => {
    const actualFiles = new Set(fs.readdirSync(DIST_DIR).filter(f => f.endsWith(".css")));
    for (const expected of EXPECTED_THEME_FILES) {
      expect(actualFiles.has(expected), `缺少预期主题文件: ${expected}`).toBe(true);
    }
  });

  it("无多余主题文件", () => {
    const actualFiles = fs.readdirSync(DIST_DIR).filter(f => f.endsWith(".css"));
    const expectedSet = new Set(EXPECTED_THEME_FILES);
    const extra = actualFiles.filter(f => !expectedSet.has(f));
    expect(extra, `存在多余主题文件: ${extra.join(", ")}`).toEqual([]);
  });
});

describe("非 auto 主题 CSS 内容验证", () => {
  for (const fileName of SOLID_THEME_FILES) {
    describe(fileName, () => {
      let css: string;

      it.beforeAll(() => {
        css = fs.readFileSync(path.join(DIST_DIR, fileName), "utf-8");
      });

      it("文件非空", () => {
        expect(css.length, `${fileName} 不应为空文件`).toBeGreaterThan(0);
      });

      it("包含 Gitea 主题元信息 (--is-dark-theme 或 color-scheme)", () => {
        const hasMeta = css.includes("--is-dark-theme") || css.includes("color-scheme");
        expect(hasMeta, `${fileName} 应包含主题元信息`).toBe(true);
      });

      it("包含 --color-primary 变量", () => {
        expect(css, `${fileName} 应包含 --color-primary 变量`).toMatch(/--color-primary\b/);
      });

      it("包含 --color-body 变量", () => {
        expect(css, `${fileName} 应包含 --color-body 变量`).toMatch(/--color-body\b/);
      });

      it("包含 --color-text 变量", () => {
        expect(css, `${fileName} 应包含 --color-text 变量`).toMatch(/--color-text\b/);
      });

      it("不包含 vanilla-extract 调试标识", () => {
        expect(css, `${fileName} 不应包含 _ve_ 调试标识`).not.toMatch(/_ve_/);
      });

      it("hex 颜色均为小写格式", () => {
        const hexColors = css.match(/#[0-9a-fA-F]{3,8}\b/g) || [];
        const upperHex = hexColors.filter(c => /[A-F]/.test(c));
        expect(upperHex, `${fileName} 中存在大写 hex 颜色: ${upperHex.slice(0, 5).join(", ")}`).toEqual([]);
      });
    });
  }
});

describe("auto 主题 CSS 内容验证", () => {
  for (const fileName of AUTO_THEME_FILES) {
    describe(fileName, () => {
      let css: string;

      it.beforeAll(() => {
        css = fs.readFileSync(path.join(DIST_DIR, fileName), "utf-8");
      });

      it("文件非空", () => {
        expect(css.length, `${fileName} 不应为空文件`).toBeGreaterThan(0);
      });

      it("包含 @import 和 prefers-color-scheme 媒体查询", () => {
        const hasImport = css.includes("@import");
        const hasMediaQuery = css.includes("prefers-color-scheme");
        expect(hasImport && hasMediaQuery, `${fileName} 应包含 @import 和 prefers-color-scheme`).toBe(true);
      });
    });
  }
});

describe("暗/亮主题语义验证", () => {
  /** 从文件名推断是否为暗色主题 */
  function isDarkTheme(fileName: string): boolean {
    if (fileName.includes("-light")) return false;
    if (fileName.includes("-latte")) return false;
    return true; // dark, soft-dark, mocha, frappe, macchiato 等默认为暗色
  }

  for (const fileName of SOLID_THEME_FILES) {
    it(`${fileName}: color-scheme 与主题类型匹配`, () => {
      const css = fs.readFileSync(path.join(DIST_DIR, fileName), "utf-8");
      const dark = isDarkTheme(fileName);

      if (dark) {
        expect(css, `${fileName} 暗色主题应包含 color-scheme: dark`).toMatch(/color-scheme:\s*dark/);
      } else {
        expect(css, `${fileName} 亮色主题应包含 color-scheme: light`).toMatch(/color-scheme:\s*light/);
      }
    });
  }
});

// ============================================================================
// CSS 文件大小增长限制 — 防止意外膨胀
// ============================================================================

/** 单文件大小上限 */
const SIZE_LIMITS = {
  /** auto 主题仅有 @import + 元信息，应保持极小 */
  AUTO_MAX: 1 * 1024, // 1 KB
  /** 非 auto 主题包含完整主题变量 + 公共样式，当前约 108-117 KB */
  SOLID_MAX: 200 * 1024, // 200 KB (给予 ~70% 增长空间)
  /** 所有 CSS 文件总大小上限，当前约 2.6 MB */
  TOTAL_MAX: 5 * 1024 * 1024, // 5 MB
} as const;

describe("CSS 文件大小限制", () => {
  it("所有 auto 主题文件大小 < 1KB", () => {
    const oversized: string[] = [];
    for (const fileName of AUTO_THEME_FILES) {
      const size = fs.statSync(path.join(DIST_DIR, fileName)).size;
      if (size >= SIZE_LIMITS.AUTO_MAX) {
        oversized.push(`${fileName}: ${(size / 1024).toFixed(1)}KB`);
      }
    }
    expect(
      oversized,
      `以下 auto 主题文件体积超过 ${SIZE_LIMITS.AUTO_MAX / 1024}KB 上限:\n${oversized.join("\n")}`
    ).toEqual([]);
  });

  it("所有非 auto 主题文件大小 < 200KB", () => {
    const oversized: string[] = [];
    for (const fileName of SOLID_THEME_FILES) {
      const size = fs.statSync(path.join(DIST_DIR, fileName)).size;
      if (size >= SIZE_LIMITS.SOLID_MAX) {
        oversized.push(`${fileName}: ${(size / 1024).toFixed(1)}KB`);
      }
    }
    expect(
      oversized,
      `以下非 auto 主题文件体积超过 ${SIZE_LIMITS.SOLID_MAX / 1024}KB 上限:\n${oversized.join("\n")}`
    ).toEqual([]);
  });

  it("所有 CSS 文件总大小 < 5MB", () => {
    let totalSize = 0;
    for (const fileName of EXPECTED_THEME_FILES) {
      totalSize += fs.statSync(path.join(DIST_DIR, fileName)).size;
    }
    expect(
      totalSize,
      `CSS 文件总大小 ${(totalSize / 1024 / 1024).toFixed(2)}MB 超过 ${SIZE_LIMITS.TOTAL_MAX / 1024 / 1024}MB 上限`
    ).toBeLessThan(SIZE_LIMITS.TOTAL_MAX);
  });
});
