import { css, otherThemeVars, themeVars } from "src/types/vars";

export const repoButtonRow = css`
  .github-theme-templates {
    // 仓库按钮行
    &.repo-button-row {
      margin: 0 0 16px 0;
      .repo-button-row-left .repository-summary {
        > .item {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          border-radius: ${otherThemeVars.border.radius};
          color: ${themeVars.color.text.light.num1};
          padding: 4px;
          height: 32px;
          min-height: 32px;
          &:hover {
            background-color: ${themeVars.github.control.transparent.bgColor.hover};
            text-decoration-line: none;
          }
          svg {
            margin-right: 4px;
          }
          b {
            color: ${themeVars.color.caret};
          }
        }
      }
      .repo-button-row-right {
        // 添加文件按钮菜单
        .repo-add-file > .menu {
          min-width: 152px;
        }
      }
    }
  }
`;
