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
import { selectors } from "src";
import { chromaVars, type Chroma } from "src/types";

function chromaStyle(selector: string, style: StyleRule): void;
function chromaStyle(selector: string[], style: StyleRule): void;
function chromaStyle(selector: string | string[], style: StyleRule): void {
  globalStyle((Array.isArray(selector) ? selector : [selector]).map(s => `${selectors.chroma} ${s}`).join(","), style);
}
// 样式来源: https://github.com/go-gitea/gitea/blob/main/web_src/css/chroma/base.css
function createChromaBase(): void {
  // LineTableTD
  chromaStyle(".lntd", { verticalAlign: "top", padding: 0, margin: 0, border: 0 });
  // LineTable
  chromaStyle(".lntable", {
    borderSpacing: 0,
    padding: 0,
    margin: 0,
    border: 0,
    width: "auto",
    overflow: "auto",
    display: "block",
  });
  // LineHighlight
  chromaStyle(".hl", { display: "block", width: "100%" });
  // LineNumbersTable
  chromaStyle([".lnt", ".ln"], { marginRight: "0.4em", padding: "0 0.4em" });
  // GenericStrong
  chromaStyle(".gs", { fontWeight: "var(--font-weight-semibold)" });
  // GenericUnderline
  chromaStyle(".gl", { textDecoration: "underline" });
}
// 样式来源: https://github.com/alecthomas/chroma/blob/6428fb4e65f3c1493491571c8a6a8f1add1da822/types.go#L208
function createChromaCode(): void {
  // TextWhiteSpace
  chromaStyle(".w", { color: chromaVars.textWhiteSpace });
  // Errorvoid
  chromaStyle(".err", { color: chromaVars.err });
  // Keyword
  chromaStyle(".k", { color: chromaVars.keyword.self });
  chromaStyle(".kc", { color: chromaVars.keyword.constant });
  chromaStyle(".kd", { color: chromaVars.keyword.declaration });
  chromaStyle(".kn", { color: chromaVars.keyword.namespace });
  chromaStyle(".kp", { color: chromaVars.keyword.pseudo });
  chromaStyle(".kr", { color: chromaVars.keyword.reserved });
  chromaStyle(".kt", { color: chromaVars.keyword.type });
  // Name
  chromaStyle(".n", { color: chromaVars.name.self });
  chromaStyle(".na", { color: chromaVars.name.attribute });
  chromaStyle(".nb", { color: chromaVars.name.builtin });
  chromaStyle(".bp", { color: chromaVars.name.builtinPseudo });
  chromaStyle(".nc", { color: chromaVars.name.class });
  chromaStyle(".no", { color: chromaVars.name.constant });
  chromaStyle(".nd", { color: chromaVars.name.decorator });
  chromaStyle(".ni", { color: chromaVars.name.entity });
  chromaStyle(".ne", { color: chromaVars.name.exception });
  chromaStyle(".nf", { color: chromaVars.name.function });
  chromaStyle(".fm", { color: chromaVars.name.functionMagic });
  chromaStyle(".py", { color: chromaVars.name.property });
  chromaStyle(".nl", { color: chromaVars.name.label });
  chromaStyle(".nn", { color: chromaVars.name.namespace });
  chromaStyle(".nx", { color: chromaVars.name.other });
  chromaStyle(".nt", { color: chromaVars.name.tag });
  chromaStyle(".nv", { color: chromaVars.name.variable });
  chromaStyle(".vc", { color: chromaVars.name.variableClass });
  chromaStyle(".vg", { color: chromaVars.name.variableGlobal });
  chromaStyle(".vi", { color: chromaVars.name.variableInstance });
  chromaStyle(".vm", { color: chromaVars.name.variableMagic });
  // Literal
  chromaStyle(".l", { color: chromaVars.literal.self });
  chromaStyle(".ld", { color: chromaVars.literal.date });
  // String
  chromaStyle(".s", { color: chromaVars.string.self });
  chromaStyle(".sa", { color: chromaVars.string.affix });
  chromaStyle(".sb", { color: chromaVars.string.backtick });
  chromaStyle(".sc", { color: chromaVars.string.char });
  chromaStyle(".dl", { color: chromaVars.string.delimiter });
  chromaStyle(".sd", { color: chromaVars.string.doc });
  chromaStyle(".s2", { color: chromaVars.string.double });
  chromaStyle(".se", { color: chromaVars.string.escape });
  chromaStyle(".sh", { color: chromaVars.string.heredoc });
  chromaStyle(".si", { color: chromaVars.string.interpol });
  chromaStyle(".sx", { color: chromaVars.string.other });
  chromaStyle(".sr", { color: chromaVars.string.regex });
  chromaStyle(".s1", { color: chromaVars.string.single });
  chromaStyle(".ss", { color: chromaVars.string.symbol });
  // Number
  chromaStyle(".m", { color: chromaVars.number.self });
  chromaStyle(".mb", { color: chromaVars.number.bin });
  chromaStyle(".mf", { color: chromaVars.number.float });
  chromaStyle(".mh", { color: chromaVars.number.hex });
  chromaStyle(".mi", { color: chromaVars.number.integer });
  chromaStyle(".il", { color: chromaVars.number.integerLong });
  chromaStyle(".mo", { color: chromaVars.number.oct });
  // Operator
  chromaStyle(".o", { color: chromaVars.operator.self });
  chromaStyle(".ow", { color: chromaVars.operator.word });
  chromaStyle(".or", { color: chromaVars.operator.reserved });
  // Punctuation
  chromaStyle(".p", { color: chromaVars.punctuation });
  // Comment
  chromaStyle(".c", { color: chromaVars.comment.self });
  chromaStyle(".ch", { color: chromaVars.comment.hashbang });
  chromaStyle(".cm", { color: chromaVars.comment.multiline });
  chromaStyle(".cp", { color: chromaVars.comment.preproc });
  chromaStyle(".cpf", { color: chromaVars.comment.preprocFile });
  chromaStyle(".c1", { color: chromaVars.comment.single });
  chromaStyle(".cs", { color: chromaVars.comment.special });
  // Generic
  chromaStyle(".g", { color: chromaVars.generic.self });
  chromaStyle(".gd", { color: chromaVars.generic.deleted });
  chromaStyle(".ge", { color: chromaVars.generic.emph });
  chromaStyle(".gr", { color: chromaVars.generic.error });
  chromaStyle(".gh", { color: chromaVars.generic.heading });
  chromaStyle(".gi", { color: chromaVars.generic.inserted });
  chromaStyle(".go", { color: chromaVars.generic.output });
  chromaStyle(".gp", { color: chromaVars.generic.prompt });
  chromaStyle(".gs", { color: chromaVars.generic.strong });
  chromaStyle(".gu", { color: chromaVars.generic.subheading });
  chromaStyle(".gt", { color: chromaVars.generic.traceback });
  chromaStyle(".gl", { color: chromaVars.generic.underline });
}
/** 创建 chroma 样式 */
export function createChroma(chroma: Chroma): void {
  createChromaBase();
  createChromaCode();
  createGlobalTheme(selectors.chroma, chromaVars, chroma);
}
