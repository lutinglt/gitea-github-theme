import { css, themeVars } from "src";
import { scaleColorLight } from "src/functions";

const red = "#cc4848";

export const setting_global = css`
  @use "sass:color";
  .lines-num span:after {
    color: ${themeVars.color.primary.hover};
  }
  .ui.cards > .card,
  .ui.card {
    > .extra a:not(.ui):hover {
      color: ${scaleColorLight(red, 10)};
      background-color: color.scale(#cc4848, $lightness: 10%);
    }
    .text {
      color: ${scaleColorLight(red, -20)};
      background-color: color.scale(#cc4848, $lightness: -20%);
    }
  }
`;
