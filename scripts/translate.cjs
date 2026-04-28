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

const fs = require("fs");
const path = require("path");
const child_process = require("child_process");

const { ProxyAgent, setGlobalDispatcher } = require("undici");
const proxyUrl = process.env.HTTPS_PROXY || process.env.HTTP_PROXY || process.env.ALL_PROXY;
if (proxyUrl) {
  setGlobalDispatcher(new ProxyAgent(proxyUrl));
}

const dotenv = require("dotenv");
dotenv.config({ quiet: true });

const rootDir = path.join(__dirname, "..");
const pkgPath = path.join(rootDir, "package.json");
const pkg = JSON.parse(fs.readFileSync(pkgPath));

const githubSite = "https://raw.githubusercontent.com";
const giteaRepo = "go-gitea/gitea";
const githubBranchPath = "refs/heads/release";
const githubTagPath = "refs/tags";
const localePath = "options/locale";

const [major, minor, patch, tag = ""] = pkg.version.split(".");

console.log("Version:", pkg.version);
let versionPath = "";
if (tag.includes("rc") || patch.includes("latest")) {
  versionPath = `${githubBranchPath}/v${major}.${minor}`;
} else {
  versionPath = `${githubTagPath}/v${major}.${minor}.${patch}`;
}

const githubUrl = `${githubSite}/${giteaRepo}/${versionPath}/${localePath}`;
const locales = fs.readdirSync(path.join(rootDir, localePath)).filter(file => file.endsWith(".json"));

(async () => {
  for (const locale of locales) {
    const localUrl = `${githubUrl}/${locale}`;
    console.log("LocaleUrl:", localUrl);
    const themeLocale = JSON.parse(fs.readFileSync(path.join(rootDir, localePath, locale), "utf-8"));

    const response = await fetch(localUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    let content = await response.json();
    if (locale.includes("zh-CN")) {
      for (const key of Object.keys(content)) {
        if (typeof content[key] === "string") {
          content[key] = content[key].replaceAll("工单", "议题").replaceAll("合并请求", "拉取请求");
        }
      }
    }
    Object.assign(content, themeLocale);
    fs.mkdirSync(path.join(rootDir, "dist", localePath), { recursive: true });
    fs.writeFileSync(path.join(rootDir, "dist", localePath, locale), JSON.stringify(content, null, 2));
  }

  if (process.env.SSH_SERVER && process.env.GITEA_PATH && process.env.SSH_USER) {
    const cmd = `scp -r dist/options ${process.env.SSH_USER}@${process.env.SSH_SERVER}:${process.env.GITEA_PATH}`;
    console.log("[translate] exec:", cmd);
    child_process.execSync(cmd, { stdio: "inherit" });
  }
})();
