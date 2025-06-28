const ansiColor = {
  black: null,
  red: null,
  green: null,
  yellow: null,
  blue: null,
  magenta: null,
  cyan: null,
  white: null,
};

export const ansi = {
  bright: ansiColor,
  ...ansiColor,
};

export const console = {
  fg: {
    self: null,
    subtle: null,
  },
  bg: null,
  border: null,
  activeBg: "color-console-active-bg",
  hoverBg: "color-console-hover-bg",
  menu: {
    bg: null,
    border: null,
  },
};
