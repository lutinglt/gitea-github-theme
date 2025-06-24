const num = {
  num1: null,
  num2: null,
  num3: null,
  num4: null,
  num5: null,
  num6: null,
  num7: null,
};

const alpha = {
  num10: null,
  num20: null,
  num30: null,
  num40: null,
  num50: null,
  num60: null,
  num70: null,
  num80: null,
  num90: null,
};

export const primary = {
  self: null,
  contrast: null,
  dark: num,
  light: num,
  alpha: alpha,
  hover: null,
  active: null,
};

export const secondary = {
  self: null,
  dark: {
    num8: null,
    num9: null,
    num10: null,
    num11: null,
    num12: null,
    num13: null,
    ...num,
  },
  light: {
    num1: null,
    num2: null,
    num3: null,
    num4: null,
  },
  alpha: alpha,
};

const baseColor = {
  self: null,
  light: null,
  dark: {
    num1: null,
    num2: null,
  },
};

export const self = {
  red: baseColor,
  orange: baseColor,
  yellow: baseColor,
  olive: baseColor,
  green: baseColor,
  teal: baseColor,
  blue: baseColor,
  violet: baseColor,
  purple: baseColor,
  pink: baseColor,
  brown: baseColor,
  black: baseColor,
  grey: {
    self: null,
    light: null,
  },
  gold: null,
  white: null,
};

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
  active: {
    bg: null,
  },
  hover: {
    bg: null,
  },
  menu: {
    bg: null,
    border: null,
  },
};

const row = {
  bg: null,
  border: null,
};

const line = {
  linenum: {
    bg: null,
  },
  row: row,
  word: {
    bg: null,
  },
};

export const diff = {
  added: line,
  moved: {
    row: row,
  },
  removed: line,
  inactive: null,
};
