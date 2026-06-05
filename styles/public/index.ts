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
import attached from "./attached"; // 附加样式
import base from "./base"; // 基础样式
import button from "./button"; // 按钮
import dropdown from "./dropdown"; // 下拉框
import input from "./input"; // 输入框
import label from "./label"; // 标签
import menu from "./menu"; // 菜单
import modal from "./modal"; // 弹窗
import other from "./other"; // 其他样式
import radius from "./radius"; // 圆角基础样式
import table from "./table"; // 表格
import tippy from "./tippy"; // 提示框
import transition from "./transition"; // 过渡效果

export default cssCombine(
  base, // 基础样式, 确保在其他样式之前
  radius, // 圆角基础样式, 确保在其他样式之前
  transition,
  table,
  button,
  dropdown,
  input,
  label,
  menu,
  modal,
  tippy,
  attached,
  other
);
