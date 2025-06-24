import { mix } from "polished";
import { css, themeVars } from "src";

export const setting_global = css`
  .lines-num span:after {
    color: ${themeVars.color.primary.hover};
  }
  .ui.cards > .card,
  .ui.card {
    > .extra a:not(.ui):hover {
      color: ${mix(0.1, "#fff", "#cc4848")};
      background-color: scale-color(#cc4848, $lightness: 10%);
    }
  }
`;
