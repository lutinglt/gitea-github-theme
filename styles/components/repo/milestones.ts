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

import { themeVars } from "@gitea-github-theme/core";
import { css } from "@linaria/core";

export const milestone = css`
  /* 里程碑头部 */
  .milestone-header {
    gap: 16px;
    /* 进度条 */
    progress {
      height: 5px;
      width: 300px;
      max-width: 80vw;
    }
  }
  /* 里程碑 Issue 列表的进度条 */
  .milestone-progress-big {
    height: 8px;
  }
  /* 里程碑 Issue 列表 */
  .page-content.repository.milestone-issue-list {
    > .ui.container {
      > .flex-text-block:first-child {
        margin-bottom: 16px;
        > h1 {
          font-size: 32px;
          font-weight: 600;
          line-height: 48px;
          word-break: keep-all;
        }
        + .tw-flex {
          flex-direction: row !important;
          align-items: center;
          gap: 8px !important;
          padding-top: 8px;
          padding-bottom: 10px;
          font-size: 14px;
          color: ${themeVars.color.text.light.num1};
          strong {
            color: ${themeVars.color.text.self};
          }
          > .flex-text-block {
            gap: 8px !important;
          }
        }
      }
      > .divider {
        border-top-color: #0000;
      }
    }
  }
`;

// 避免手机/平板下菜单错位
export const milestoneMobile = css`
  @media (max-width: 767.98px) {
    .page-content.repository.milestone-issue-list > .ui.container > .flex-text-block:first-child + .tw-flex {
      flex-direction: column !important;
    }
  }
`;
