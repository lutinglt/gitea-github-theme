import type { Chroma } from "src/types";

export type prettylightsColor = {
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

export function prettylights2Chroma(prettylights: prettylightsColor): Chroma {
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
      type: prettylights.syntax.markup.bold,
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
      backtick: prettylights.syntax.string,
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
