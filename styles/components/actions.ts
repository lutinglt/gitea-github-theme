import { animationDown } from "src/core/theme";
import { css, otherThemeVars, themeVars } from "src/types/vars";

// 仓库 Actions 页面
export const actions = css`
  .page-content.repository.actions .ui.grid {
    .four.wide {
      border-right: 1px solid ${themeVars.color.light.border};
      min-height: calc(-104px + 100vh);

      &:before {
        content: "Actions";
        display: block;
        font-size: 20px;
        font-weight: 600;
        margin-top: 6px;
        margin-bottom: 24px;
      }
    }

    .twelve.wide {
      &:before {
        content: "Workflow Runs";
        display: block;
        font-size: 20px;
        margin-top: 6px;
        margin-bottom: 24px;
        margin-left: 2px;
      }
      // 工作流列表标题栏菜单
      .ui.secondary.menu {
        background-color: ${themeVars.color.box.header};
        border: 1px solid ${themeVars.color.light.border};
        border-bottom: 0;
        border-top-left-radius: ${otherThemeVars.border.radius};
        border-top-right-radius: ${otherThemeVars.border.radius};
        padding: 16px;
        margin-bottom: 0;
        > .ui.dropdown {
          color: ${themeVars.color.text.light.num1};
        }
      }

      .ui.info.message {
        border-radius: 0;
        border-left-color: ${themeVars.color.light.border};
        border-right-color: ${themeVars.color.light.border};
        margin: 0;

        ~ .run-list {
          border-top: 0;
        }
      }

      .run-list {
        border: 1px solid ${themeVars.color.light.border};
        border-bottom-left-radius: ${otherThemeVars.border.radius};
        border-bottom-right-radius: ${otherThemeVars.border.radius};

        // 分支标签按钮
        .run-list-ref {
          background-color: ${themeVars.github.bgColor.accent.muted};
          color: ${themeVars.github.fgColor.accent};
          font-family: var(--fonts-monospace);
          font-weight: 400;
          padding: 0px 6px;
          &:hover {
            background-color: ${themeVars.github.bgColor.accent.muted};
            color: ${themeVars.github.fgColor.accent};
            text-decoration-line: underline !important;
          }
        }
        // 标签右侧任务信息
        .run-list-item-right {
          color: ${themeVars.color.text.light.num1};
        }

        .flex-item {
          padding: 16px;
          line-height: 18px;
          .flex-item-leading {
            align-self: flex-start;
            margin-top: 2px;
          }
          .flex-item-main {
            gap: 0.5rem;
          }
          .flex-item-trailing {
            > .ui.label {
              border-radius: ${otherThemeVars.border.radius};
            }
            > .ui.dropdown.jump {
              border-radius: ${otherThemeVars.border.radius};
              color: ${themeVars.color.text.light.num1};
              &:hover {
                background-color: ${themeVars.github.control.transparent.bgColor.hover};
              }
              .menu > .item:hover {
                color: ${themeVars.color.text.self} !important;
              }
            }
          }
        }
      }
    }
  }
`;

// 避免手机下左侧工作流项空白过长
export const actionsMedia = css`
  @media (max-width: 767.98px) {
    .page-content.repository.actions .ui.grid .four.wide {
      min-height: auto;
    }
  }
`;

// 工作流禁用标签
export const label = css`
  .ui.vertical.menu .item > .ui.red.label {
    color: ${themeVars.color.error.text};
    border: 1px solid ${themeVars.color.error.border};
    background: ${themeVars.color.error.bg.self};
    margin-top: 0.5px;
  }
`;

// 手动工作流下拉列表
export const runWorkflow = css`
  #runWorkflowDispatchForm {
    // 分支选择按钮
    .ui.dropdown.button.branch-selector-dropdown .svg.octicon-git-branch {
      margin-right: 6px;
    }
  }
`;

// 工作流详情页标题
export const actionViewHeader = css`
  .action-view-header {
    .action-commit-summary {
      a:hover {
        text-decoration: inherit;
      }
      // 提前哈希
      > a.muted:first-of-type {
        text-decoration: underline;
      }
      // 分支标签按钮
      .ui.ui.ui.label {
        background-color: ${themeVars.github.bgColor.accent.muted};
        border-radius: ${otherThemeVars.border.radius};
        color: ${themeVars.github.fgColor.accent};
        > a {
          font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace;
          font-weight: 400;
          opacity: 1;
        }
      }
    }
  }
`;

// 工作流左侧作业列表
export const actionViewLeft = css`
  .action-view-left.action-view-left.action-view-left {
    margin-right: 28px;
    border-top: 1px solid ${themeVars.color.console.border};
    max-width: 22vw;
    &:before {
      content: "Jobs";
      color: ${themeVars.color.console.fg.subtle};
      font-size: 12px;
      font-weight: 600;
      position: relative;
      display: inline-block;
      margin-top: 22px;
      top: -8px;
      left: 15px;
    }
    .job-group-section {
      padding-right: 8px;
      padding-bottom: 8px;
      border-bottom: 1px solid ${themeVars.color.console.border};
      .job-brief-list {
        gap: 4px;
        // 双重确保覆盖原始样式
        .job-brief-item.job-brief-item {
          border-radius: ${otherThemeVars.border.radius} !important;
          padding: 8px;
          position: relative;
          margin-left: 0.5rem;
          &:hover {
            background-color: ${themeVars.color.console.hoverBg};
          }
          &.selected {
            &:after {
              overflow: visible;
              background: ${themeVars.github.borderColor.accent.emphasis};
              border-radius: ${otherThemeVars.border.radius};
              content: "";
              height: 24px;
              left: calc(0.5rem * -1);
              position: absolute;
              top: calc(50% - 12px);
              width: 4px;
            }
          }
          .job-brief-item-right {
            svg.job-brief-rerun {
              display: none;
              color: ${themeVars.color.console.fg.subtle};
              &:hover {
                color: ${themeVars.color.text.self};
              }
            }
            .step-summary-duration {
              color: ${themeVars.color.console.fg.subtle};
              font-family: var(--fonts-monospace);
              font-size: 12px;
            }
          }
          &:hover {
            .job-brief-item-right {
              svg.job-brief-rerun {
                display: inline-block;
              }
            }
          }
        }
      }
    }
  }
`;

// 工作流右侧作业步骤日志详情
export const actionViewRight = css`
  .action-view-right {
    /* 提前加载高度和滚动条 */
    min-height: calc(100vh - 245px);
    // 作业详情页标题
    .job-info-header {
      padding: 16px 12px 16px 24px !important;
      height: 80px !important;
      .job-info-header-left {
        .job-info-header-title {
          color: ${themeVars.github.fgColor.accent} !important;
        }
        .job-info-header-detail {
          margin-top: 8px;
        }
      }
      .job-info-header-right {
        .ui.dropdown {
          > .button {
            border: unset;
            padding: 7px !important;
          }
          .menu > .item > i.icon {
            margin-right: 2px;
          }
        }
      }
    }

    .job-step-container {
      padding: 8px;
      .job-step-section {
        margin: 0 4px 4px;
        // 步骤标题, 双重确保覆盖原始样式
        .job-step-summary.job-step-summary {
          color: ${themeVars.color.console.fg.subtle};
          padding: 8px !important;
          height: 36px;

          &.selected {
            // 滚动时固定在顶部的高度与 job-info-header 高度相同
            top: 80px;
          }

          &.step-expandable:hover {
            color: ${themeVars.color.console.fg.subtle};
          }

          .tw-mr-2:not(.svg) svg.svg {
            margin: 1.5px 6px 0px 2px;
          }
          /* 绿色步骤状态改为白色 */
          svg.svg.text.green {
            color: ${themeVars.color.console.fg.subtle} !important;
          }

          &.selected {
            /* 不被 hover 效果影响 */
            color: ${themeVars.color.console.fg.self} !important;
            background-color: ${themeVars.color.console.activeBg} !important;

            svg.svg.text.green {
              color: ${themeVars.color.console.fg.self} !important;
            }
          }
          // 步骤耗时
          .step-summary-duration {
            font-size: 12px;
            font-family: var(--fonts-monospace);
          }
        }
        // 步骤日志
        .job-step-logs {
          animation: ${animationDown};
          /* 日志字体颜色白色 */
          .job-log-line {
            color: ${themeVars.color.console.fg.self};
            /* 被 hover 时覆盖 ANSI 颜色 */
            .log-msg:hover * {
              color: ${themeVars.color.console.fg.self} !important;
            }
          }
        }
      }
    }
  }
`;
