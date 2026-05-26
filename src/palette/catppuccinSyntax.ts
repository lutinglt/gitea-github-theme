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

import type { CatppuccinFlavor } from "@catppuccin/palette";
import { rgba } from "polished";
import type { Syntax } from "../types";

/**
 * @source https://github.com/catppuccin/catppuccin/blob/main/docs/style-guide.md
 * @source https://github.com/catppuccin/userstyles/blob/main/styles/github/catppuccin.user.less
 * @source https://github.com/catppuccin/gitea/blob/main/src/_chroma.scss
 */
export function catppuccin2Syntax(flavor: CatppuccinFlavor): Syntax {
  return {
    keyword: flavor.colors.mauve.hex,
    bool: flavor.colors.sky.hex,
    control: flavor.colors.peach.hex,
    name: flavor.colors.lavender.hex,
    type: flavor.colors.yellow.hex,
    number: flavor.colors.peach.hex,
    operator: flavor.colors.sky.hex,
    regexp: flavor.colors.blue.hex,
    string: flavor.colors.green.hex,
    comment: flavor.colors.overlay2.hex,
    invalid: flavor.colors.red.hex,
    link: flavor.colors.blue.hex,
    tag: flavor.colors.yellow.hex,
    attribute: flavor.colors.yellow.hex,
    property: flavor.colors.blue.hex,
    variable: flavor.colors.peach.hex,
    stringSpecial: flavor.colors.green.hex,
    escape: flavor.colors.blue.hex,
    entity: flavor.colors.blue.hex,
    preproc: flavor.colors.blue.hex,
    preprocFile: flavor.colors.blue.hex,
    decorator: flavor.colors.pink.hex,
    namespace: flavor.colors.yellow.hex,
    namePseudo: flavor.colors.peach.hex,
    commentSpecial: flavor.colors.overlay0.hex,
    text: flavor.colors.text.hex,
    textAlt: flavor.colors.subtext0.hex,
    punctuation: flavor.colors.overlay2.hex,
    whitespace: flavor.colors.overlay0.hex,
    diffFg: rgba(flavor.colors.yellow.hex, 0.4),
    deletedBg: rgba(flavor.colors.red.hex, 0.4),
    insertedBg: rgba(flavor.colors.green.hex, 0.4),
    emph: flavor.colors.yellow.hex,
    strong: flavor.colors.yellow.hex,
    heading: flavor.colors.red.hex,
    subheading: flavor.colors.sky.hex,
    output: flavor.colors.peach.hex,
    prompt: flavor.colors.overlay0.hex,
    traceback: flavor.colors.maroon.hex,
    matchingBracketBg: rgba(flavor.colors.teal.hex, 0.4),
    nonmatchingBracketBg: rgba(flavor.colors.red.hex, 0.4),
  };
}
