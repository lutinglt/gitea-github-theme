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
import actions from "./actions";
import dashboard from "./dashboard";
import explore from "./explore";
import footer from "./footer";
import heatmap from "./heatmap";
import issues from "./issues";
import navbar from "./navbar";
import newrepo from "./newrepo";
import notification from "./notification";
import org from "./org";
import repo from "./repo";
import setting from "./setting";
import signin from "./signin";
import user from "./user";

export default cssCombine(
  actions,
  dashboard,
  explore,
  footer,
  heatmap,
  issues,
  navbar,
  newrepo,
  notification,
  org,
  repo,
  setting,
  signin,
  user
);
