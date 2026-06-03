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

import { css } from "@gitea-github-theme/core";

// 注册/登录界面
export const signIn = css`
  .page-content.user.signin {
    .ui.grid {
      justify-content: center;
      > .column {
        width: 384px;
        padding: 16px;
        > .ui.container {
          max-width: unset;
        }
      }
    }
    .ui.top.attached.header {
      border: 0;
      font-size: 20px;
      font-weight: 600;
      background-color: unset !important;
      text-align: center;
      padding: 16px;
    }

    .ui.attached.segment {
      border: 0;
      padding: 16px 0 0 0;
      .field:not(.inline) {
        label {
          font-size: 14px;
          font-weight: 600;
        }
        input {
          background: unset;
          padding: 5px 12px;
          height: 40px;
          font-size: 16px;
        }
      }
      .button {
        height: 40px;
      }
      .divider.divider-text {
        margin: 20px 0px;
      }
      #oauth2-login-navigator-inner {
        gap: 8px;
        .ui.button svg {
          width: 18px;
        }
      }
    }
    .ui.top.attached.header.segment {
      font-size: 14px;
      font-weight: 400;
      gap: 16px;
      .signin-passkey {
        font-weight: 500;
      }
    }
  }
`;
