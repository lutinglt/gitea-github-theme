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

import type { Primer } from "@gitea-github-theme/primer";
import type { Chroma, CodeMirror } from "../types";
import { deepOverride } from "../utils";
import type { GitHubColor } from "./github";

export function primer2GitHubColor(primer: Primer, dark: boolean = false): GitHubColor {
  return {
    isDarkTheme: dark,
    ...deepOverride(primer, {
      shadow: {
        // 特殊的阴影颜色, 因 Gitea 实现无法使用原始值, 提取对应值交给后续生成
        floating: { small: dark ? "#01040966" : "#25292e0a" },
        resting: { medium: dark ? "#010409cc" : "#25292e1f" },
      },
    }),
    themeExtra: { button: { primary: { fgColor: { accent: primer.fgColor.success } } } },
  };
}

export function primer2Chroma(primer: Primer): Chroma {
  return {
    textWhiteSpace: primer.prettylights.syntax.brackethighlighter.unmatched,
    err: primer.prettylights.syntax.brackethighlighter.unmatched,
    keyword: {
      self: primer.prettylights.syntax.keyword,
      constant: primer.prettylights.syntax.constant,
      declaration: primer.prettylights.syntax.keyword,
      namespace: primer.prettylights.syntax.keyword,
      pseudo: primer.prettylights.syntax.constant,
      reserved: primer.prettylights.syntax.keyword,
      type: primer.prettylights.syntax.variable,
    },
    name: {
      self: primer.prettylights.syntax.markup.bold,
      attribute: primer.prettylights.syntax.entityTag,
      builtin: primer.prettylights.syntax.entity,
      builtinPseudo: primer.prettylights.syntax.markup.bold,
      class: primer.prettylights.syntax.variable,
      constant: primer.prettylights.syntax.variable,
      decorator: primer.prettylights.syntax.entity,
      entity: primer.prettylights.syntax.variable,
      exception: primer.prettylights.syntax.variable,
      function: primer.prettylights.syntax.entity,
      functionMagic: primer.prettylights.syntax.entity,
      label: primer.prettylights.syntax.constant,
      other: primer.prettylights.syntax.markup.bold,
      namespace: primer.prettylights.syntax.markup.bold,
      property: primer.prettylights.syntax.constant,
      tag: primer.prettylights.syntax.entityTag,
      variable: primer.prettylights.syntax.constant,
      variableClass: primer.prettylights.syntax.constant,
      variableGlobal: primer.prettylights.syntax.constant,
      variableInstance: primer.prettylights.syntax.constant,
      variableMagic: primer.prettylights.syntax.markup.bold,
    },
    literal: {
      self: primer.prettylights.syntax.string,
      date: primer.prettylights.syntax.constant,
    },
    string: {
      self: primer.prettylights.syntax.string,
      affix: primer.prettylights.syntax.string,
      backtick: primer.prettylights.syntax.constant,
      char: primer.prettylights.syntax.string,
      delimiter: primer.prettylights.syntax.string,
      doc: primer.prettylights.syntax.comment,
      double: primer.prettylights.syntax.string,
      escape: primer.prettylights.syntax.string,
      heredoc: primer.prettylights.syntax.string,
      interpol: primer.prettylights.syntax.string,
      other: primer.prettylights.syntax.string,
      regex: primer.prettylights.syntax.stringRegexp,
      single: primer.prettylights.syntax.string,
      symbol: primer.prettylights.syntax.string,
    },
    number: {
      self: primer.prettylights.syntax.constant,
      bin: primer.prettylights.syntax.constant,
      float: primer.prettylights.syntax.constant,
      hex: primer.prettylights.syntax.constant,
      integer: primer.prettylights.syntax.constant,
      integerLong: primer.prettylights.syntax.constant,
      oct: primer.prettylights.syntax.constant,
    },
    operator: {
      self: primer.prettylights.syntax.constant,
      word: primer.prettylights.syntax.constant,
      reserved: primer.prettylights.syntax.keyword,
    },
    punctuation: primer.prettylights.syntax.markup.bold,
    comment: {
      self: primer.prettylights.syntax.comment,
      hashbang: primer.prettylights.syntax.comment,
      multiline: primer.prettylights.syntax.comment,
      preproc: primer.prettylights.syntax.constant,
      preprocFile: primer.prettylights.syntax.constant,
      single: primer.prettylights.syntax.comment,
      special: primer.prettylights.syntax.comment,
    },
    generic: {
      self: primer.prettylights.syntax.markup.bold,
      deleted: primer.prettylights.syntax.markup.deleted.text,
      emph: primer.prettylights.syntax.markup.italic,
      error: primer.prettylights.syntax.invalid.illegal.text,
      heading: primer.prettylights.syntax.markup.heading,
      inserted: primer.prettylights.syntax.markup.inserted.text,
      output: primer.prettylights.syntax.markup.bold,
      prompt: primer.prettylights.syntax.markup.bold,
      strong: primer.prettylights.syntax.markup.bold,
      subheading: primer.prettylights.syntax.markup.heading,
      traceback: primer.prettylights.syntax.invalid.illegal.text,
      underline: primer.prettylights.syntax.markup.italic,
    },
  };
}

export function primer2CodeMirror(primer: Primer): CodeMirror {
  return {
    token: {
      keyword: primer.codeMirror.syntax.fgColor.keyword,
      atom: primer.codeMirror.syntax.fgColor.constant,
      bool: primer.codeMirror.syntax.fgColor.constant,
      variableName: primer.codeMirror.syntax.fgColor.entity,
      variableName2: primer.codeMirror.syntax.fgColor.storage,
      propertyName: primer.codeMirror.syntax.fgColor.constant,
      typeName: primer.codeMirror.syntax.fgColor.variable,
      className: primer.codeMirror.syntax.fgColor.variable,
      namespace: primer.codeMirror.syntax.fgColor.variable,
      macroName: primer.prettylights.syntax.variable,
      labelName: primer.codeMirror.syntax.fgColor.constant,
      number: primer.codeMirror.syntax.fgColor.constant,
      string: primer.codeMirror.syntax.fgColor.string,
      string2: primer.codeMirror.syntax.fgColor.string,
      operator: primer.codeMirror.matchingBracket.fgColor,
      punctuation: primer.codeMirror.matchingBracket.fgColor,
      comment: primer.codeMirror.syntax.fgColor.comment,
      meta: primer.codeMirror.syntax.fgColor.support,
      invalid: primer.codeMirror.syntax.fgColor.keyword,
      link: primer.codeMirror.syntax.fgColor.string,
      heading: primer.codeMirror.syntax.fgColor.entity,
      emphasis: primer.codeMirror.syntax.fgColor.comment,
      strong: primer.codeMirror.syntax.fgColor.comment,
      inserted: primer.codeMirror.syntax.fgColor.string,
      deleted: primer.codeMirror.syntax.fgColor.keyword,
    },
    language: {
      json: primer.codeMirror.syntax.fgColor.constant,
      json5: primer.codeMirror.syntax.fgColor.constant,
      yaml: primer.codeMirror.syntax.fgColor.constant,
      css: primer.codeMirror.syntax.fgColor.constant,
      html: primer.codeMirror.syntax.fgColor.constant,
      xml: primer.codeMirror.syntax.fgColor.constant,
    },
  };
}
