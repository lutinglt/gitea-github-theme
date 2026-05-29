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
import { execSync } from "node:child_process";

dotenv.config({ quiet: true });

const PREFIX = "theme-github-";
const NAME = "SyncTheme";

// 上传到服务器
const server = process.env.SSH_SERVER;
const user = process.env.SSH_USER || "root";
const theme_path = process.env.GITEA_THEME_PATH;
const gitea_path = process.env.GITEA_PATH;
const sync_tmpl = process.env.SYNC_TMPL === "true";
if (server) {
  try {
    if (theme_path) {
      const cmd = `scp dist/${PREFIX}*.css ${user}@${server}:${theme_path}`;
      console.log(`[${NAME}]:`, cmd);
      execSync(cmd, { stdio: "inherit" });
    } else {
      console.log(`[${NAME}] no GITEA_THEME_PATH, skip upload theme`);
    }
    if (gitea_path) {
      if (sync_tmpl) {
        const cmd = `scp -r templates ${user}@${server}:${gitea_path}`;
        console.log(`[${NAME}]:`, cmd);
        execSync(cmd, { stdio: "inherit" });
      } else {
        console.log(`[${NAME}] not set SYNC_TMPL=true, skip upload templates`);
      }
    } else {
      console.log(`[${NAME}] no GITEA_PATH, skip upload templates`);
    }
  } catch (e) {
    console.warn(`[${NAME}] upload failed:`, e);
  }
} else {
  console.log(`[${NAME}] no SSH_SERVER, skip upload`);
}
