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

import { defineConfig } from "oxfmt"

export default defineConfig({
  printWidth: 120,
  tabWidth: 2,
  useTabs: false,
  semi: false,
  singleQuote: false,
  quoteProps: "as-needed",
  jsxSingleQuote: false,
  trailingComma: "es5",
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: "avoid",
  objectWrap: "preserve",
  proseWrap: "always",
  htmlWhitespaceSensitivity: "css",
  endOfLine: "lf",
  singleAttributePerLine: false,
  insertFinalNewline: true,
  sortImports: { order: "asc", ignoreCase: true, sortSideEffects: true },
  sortPackageJson: { sortScripts: true },
  ignorePatterns: ["**/node_modules/**", "**/dist/**"],
})
