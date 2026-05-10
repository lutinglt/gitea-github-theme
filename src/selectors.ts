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
const emoji = `.emoji[aria-label="check mark"],
.emoji[aria-label="currency exchange"],
.emoji[aria-label="TOP arrow"],
.emoji[aria-label="END arrow"],
.emoji[aria-label="ON! arrow"],
.emoji[aria-label="SOON arrow"],
.emoji[aria-label="heavy dollar sign"],
.emoji[aria-label="copyright"],
.emoji[aria-label="registered"],
.emoji[aria-label="trade mark"],
.emoji[aria-label="multiply"],
.emoji[aria-label="plus"],
.emoji[aria-label="minus"],
.emoji[aria-label="divide"],
.emoji[aria-label="curly loop"],
.emoji[aria-label="double curly loop"],
.emoji[aria-label="wavy dash"],
.emoji[aria-label="paw prints"],
.emoji[aria-label="musical note"],
.emoji[aria-label="musical notes"]
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
