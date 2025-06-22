import type { color } from "src";
import { defineTheme, themeVars } from "src";

const dark = {
  1: "#739cb3",
  2: "#40aaff",
  3: "#92b4c4",
  4: "#a1bbcd",
  5: "#cfddc1",
  6: "#e7eee0",
  7: "#f8faf6",
};

const light = {
  1: themeVars.color.blue,
  2: "#437aad",
  3: "#415b8b",
  4: "#25425a",
  5: "#223546",
  6: "#131923",
  7: "#06090b",
};

const alpha = {
  10: "#3683c019",
  20: "#3683c033",
  30: "#3683c04b",
  40: "#3683c066",
  50: "#3683c080",
  60: "#3683c099",
  70: "#3683c0b3",
  80: "#3683c0cc",
  90: "#3683c0e1",
};

const primary: color.Primary = {
  self: themeVars.color.blue,
  contrast: "#fff",
  dark,
  light,
  alpha,
  hover: light[1],
  active: light[2],
};

export default defineTheme({
  isDarkTheme: "true",
  color: {
    blue: "blue",
    primary: primary,
  },
});
