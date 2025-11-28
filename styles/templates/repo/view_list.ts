import { css, otherThemeVars, themeVars } from "src/types/vars";

export const repoFileLastCommit = css`
  // 仓库页和文件列表文件夹页的最后一次提交
  .repository.file.list #repo-files-table .github-theme-templates.repo-file-line.repo-file-last-commit {
    padding-right: 10px;
    // 提交时间
    .github-latest-time {
      color: ${themeVars.color.text.light.num1};
      font-size: 12px;
    }
    // 提交历史按钮
    .github-latest-commit {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      border-radius: ${otherThemeVars.border.radius};
      padding: 0px 8px;
      min-height: 28px;
      height: 28px;
      font-size: 12px;
      font-weight: 500;
      &:hover {
        background-color: ${themeVars.github.control.transparent.bgColor.hover};
        color: inherit;
        text-decoration-line: none;
      }
      svg {
        color: ${themeVars.color.text.light.num1};
      }
    }
  }
`;
