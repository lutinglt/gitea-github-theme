import { css, themeVars } from "src/types/vars";

export const table = css`
  .ui.table > tr > td,
  .ui.table > tbody > tr > td {
    border-top: 1px solid ${themeVars.color.secondary.alpha.num70};
  }
`;
