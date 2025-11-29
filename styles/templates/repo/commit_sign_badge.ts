import { css, otherThemeVars, themeVars } from "src/types/vars";

export const commitSignBadge = css`
  .github-theme-sha {
    border-radius: ${otherThemeVars.border.radius};
    font-family:
      -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji",
      "Segoe UI Emoji";
    font-weight: 500;
    padding: 0px 8px;
    height: 26px;
    min-width: 85px; // 非等宽字体导致不对齐, 目前看到最大长度为 83px
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      background-color: ${themeVars.color.hover.self};
    }
  }
`;
