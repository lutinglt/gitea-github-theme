// 注释来自 AI
export const chroma = {
  textWhiteSpace: "text-white-space",
  err: null,
  keyword: {
    /** 所有关键字
     * @example class function var if else return
     */
    self: null,
    /** 常量关键字
     * @example true false null
     */
    constant: null,
    /** 声明关键字
     * @example var let const
     */
    declaration: null,
    /** 命名空间关键字
     * @example package import export
     */
    namespace: null,
    /** 伪关键字
     * @example this super __init__
     */
    pseudo: null,
    /** 保留关键字
     * @example yield await goto
     */
    reserved: null,
    /** 类型关键字
     * @example int float string bool
     */
    type: null,
  },
  name: {
    /** 通用标识符 */
    self: null,
    /** 属性名
     * @example obj.foo HTML/XML 属性名 id="foo"
     */
    attribute: null,
    /** 内置函数/对象
     * @example Math.PI Math.max
     */
    builtin: null,
    /** 内置伪标识符
     * @example this super self
     */
    builtinPseudo: null,
    /** 类名 */
    class: null,
    /** 常量名 */
    constant: null,
    /** 装饰器 */
    decorator: null,
    /** 实体名
     * @example HTML实体名 &lt; &gt; &amp;
     */
    entity: null,
    /** 异常类名 */
    exception: null,
    /** 函数名 */
    function: null,
    /** 魔术方法名
     * @example __init__ __str__
     */
    functionMagic: null,
    /** 对象属性 */
    property: null,
    /** 标签名
     * @example 跳转标签
     */
    label: null,
    /** 命名空间 */
    namespace: null,
    /** 其他未归类的标识符 */
    other: null,
    /** 标签名
     * @example 跳转标签
     */
    tag: null,
    /** 变量名 */
    variable: null,
    /** 类变量 */
    variableClass: null,
    /** 全局变量 */
    variableGlobal: null,
    /** 实例变量 */
    variableInstance: null,
    /** 魔术变量
     * @example __name__ __doc__
     */
    variableMagic: null,
  },
  literal: {
    /** 通用字面量 */
    self: null,
    /** 日期字面量
     * @example SQL 日期
     */
    date: null,
  },
  string: {
    /** 通用字符串 */
    self: null,
    /** 字符串前缀/后缀
     * @example f"..." 的 f
     */
    affix: null,
    /** 反引号字符串
     * @example `string`
     */
    backtick: null,
    /** 字符字面量
     * @example 'a'
     */
    char: null,
    /** 字符串分隔符
     * @example 引号自身
     */
    delimiter: null,
    /** 文档字符串
     * @example """docstring"""
     */
    doc: null,
    /** 双引号字符串
     * @example "string"
     */
    double: null,
    /** 转义字符
     * @example \n \t
     */
    escape: null,
    /** 定界字符串
     * @example <<EOF EOF>>
     */
    heredoc: null,
    /** 插值字符串
     * @example ${name}
     */
    interpol: null,
    /** 其他类型字符串 */
    other: null,
    /** 正则表达式字面量
     * @example /^abc/
     */
    regex: null,
    /** 单引号字符串
     * @example 'string'
     */
    single: null,
    /** 符号字符串
     * @example ruby 的 :symbol
     */
    symbol: null,
  },
  number: {
    /** 通用数字 */
    self: null,
    /** 二进制数字
     * @example 0b1010
     */
    bin: null,
    /** 浮点数
     * @example 1.23
     */
    float: null,
    /** 十六进制数字
     * @example 0x123
     */
    hex: null,
    /** 普通整数
     * @example 123
     */
    integer: null,
    /** 长整数
     * @example 123L
     */
    integerLong: null,
    /** 八进制数字
     * @example 0o123
     */
    oct: null,
  },
  operator: {
    /** 运算符
     * @example + - * / =
     */
    self: null,
    /** 单词运算符
     * @example and or not in is
     */
    word: null,
  },
  /** 标点符号
   * @example , . : ; ( ) [ ] { }
   */
  punctuation: null,
  comment: {
    /** 通用注释 */
    self: null,
    /** Hashbang 注释
     * @example #!/bin/bash
     */
    hashbang: null,
    /** 多行注释 */
    multiline: null,
    /** 预处理器注释
     * @example #include <stdio.h>
     */
    preproc: null,
    /** 预处理器文件注释
     * @example 如 python 的编码声明 # -*- coding: utf-8 -*-
     */
    preprocFile: null,
    /** 单行注释 */
    single: null,
    /** 特殊注释
     * @example JavaDoc 的 `@param`
     */
    special: null,
  },
  generic: {
    /** 通用文本容器 */
    self: null,
    /** 被删除的内容 */
    deleted: null,
    /** 强调文本 (斜体) */
    emph: null,
    /** 错误信息 */
    error: null,
    /** 标题
     * @example Markdown 标题 #
     */
    heading: null,
    /** 新增内容 */
    inserted: null,
    /** 程序输出文本 */
    output: null,
    /** 交互式提示符
     * @example shell 的 $
     */
    prompt: null,
    /** 强调文本 (粗体) */
    strong: null,
    /** 子标题
     * @example Markdown 子标题 ##
     */
    subheading: null,
    /** 堆栈跟踪信息 */
    traceback: null,
    /** 下划线文本 */
    underline: null,
  },
};
