import { css, otherThemeVars, themeVars } from "src/types/vars";

// 仓库头信息
export const repoHeader = css`
  .page-content.repository .repo-header {
    // 点星/关注/克隆/RSS 按钮
    .ui.compact.button {
      padding: 3px 12px;
      svg {
        color: ${themeVars.color.text.light.num1};
      }
      // 文本跟图标间隔, 文本在手机下不显示
      span {
        margin-left: 0.5rem;
      }
    }
    // 仓库图标
    img.ui.avatar {
      height: 32px;
      width: 32px;
      margin-block-start: 0.5rem;
      margin-block-end: 0.5rem;
    }

    .flex-item {
      .flex-item-title {
        // 间隔线颜色
        color: ${themeVars.color.text.light.num1};
        // 仓库名称
        a {
          display: flex;
          align-items: center;
          color: ${themeVars.color.text.self};
          font-size: 16px;
          text-decoration: none !important;
          min-width: 3ch;
          padding: 4px 6px;
          border-radius: ${otherThemeVars.border.radius};
          margin-top: 0.5rem;
          margin-bottom: 0.5rem;
          &:hover {
            background: ${themeVars.github.control.transparent.bgColor.hover};
          }
          &.muted:not(.tw-font-normal) {
            font-weight: 600;
          }
        }
      }
      // 默认的 hover 为 primary 颜色, 修正
      a:not(.label, .button):hover {
        color: ${themeVars.color.text.self} !important;
      }
    }
  }
`;

// 顶部提交, 标签, 分支统计
export const repoMenu = css`
  .page-content.repository {
    .repository-summary .repository-menu {
      background-color: ${themeVars.color.box.header};
      .item {
        color: ${themeVars.color.text.light.num1};
        height: 31px; // 文件列表下与右侧输入框对齐
        b {
          color: ${themeVars.color.text.self};
          margin: 0 2px;
        }
        &.active {
          background-color: ${themeVars.color.active};
          color: ${themeVars.color.text.self};
          font-weight: 500;
          svg {
            color: ${themeVars.color.text.light.num1};
          }
        }
      }
    }
  }
`;

export const repoTopic = css`
  // 理应只能覆盖探索/组织/用户下仓库的 topic 标签
  .label-list .ui.label,
  // 仓库文件列表下的 topic 标签
  #repo-topics .ui.label.repo-topic {
    border-radius: 25px;
    font-size: 12px;
    padding: 5px 10px;
    margin: 0px 1.5px 3.5px 0px;
    background-color: ${themeVars.github.bgColor.accent.muted};
    color: ${themeVars.github.fgColor.accent};
    &:hover {
      background-color: ${themeVars.github.bgColor.accent.emphasis};
      color: ${themeVars.color.text.self};
    }
  }
`;

// 仓库动态页面关闭工单状态条颜色
export const closedIssueTableCell = css`
  .stats-table .table-cell.tw-bg-red[href="#closed-issues"] {
    background-color: ${themeVars.color.purple.self} !important;
  }
`;
