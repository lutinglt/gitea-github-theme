import { defineTheme } from "src";
import dark_theme from "themes/dark";

export default defineTheme({
  ...dark_theme,
  color: {
    ...dark_theme.color,
    primary: {
      ...dark_theme.color.primary,
      hover: "pink",
    },
  },
});
