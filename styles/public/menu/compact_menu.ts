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

import { css, otherThemeVars, themeVars } from "@lutinglt/gitea-github-theme/core";

// 单行双选项菜单
export const smallCompactMenu = css`
  /* 编辑/预览切换菜单(仓库编辑文件时的编辑器操作栏左侧) */
  .page-content.repository.file.editor .repo-view-content .ui.edit.form .ui.top.attached.header,
  /* 订阅/关注切换菜单(应只选中订阅/关注页面, 不能选中通知页面) */
  .page-content.user.notification > .ui.container:has(.flex-list),
  /* 里程碑/标签切换菜单(里程碑页) */
  .page-content.repository.milestones .list-header,
  /* 里程碑/标签切换菜单(新建里程碑页) */
  .page-content.repository.new.milestone .issue-navbar,
  /* 里程碑/标签切换菜单(标签页) */
  .page-content.repository.labels .issue-navbar {
    .ui.compact.small.menu.small-menu-items {
      background: ${themeVars.github.controlTrack.bgColor.rest} !important;
      border: 1px solid ${themeVars.color.secondary.self};
      font-size: 14px;
      gap: 4px;
      height: 32px;
      min-height: 32px !important;
      > .item {
        background: unset !important;
        border: 1px solid #0000;
        border-radius: ${otherThemeVars.border.radius};
        padding: 6px 12px !important;
        &.active {
          background: ${themeVars.github.controlKnob.bgColor.rest} !important;
          border-color: ${themeVars.color.secondary.self};
          font-weight: 600;
          margin-top: -1px;
          margin-bottom: -1px;
          &:first-child {
            margin-left: -1px;
            margin-right: 1px;
          }
          &:last-child {
            margin-right: -1px;
            margin-left: 1px;
          }
        }
        &::before {
          display: none;
        }
        &:not(.active) {
          top: 2px;
          padding: 4px 12px !important;
          height: calc(100% - 4px);
          position: relative;
          /* 该方案只适用于 2 个 item 的情况 */
          /* left / right 数值为 gap 数值的一半 */
          &:first-child {
            left: 2px;
          }
          &:last-child {
            right: 2px;
          }
          &:hover {
            background: ${themeVars.github.control.transparent.bgColor.hover} !important;
          }
        }
      }
    }
  }
`;
