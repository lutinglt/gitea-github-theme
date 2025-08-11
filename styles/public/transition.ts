import { css } from "src/types/vars";

// 简单的渐变过渡
export const transition = css`
  // 迁移的元素
  #navbar .item,
  .header-wrapper .ui.tabular.menu .item,
  .job-step-summary,
  .job-step-logs,
  .job-brief-item,
  .repo-file-cell,
  // 差异对比的代码折叠按钮
  .code-expander-button,
  // 仓库 README 头部的按钮
  .file-header-left,
  .file-header-right,
  .tippy-box .flex-items-block .item,
  .clone-panel-tab .item,
  .ui.form select,
  .ui.label,
  .ui.modal,
  .ui.checkbox label:before,
  .ui.checkbox input:checked ~ label:before,
  .ui.checkbox input:not([type="radio"]):indeterminate ~ label:before,
  .ui.selection.dropdown,
  .ui.selection.active.dropdown,
  .ui.selection.active.dropdown:hover,
  .ui.selection.active.dropdown .menu,
  .ui.selection.active.dropdown:hover .menu,
  .ui.vertical.menu .header.item,
  .ui.secondary.menu .item {
    transition: 80ms cubic-bezier(0.33, 1, 0.68, 1);
  }
  // Gitea 表单元素原始过渡覆盖
  input,
  textarea,
  tr,
  .ui.input textarea,
  .ui.form textarea,
  .ui.form input:not([type]),
  .ui.form input[type="date"],
  .ui.form input[type="datetime-local"],
  .ui.form input[type="email"],
  .ui.form input[type="number"],
  .ui.form input[type="password"],
  .ui.form input[type="search"],
  .ui.form input[type="tel"],
  .ui.form input[type="time"],
  .ui.form input[type="text"],
  .ui.form input[type="file"],
  .ui.form input[type="url"] {
    transition: 80ms cubic-bezier(0.33, 1, 0.68, 1);
  }
`;
