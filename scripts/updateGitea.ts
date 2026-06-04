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
import { pkg, rootDir, setGlobalProxy } from "./utils";

setGlobalProxy();

const githubSite = "https://raw.githubusercontent.com";
const giteaRepo = "go-gitea/gitea";
const githubTagPath = "refs/tags";
const localGiteaPath = path.join(rootDir, "gitea");
const [major, minor, patch = ""] = pkg.version.split(".");
console.log("Version:", pkg.version);
const versionPath = `${githubTagPath}/v${major}.${minor}.${patch}`;
const githubBaseUrl = `${githubSite}/${giteaRepo}/${versionPath}`;

// 递归读取所有子目录中的文件
function readFilesRecursively(dir: string) {
  const results: string[] = [];
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // 如果是目录，递归读取
      results.push(...readFilesRecursively(filePath));
    } else {
      // 添加到结果中（相对于 gitea 目录的相对路径）
      const relativePath = path.relative(localGiteaPath, filePath);
      results.push(relativePath);
    }
  }

  return results;
}

// 读取 gitea 目录下所有文件
const files = readFilesRecursively(localGiteaPath);
(async () => {
  for (const file of files) {
    const fileUrl = `${githubBaseUrl}/${file}`;

    const response = await fetch(fileUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const content = await response.text();
    fs.writeFileSync(path.join(localGiteaPath, file), content);
    console.log("✔︎ FileUrl:", fileUrl);
  }
})();
