import { css, otherThemeVars, themeVars } from "src/types/vars";
import { activeItemAfterStyle } from "styles/public/menu";

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
      color: ${themeVars.color.text.self} !important;
      background-color: ${themeVars.github.bgColor.success.emphasis} !important;
      border-color: ${themeVars.github.bgColor.success.emphasis} !important;
    }

    &.red {
      color: ${themeVars.color.text.self} !important;
      background-color: ${themeVars.github.bgColor.done.emphasis} !important;
      border-color: ${themeVars.github.bgColor.done.emphasis} !important;
    }

    &.purple {
      color: ${themeVars.color.text.self} !important;
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
    font-size: 12px;
    padding: 0 5px;
  }
`;

// 评论
export const comment = css`
  .comment {
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
    .comment-header-right {
      .context-dropdown {
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
      background-color: ${themeVars.github.bgColor.success.emphasis};
      color: ${themeVars.color.text.self} !important;
      border-radius: ${otherThemeVars.border.radius};
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      svg {
        width: 24px;
        height: 24px;
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
    }
  }
`;

// 时间线
export const timeline = css`
  .repository.view.issue {
    .comment-list {
      .timeline-item,
      .timeline-item-group {
        padding: 16px 0;
        // 事件
        &.event {
          // 修复覆盖后的位置问题
          padding-left: 15px;
          .avatar {
            width: 20px;
            height: 20px;
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
