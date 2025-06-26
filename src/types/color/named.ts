const baseColor = {
  self: null,
  light: null,
  dark: {
    num1: null,
    num2: null,
  },
};

const commitColor = {
  /** 提交哈希值颜色 */
  badge: {
    /** 边框色 */
    self: null,
    /** 背景色 */
    bg: null,
    /** 悬停时背景色 */
    hover: {
      bg: null,
    },
  },
};

export const named = {
  /** 红色/提交警告签名颜色 */
  red: {
    ...commitColor,
    ...baseColor,
  },
  /** 橙色/提交未匹配签名颜色 */
  orange: {
    ...commitColor,
    ...baseColor,
  },
  /** 黄色/提交未信任签名颜色 */
  yellow: {
    ...commitColor,
    ...baseColor,
  },
  olive: baseColor,
  /** 绿色/提交信任签名颜色 */
  green: {
    ...commitColor,
    ...baseColor,
  },
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
