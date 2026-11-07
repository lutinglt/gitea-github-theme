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

import type { Primer } from "@lutinglt/gitea-github-theme/assets"

import type { DeepPartial } from "../utils"
import type { Ansi, Console, Diff, GitHub, Message, Named, Other, Primary, Secondary, Series16 } from "./gitea"

export type GitHubColor = {
  isDarkTheme: boolean
  themeExtra: { button: { primary: { fgColor: { accent: string } } } }
} & Primer

export type GiteaColor = {
  isDarkTheme: boolean
  primary: Primary
  secondary: Secondary
  named: Named
  message: Message
  ansi: Ansi
  console: Console
  diff: Diff
  other: Other
  series16: Series16
  /** 自定义 GitHub 主题变量映射，未填写的字段自动使用默认值 */
  github?: DeepPartial<GitHub>
}

export type ThemeColor = {
  /** 用于标识当前是否为暗色主题: `true` 暗色 `false` 亮色 */
  isDarkTheme: boolean
  /** 主色调(强调色) */
  primary: string
  /** 主色调的对比色, 一般用于 `color` 属性, primary 用于 `background-color` */
  primaryContrast: string
  /** 副色调(边框色) */
  secondary: string
  /** 基础颜色 */
  base: {
    /** 红色 */
    red: string
    /** 橙色 */
    orange: string
    /** 黄色 */
    yellow: string
    /** 黄绿色/橄榄色 */
    olive: string
    /** 绿色 */
    green: string
    /** 蓝绿色/青色(偏绿) */
    teal: string
    /** 蓝绿色/青色(偏蓝) */
    cyan: string
    /** 蓝色 */
    blue: string
    /** 蓝紫色/紫罗兰色 */
    violet: string
    /** 紫色 */
    purple: string
    /** 粉红色 */
    pink: string
    /** 棕色 */
    brown: string
    /** 黑色 */
    black: string
    /** 灰色 */
    grey: string
    /** 金色 */
    gold: string
    /** 白色 */
    white: string
  }
  /** Action 日志 */
  console: Console
  /** 提交代码对比 */
  diff: Diff
  /** 其他 */
  other: Other
  /** 仅适用于本主题的全局变量, 取自 Github */
  github: GitHub
  /** 覆盖默认生成的颜色 */
  override?: {
    ansi?: Ansi
    message?: Message
    named?: Named
    series16?: Series16
  }
}
