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
