import { css, themeVars, otherThemeVars } from "src/types/vars";

export const commitSignBadge = css`
  .github-theme-sha {
    border-radius: ${otherThemeVars.border.radius};
    font-weight: 500;
    padding: 0px 8px;
    height: 26px;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      background-color: ${themeVars.color.hover.self};
    }
  }
`;
