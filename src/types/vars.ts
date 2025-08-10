import { createGlobalThemeContract } from "@vanilla-extract/css";
import * as color from "./color";

function varMapper(prefix: string | null = null) {
  return (value: string | null, path: string[]) => {
    if (value === null) {
      path = path.filter(item => item !== "self");
      path = path.map(item => item.replace(/^num/, ""));
      value = path.join("-");
    }
    if (prefix) {
      value = `${prefix}-${value}`;
    }
    return value;
  };
}

const vars = {
  isDarkTheme: "is-dark-theme",
  chroma: color.chroma,
  color: {
    ...color.other,
    ...color.message,
    ...color.named,
    primary: color.primary,
    secondary: color.secondary,
    /** Actions 日志 ANSI 颜色 */
    ansi: color.ansi,
    console: color.console,
    diff: color.diff,
  },
  github: color.github,
};

const otherVars = {
  border: {
    radius: null,
  },
  color: {
    ...color.otherAuto,
  },
};

const customVars = {
  cloneMenuWidth: "clone-menu-width",
  explore: {
    repolistColumns: "explore-repolist-columns",
    userlistColumns: "explore-userlist-columns",
  },
  userRepolistColumns: "user-repolist-columns",
  org: {
    repolistColumns: "org-repolist-columns",
    userlistColumns: "org-userlist-columns",
  },
};

export const themeVars = createGlobalThemeContract(vars, varMapper());
export const otherThemeVars = createGlobalThemeContract(otherVars, varMapper());
export const customThemeVars = createGlobalThemeContract(customVars, varMapper("custom"));

export { css } from "@linaria/core";
