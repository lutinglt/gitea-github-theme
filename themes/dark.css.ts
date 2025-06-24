import type { Primary } from "src/types";
import { defineTheme, themeVars } from "src";

const dark = {
  num1: "#739cb3",
  num2: "#40aaff",
  num3: "#92b4c4",
  num4: "#a1bbcd",
  num5: "#cfddc1",
  num6: "#e7eee0",
  num7: "#f8faf6",
};

const light = {
  num1: themeVars.color.primary.self,
  num2: "#437aad",
  num3: "#415b8b",
  num4: "#25425a",
  num5: "#223546",
  num6: "#131923",
  num7: "#06090b",
};

const alpha = {
  num10: "#3683c019",
  num20: "#3683c033",
  num30: "#3683c04b",
  num40: "#3683c066",
  num50: "#3683c080",
  num60: "#3683c099",
  num70: "#3683c0b3",
  num80: "#3683c0cc",
  num90: "#3683c0e1",
};

const primary: Primary = {
  self: themeVars.color.blue,
  contrast: "#fff",
  dark,
  light,
  alpha,
  hover: light.num1,
  active: light.num2,
};

export default defineTheme({
  isDarkTheme: "true",
  color: {
    blue: "blue",
    primary: primary,
  },
});
