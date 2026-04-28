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

const num = { num1: null, num2: null, num3: null, num4: null, num5: null, num6: null, num7: null };

const alpha = {
  num10: null,
  num20: null,
  num30: null,
  num40: null,
  num50: null,
  num60: null,
  num70: null,
  num80: null,
  num90: null,
};

export const primary = { self: null, contrast: null, dark: num, light: num, alpha: alpha, hover: null, active: null };

export const secondary = {
  self: null,
  dark: { num8: null, num9: null, num10: null, num11: null, num12: null, num13: null, ...num },
  light: { num1: null, num2: null, num3: null, num4: null },
  alpha: alpha,
  button: null,
  hover: null,
  active: null,
};
