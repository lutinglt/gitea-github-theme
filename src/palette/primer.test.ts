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
import { primer2Chroma, primer2CodeMirror, primer2GitHubColor } from "./primer";

// ============================================================================
// primer2GitHubColor
// ============================================================================

describe.sequential("primer2GitHubColor", () => {
  it("dark 快照", () => {
    expect(primer2GitHubColor(defaultPrimer.dark, true)).toMatchSnapshot();
  });

  it("light 快照", () => {
    expect(primer2GitHubColor(defaultPrimer.light)).toMatchSnapshot();
  });

  it("dark isDarkTheme 为 true", () => {
    expect(primer2GitHubColor(defaultPrimer.dark, true).isDarkTheme).toBe(true);
  });

  it("light isDarkTheme 为 false", () => {
    expect(primer2GitHubColor(defaultPrimer.light).isDarkTheme).toBe(false);
  });

  it("dark 包含 fgColor/bgColor/borderColor", () => {
    const result = primer2GitHubColor(defaultPrimer.dark, true);
    expect(result.fgColor).toBeDefined();
    expect(result.bgColor).toBeDefined();
    expect(result.borderColor).toBeDefined();
  });
});

// ============================================================================
// primer2Chroma
// ============================================================================

describe.sequential("primer2Chroma", () => {
  it("dark 快照", () => {
    expect(primer2Chroma(defaultPrimer.dark)).toMatchSnapshot();
  });

  it("light 快照", () => {
    expect(primer2Chroma(defaultPrimer.light)).toMatchSnapshot();
  });

  it("包含所有语法分组", () => {
    const result = primer2Chroma(defaultPrimer.dark);
    const groups = [
      "textWhiteSpace",
      "err",
      "keyword",
      "name",
      "literal",
      "string",
      "number",
      "operator",
      "punctuation",
      "comment",
      "generic",
    ];
    for (const group of groups) {
      expect((result as Record<string, unknown>)[group], `缺少 chroma 分组: ${group}`).toBeDefined();
    }
  });

  it("keyword 含子级分组", () => {
    const kw = primer2Chroma(defaultPrimer.dark).keyword as Record<string, unknown>;
    for (const sub of ["self", "constant", "declaration", "namespace", "pseudo", "reserved", "type"]) {
      expect(kw[sub], `缺少 keyword.${sub}`).toBeDefined();
    }
  });

  it("generic 含 deleted/emph/inserted/heading", () => {
    const g = primer2Chroma(defaultPrimer.dark).generic as Record<string, unknown>;
    for (const sub of ["deleted", "emph", "inserted", "heading", "subheading"]) {
      expect(g[sub], `缺少 generic.${sub}`).toBeDefined();
    }
  });
});

// ============================================================================
// primer2CodeMirror
// ============================================================================

describe.sequential("primer2CodeMirror", () => {
  it("dark 快照", () => {
    expect(primer2CodeMirror(defaultPrimer.dark)).toMatchSnapshot();
  });

  it("light 快照", () => {
    expect(primer2CodeMirror(defaultPrimer.light)).toMatchSnapshot();
  });

  it("含 token 和 language 分组", () => {
    const result = primer2CodeMirror(defaultPrimer.dark);
    expect(result.token).toBeDefined();
    expect(result.language).toBeDefined();
  });

  it("token 含核心语法键", () => {
    const t = primer2CodeMirror(defaultPrimer.dark).token as Record<string, unknown>;
    for (const key of ["keyword", "atom", "string", "number", "comment", "variableName", "typeName"]) {
      expect(t[key], `缺少 token.${key}`).toBeDefined();
    }
  });

  it("language 含 json/html/css/xml", () => {
    const l = primer2CodeMirror(defaultPrimer.dark).language;
    for (const key of ["json", "html", "css", "xml"]) {
      expect(l[key as keyof typeof l], `缺少 language.${key}`).toBeDefined();
    }
  });
});
