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

const ansiColor = {
  /** 黑色 */
  black: null,
  /** 红色 */
  red: null,
  /** 绿色 */
  green: null,
  /** 黄色 */
  yellow: null,
  /** 蓝色 */
  blue: null,
  /** 品红 */
  magenta: null,
  /** 青色 */
  cyan: null,
  /** 白色 */
  white: null,
};

export const ansi = {
  /** 亮色 */
  bright: ansiColor,
  ...ansiColor,
};

export const console = {
  /** Action 页面日志部分字体颜色 */
  fg: {
    /** 亮色用于标题或步骤标题激活时 */
    self: null,
    /** 暗色用于副标题或步骤标题 */
    subtle: null,
  },
  /** Action 页面日志部分背景色 */
  bg: null,
  /** Action 页面日志部分边框色 */
  border: null,
  /** Action 页面日志部分步骤标题激活颜色 */
  activeBg: "color-console-active-bg",
  /** Action 页面日志部分步骤标题悬停颜色 */
  hoverBg: "color-console-hover-bg",
  /** Action 页面日志部分设置菜单颜色 */
  menu: {
    /** 菜单背景色 */
    bg: null,
    /** 菜单边框色 */
    border: null,
  },
  /** Action 页面日志部分里链接颜色*/
  link: null,
};
