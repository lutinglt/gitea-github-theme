import { css, themeVars } from "src/types/vars";
import { primaryHoverStyle, primaryStyle } from "styles/public/button";

const tinyStyle = {
  color: themeVars.github.button.primary.fgColor.accent,
  backgroundColor: themeVars.color.button,
  borderColor: themeVars.color.light.border,
};

const tinyHoverStyle = {
  color: themeVars.github.button.primary.fgColor.rest,
  backgroundColor: themeVars.github.button.primary.bgColor.hover,
  borderColor: themeVars.github.button.primary.borderColor.hover,
};

// 设置界面下的按钮
export const button = css`
  // 不包含管理员的设置界面
  .user-main-content,
  .repo-setting-content,
  .user-setting-content,
  .org-setting-content {
    // 主色调按钮替换为普通按钮
    .ui.primary.button {
      color: ${themeVars.color.text.light.self};
      background-color: ${themeVars.color.button};
      border-color: ${themeVars.color.light.border};

      &:hover {
        background-color: ${themeVars.color.hover.self};
      }
    }
    // 迷你按钮替换为自定义的主色调按钮 (例: SSH 验证按钮)
    .ui.primary.button.tiny {
      ${tinyStyle}
      &:hover {
        ${tinyHoverStyle}
      }
    }
  }
  // 右上角迷你按钮替换会主色调按钮
  .user-main-content,
  .repo-setting-content,
  .user-setting-content,
  .org-setting-content,
  .admin-setting-content {
    .ui.attached.header > .ui.right {
      .ui.primary.button.tiny {
        ${primaryStyle}
        padding: 3px 12px;
        min-height: 20px;
        line-height: 20px;
        &:hover {
          ${primaryHoverStyle}
        }
      }
    }
  }
  // 管理员设置界面下的自定义主色调按钮
  .admin-setting-content .ui.primary.button {
    ${tinyStyle}
    padding: 5px 16px;
    line-height: 22px;
    &:hover {
      ${tinyHoverStyle}
    }
  }
`;

export const label = css`
  // Runner 标签
  .runner-container {
    // 普通标签, runner 状态: 离线, runner 标签
    .ui.label {
      border: 1px solid ${themeVars.color.light.border};
    }
  }
`;

// 设置右面板的内容
export const content = css`
  .user-main-content,
  .repo-setting-content,
  .user-setting-content,
  .org-setting-content,
  .admin-setting-content {
    .ui.top.attached.header {
      border: 0;
      font-size: 1.5rem;
      font-weight: 400;
      background-color: unset !important;
      margin-bottom: 0.25rem;
    }

    .ui.attached.segment {
      background-color: unset;
      border-radius: 0.5rem !important;
    }

    .ui.attached.segment:not(.error) {
      border: 1px solid ${themeVars.color.light.border} !important;
    }

    .ui.attached.segment.error {
      border: 1px solid ${themeVars.color.error.border} !important;
    }
  }
`;
