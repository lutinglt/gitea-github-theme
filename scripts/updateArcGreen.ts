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

import fs from "node:fs";
import path from "node:path";
import { rootDir, setGlobalProxy } from "./utils";

setGlobalProxy();

const githubSite = "https://raw.githubusercontent.com";
const githubRepo = "lsd-techno/gitea-theme";
const githubBranchPath = "refs/heads/main";
const localGiteaPath = path.join(rootDir, "assets");
const githubBaseUrl = `${githubSite}/${githubRepo}/${githubBranchPath}`;
const file = "theme-arc-green-updated.css";
const fileUrl = `${githubBaseUrl}/${file}`;

const response = await fetch(fileUrl);
if (!response.ok) {
  throw new Error(`HTTP error! status: ${response.status}`);
}
const content = await response.text();
fs.writeFileSync(path.join(localGiteaPath, file), content);
console.log("✔︎ FileUrl:", fileUrl);
