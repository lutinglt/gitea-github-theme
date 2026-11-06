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

// 注释来自 AI
export const codeMirror = {
  token: {
    /** 关键字
     * @example if else return function var let const
     */
    keyword: null,
    /** 原子值
     * @example true false null undefined
     */
    atom: null,
    /** 布尔值
     * @example true false
     */
    bool: null,
    /** 变量名
     * @example const foo = 1 中的 foo
     */
    variableName: null,
    /** 二级作用域变量名
     * @example 函数参数、局部变量
     */
    variableName2: null,
    /** 属性名
     * @example obj.name 中的 name
     */
    propertyName: null,
    /** 类型名
     * @example TypeScript 的 type、interface 名
     */
    typeName: null,
    /** 类名
     * @example class MyClass 中的 MyClass
     */
    className: null,
    /** 命名空间
     * @example namespace Foo 中的 Foo
     */
    namespace: null,
    /** 宏名
     * @example C 的 #define 宏名, Rust 的 macro_rules!
     */
    macroName: null,
    /** 标签名
     * @example goto label:, C 的 switch case 标签
     */
    labelName: null,
    /** 数字字面量
     * @example 123 3.14 0xFF
     */
    number: null,
    /** 字符串字面量
     * @example "hello" 'world'
     */
    string: null,
    /** 二级字符串
     * @example 模板字符串、正则字面量
     */
    string2: null,
    /** 运算符
     * @example + - * / = == &&
     */
    operator: null,
    /** 标点符号
     * @example , . : ; ( ) [ ] { }
     */
    punctuation: null,
    /** 注释
     * @example // 单行注释  多行注释
     */
    comment: null,
    /** 元信息
     * @example 预处理器指令、装饰器标记
     */
    meta: null,
    /** 无效/错误语法
     * @example 语法错误的标记
     */
    invalid: null,
    /** 链接
     * @example Markdown 中的 [link](url)
     */
    link: null,
    /** 标题
     * @example Markdown 中的 # Heading
     */
    heading: null,
    /** 强调 (斜体)
     * @example Markdown 中的 *italic*
     */
    emphasis: null,
    /** 加粗
     * @example Markdown 中的 **bold**
     */
    strong: null,
    /** 新增内容
     * @example diff 中的 + 新增行
     */
    inserted: null,
    /** 删除内容
     * @example diff 中的 - 删除行
     */
    deleted: null,
  },
  language: {
    /** JSON 语言中属性名的颜色
     * @example {"key": "value"} 中的 key
     */
    json: null,
    /** JSON5 语言中属性名的颜色
     * @example {unquotedKey: 'value'} 中的 unquotedKey
     */
    json5: null,
    /** YAML 语言中属性名的颜色
     * @example key: value 中的 key
     */
    yaml: null,
    /** CSS 语言中属性名的颜色
     * @example .selector { property: value; } 中的 property
     */
    css: null,
    /** HTML 语言中属性名的颜色
     * @example <div class="foo"> 中的 class
     */
    html: null,
    /** XML 语言中属性名的颜色
     * @example <element attr="value"> 中的 attr
     */
    xml: null,
  },
};
