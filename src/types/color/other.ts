export const other = {
  /** 未知 */
  git: null,
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
    /** 找不到, 不知道啥玩意, 似乎是和复选框有关的东西 */
    toggleBackgound: "color-input-toggle-background",
    border: {
      self: null,
      hover: null,
    },
  },
  light: {
    /** 多行下交替行的强调色, 例提交历史 */
    self: null,
    /** 不知道什么用, gitea css 中没有使用这个属性的 */
    mimicEnabled: "color-light-mimic-enabled",
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
  markup: {
    tableRow: "color-markup-table-row",
    code: {
      block: null,
      inline: null,
    },
  },
  button: null,
  codeBg: "color-code-bg",
  shadow: {
    self: null,
    opaque: null,
  },
  secondaryBg: "color-secondary-bg",
  expandButton: "color-expand-button",
  placeholderText: "color-placeholder-text",
  editorLineHighlight: "color-editor-line-highlight",
  projectColumnBg: "color-project-column-bg",
  caret: null,
  reaction: {
    bg: null,
    hoverBg: "color-reaction-hover-bg",
    activeBg: "color-reaction-active-bg",
  },
  tooltip: {
    text: null,
    bg: null,
  },
  nav: {
    bg: null,
    hoverBg: "color-nav-hover-bg",
    text: null,
  },
  secondaryNavBg: "color-secondary-nav-bg",
  /** 标签 */
  label: {
    text: null,
    bg: null,
    hoverBg: "color-label-hover-bg",
    activeBg: "color-label-active-bg",
  },
  accent: null,
  smallAccent: "color-small-accent",
  highlight: {
    bg: null,
    fg: null,
  },
  overlayBackdrop: "color-overlay-backdrop",
};
