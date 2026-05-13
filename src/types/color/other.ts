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

export const otherAuto = {
  /** 未知 */
  git: null,
};

export const other = {
  /** 未登录时的介绍首页的 SVG 和链接文字颜色 */
  logo: null,
  /** 主要背景色 */
  body: null,
  /** 页面底部状态栏背景色 */
  footer: null,
  /** Issue 等页面时间线的线颜色 */
  timeline: null,
  /** 一些盒子颜色, 比如仓库文件列表 */
  box: {
    /** 仓库文件列表最后一次提交, 头行背景色 */
    header: null,
    body: {
      /** 仓库文件列表背景色 */
      self: null,
      /** diff 按钮行行色 */
      highlight: null,
    },
  },
  /** 文本 */
  text: {
    /** 主文本/主标题颜色 */
    self: null,
    light: {
      /** 普通basic按钮的文本颜色 */
      self: null,
      /** 仓库文件列表的commit信息和时间文本 */
      num1: null,
      /** 副标题颜色 */
      num2: null,
      /** git 提交图里的提交时间文本 */
      num3: null,
    },
    /** 弹窗标题色/一些激活的标题色 */
    dark: null,
  },
  /** 输入框 */
  input: {
    /** 选中时的文字颜色 */
    text: null,
    background: null,
    /** 滑块按钮的背景色, 不能与背景色一致
     * @example 管理设置中启用/禁用头像
     */
    toggleBackground: "color-input-toggle-background",
    border: null,
  },
  light: {
    /** 多行下交替行的强调色, 例提交历史 */
    self: null,
    /** 基础按钮/标签的边框色 */
    border: null,
  },
  hover: {
    /** 按钮悬停背景色 */
    self: null,
    /** 仓库文件列表悬停背景色 */
    opaque: null,
  },
  /** 设置页面菜单项当前项的背景色 */
  active: null,
  /** 菜单背景色 */
  menu: null,
  /** 卡片背景色, 但是找不到元素, 可能是个人 README */
  card: null,
  /** Markdown 颜色 */
  markup: {
    /** 隔行背景色 */
    tableRow: "color-markup-table-row",
    code: {
      /** 代码块背景色 */
      block: null,
      /** 代码行背景色 */
      inline: null,
    },
  },
  /** 普通按钮的背景色 (basic 非 primary) */
  button: null,
  /** 代码页面背景色 */
  codeBg: "color-code-bg",
  /** 弹窗阴影 */
  shadow: {
    self: null,
    /** css 没有使用 */
    opaque: null,
  },
  /** 弹窗按钮行的背景色 */
  secondaryBg: "color-secondary-bg",
  /** 代码差异对比折叠行按钮背景色 */
  expandButton: "color-expand-button",
  /** 不知道 */
  placeholderText: "color-placeholder-text",
  /** 在线编辑器 */
  editor: {
    /** 行高亮色 */
    lineHighlight: "color-editor-line-highlight",
    /** 选中行背景色 */
    selection: null,
  },
  /** 仓库项目页面列的背景色 */
  projectColumnBg: "color-project-column-bg",
  /** caret-color 属性 */
  caret: null,
  /** Issue 表情按钮 */
  reaction: {
    /** css 里没用 */
    bg: null,
    /** 悬停时颜色 */
    hoverBg: "color-reaction-hover-bg",
    /** 点击后颜色 */
    activeBg: "color-reaction-active-bg",
  },
  /** 鼠标悬浮时的提示文本, 比如提交的具体时间, 任务状态等 */
  tooltip: {
    text: null,
    bg: null,
  },
  /** 顶部导航栏(用户导航栏) */
  nav: {
    /** 背景色 */
    bg: null,
    /** 悬停时背景色 */
    hoverBg: "color-nav-hover-bg",
    /** color 颜色 */
    text: null,
  },
  /** 顶部二级导航栏背景色(仓库导航栏等) */
  secondaryNavBg: "color-secondary-nav-bg",
  /** 普通标签 */
  label: {
    text: null,
    bg: null,
    hoverBg: "color-label-hover-bg",
    /** css 没用 */
    activeBg: "color-label-active-bg",
  },
  /** 不知道. 似乎和最后一次 review 相关的边框色 */
  accent: null,
  /** 不知道. 似乎和最后一次 review 相关的背景色 */
  smallAccent: "color-small-accent",
  /** 不知道啥玩意, 跟文件预览内容行颜色有关系 */
  highlight: {
    /** 在行号前追加的伪元素颜色 */
    fg: null,
    /** 背景色 */
    bg: null,
  },
  /** 叠加背景色, 比如弹窗时遮蔽页面其他部分的背景色 */
  overlayBackdrop: "color-overlay-backdrop",
  /** CSS 中不存在, 默认指向 --color-red 即可
   * @pr #35911 此 Gitea 提交中添加的颜色
   */
  danger: null,
  /** 图像背景中的透明度网格颜色
   * @example svg 图像背景中的网格颜色
   */
  transparency: {
    grid: {
      light: null,
      dark: null,
    },
  },
  /** Action 页面工作流可视化图像中悬停任务时与其他任务连接的线的颜色 */
  workflowEdgeHover: "color-workflow-edge-hover",
};
