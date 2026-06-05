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

import { cssCombine } from "@lutinglt/gitea-github-theme/core";
import clone from "./clone";
import commit from "./commit";
import diff from "./diff";
import milestones from "./milestones";
import packages from "./packages";
import release from "./release";
import repo from "./repo";
import repoFileView from "./repo_file_view";
import repoFiles from "./repo_files";
import repoSidebar from "./repo_sidebar";

export default cssCombine(
  clone,
  commit,
  diff,
  milestones,
  packages,
  release,
  repo,
  repoFileView,
  repoFiles,
  repoSidebar
);
