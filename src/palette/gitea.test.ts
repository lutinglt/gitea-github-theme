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

import { giteaColor } from "@lutinglt/gitea-github-theme/themes";
import { describe, expect, it } from "vitest";
import { gitea2ThemeVars } from "./gitea";

// ============================================================================
// 测试
// ============================================================================

describe.sequential("gitea2ThemeVars", () => {
  it("dark 快照", () => {
    expect(gitea2ThemeVars(giteaColor.dark)).toMatchSnapshot();
  });

  it("light 快照", () => {
    expect(gitea2ThemeVars(giteaColor.light)).toMatchSnapshot();
  });

  it("dark isDarkTheme 为 true", () => {
    expect(gitea2ThemeVars(giteaColor.dark).isDarkTheme).toBe(true);
  });

  it("light isDarkTheme 为 false", () => {
    expect(gitea2ThemeVars(giteaColor.light).isDarkTheme).toBe(false);
  });

  it("dark 输出含 color 和 github 顶层键", () => {
    const result = gitea2ThemeVars(giteaColor.dark);
    expect(result.color).toBeDefined();
    expect(result.github).toBeDefined();
  });

  it("color 含基础颜色键", () => {
    const result = gitea2ThemeVars(giteaColor.dark);
    const requiredColors = ["primary", "secondary", "red", "green", "blue", "body", "text", "box"];
    for (const key of requiredColors) {
      expect((result.color as Record<string, unknown>)[key], `gitea-dark: 缺少 color.${key}`).toBeDefined();
    }
  });

  it("github 对象含必须键", () => {
    const result = gitea2ThemeVars(giteaColor.dark);
    expect(result.github.fgColor).toBeDefined();
    expect(result.github.bgColor).toBeDefined();
    expect(result.github.button).toBeDefined();
    expect(result.github.control).toBeDefined();
    expect(result.github.contribution).toBeDefined();
  });
});
