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

const root = ":root";
const metaInfo = "gitea-theme-meta-info";
const chroma = ".chroma";
const codeMirror = ".code-editor-container";
const overlayAppear = "overlayAppear";
const overlayAppearDown = "overlayAppearDown";
const overlayAppearUp = "overlayAppearUp";
const emoji = `.emoji[data-alias="heavy_check_mark"],
.emoji[data-alias="currency_exchange"],
.emoji[data-alias="top"],
.emoji[data-alias="end"],
.emoji[data-alias="on"],
.emoji[data-alias="soon"],
.emoji[data-alias="heavy_dollar_sign"],
.emoji[data-alias="copyright"],
.emoji[data-alias="registered"],
.emoji[data-alias="tm"],
.emoji[data-alias="heavy_multiplication_x"],
.emoji[data-alias="heavy_plus_sign"],
.emoji[data-alias="heavy_minus_sign"],
.emoji[data-alias="heavy_division_sign"],
.emoji[data-alias="curly_loop"],
.emoji[data-alias="loop"],
.emoji[data-alias="wavy_dash"],
.emoji[data-alias="feet"],
.emoji[data-alias="musical_note"],
.emoji[data-alias="notes"]
`;

export default {
  root,
  metaInfo,
  chroma,
  codeMirror,
  overlayAppear,
  overlayAppearDown,
  overlayAppearUp,
  emoji,
} as const;
