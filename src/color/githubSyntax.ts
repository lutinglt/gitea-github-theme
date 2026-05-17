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

import { type Chroma, type CodeMirror } from "src/types";
import type { GitHubColor } from "./github";

export type PrettylightsColor = {
  syntax: {
    brackethighlighter: { angle: string; unmatched: string };
    carriage: { return: { bg: string; text: string } };
    comment: string;
    constant: string;
    constantOtherReferenceLink: string;
    entity: string;
    entityTag: string;
    invalid: { illegal: { bg: string; text: string } };
    keyword: string;
    markup: {
      bold: string;
      changed: { bg: string; text: string };
      deleted: { bg: string; text: string };
      heading: string;
      ignored: { bg: string; text: string };
      inserted: { bg: string; text: string };
      italic: string;
      list: string;
    };
    metaDiffRange: string;
    storageModifierImport: string;
    string: string;
    stringRegexp: string;
    sublimelinterGutterMark: string;
    variable: string;
  };
};

export type CodeMirrorColor = {
  syntax: {
    fgColor: {
      comment: string;
      constant: string;
      entity: string;
      keyword: string;
      storage: string;
      string: string;
      support: string;
      variable: string;
    };
  };
  matchingBracket?: {
    fgColor?: string;
  };
};

export type GitHubSyntax = {
  prettyLights: PrettylightsColor;
  codeMirror: CodeMirrorColor;
};

export function prettylights2Chroma(prettylights: PrettylightsColor): Chroma {
  return {
    textWhiteSpace: prettylights.syntax.brackethighlighter.unmatched,
    err: prettylights.syntax.brackethighlighter.unmatched,
    keyword: {
      self: prettylights.syntax.keyword,
      constant: prettylights.syntax.constant,
      declaration: prettylights.syntax.keyword,
      namespace: prettylights.syntax.keyword,
      pseudo: prettylights.syntax.constant,
      reserved: prettylights.syntax.keyword,
      type: prettylights.syntax.variable,
    },
    name: {
      self: prettylights.syntax.markup.bold,
      attribute: prettylights.syntax.entityTag,
      builtin: prettylights.syntax.entity,
      builtinPseudo: prettylights.syntax.markup.bold,
      class: prettylights.syntax.variable,
      constant: prettylights.syntax.variable,
      decorator: prettylights.syntax.entity,
      entity: prettylights.syntax.variable,
      exception: prettylights.syntax.variable,
      function: prettylights.syntax.entity,
      functionMagic: prettylights.syntax.entity,
      label: prettylights.syntax.constant,
      other: prettylights.syntax.markup.bold,
      namespace: prettylights.syntax.markup.bold,
      property: prettylights.syntax.constant,
      tag: prettylights.syntax.entityTag,
      variable: prettylights.syntax.constant,
      variableClass: prettylights.syntax.constant,
      variableGlobal: prettylights.syntax.constant,
      variableInstance: prettylights.syntax.constant,
      variableMagic: prettylights.syntax.markup.bold,
    },
    literal: {
      self: prettylights.syntax.string,
      date: prettylights.syntax.constant,
    },
    string: {
      self: prettylights.syntax.string,
      affix: prettylights.syntax.string,
      backtick: prettylights.syntax.constant,
      char: prettylights.syntax.string,
      delimiter: prettylights.syntax.string,
      doc: prettylights.syntax.comment,
      double: prettylights.syntax.string,
      escape: prettylights.syntax.string,
      heredoc: prettylights.syntax.string,
      interpol: prettylights.syntax.string,
      other: prettylights.syntax.string,
      regex: prettylights.syntax.stringRegexp,
      single: prettylights.syntax.string,
      symbol: prettylights.syntax.string,
    },
    number: {
      self: prettylights.syntax.constant,
      bin: prettylights.syntax.constant,
      float: prettylights.syntax.constant,
      hex: prettylights.syntax.constant,
      integer: prettylights.syntax.constant,
      integerLong: prettylights.syntax.constant,
      oct: prettylights.syntax.constant,
    },
    operator: {
      self: prettylights.syntax.constant,
      word: prettylights.syntax.constant,
      reserved: prettylights.syntax.keyword,
    },
    punctuation: prettylights.syntax.markup.bold,
    comment: {
      self: prettylights.syntax.comment,
      hashbang: prettylights.syntax.comment,
      multiline: prettylights.syntax.comment,
      preproc: prettylights.syntax.constant,
      preprocFile: prettylights.syntax.constant,
      single: prettylights.syntax.comment,
      special: prettylights.syntax.comment,
    },
    generic: {
      self: prettylights.syntax.markup.bold,
      deleted: prettylights.syntax.markup.deleted.text,
      emph: prettylights.syntax.markup.italic,
      error: prettylights.syntax.invalid.illegal.text,
      heading: prettylights.syntax.markup.heading,
      inserted: prettylights.syntax.markup.inserted.text,
      output: prettylights.syntax.markup.bold,
      prompt: prettylights.syntax.markup.bold,
      strong: prettylights.syntax.markup.bold,
      subheading: prettylights.syntax.markup.heading,
      traceback: prettylights.syntax.invalid.illegal.text,
      underline: prettylights.syntax.markup.italic,
    },
  };
}

export function githubSyntax2CodeMirror(githubSyntax: GitHubSyntax, githubColor: GitHubColor): CodeMirror {
  return {
    token: {
      keyword: githubSyntax.codeMirror.syntax.fgColor.keyword,
      atom: githubSyntax.codeMirror.syntax.fgColor.constant,
      bool: githubSyntax.codeMirror.syntax.fgColor.constant,
      variableName: githubSyntax.codeMirror.syntax.fgColor.entity,
      variableName2: githubSyntax.codeMirror.syntax.fgColor.storage,
      propertyName: githubSyntax.codeMirror.syntax.fgColor.constant,
      typeName: githubSyntax.codeMirror.syntax.fgColor.variable,
      className: githubSyntax.codeMirror.syntax.fgColor.variable,
      namespace: githubSyntax.codeMirror.syntax.fgColor.variable,
      macroName: githubSyntax.prettyLights.syntax.variable,
      labelName: githubSyntax.codeMirror.syntax.fgColor.constant,
      number: githubSyntax.codeMirror.syntax.fgColor.constant,
      string: githubSyntax.codeMirror.syntax.fgColor.string,
      string2: githubSyntax.codeMirror.syntax.fgColor.string,
      operator: githubSyntax.codeMirror.matchingBracket?.fgColor ?? githubColor.fgColor.default,
      punctuation: githubSyntax.codeMirror.matchingBracket?.fgColor ?? githubColor.fgColor.default,
      comment: githubSyntax.codeMirror.syntax.fgColor.comment,
      meta: githubSyntax.codeMirror.syntax.fgColor.support,
      invalid: githubSyntax.codeMirror.syntax.fgColor.keyword,
      link: githubSyntax.codeMirror.syntax.fgColor.string,
      heading: githubSyntax.codeMirror.syntax.fgColor.entity,
      emphasis: githubSyntax.codeMirror.syntax.fgColor.comment,
      strong: githubSyntax.codeMirror.syntax.fgColor.comment,
      inserted: githubSyntax.codeMirror.syntax.fgColor.string,
      deleted: githubSyntax.codeMirror.syntax.fgColor.keyword,
    },
    language: {
      json: githubSyntax.codeMirror.syntax.fgColor.constant,
      json5: githubSyntax.codeMirror.syntax.fgColor.constant,
      yaml: githubSyntax.codeMirror.syntax.fgColor.constant,
      css: githubSyntax.codeMirror.syntax.fgColor.constant,
      html: githubSyntax.codeMirror.syntax.fgColor.constant,
      xml: githubSyntax.codeMirror.syntax.fgColor.constant,
    },
  };
}
