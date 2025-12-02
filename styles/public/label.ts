import { css, themeVars } from "src/types/vars";

export const labelStyle = {
  padding: "0px 6px",
};

export const label = css`
  .ui.label {
    border: 1px solid #00000000;
  }
  /* 所有标签, 但不包括 a 标签 */
  /* a 标签比如仓库点星等按钮旁边的数字标签按钮,提交图中的 tag 标签 */
  div.label,
  span.label,
  // 包含多个标签的元素, 比如 Issue/PR 详情页中的时间线上的标签
  span.labels-list a.label {
    &.ui.ui.ui {
      border-radius: 9999px;
      ${labelStyle}
      line-height: 18px;
      &.mini {
        line-height: 16px;
      }
      // 多个标签的组合标签的圆角修复
      &.scope-parent {
        .scope-left {
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
        }
        .scope-middle {
          border-radius: 0;
        }
        .scope-right {
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
        }
      }
    }
  }
  div,
  span {
    &.ui.ui.ui.label {
      /* 主色调标签 */
      &.primary {
        background-color: unset;
        border: 1px solid ${themeVars.color.primary.self};
        color: ${themeVars.color.primary.self};
      }
      /* 红色标签 */
      &.red {
        background-color: unset;
        border: 1px solid ${themeVars.github.borderColor.done.emphasis};
        color: ${themeVars.color.purple.self};
      }
      /* 橙色标签 */
      &.orange {
        background-color: unset;
        border: 1px solid ${themeVars.github.borderColor.attention.emphasis};
        color: ${themeVars.color.yellow.self};
      }
      /* 黄色标签 */
      &.yellow {
        background-color: unset;
        border: 1px solid ${themeVars.github.borderColor.attention.emphasis};
        color: ${themeVars.color.orange.self};
      }
      /* 黄绿色标签 */
      &.olive {
        background-color: unset;
        border: 1px solid ${themeVars.color.olive.self};
        color: ${themeVars.color.olive.self};
      }
      /* 绿色标签 */
      &.green {
        background-color: unset;
        border: 1px solid ${themeVars.github.borderColor.success.emphasis};
        color: ${themeVars.color.green.self};
      }
      /* 紫色标签 */
      &.purple {
        background-color: unset;
        border: 1px solid ${themeVars.github.borderColor.done.emphasis};
        color: ${themeVars.color.purple.self};
      }
    }
  }
  .ui.small.label {
    font-size: 12px;
  }
  .ui.mini.label {
    font-size: 10px;
  }
`;

// 提交中的 SHA 标签
export const shaLabel = css`
  a.ui.label.sha,
  a.ui.label.commit-id-short {
    border: unset;
    background-color: unset;
    color: ${themeVars.color.text.light.num1};
    font-size: 12px;
    font-weight: 500;
    // 仪表盘页的提交 SHA 标签居中对齐
    margin-top: 2px;
    &:hover {
      background-color: ${themeVars.color.label.hoverBg};
    }
    // 验证提交 SHA 标签
    &.commit-is-signed {
      border: unset !important;
      background-color: unset !important;
      &:hover {
        background-color: ${themeVars.color.label.hoverBg} !important;
      }
      span.ui.label.commit-is-signed {
        margin-left: 5px;
        height: 25px;
      }
      img.ui.avatar {
        border-radius: 9999px;
      }
    }
  }
  // 修复带验证的提交 SHA 标签的高度
  .ui.label.commit-id-short {
    height: 25px;
  }
  // 验证提交附带的图标
  span.ui.label.commit-is-signed {
    height: 25px;
    min-width: 35px;
    justify-content: center;
    // 验证信任
    &.sign-trusted {
      border: 1.5px solid ${themeVars.color.green.badge.self} !important;
      color: ${themeVars.color.green.badge.self} !important;
      &:hover {
        background-color: ${themeVars.color.green.badge.hover.bg} !important;
      }
    }
    // 验证未信任
    &.sign-untrusted {
      border: 1.5px solid ${themeVars.color.yellow.badge.self} !important;
      color: ${themeVars.color.yellow.badge.self} !important;
      &:hover {
        background-color: ${themeVars.color.yellow.badge.hover.bg} !important;
      }
    }
    // 验证未匹配
    &.sign-unmatched {
      border: 1.5px solid ${themeVars.color.orange.badge.self} !important;
      color: ${themeVars.color.orange.badge.self} !important;
      &:hover {
        background-color: ${themeVars.color.orange.badge.hover.bg} !important;
      }
    }
    // 验证警告
    &.sign-warning {
      border: 1.5px solid ${themeVars.color.red.badge.self} !important;
      color: ${themeVars.color.red.badge.self} !important;
      &:hover {
        background-color: ${themeVars.color.red.badge.hover.bg} !important;
      }
    }
    span {
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
  }
  span.ui.label.commit-is-signed,
  .ui.label.commit-id-short,
  .ui.label.commit-sign-badge {
    font-size: 12px;
    .ui.avatar {
      border-radius: 9999px;
    }
  }
`;

// 任务状态标签, 目前仅在管理员页面 Runner 状态中看到
export const taskStatusLabel = css`
  .runner-container .ui.label.task-status- {
    &success {
      color: ${themeVars.color.success.text};
      border: 1px solid ${themeVars.color.success.border};
      background: ${themeVars.color.success.bg};
    }

    &failure {
      color: ${themeVars.color.error.text};
      border: 1px solid ${themeVars.color.error.border};
      background: ${themeVars.color.error.bg.self};
    }

    &running,
    &skipped {
      color: ${themeVars.color.info.text};
      border: 1px solid ${themeVars.color.info.border};
      background: ${themeVars.color.info.bg};
    }

    &cancelled,
    &blocked {
      color: ${themeVars.color.warning.text};
      border: 1px solid ${themeVars.color.warning.border};
      background: ${themeVars.color.warning.bg};
    }
  }
`;

// 仓库标签 (私有/公开/内部)
export const repoLabel = css`
  span,
  // 用户切换面板的标签
  .org-visibility div {
    &.ui.basic.label {
      background-color: unset;
      color: ${themeVars.color.text.light.num1};
      font-size: 12px;
      font-weight: 500;
    }
  }
`;
