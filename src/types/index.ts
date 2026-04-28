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

import type { MapLeafNodes } from "src/core/types";
import * as color from "./color";

/** 代码高亮色 */
export type Chroma = MapLeafNodes<typeof color.chroma, string>;
/** 主色调(强调色) */
export type Primary = MapLeafNodes<typeof color.primary, string>;
/** 副色调(边框色) */
export type Secondary = MapLeafNodes<typeof color.secondary, string>;
/** 基础颜色 */
export type Named = MapLeafNodes<typeof color.named, string>;
/** 提示消息 */
export type Message = MapLeafNodes<typeof color.message, string>;
/** Actions 日志 ANSI 颜色 */
export type Ansi = MapLeafNodes<typeof color.ansi, string>;
/** Actions 颜色 */
export type Console = MapLeafNodes<typeof color.console, string>;
/** 代码差异对比颜色 */
export type Diff = MapLeafNodes<typeof color.diff, string>;
/** 其他颜色 */
export type Other = MapLeafNodes<typeof color.other, string>;
/** 仅限本主题的 Github 颜色 */
export type Github = MapLeafNodes<typeof color.github, string>;
