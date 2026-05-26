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

import { type Chroma, type CodeMirror } from "../types";

export type PrettylightsColor = {
  syntax: {
    comment: string;
    constant: string;
    constantOtherReferenceLink: string;
    entityTag: string;
    entity: string;
    storageModifierImport: string;
    keyword: string;
    string: string;
    variable: string;
    brackethighlighter: { angle: string; unmatched: string };
    invalid: { illegal: { bg: string; text: string } };
    carriage: { return: { bg: string; text: string } };
    stringRegexp: string;
    markup: {
      list: string;
      heading: string;
      italic: string;
      bold: string;
      deleted: { bg: string; text: string };
      inserted: { bg: string; text: string };
      changed: { bg: string; text: string };
      ignored: { bg: string; text: string };
    };
    metaDiffRange: string;
    sublimeLinterGutterMark: string;
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
  matchingBracket: {
    fgColor: string;
  };
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

export function githubCodeMirrorConvert(codeMirror: CodeMirrorColor): CodeMirror {
  return {
    token: {
      keyword: codeMirror.syntax.fgColor.keyword,
      atom: codeMirror.syntax.fgColor.constant,
      bool: codeMirror.syntax.fgColor.constant,
      variableName: codeMirror.syntax.fgColor.entity,
      variableName2: codeMirror.syntax.fgColor.storage,
      propertyName: codeMirror.syntax.fgColor.constant,
      typeName: codeMirror.syntax.fgColor.variable,
      className: codeMirror.syntax.fgColor.variable,
      namespace: codeMirror.syntax.fgColor.variable,
      macroName: codeMirror.syntax.fgColor.variable,
      labelName: codeMirror.syntax.fgColor.constant,
      number: codeMirror.syntax.fgColor.constant,
      string: codeMirror.syntax.fgColor.string,
      string2: codeMirror.syntax.fgColor.string,
      operator: codeMirror.matchingBracket.fgColor,
      punctuation: codeMirror.matchingBracket.fgColor,
      comment: codeMirror.syntax.fgColor.comment,
      meta: codeMirror.syntax.fgColor.support,
      invalid: codeMirror.syntax.fgColor.keyword,
      link: codeMirror.syntax.fgColor.string,
      heading: codeMirror.syntax.fgColor.entity,
      emphasis: codeMirror.syntax.fgColor.comment,
      strong: codeMirror.syntax.fgColor.comment,
      inserted: codeMirror.syntax.fgColor.string,
      deleted: codeMirror.syntax.fgColor.keyword,
    },
    language: {
      json: codeMirror.syntax.fgColor.constant,
      json5: codeMirror.syntax.fgColor.constant,
      yaml: codeMirror.syntax.fgColor.constant,
      css: codeMirror.syntax.fgColor.constant,
      html: codeMirror.syntax.fgColor.constant,
      xml: codeMirror.syntax.fgColor.constant,
    },
  };
}
