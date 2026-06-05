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
import { display2GitHubColor } from "./display";
import { primer2GitHubColor } from "./primer";

// ============================================================================
// 测试
// ============================================================================

describe.sequential("display2GitHubColor", () => {
  const darkBase = primer2GitHubColor(defaultPrimer.dark, true);
  const lightBase = primer2GitHubColor(defaultPrimer.light);

  it("pink dark 快照", () => {
    expect(display2GitHubColor(defaultPrimer.dark.display.pink.scale, darkBase)).toMatchSnapshot();
  });

  it("pink light 快照", () => {
    expect(display2GitHubColor(defaultPrimer.light.display.pink.scale, lightBase)).toMatchSnapshot();
  });

  it("pink soft-dark 快照", () => {
    const softDarkBase = primer2GitHubColor(defaultPrimer.darkDimmed, true);
    expect(display2GitHubColor(defaultPrimer.dark.display.pink.scale, softDarkBase, true)).toMatchSnapshot();
  });

  it("cover 后 accent 字段与 base 不同", () => {
    const result = display2GitHubColor(defaultPrimer.dark.display.pink.scale, darkBase);
    expect(result.fgColor.accent).not.toBe(darkBase.fgColor.accent);
    expect(result.bgColor.accent.emphasis).not.toBe(darkBase.bgColor.accent.emphasis);
  });

  it("cover 后 contribution 颜色被改写", () => {
    const result = display2GitHubColor(defaultPrimer.light.display.pink.scale, lightBase);
    expect(result.contribution.default.bgColor[1]).not.toBe(lightBase.contribution.default.bgColor[1]);
  });

  it("isDarkTheme 遵循 base", () => {
    expect(display2GitHubColor(defaultPrimer.dark.display.pink.scale, darkBase).isDarkTheme).toBe(true);
    expect(display2GitHubColor(defaultPrimer.light.display.pink.scale, lightBase).isDarkTheme).toBe(false);
  });
});
