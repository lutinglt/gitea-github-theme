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
import { createGlobalTheme, globalStyle, type StyleRule } from "@vanilla-extract/css";
import selectors from "../selectors";
import { codeMirrorVars, type CodeMirror } from "../types";

function codeMirrorStyle(selector: string, style: StyleRule): void;
function codeMirrorStyle(selector: string[], style: StyleRule): void;
function codeMirrorStyle(selector: string | string[], style: StyleRule): void {
  globalStyle(
    (Array.isArray(selector) ? selector : [selector]).map(s => `${selectors.codeMirror} ${s}`).join(","),
    style
  );
}
// 样式来源: https://github.com/go-gitea/gitea/blob/ce089f498bce32305b2d9e8c6adfd8cb7c82f88f/web_src/css/modules/codeeditor.css#L506
function createCodeMirrorBase(): void {
  codeMirrorStyle(".tok-keyword", { color: codeMirrorVars.token.keyword });
  codeMirrorStyle(".tok-atom", { color: codeMirrorVars.token.atom });
  codeMirrorStyle(".tok-bool", { color: codeMirrorVars.token.bool });
  codeMirrorStyle(".tok-variableName", { color: codeMirrorVars.token.variableName });
  codeMirrorStyle(".tok-variableName2", { color: codeMirrorVars.token.variableName2 });
  codeMirrorStyle(".tok-propertyName", { color: codeMirrorVars.token.propertyName });
  codeMirrorStyle(".tok-typeName", { color: codeMirrorVars.token.typeName });
  codeMirrorStyle(".tok-className", { color: codeMirrorVars.token.className });
  codeMirrorStyle(".tok-namespace", { color: codeMirrorVars.token.namespace });
  codeMirrorStyle(".tok-macroName", { color: codeMirrorVars.token.macroName });
  codeMirrorStyle(".tok-labelName", { color: codeMirrorVars.token.labelName });
  codeMirrorStyle(".tok-number", { color: codeMirrorVars.token.number });
  codeMirrorStyle(".tok-string", { color: codeMirrorVars.token.string });
  codeMirrorStyle(".tok-string2", { color: codeMirrorVars.token.string2 });
  codeMirrorStyle(".tok-operator", { color: codeMirrorVars.token.operator });
  codeMirrorStyle(".tok-punctuation", { color: codeMirrorVars.token.punctuation });
  codeMirrorStyle(".tok-comment", { color: codeMirrorVars.token.comment });
  codeMirrorStyle(".tok-meta", { color: codeMirrorVars.token.meta });
  codeMirrorStyle(".tok-invalid", { color: codeMirrorVars.token.invalid });
  codeMirrorStyle(".tok-link", { color: codeMirrorVars.token.link });
  codeMirrorStyle(".tok-heading", { color: codeMirrorVars.token.heading });
  codeMirrorStyle(".tok-emphasis", { color: codeMirrorVars.token.emphasis });
  codeMirrorStyle(".tok-strong", { color: codeMirrorVars.token.strong });
  codeMirrorStyle(".tok-inserted", { color: codeMirrorVars.token.inserted });
  codeMirrorStyle(".tok-deleted", { color: codeMirrorVars.token.deleted });
}
// 样式来源: https://github.com/go-gitea/gitea/blob/ce089f498bce32305b2d9e8c6adfd8cb7c82f88f/web_src/css/modules/codeeditor.css#L533
function createCodeMirrorSpecific(): void {
  // 语言样式
  function langStyle(lang: string, style: StyleRule): void {
    globalStyle(`${selectors.codeMirror}[data-language="${lang}"] .tok-propertyName`, style);
  }
  langStyle("json", { color: codeMirrorVars.language.json });
  langStyle("json5", { color: codeMirrorVars.language.json5 });
  langStyle("yaml", { color: codeMirrorVars.language.yaml });
  langStyle("css", { color: codeMirrorVars.language.css });
  langStyle("html", { color: codeMirrorVars.language.html });
  langStyle("xml", { color: codeMirrorVars.language.xml });
  // 特殊样式
  // 语法中导入部分的变量变为命名空间样式
  codeMirrorStyle(".tok-punctuation+.tok-variableName.tok-definition", { color: codeMirrorVars.token.namespace });
  // 避免锚中变量, 变量后接的是 .tok-operator
  codeMirrorStyle(".tok-keyword+.tok-variableName.tok-definition:has(+.tok-punctuation)", {
    color: codeMirrorVars.token.namespace,
  });
  // keywork + variableName + punctuation + typeName 这种情况还原变量颜色
  codeMirrorStyle(".tok-keyword+.tok-variableName.tok-definition:has(+.tok-punctuation+.tok-typeName)", {
    color: codeMirrorVars.token.variableName,
  });
}

/** 创建 CodeMirror 样式 */
export function createCodeMirror(codeMirror: CodeMirror): void {
  createCodeMirrorBase();
  createCodeMirrorSpecific();
  createGlobalTheme(selectors.codeMirror, codeMirrorVars, codeMirror);
}
