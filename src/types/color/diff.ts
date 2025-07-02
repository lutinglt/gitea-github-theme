const row = {
  bg: null,
  border: null,
};

const line = {
  /** 行号 */
  linenum: {
    bg: null,
  },
  /** 代码行 */
  row: row,
  /** 代码 */
  word: {
    bg: null,
  },
};

export const diff = {
  /** 添加 */
  added: line,
  /** 移动 */
  moved: {
    row: row,
  },
  /** 删除 */
  removed: line,
  /** 对比空白部分背景色 */
  inactive: null,
};
