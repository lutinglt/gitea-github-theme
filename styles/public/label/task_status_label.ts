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

import { css, themeVars } from "@lutinglt/gitea-github-theme/core";

// 任务状态标签, 目前仅在管理员页面 Runner 状态中看到
export const taskStatusLabel = css`
  .runner-container .ui.label.task-status- {
    &success {
      color: ${themeVars.color.success.text};
      border: 1px solid ${themeVars.color.success.border};
      background: ${themeVars.color.success.bg};
    }

    &failure {
      color: ${themeVars.color.error.text};
      border: 1px solid ${themeVars.color.error.border};
      background: ${themeVars.color.error.bg.self};
    }

    &running,
    &skipped {
      color: ${themeVars.color.info.text};
      border: 1px solid ${themeVars.color.info.border};
      background: ${themeVars.color.info.bg};
    }

    &cancelled,
    &blocked {
      color: ${themeVars.color.warning.text};
      border: 1px solid ${themeVars.color.warning.border};
      background: ${themeVars.color.warning.bg};
    }
  }
`;
