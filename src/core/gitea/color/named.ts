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

const baseColor = { self: null, light: null, dark: { num1: null, num2: null } };

const commitColor = {
  /** 提交哈希值颜色 */
  badge: {
    /** 边框色 */
    self: null,
    /** 背景色 */
    bg: null,
    /** 悬停时背景色 */
    hover: {
      bg: null,
    },
  },
};

export const named = {
  /** 红色/提交警告签名颜色 */
  red: { ...commitColor, ...baseColor },
  /** 橙色/提交未匹配签名颜色 */
  orange: { ...commitColor, ...baseColor },
  /** 黄色/提交未信任签名颜色 */
  yellow: { ...commitColor, ...baseColor },
  olive: baseColor,
  /** 绿色/提交信任签名颜色 */
  green: { ...commitColor, ...baseColor },
  teal: baseColor,
  blue: baseColor,
  violet: baseColor,
  purple: baseColor,
  pink: baseColor,
  brown: baseColor,
  black: baseColor,
  grey: { self: null, light: null },
  gold: null,
  white: null,
};
