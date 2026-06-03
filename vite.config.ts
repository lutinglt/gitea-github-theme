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

import * as dotenv from "dotenv";
import * as lightningcss from "lightningcss";
import fs from "node:fs";
import path from "node:path";
import { defineConfig } from "vite";
import { giteaGitHubThemePlugin } from "./src/vite-plugin";

dotenv.config({ quiet: true });

// 版本号: 版本号.YYMMDD
const pkg = JSON.parse(fs.readFileSync("package.json", "utf-8"));
const now = new Date();
const year = now.getFullYear().toString().slice(-2);
const month = (now.getMonth() + 1).toString().padStart(2, "0");
const day = now.getDate().toString().padStart(2, "0");

export default defineConfig({
  define: {
    __THEME_VERSION__: JSON.stringify(`${pkg.version}.${year}${month}${day}`),
  },
  resolve: {
    alias: {
      "@gitea-github-theme/core": path.resolve(__dirname, "src"),
      "@gitea-github-theme/styles": path.resolve(__dirname, "styles"),
      "@gitea-github-theme/themes": path.resolve(__dirname, "themes"),
      "@gitea-github-theme/primer": path.resolve(__dirname, "primer"),
    },
    extensions: [".js", ".ts", ".css.ts"],
  },
  css: {
    transformer: "lightningcss",
    lightningcss: {
      exclude: lightningcss.Features.LightDark, // 不生成 LightningCSS 的主题变量
    },
  },
  plugins: [giteaGitHubThemePlugin()],
});
