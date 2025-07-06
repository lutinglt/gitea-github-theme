import { css, themeVars } from "src/types/vars";
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
        border-color: ${themeVars.github.bgColor.success.emphasis} !important;
      }
      // 时间线关闭状态标签
      &.tw-bg-red {
        background-color: ${themeVars.github.bgColor.done.emphasis} !important;
        border-color: ${themeVars.github.bgColor.done.emphasis} !important;
      }
      // 时间线合并状态标签
      &.tw-bg-purple {
        background-color: ${themeVars.github.bgColor.done.emphasis} !important;
        border-color: ${themeVars.github.bgColor.done.emphasis} !important;
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
