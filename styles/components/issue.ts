import { css, otherThemeVars, themeVars } from "src/types/vars";
import { activeItemAfterStyle } from "styles/public/menu";

// 工单&PR 列表
export const issueList = css`
  // 仓库页面的里程碑列表菜单栏
  .page-content.repository.milestones,
  .page-content.repository.milestone-issue-list,
  .page-content.repository.issue-list {
    // 头部筛选菜单栏
    .issue-list-toolbar {
      align-items: center;
      align-content: center;
      background-color: ${themeVars.color.box.header};
      border: 1px solid ${themeVars.color.light.border};
      border-bottom: 0;
      border-top-left-radius: ${otherThemeVars.border.radius};
      border-top-right-radius: ${otherThemeVars.border.radius};
      height: 48px;
      padding: 8px;
      margin-top: 16px;
      .issue-list-toolbar-left {
        // 复选框
        input {
          margin: 0 8px !important;
        }
        > .ui.compact.menu {
          align-items: center;
          border: 0;
          > .item {
            background: unset !important;
            border-radius: ${otherThemeVars.border.radius};
            color: ${themeVars.color.text.light.num1};
            padding: 0px 8px;
            height: 30px;
            &:before {
              display: none;
            }
            &:hover {
              background: ${themeVars.github.control.transparent.bgColor.hover} !important;
            }
            &.active {
              color: ${themeVars.color.text.self};
              font-weight: 700;
            }
          }
        }
      }
      .issue-list-toolbar-right > .ui.menu {
        align-items: center;
        > .item {
          color: ${themeVars.color.text.light.num1};
        }
        > .ui.button {
          padding: 0 12px;
          height: 32px;
        }
      }
      img.ui.avatar {
        border-radius: 9999px;
      }
    }
  }
  // 里程碑详细页面的 Issue 列表
  .page-content.repository.milestone-issue-list,
  // 顶部仪表板的 Issue 列表
  .page-content.dashboard.issues,
  // 用户订阅的 Issue 列表
  .page-content.user.notification,
  // 仓库 Issue 列表
  .page-content.repository.issue-list {
    .flex-list#issue-list {
      border: 1px solid ${themeVars.color.light.border};
      border-bottom-left-radius: ${otherThemeVars.border.radius};
      border-bottom-right-radius: ${otherThemeVars.border.radius};
      img.ui.avatar {
        border-radius: 9999px;
      }
      > .flex-item {
        align-items: center;
        padding: 0;
        min-height: 64px;
        &:last-child {
          border-bottom-left-radius: ${otherThemeVars.border.radius};
          border-bottom-right-radius: ${otherThemeVars.border.radius};
        }
        &:hover {
          background-color: ${themeVars.color.hover.opaque};
        }
        > .flex-item-leading {
          align-self: flex-start;
          margin-top: 14px;
          margin-left: 16px;
          > .flex-text-inline {
            margin-top: 0px !important;
            // 复选框
            input {
              margin-right: 8px !important;
            }
          }
        }
        > .flex-item-main {
          gap: 4px;
          .flex-item-header {
            padding-top: 8px;
          }
          .flex-item-body {
            font-size: 12px;
            padding-bottom: 8px;
          }
        }
        > .flex-item-trailing {
          margin-right: 32px;
        }
      }
    }
  }
  // 里程碑列表
  // [TODO] 暂时排除项目的列表
  .page-content.repository.milestones:not(.projects) .milestone-list {
    border: 1px solid ${themeVars.color.light.border};
    border-bottom-left-radius: ${otherThemeVars.border.radius};
    border-bottom-right-radius: ${otherThemeVars.border.radius};
    .milestone-card {
      padding: 8px 16px 10px 16px;
      .milestone-header {
        h3 {
          font-size: 16px;
          font-weight: 500;
        }
        div span {
          font-size: 14px;
          font-weight: 600;
        }
      }
    }
    .milestone-toolbar {
      font-size: 12px;
      .group > a {
        font-size: 13px;
      }
    }
  }
`;

// 避免手机/平板下菜单错位
export const issueListMobile = css`
  @media (max-width: 1023.98px) {
    .page-content.repository.milestones,
    .page-content.repository.milestone-issue-list,
    .page-content.repository.issue-list {
      .issue-list-toolbar {
        height: auto;
      }
    }
  }
`;

// 置顶 Issue
export const issuePins = css`
  #issue-pins {
    gap: 12px;
    margin-bottom: 16px;
    .issue-card {
      padding: 16px 12px;
      .content {
        .issue-card-title {
          font-size: 16px;
          font-weight: 600;
        }
        svg {
          color: ${themeVars.color.text.light.num1};
          height: 100%;
          margin-right: 3px;
        }
        .meta {
          font-size: 12px;
          padding-top: 4px;
        }
      }
      .issue-card-bottom {
        display: none;
      }
    }
    img.ui.avatar {
      border-radius: 9999px;
    }
  }
`;

export const button = css`
  .issue-content-left .field.footer {
    // 关闭工单按钮
    .ui.red.basic.button#status-button {
      color: ${themeVars.github.fgColor.done};
      background-color: ${themeVars.color.button};
      border-color: ${themeVars.color.light.border};
      &:hover {
        background-color: ${themeVars.color.hover.self};
      }
    }

    // 重新开启按钮
    .ui.basic.primary.button#status-button {
      color: ${themeVars.github.fgColor.success};
    }
  }
  // 工单&PR标题右侧按钮
  .repository.view.issue .issue-title-buttons > .ui.button {
    padding: 0 12px;
    height: 32px;
  }
`;

export const babel = css`
  .issue-content-left {
    .badge {
      // 时间线打开状态标签
      &.tw-bg-green {
        background-color: ${themeVars.github.bgColor.success.emphasis} !important;
      }
      // 时间线关闭状态标签
      &.tw-bg-red {
        background-color: ${themeVars.github.bgColor.done.emphasis} !important;
      }
      // 时间线合并状态标签
      &.tw-bg-purple {
        background-color: ${themeVars.github.bgColor.done.emphasis} !important;
      }
    }
  }
  // 工单&PR状态标签
  .ui.label.issue-state-label {
    border-radius: 25px !important;

    &.green {
      color: ${themeVars.color.white} !important;
      background-color: ${themeVars.github.bgColor.success.emphasis} !important;
      border-color: ${themeVars.github.bgColor.success.emphasis} !important;
    }

    &.red {
      color: ${themeVars.color.white} !important;
      background-color: ${themeVars.github.bgColor.done.emphasis} !important;
      border-color: ${themeVars.github.bgColor.done.emphasis} !important;
    }

    &.purple {
      color: ${themeVars.color.white} !important;
      background-color: ${themeVars.github.bgColor.done.emphasis} !important;
      border-color: ${themeVars.github.bgColor.done.emphasis} !important;
    }
  }
`;

// PR 分支标签
export const prBranch = css`
  .repository.view.issue .pull-desc code,
  #issue-list .flex-item-body .branches .branch {
    color: ${themeVars.github.fgColor.accent};
    background-color: ${themeVars.github.bgColor.accent.muted};
    border-radius: ${otherThemeVars.border.radius};
    font-family: var(--fontStack-monospace, ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, monospace);
    font-size: 12px;
    padding: 0 5px;
    line-height: 18px;
  }

  .repository.view.issue .pull-desc code {
    padding-top: 3px;
    padding-bottom: 3px;
    a:hover {
      text-decoration-line: none;
    }
  }
`;

const botLabelStyle = {
  height: "20px",
  padding: "0 6px!important",
  marginLeft: "4px",
};
// 评论
export const comment = css`
  .comment .comment-container {
    img.ui.avatar {
      border-radius: 9999px;
    }
    // 去除评论标题左侧指向头像的小箭头
    .comment-header,
    &:target .comment-header {
      &:before,
      &:after {
        display: none;
      }
    }
    // 评论焦点样式
    &:target {
      .comment-container {
        border-color: ${themeVars.github.borderColor.accent.emphasis} !important;
        box-shadow: 0 0 0 1px ${themeVars.color.primary.self} !important;
      }
    }
    .comment-header {
      padding: 4px 4px 4px 16px;
      min-height: 38px;
      .comment-header-left {
        // bot 标签
        .ui.basic.label {
          ${botLabelStyle}
        }
        a:has(relative-time){
          text-decoration: underline;
        }
        // 已编辑按钮
        .content-history-menu {
          color: ${themeVars.color.text.light.num1} !important;
          .menu .item {
            font-size: 12px;
            .ui.avatar {
              height: 20px;
              width: 20px;
            }
          }
        }
      }
    }
    .comment-header-right {
      > .item,
      > .label {
        color: ${themeVars.color.text.light.num1};
      }
      > .ui.label {
        background-color: initial;
        font-size: 12px;
        height: 20px;
        padding: 0 6px;
      }
      .context-dropdown {
        height: 28px;
        padding: 0 6px;
        border-radius: ${otherThemeVars.border.radius};
        &:hover {
          background-color: ${themeVars.github.control.transparent.bgColor.hover};
        }
        a.context-menu {
          display: flex;
          align-items: center;
          &:hover {
            color: inherit;
          }
        }
        // 评论菜单的删除按钮
        .menu .item.delete-comment {
          color: ${themeVars.color.red.self};
          &:hover {
            background-color: ${themeVars.color.red.badge.bg} !important;
            color: ${themeVars.color.red.light};
          }
        }
      }
    }
    // 表情菜单按钮头部+底部
    .ui.dropdown.action.select-reaction > a {
      display: flex;
      align-items: center;
      justify-content: center;
      background: ${themeVars.color.button};
      border-radius: 9999px;
      border: 1px solid ${themeVars.color.light.border};
      color: ${themeVars.color.text.light.num1};
      padding: 0px 8px !important;
      height: 28px;
      width: 28px;
    }
    // 底部表情栏
    .bottom-reactions {
      .ui.ui.ui.label {
        background-color: unset !important;
        border-radius: 9999px;
        border-color: ${themeVars.color.light.border};
        &:hover {
          background-color: ${themeVars.color.reaction.hoverBg} !important;
          border-color: ${themeVars.color.light.border};
        }
        .reaction {
          font-size: 12px;
        }
        .reaction-count {
          color: ${themeVars.color.text.light.self};
          font-weight: 500;
          margin-left: 0;
        }
      }
      // 显示表情菜单按钮
      .select-reaction {
        padding: 0;
        // 两个表情按钮看着怪怪的, 很难受
        // visibility: visible;
      }
    }
  }
`;

// 评论书写框
export const commentForm = css`
  .repository .comment.form .content .segment {
    &::before,
    &::after {
      display: none;
    }
  }
`;

export const dropdown = css`
  .repository {
    // Issue/PR 列表下的所有筛选菜单
    &.issue-list .ui.dropdown .menu, .ui.menu .ui.dropdown .menu,
    // Issue/PR 详情下的右侧的上半部分选项菜单
    &.issue.view .issue-content-right .ui.dropdown .scrolling.menu {
      .item:hover:after {
        content: "";
        ${activeItemAfterStyle}
      }
    }
  }
`;

// PR 界面的 PR 操作评论
export const prMerge = css`
  .repository.view.issue .comment-list .timeline-item.pull-merge-box {
    // 头像
    .timeline-avatar {
      border-radius: 9999px;
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      svg {
        width: 24px;
        height: 24px;
      }
      // PR 界面的 PR 操作评论
      &.text {
        color: ${themeVars.color.white} !important;
        border-radius: ${otherThemeVars.border.radius};
        // 操作评论边框
        + .content > .ui.attached.segment {
          border-width: 1.5px;
        }
        &.grey {
          background-color: ${themeVars.color.text.light.num1};
        }
        &.green {
          background-color: ${themeVars.github.bgColor.success.emphasis};
          + .content > .ui.attached.segment {
            border-left-color: ${themeVars.github.bgColor.success.emphasis};
            border-right-color: ${themeVars.github.bgColor.success.emphasis};
            &:first-child {
              border-top-color: ${themeVars.github.bgColor.success.emphasis};
            }
            &:last-child {
              border-bottom-color: ${themeVars.github.bgColor.success.emphasis};
            }
          }
        }
        &.purple {
          background-color: ${themeVars.github.bgColor.done.emphasis};
          + .content > .ui.attached.segment {
            border-left-color: ${themeVars.github.bgColor.done.emphasis};
            border-right-color: ${themeVars.github.bgColor.done.emphasis};
            &:first-child {
              border-top-color: ${themeVars.github.bgColor.done.emphasis};
            }
            &:last-child {
              border-bottom-color: ${themeVars.github.bgColor.done.emphasis};
            }
          }
        }
        &.yellow {
          background-color: ${themeVars.github.bgColor.attention.emphasis};
          + .content > .ui.attached.segment {
            border-left-color: ${themeVars.github.bgColor.attention.emphasis};
            border-right-color: ${themeVars.github.bgColor.attention.emphasis};
            &:first-child {
              border-top-color: ${themeVars.github.bgColor.attention.emphasis};
            }
            &:last-child {
              border-bottom-color: ${themeVars.github.bgColor.attention.emphasis};
            }
          }
        }
        &.red {
          background-color: ${themeVars.github.bgColor.danger.emphasis};
          + .content > .ui.attached.segment {
            border-left-color: ${themeVars.github.bgColor.danger.emphasis};
            border-right-color: ${themeVars.github.bgColor.danger.emphasis};
            &:first-child {
              border-top-color: ${themeVars.github.bgColor.danger.emphasis};
            }
            &:last-child {
              border-bottom-color: ${themeVars.github.bgColor.danger.emphasis};
            }
          }
        }
      }
    }
    // 检查状态
    .commit-status-panel {
      .commit-status-header {
        background: ${themeVars.color.body};
        padding: 16px;
        font-size: 16px;
        font-weight: 600;
        .ui.right {
          color: ${themeVars.color.text.light.num1};
          font-size: 14px;
          font-weight: 400;
        }
      }
      // 检查状态列表
      .commit-status-list {
        background: ${themeVars.color.menu};
        .commit-status-item {
          border-radius: ${otherThemeVars.border.radius};
          padding: 2px 8px;
          margin: 0px 8px;
          height: 37px;
          &:first-child {
            margin-top: 8px;
          }
          &:last-child {
            margin-bottom: 8px;
          }
          &:hover {
            background-color: ${themeVars.color.hover.opaque};
          }
        }
      }
    }
    // 合并信息和操作
    .merge-section {
      color: ${themeVars.color.text.light.num1};
      padding: 16px;
      display: grid;
      gap: 8px;
      &::before,
      &::after {
        display: none;
      }
    }
  }
`;

// 时间线
export const timeline = css`
  .repository.view.issue {
    .comment-list {
      // 时间线本线
      .timeline::before {
        // 不遮挡归档信息框, 归档信息框背景色有透明度时会漏出线
        height: calc(100% - 62px);
      }
      .timeline-item,
      .timeline-item-group {
        padding: 12px 0;
        .comment-text-line {
          color: ${themeVars.color.text.light.num1};
        }
        // 事件
        &.event {
          // 修复覆盖后的位置问题
          padding-left: 15px;
          // 避免锚中批准的头像
          .avatar-with-link .avatar {
            width: 20px;
            height: 20px;
          }
          // 批准时间的头像
          // 头部居中偏移量(头像高度 - 标准行信息高度) / 2: (40px - 32px) / 2 = 4px
          .timeline-avatar {
            top: -4px;
          }
          // bot 标签
          .comment-text-line .ui.basic.label {
            ${botLabelStyle}
          }
          .badge {
            border: 2px solid ${themeVars.color.body};
          }
          // 仅匹配只有 badge
          .badge:not([class*=" "]) {
            background-color: ${themeVars.github.control.bgColor.rest};
            svg {
              color: ${themeVars.color.text.light.num1};
            }
          }
        }
        // 提交
        &.commits-list {
          // 每个提交之间的间隔
          .flex-text-block {
            padding-top: 4px;
          }
          .badge svg {
            color: ${themeVars.color.text.light.num1};
          }
          // 仅覆盖左侧 commit 不覆盖右侧 SHA
          a.muted {
            font-size: 12px;
            color: ${themeVars.color.text.light.num1};
            text-decoration-line: underline;
            &:hover {
              color: ${themeVars.color.primary.self};
            }
          }
        }
      }
    }
  }
`;

const sidebarPadding = {
  padding: "4px 8px",
};

// 侧边栏
export const issueSidebar = css`
  // 工单&创建工单&PR页面侧边栏
  .page-content.repository.issue {
    .issue-content {
      img.ui.avatar {
        border-radius: 9999px;
      }
      gap: 24px;
      // 侧边栏
      .issue-content-right {
        border: 0;
        font-size: 12px;
        padding: 0;
        .ui.button {
          font-size: 12px;
        }
        .ui.form,
        a.fixed-text.muted,
        span.text,
        // 列表项为空时的文字
        span.item.empty-list,
        p {
          color: ${themeVars.color.text.light.num1};
          font-size: 12px;
        }
        // WIP 前缀提示
        > a,
        .ui.dropdown.select-branch,
        .ui.form,
        a.fixed-text.muted,
        span.text,
        .ui.watching > div,
        .ui.depending > div,
        .flex-text-block,
        .ui.list,
        .toggle-wip,
        p {
          ${sidebarPadding};
        }
        // 允许维护者编辑
        > .ui.checkbox {
          margin: 4px 8px;
          strong {
            font-weight: 400;
          }
        }
        .issue-sidebar-combo {
          .ui.dropdown > a.fixed-text.muted {
            align-items: center;
            border-radius: ${otherThemeVars.border.radius};
            text-decoration-line: none;
            height: 28px;
            &:hover {
              background: ${themeVars.github.control.transparent.bgColor.hover};
            }
          }
          .ui.list {
            margin-top: 0 !important;
            margin-bottom: 0 !important;
          }
          // 评审人
          .ui.relaxed.list {
            .item {
              // 操作图标按钮
              a.muted.icon {
                color: ${themeVars.color.text.light.num1};
                &:hover {
                  color: ${themeVars.color.primary.self};
                }
              }
            }
          }
          // 标签菜单项
          .ui.dropdown > .menu > .scrolling.menu > .item:has(.item-secondary-info) {
            // 修复标签菜单中描述文本过长没有换行挤掉标签的问题
            display: grid !important;
            grid-template-columns: auto auto 1fr;
            row-gap: 0px; // 去除行间距, 仅当有描述信息时才有间距(.tw-pl-\\\[20px\\\])
            // 如果是归档标签则隐藏
            &.tw-hidden {
              display: none !important;
            }
            // 默认隐藏多余信息避免标签对齐问题
            .item-secondary-info {
              display: none;
              grid-column: 2 / -1; // 从第2列对齐
              color: ${themeVars.color.text.light.num1};
              > .tw-pl-\\\[20px\\\] {
                // 已经与第二列对齐, 不需要额外的 padding
                padding-left: 0px !important;
                padding-top: 4px;
                // 显示全部描述信息与 Github 保持一致
                white-space: normal;
                small {
                  font-size: 12px;
                }
              }
              > .archived-label-hint {
                // 与父元素 item 的 padding 对齐 (dropdown.ts .ui.dropdown .menu > .item)
                top: 6px;
                right: 8px;
              }
              // 如果有描述信息则显示
              &:has(.tw-pl-\\\[20px\\\]) {
                display: block;
                > .archived-label-hint {
                  top: 4px; // 有描述信息的归档标签与标签对齐需要更高点
                }
              }
              // 如果有归档标签则显示
              &:has(.archived-label-hint > .ui.label) {
                display: block;
              }
            }
          }
        }
        // 时间追踪
        > div:not([class]):not([id]) {
          > .flex-text-block {
            color: ${themeVars.color.text.light.num1};
          }
          > .ui.buttons {
            ${sidebarPadding};
            .button {
              height: 30px;
              min-height: 30px;
              &:hover {
                border-color: ${themeVars.color.light.border};
                + .button {
                  border-left-color: ${themeVars.color.light.border};
                }
              }
            }
          }
        }
        // 选中日期颜色
        .ui.form .due-date {
          color: ${themeVars.color.text.self};
        }
        // 分割线
        > .divider {
          margin: 12px 0 12px 8px;
          width: calc(100% - 16px);
        }
        // 订阅按钮
        .ui.watching .ui.button {
          padding: 0px 8px;
          height: 30px;
          min-height: 30px;
          svg {
            margin: 0 !important;
          }
        }
        // PIN 按钮
        .form-fetch-action.single-button-form .ui.button,
        // 底部操作按钮
        > .ui.show-modal.button {
          border: 0;
          background: unset;
          font-weight: 400;
          ${sidebarPadding};
          // 好像是浏览器 BUG, 最后不生效, 必须 !important
          margin: 0 !important;
          justify-content: left;
          &:hover {
            background: ${themeVars.github.control.transparent.bgColor.hover};
          }
        }
        .ui.show-modal.button[data-modal="#sidebar-delete-issue"] {
          color: ${themeVars.color.red.self};
          svg {
            color: ${themeVars.color.red.self};
          }
          &:hover {
            background-color: ${themeVars.color.red.badge.bg};
            color: ${themeVars.color.red.light};
            svg {
              color: ${themeVars.color.red.light};
            }
          }
        }
      }
    }
  }
`;

// 工单标题
export const issueTitle = css`
  .page-content.repository.issue {
    .issue-title-header {
      .issue-title-meta {
        .issue-state-label {
          padding: 6px 9px !important;
        }
        .time-desc {
          color: ${themeVars.color.text.light.num1};
        }
      }
    }
  }
`;
