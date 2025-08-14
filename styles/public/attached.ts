import { css, otherThemeVars, themeVars } from "src/types/vars";

export const attached = css`
  // 设置右面板的内容
  .user-main-content,
  .repo-setting-content,
  .user-setting-content,
  .org-setting-content,
  .admin-setting-content,
  // 新建页面内容
  .page-content.repository.new-repo,
  .page-content.repository.new.migrate,
  .page-content.repository.new.fork,
  .page-content.organization.new.org {
    .ui.top.attached.header {
      border: 0;
      font-size: 20px;
      font-weight: 400;
      background-color: unset !important;
      margin-bottom: 0.25rem;
    }

    .ui.attached.segment {
      background-color: unset;
      border-radius: ${otherThemeVars.border.radius} !important;
    }

    .ui.attached.segment:not(.error) {
      border: 1px solid ${themeVars.color.light.border} !important;
    }

    .ui.attached.segment.error {
      border: 1px solid ${themeVars.color.error.border} !important;
    }
  }
`;
