export default {
  shadow: {
    inset: "inset 0 1px 0 0 #1f23280a",
    resting: {
      xsmall: "0 1px 1px 0 #1f23280d",
      small: "0 1px 1px 0 #1f23280a, 0 1px 2px 0 #1f232808",
      medium: "0 1px 1px 0 #25292e1a, 0 3px 6px 0 #25292e1f",
    },
    floating: {
      small: "0 0 0 1px #d1d9e040, 0 6px 12px -3px #25292e0a, 0 6px 18px 0 #25292e1f",
      medium:
        "0 0 0 1px #d1d9e000, 0 8px 16px -4px #25292e14, 0 4px 32px -4px #25292e14, 0 24px 48px -12px #25292e14, 0 48px 96px -24px #25292e14",
      large: "0 0 0 1px #d1d9e000, 0 40px 80px 0 #25292e3d",
      xlarge: "0 0 0 1px #d1d9e000, 0 56px 112px 0 #25292e52",
    },
  },
  border: {
    default: "0.0625rem solid #d1d9e0",
    muted: "0.0625rem solid #d1d9e0b3",
    emphasis: "0.0625rem solid #818b98",
    disabled: "0.0625rem solid #818b981a",
    transparent: "0.0625rem solid #ffffff00",
    translucent: "0.0625rem solid #1f232826",
    neutral: {
      emphasis: "0.0625rem solid #59636e",
      muted: "0.0625rem solid #d1d9e0b3",
    },
    accent: {
      emphasis: "0.0625rem solid #0969da",
      muted: "0.0625rem solid #54aeff66",
    },
    success: {
      emphasis: "0.0625rem solid #1a7f37",
      muted: "0.0625rem solid #4ac26b66",
    },
    open: {
      emphasis: "0.0625rem solid #1a7f37",
      muted: "0.0625rem solid #4ac26b66",
    },
    danger: {
      emphasis: "0.0625rem solid #cf222e",
      muted: "0.0625rem solid #ff818266",
    },
    closed: {
      emphasis: "0.0625rem solid #cf222e",
      muted: "0.0625rem solid #ff818266",
    },
    draft: {
      emphasis: "0.0625rem solid #59636e",
      muted: "0.0625rem solid #d1d9e0b3",
    },
    attention: {
      emphasis: "0.0625rem solid #9a6700",
      muted: "0.0625rem solid #d4a72c66",
    },
    severe: {
      emphasis: "0.0625rem solid #bc4c00",
      muted: "0.0625rem solid #fb8f4466",
    },
    done: {
      emphasis: "0.0625rem solid #8250df",
      muted: "0.0625rem solid #c297ff66",
    },
    upsell: {
      emphasis: "0.0625rem solid #8250df",
      muted: "0.0625rem solid #c297ff66",
    },
    sponsors: {
      emphasis: "0.0625rem solid #bf3989",
      muted: "0.0625rem solid #ff80c866",
    },
  },
  bgColor: {
    default: "#ffffff",
    muted: "#f6f8fa",
    inset: "#f6f8fa",
    emphasis: "#25292e",
    inverse: "#25292e",
    white: "#ffffff",
    black: "#1f2328",
    disabled: "#eff2f5",
    transparent: "#ffffff00",
    neutral: {
      muted: "#818b981f",
      emphasis: "#59636e",
    },
    accent: {
      muted: "#ddf4ff",
      emphasis: "#0969da",
    },
    success: {
      muted: "#dafbe1",
      emphasis: "#1f883d",
    },
    open: {
      muted: "#dafbe1",
      emphasis: "#1f883d",
    },
    attention: {
      muted: "#fff8c5",
      emphasis: "#9a6700",
    },
    severe: {
      muted: "#fff1e5",
      emphasis: "#bc4c00",
    },
    danger: {
      muted: "#ffebe9",
      emphasis: "#cf222e",
    },
    closed: {
      muted: "#ffebe9",
      emphasis: "#cf222e",
    },
    draft: {
      muted: "#818b981f",
      emphasis: "#59636e",
    },
    done: {
      muted: "#fbefff",
      emphasis: "#8250df",
    },
    upsell: {
      muted: "#fbefff",
      emphasis: "#8250df",
    },
    sponsors: {
      muted: "#ffeff7",
      emphasis: "#bf3989",
    },
  },
  borderColor: {
    default: "#d1d9e0",
    muted: "#d1d9e0b3",
    emphasis: "#818b98",
    disabled: "#818b981a",
    transparent: "#ffffff00",
    translucent: "#1f232826",
    neutral: {
      muted: "#d1d9e0b3",
      emphasis: "#59636e",
    },
    accent: {
      muted: "#54aeff66",
      emphasis: "#0969da",
    },
    success: {
      muted: "#4ac26b66",
      emphasis: "#1a7f37",
    },
    open: {
      muted: "#4ac26b66",
      emphasis: "#1a7f37",
    },
    attention: {
      muted: "#d4a72c66",
      emphasis: "#9a6700",
    },
    severe: {
      muted: "#fb8f4466",
      emphasis: "#bc4c00",
    },
    danger: {
      muted: "#ff818266",
      emphasis: "#cf222e",
    },
    closed: {
      muted: "#ff818266",
      emphasis: "#cf222e",
    },
    draft: {
      muted: "#d1d9e0b3",
      emphasis: "#59636e",
    },
    done: {
      muted: "#c297ff66",
      emphasis: "#8250df",
    },
    upsell: {
      muted: "#c297ff66",
      emphasis: "#8250df",
    },
    sponsors: {
      muted: "#ff80c866",
      emphasis: "#bf3989",
    },
  },
  control: {
    bgColor: {
      rest: "#f6f8fa",
      hover: "#eff2f5",
      active: "#e6eaef",
      disabled: "#eff2f5",
      selected: "#f6f8fa",
    },
    fgColor: {
      rest: "#25292e",
      placeholder: "#59636e",
      disabled: "#818b98",
    },
    borderColor: {
      rest: "#d1d9e0",
      emphasis: "#818b98",
      disabled: "#818b981a",
      selected: "#f6f8fa",
      success: "#1a7f37",
      danger: "#cf222e",
      warning: "#9a6700",
    },
    iconColor: {
      rest: "#59636e",
    },
    transparent: {
      bgColor: {
        rest: "#ffffff00",
        hover: "#818b981a",
        active: "#818b9826",
        disabled: "#eff2f5",
        selected: "#818b9826",
      },
      borderColor: {
        rest: "#ffffff00",
        hover: "#ffffff00",
        active: "#ffffff00",
      },
    },
    danger: {
      fgColor: {
        rest: "#d1242f",
        hover: "#d1242f",
      },
      bgColor: {
        hover: "#ffebe9",
        active: "#ffebe966",
      },
    },
    checked: {
      bgColor: {
        rest: "#0969da",
        hover: "#0860ca",
        active: "#0757ba",
        disabled: "#818b98",
      },
      fgColor: {
        rest: "#ffffff",
        disabled: "#ffffff",
      },
      borderColor: {
        rest: "#0969da",
        hover: "#0860ca",
        active: "#0757ba",
        disabled: "#818b98",
      },
    },
  },
  controlTrack: {
    bgColor: {
      rest: "#e6eaef",
      hover: "#e0e6eb",
      active: "#dae0e7",
      disabled: "#818b98",
    },
    fgColor: {
      rest: "#59636e",
      disabled: "#ffffff",
    },
    borderColor: {
      rest: "#d1d9e0",
      disabled: "#818b98",
    },
  },
  controlKnob: {
    bgColor: {
      rest: "#ffffff",
      disabled: "#eff2f5",
      checked: "#ffffff",
    },
    borderColor: {
      rest: "#d1d9e0",
      disabled: "#eff2f5",
      checked: "#0969da",
    },
  },
  data: {
    blue: {
      color: {
        emphasis: "#006edb",
        muted: "#d1f0ff",
      },
    },
    auburn: {
      color: {
        emphasis: "#9d615c",
        muted: "#f2e9e9",
      },
    },
    orange: {
      color: {
        emphasis: "#eb670f",
        muted: "#ffe7d1",
      },
    },
    yellow: {
      color: {
        emphasis: "#b88700",
        muted: "#ffec9e",
      },
    },
    green: {
      color: {
        emphasis: "#30a147",
        muted: "#caf7ca",
      },
    },
    teal: {
      color: {
        emphasis: "#179b9b",
        muted: "#c7f5ef",
      },
    },
    purple: {
      color: {
        emphasis: "#894ceb",
        muted: "#f1e5ff",
      },
    },
    pink: {
      color: {
        emphasis: "#ce2c85",
        muted: "#ffe5f1",
      },
    },
    plum: {
      color: {
        emphasis: "#a830e8",
        muted: "#f8e5ff",
      },
    },
    red: {
      color: {
        emphasis: "#df0c24",
        muted: "#ffe2e0",
      },
    },
    gray: {
      color: {
        emphasis: "#808fa3",
        muted: "#e8ecf2",
      },
    },
    coral: {
      color: {
        emphasis: "#d43511",
        muted: "#ffe5db",
      },
    },
    brown: {
      color: {
        emphasis: "#856d4c",
        muted: "#eeeae2",
      },
    },
    lemon: {
      color: {
        emphasis: "#866e04",
        muted: "#f7eea1",
      },
    },
    olive: {
      color: {
        emphasis: "#64762d",
        muted: "#f0f0ad",
      },
    },
    lime: {
      color: {
        emphasis: "#527a29",
        muted: "#e3f2b5",
      },
    },
    pine: {
      color: {
        emphasis: "#167e53",
        muted: "#bff8db",
      },
    },
  },
  display: {
    blue: {
      scale: {
        "0": "#d1f0ff",
        "1": "#ade1ff",
        "2": "#75c8ff",
        "3": "#47afff",
        "4": "#0f8fff",
        "5": "#006edb",
        "6": "#005fcc",
        "7": "#004db3",
        "8": "#003d99",
        "9": "#002b75",
      },
      bgColor: {
        muted: "#d1f0ff",
        emphasis: "#006edb",
      },
      fgColor: "#005fcc",
      borderColor: {
        muted: "#ade1ff",
        emphasis: "#006edb",
      },
    },
    green: {
      scale: {
        "0": "#caf7ca",
        "1": "#9ceda0",
        "2": "#54d961",
        "3": "#31bf46",
        "4": "#30a147",
        "5": "#2c8141",
        "6": "#2b6e3f",
        "7": "#285c3b",
        "8": "#254b34",
        "9": "#1d3528",
      },
      bgColor: {
        muted: "#caf7ca",
        emphasis: "#2c8141",
      },
      fgColor: "#2b6e3f",
      borderColor: {
        muted: "#9ceda0",
        emphasis: "#2c8141",
      },
    },
    orange: {
      scale: {
        "0": "#ffe7d1",
        "1": "#fecfaa",
        "2": "#fbaf74",
        "3": "#f68c41",
        "4": "#eb670f",
        "5": "#b8500f",
        "6": "#a24610",
        "7": "#8d3c11",
        "8": "#70300f",
        "9": "#54230d",
      },
      bgColor: {
        muted: "#ffe7d1",
        emphasis: "#b8500f",
      },
      fgColor: "#a24610",
      borderColor: {
        muted: "#fecfaa",
        emphasis: "#b8500f",
      },
    },
    purple: {
      scale: {
        "0": "#f1e5ff",
        "1": "#e6d2fe",
        "2": "#d1b1fc",
        "3": "#bc91f8",
        "4": "#a672f3",
        "5": "#894ceb",
        "6": "#783ae4",
        "7": "#6223d7",
        "8": "#4f21ab",
        "9": "#391b79",
      },
      bgColor: {
        muted: "#f1e5ff",
        emphasis: "#894ceb",
      },
      fgColor: "#783ae4",
      borderColor: {
        muted: "#e6d2fe",
        emphasis: "#894ceb",
      },
    },
    plum: {
      scale: {
        "0": "#f8e5ff",
        "1": "#f0cdfe",
        "2": "#e2a7fb",
        "3": "#d487f7",
        "4": "#c264f2",
        "5": "#a830e8",
        "6": "#961edc",
        "7": "#7d1eb8",
        "8": "#651d96",
        "9": "#471769",
      },
      bgColor: {
        muted: "#f8e5ff",
        emphasis: "#a830e8",
      },
      fgColor: "#961edc",
      borderColor: {
        muted: "#f0cdfe",
        emphasis: "#a830e8",
      },
    },
    red: {
      scale: {
        "0": "#ffe2e0",
        "1": "#fecdcd",
        "2": "#fda5a7",
        "3": "#fb8389",
        "4": "#f85461",
        "5": "#df0c24",
        "6": "#c50d28",
        "7": "#a60c29",
        "8": "#880c27",
        "9": "#610a20",
      },
      bgColor: {
        muted: "#ffe2e0",
        emphasis: "#df0c24",
      },
      fgColor: "#c50d28",
      borderColor: {
        muted: "#fecdcd",
        emphasis: "#df0c24",
      },
    },
    coral: {
      scale: {
        "0": "#ffe5db",
        "1": "#fecebe",
        "2": "#fcab92",
        "3": "#f88768",
        "4": "#f25f3a",
        "5": "#d43511",
        "6": "#ba2e12",
        "7": "#9b2712",
        "8": "#7e2011",
        "9": "#5d180e",
      },
      bgColor: {
        muted: "#ffe5db",
        emphasis: "#d43511",
      },
      fgColor: "#ba2e12",
      borderColor: {
        muted: "#fecebe",
        emphasis: "#d43511",
      },
    },
    yellow: {
      scale: {
        "0": "#ffec9e",
        "1": "#ffd642",
        "2": "#ebb400",
        "3": "#d19d00",
        "4": "#b88700",
        "5": "#946a00",
        "6": "#805900",
        "7": "#704d00",
        "8": "#5c3d00",
        "9": "#422b00",
      },
      bgColor: {
        muted: "#ffec9e",
        emphasis: "#946a00",
      },
      fgColor: "#805900",
      borderColor: {
        muted: "#ffd642",
        emphasis: "#946a00",
      },
    },
    gray: {
      scale: {
        "0": "#e8ecf2",
        "1": "#d2dae4",
        "2": "#b4c0cf",
        "3": "#9ba9bb",
        "4": "#808fa3",
        "5": "#647182",
        "6": "#5c6570",
        "7": "#4e535a",
        "8": "#424448",
        "9": "#303031",
      },
      bgColor: {
        muted: "#e8ecf2",
        emphasis: "#647182",
      },
      fgColor: "#5c6570",
      borderColor: {
        muted: "#d2dae4",
        emphasis: "#647182",
      },
    },
    auburn: {
      scale: {
        "0": "#f2e9e9",
        "1": "#e6d6d5",
        "2": "#d4b7b5",
        "3": "#c59e9b",
        "4": "#b4827e",
        "5": "#9d615c",
        "6": "#8a5551",
        "7": "#744744",
        "8": "#5d3937",
        "9": "#432928",
      },
      bgColor: {
        muted: "#f2e9e9",
        emphasis: "#9d615c",
      },
      fgColor: "#8a5551",
      borderColor: {
        muted: "#e6d6d5",
        emphasis: "#9d615c",
      },
    },
    brown: {
      scale: {
        "0": "#eeeae2",
        "1": "#dfd7c8",
        "2": "#cbbda4",
        "3": "#b8a484",
        "4": "#a68b64",
        "5": "#856d4c",
        "6": "#755f43",
        "7": "#64513a",
        "8": "#51412f",
        "9": "#3a2e22",
      },
      bgColor: {
        muted: "#eeeae2",
        emphasis: "#856d4c",
      },
      fgColor: "#755f43",
      borderColor: {
        muted: "#dfd7c8",
        emphasis: "#856d4c",
      },
    },
    lemon: {
      scale: {
        "0": "#f7eea1",
        "1": "#f0db3d",
        "2": "#d8bd0e",
        "3": "#c2a60a",
        "4": "#a68c07",
        "5": "#866e04",
        "6": "#786002",
        "7": "#654f01",
        "8": "#523f00",
        "9": "#3d2e00",
      },
      bgColor: {
        muted: "#f7eea1",
        emphasis: "#866e04",
      },
      fgColor: "#786002",
      borderColor: {
        muted: "#f0db3d",
        emphasis: "#866e04",
      },
    },
    olive: {
      scale: {
        "0": "#f0f0ad",
        "1": "#dbe170",
        "2": "#b9c832",
        "3": "#9bae32",
        "4": "#819532",
        "5": "#64762d",
        "6": "#56682c",
        "7": "#495a2b",
        "8": "#3b4927",
        "9": "#2a331f",
      },
      bgColor: {
        muted: "#f0f0ad",
        emphasis: "#64762d",
      },
      fgColor: "#56682c",
      borderColor: {
        muted: "#dbe170",
        emphasis: "#64762d",
      },
    },
    lime: {
      scale: {
        "0": "#e3f2b5",
        "1": "#c7e580",
        "2": "#9bd039",
        "3": "#80b530",
        "4": "#6c9d2f",
        "5": "#527a29",
        "6": "#476c28",
        "7": "#3a5b25",
        "8": "#2f4a21",
        "9": "#213319",
      },
      bgColor: {
        muted: "#e3f2b5",
        emphasis: "#527a29",
      },
      fgColor: "#476c28",
      borderColor: {
        muted: "#c7e580",
        emphasis: "#527a29",
      },
    },
    pine: {
      scale: {
        "0": "#bff8db",
        "1": "#80efb9",
        "2": "#1dd781",
        "3": "#1dbf76",
        "4": "#1aa267",
        "5": "#167e53",
        "6": "#156f4b",
        "7": "#135d41",
        "8": "#114b36",
        "9": "#0d3627",
      },
      bgColor: {
        muted: "#bff8db",
        emphasis: "#167e53",
      },
      fgColor: "#156f4b",
      borderColor: {
        muted: "#80efb9",
        emphasis: "#167e53",
      },
    },
    teal: {
      scale: {
        "0": "#c7f5ef",
        "1": "#89ebe1",
        "2": "#22d3c7",
        "3": "#1db9b4",
        "4": "#179b9b",
        "5": "#127e81",
        "6": "#106e75",
        "7": "#0d5b63",
        "8": "#0a4852",
        "9": "#073740",
      },
      bgColor: {
        muted: "#c7f5ef",
        emphasis: "#127e81",
      },
      fgColor: "#106e75",
      borderColor: {
        muted: "#89ebe1",
        emphasis: "#127e81",
      },
    },
    cyan: {
      scale: {
        "0": "#bdf4ff",
        "1": "#7ae9ff",
        "2": "#00d0fa",
        "3": "#00b7db",
        "4": "#0099b8",
        "5": "#007b94",
        "6": "#006a80",
        "7": "#00596b",
        "8": "#004857",
        "9": "#003742",
      },
      bgColor: {
        muted: "#bdf4ff",
        emphasis: "#007b94",
      },
      fgColor: "#006a80",
      borderColor: {
        muted: "#7ae9ff",
        emphasis: "#007b94",
      },
    },
    indigo: {
      scale: {
        "0": "#e5e9ff",
        "1": "#d2d7fe",
        "2": "#b1b9fb",
        "3": "#979ff7",
        "4": "#7a82f0",
        "5": "#5a61e7",
        "6": "#494edf",
        "7": "#393cd5",
        "8": "#2d2db4",
        "9": "#25247b",
      },
      bgColor: {
        muted: "#e5e9ff",
        emphasis: "#5a61e7",
      },
      fgColor: "#494edf",
      borderColor: {
        muted: "#d2d7fe",
        emphasis: "#5a61e7",
      },
    },
    pink: {
      scale: {
        "0": "#ffe5f1",
        "1": "#fdc9e2",
        "2": "#f8a5cf",
        "3": "#f184bc",
        "4": "#e55da5",
        "5": "#ce2c85",
        "6": "#b12f79",
        "7": "#8e2e66",
        "8": "#6e2b53",
        "9": "#4d233d",
      },
      bgColor: {
        muted: "#ffe5f1",
        emphasis: "#ce2c85",
      },
      fgColor: "#b12f79",
      borderColor: {
        muted: "#fdc9e2",
        emphasis: "#ce2c85",
      },
    },
  },
  fgColor: {
    default: "#1f2328",
    muted: "#59636e",
    onEmphasis: "#ffffff",
    onInverse: "#ffffff",
    white: "#ffffff",
    black: "#1f2328",
    disabled: "#818b98",
    link: "#0969da",
    neutral: "#59636e",
    accent: "#0969da",
    success: "#1a7f37",
    open: "#1a7f37",
    attention: "#9a6700",
    severe: "#bc4c00",
    danger: "#d1242f",
    closed: "#d1242f",
    draft: "#59636e",
    done: "#8250df",
    upsell: "#8250df",
    sponsors: "#bf3989",
  },
  selection: {
    bgColor: "#0969da33",
  },
  ansi: {
    black: "#1f2328",
    blackBright: "#393f46",
    white: "#59636e",
    whiteBright: "#818b98",
    gray: "#59636e",
    red: "#cf222e",
    redBright: "#a40e26",
    green: "#116329",
    greenBright: "#1a7f37",
    yellow: "#4d2d00",
    yellowBright: "#633c01",
    blue: "#0969da",
    blueBright: "#218bff",
    magenta: "#8250df",
    magentaBright: "#a475f9",
    cyan: "#1b7c83",
    cyanBright: "#3192aa",
  },
  prettylights: {
    syntax: {
      comment: "#59636e",
      constant: "#0550ae",
      constantOtherReferenceLink: "#0a3069",
      "constant-other-reference-link": "#0a3069",
      entityTag: "#0550ae",
      entity: "#6639ba",
      storageModifierImport: "#1f2328",
      storage: {
        modifier: {
          import: "#1f2328",
        },
      },
      "entity-tag": "#0550ae",
      keyword: "#cf222e",
      string: "#0a3069",
      variable: "#953800",
      bracketHighlighterUnmatched: "#82071e",
      bracketHighlighterAngle: "#59636e",
      brackethighlighter: {
        unmatched: "#82071e",
        angle: "#59636e",
      },
      invalidIllegal: {
        text: "#d1242f",
        bg: "#ffebe9",
      },
      invalid: {
        illegal: {
          text: "#d1242f",
          bg: "#ffebe9",
        },
      },
      carriageReturn: {
        text: "#f6f8fa",
        bg: "#cf222e",
      },
      carriage: {
        return: {
          text: "#f6f8fa",
          bg: "#cf222e",
        },
      },
      stringRegexp: "#116329",
      "string-regexp": "#116329",
      markup: {
        list: "#3b2300",
        heading: "#0550ae",
        italic: "#1f2328",
        bold: "#1f2328",
        deleted: {
          text: "#82071e",
          bg: "#ffebe9",
        },
        inserted: {
          text: "#116329",
          bg: "#dafbe1",
        },
        changed: {
          text: "#953800",
          bg: "#ffd8b5",
        },
        ignored: {
          text: "#d1d9e0",
          bg: "#0550ae",
        },
      },
      metaDiffRange: "#8250df",
      meta: {
        diff: {
          range: "#8250df",
        },
      },
      sublimeLinterGutterMark: "#818b98",
      sublimelinter: {
        gutter: {
          mark: "#818b98",
        },
      },
    },
  },
  color: {
    ansi: {
      black: "#1f2328",
      "black-bright": "#393f46",
      white: "#59636e",
      "white-bright": "#818b98",
      gray: "#59636e",
      red: "#cf222e",
      "red-bright": "#a40e26",
      green: "#116329",
      "green-bright": "#1a7f37",
      yellow: "#4d2d00",
      "yellow-bright": "#633c01",
      blue: "#0969da",
      "blue-bright": "#218bff",
      magenta: "#8250df",
      "magenta-bright": "#a475f9",
      cyan: "#1b7c83",
      "cyan-bright": "#3192aa",
    },
    prettylights: {
      syntax: {
        comment: "#59636e",
        constant: "#0550ae",
        "constant-other-reference-link": "#0a3069",
        entity: "#6639ba",
        storage: {
          modifier: {
            import: "#1f2328",
          },
        },
        "entity-tag": "#0550ae",
        keyword: "#cf222e",
        string: "#0a3069",
        variable: "#953800",
        brackethighlighter: {
          unmatched: "#82071e",
          angle: "#59636e",
        },
        invalid: {
          illegal: {
            text: "#d1242f",
            bg: "#ffebe9",
          },
        },
        carriage: {
          return: {
            text: "#f6f8fa",
            bg: "#cf222e",
          },
        },
        "string-regexp": "#116329",
        markup: {
          list: "#3b2300",
          heading: "#0550ae",
          italic: "#1f2328",
          bold: "#1f2328",
          deleted: {
            text: "#82071e",
            bg: "#ffebe9",
          },
          inserted: {
            text: "#116329",
            bg: "#dafbe1",
          },
          changed: {
            text: "#953800",
            bg: "#ffd8b5",
          },
          ignored: {
            text: "#d1d9e0",
            bg: "#0550ae",
          },
        },
        meta: {
          diff: {
            range: "#8250df",
          },
        },
        sublimelinter: {
          gutter: {
            mark: "#818b98",
          },
        },
      },
    },
  },
  avatar: {
    bgColor: "#ffffff",
    borderColor: "#1f232826",
    shadow: "0 0 0 2px #ffffffcc",
  },
  avatarStack: {
    fade: {
      bgColor: {
        default: "#c8d1da",
        muted: "#dae0e7",
      },
    },
  },
  button: {
    default: {
      fgColor: {
        rest: "#25292e",
        disabled: "#818b98",
      },
      bgColor: {
        rest: "#f6f8fa",
        hover: "#eff2f5",
        active: "#e6eaef",
        selected: "#e6eaef",
        disabled: "#eff2f5",
      },
      borderColor: {
        rest: "#d1d9e0",
        hover: "#d1d9e0",
        active: "#d1d9e0",
        disabled: "#818b981a",
      },
      shadow: {
        resting: "0 1px 0 0 #1f23280a",
      },
    },
    primary: {
      fgColor: {
        rest: "#ffffff",
        disabled: "#ffffffcc",
      },
      iconColor: {
        rest: "#ffffffcc",
        disabled: "#ffffffcc",
      },
      bgColor: {
        rest: "#1f883d",
        hover: "#1c8139",
        active: "#197935",
        disabled: "#95d8a6",
      },
      borderColor: {
        rest: "#1f232826",
        hover: "#1f232826",
        active: "#1f232826",
        disabled: "#95d8a6",
      },
      shadow: {
        selected: "inset 0 1px 0 0 #002d114d",
      },
    },
    invisible: {
      fgColor: {
        rest: "#25292e",
        hover: "#25292e",
        active: "#25292e",
        disabled: "#818b98",
      },
      iconColor: {
        rest: "#59636e",
        hover: "#59636e",
        disabled: "#818b98",
      },
      bgColor: {
        rest: "#ffffff00",
        hover: "#818b981a",
        active: "#818b9826",
        disabled: "#ffffff00",
      },
      borderColor: {
        rest: "#ffffff00",
        hover: "#ffffff00",
        disabled: "#ffffff00",
      },
    },
    outline: {
      fgColor: {
        rest: "#0969da",
        hover: "#ffffff",
        active: "#ffffff",
        disabled: "#0969da80",
      },
      bgColor: {
        rest: "#f6f8fa",
        hover: "#0969da",
        active: "#0757ba",
        disabled: "#eff2f5",
      },
      borderColor: {
        hover: "#1f232826",
        active: "#1f232826",
      },
      shadow: {
        selected: "inset 0 1px 0 0 #00215533",
      },
    },
    danger: {
      fgColor: {
        rest: "#d1242f",
        hover: "#ffffff",
        active: "#ffffff",
        disabled: "#d1242f80",
      },
      iconColor: {
        rest: "#d1242f",
        hover: "#ffffff",
        disabled: "#d1242f80",
      },
      bgColor: {
        rest: "#f6f8fa",
        hover: "#cf222e",
        active: "#a40e26",
        disabled: "#eff2f5",
      },
      borderColor: {
        rest: "#d1d9e0",
        hover: "#1f232826",
        active: "#1f232826",
      },
      shadow: {
        selected: "inset 0 1px 0 0 #4c001433",
      },
    },
    inactive: {
      fgColor: "#59636e",
      bgColor: "#e6eaef",
    },
    star: {
      iconColor: "#eac54f",
    },
  },
  buttonCounter: {
    default: {
      bgColor: {
        rest: "#818b981f",
      },
    },
    invisible: {
      bgColor: {
        rest: "#818b981f",
      },
    },
    primary: {
      bgColor: {
        rest: "#002d1133",
      },
    },
    outline: {
      bgColor: {
        rest: "#0969da1a",
        hover: "#ffffff33",
        disabled: "#0969da0d",
      },
      fgColor: {
        rest: "#0550ae",
        hover: "#ffffff",
        disabled: "#0969da80",
      },
    },
    danger: {
      bgColor: {
        hover: "#ffffff33",
        disabled: "#cf222e0d",
        rest: "#cf222e1a",
      },
      fgColor: {
        rest: "#c21c2c",
        hover: "#ffffff",
        disabled: "#d1242f80",
      },
    },
  },
  buttonKeybindingHint: {
    default: {
      bgColor: {
        rest: "#eff2f5",
        disabled: "#eff2f5",
      },
      borderColor: {
        rest: "#d1d9e0b3",
        disabled: "#818b981a",
      },
      fgColor: {
        rest: "#59636e",
        disabled: "#818b98",
      },
    },
    invisible: {
      bgColor: {
        rest: "#eff2f5",
        hover: "#818b981a",
        active: "#818b9826",
        disabled: "#ffffff00",
      },
      borderColor: {
        rest: "#ffffff00",
        disabled: "#818b981a",
      },
      fgColor: {
        rest: "#59636e",
        disabled: "#818b98",
      },
    },
    primary: {
      bgColor: {
        rest: "#002d1133",
        disabled: "#002d111a",
      },
      borderColor: {
        rest: "#1f232826",
        disabled: "#818b981a",
      },
      fgColor: {
        rest: "#ffffff",
        disabled: "#ffffffcc",
      },
    },
    danger: {
      bgColor: {
        rest: "#eff2f5",
        hover: "#1f232833",
        active: "#1f232866",
        disabled: "#eff2f5",
      },
      borderColor: {
        rest: "#d1d9e0b3",
        hover: "#1f232826",
        active: "#1f232826",
        disabled: "#818b981a",
      },
      fgColor: {
        rest: "#59636e",
        hover: "#ffffff",
        active: "#ffffff",
        disabled: "#818b98",
      },
    },
    inactive: {
      bgColor: "#eff2f5",
      borderColor: "#d1d9e0b3",
      fgColor: "#59636e",
    },
  },
  card: {
    bgColor: "#ffffff",
  },
  codeMirror: {
    fgColor: "#1f2328",
    bgColor: "#ffffff",
    gutters: {
      bgColor: "#ffffff",
    },
    gutterMarker: {
      fgColor: {
        default: "#ffffff",
        muted: "#59636e",
      },
    },
    lineNumber: {
      fgColor: "#59636e",
    },
    cursor: {
      fgColor: "#1f2328",
    },
    selection: {
      bgColor: "#54aeff66",
    },
    activeline: {
      bgColor: "#818b981f",
    },
    matchingBracket: {
      fgColor: "#1f2328",
    },
    lines: {
      bgColor: "#ffffff",
    },
    syntax: {
      fgColor: {
        comment: "#1f2328",
        constant: "#0550ae",
        entity: "#8250df",
        keyword: "#cf222e",
        storage: "#cf222e",
        string: "#0a3069",
        support: "#0550ae",
        variable: "#953800",
      },
    },
  },
  contribution: {
    default: {
      bgColor: {
        "0": "#eff2f5",
        "1": "#aceebb",
        "2": "#4ac26b",
        "3": "#2da44e",
        "4": "#116329",
      },
      borderColor: {
        "0": "#1f23280d",
        "1": "#1f23280d",
        "2": "#1f23280d",
        "3": "#1f23280d",
        "4": "#1f23280d",
      },
    },
    winter: {
      bgColor: {
        "1": "#b6e3ff",
        "2": "#54aeff",
        "3": "#0969da",
        "4": "#0a3069",
      },
    },
    halloween: {
      bgColor: {
        "1": "#f0db3d",
        "2": "#ffd642",
        "3": "#f68c41",
        "4": "#1f2328",
      },
    },
  },
  counter: {
    borderColor: "#ffffff00",
    bgColor: {
      muted: "#818b981f",
      emphasis: "#59636e",
    },
  },
  dashboard: {
    bgColor: "#ffffff",
  },
  diffBlob: {
    additionLine: {
      fgColor: "#1f2328",
      bgColor: "#dafbe1",
    },
    additionWord: {
      fgColor: "#1f2328",
      bgColor: "#aceebb",
    },
    additionNum: {
      fgColor: "#1f2328",
      bgColor: "#aceebb",
    },
    deletionLine: {
      fgColor: "#1f2328",
      bgColor: "#ffebe9",
    },
    deletionWord: {
      fgColor: "#1f2328",
      bgColor: "#ffcecb",
    },
    deletionNum: {
      fgColor: "#1f2328",
      bgColor: "#ffcecb",
    },
    hunkLine: {
      bgColor: "#ddf4ff",
      fgColor: "#59636e",
    },
    hunkNum: {
      fgColor: {
        rest: "#1f2328",
        hover: "#ffffff",
      },
      bgColor: {
        rest: "#b6e3ff",
        hover: "#0969da",
      },
    },
    emptyNum: {
      bgColor: "#f6f8fa",
    },
    emptyLine: {
      bgColor: "#f6f8fa",
    },
    expander: {
      iconColor: "#59636e",
    },
  },
  focus: {
    outline: "0.125rem solid #0969da",
    "outline-color": "#0969da",
    outlineColor: "#0969da",
  },
  header: {
    bgColor: "#25292e",
    fgColor: {
      default: "#ffffffb3",
      logo: "#ffffff",
    },
    borderColor: {
      divider: "#818b98",
    },
  },
  headerSearch: {
    bgColor: "#25292e",
    borderColor: "#818b98",
  },
  highlight: {
    neutral: {
      bgColor: "#fff8c5",
    },
  },
  label: {
    green: {
      bgColor: {
        rest: "#caf7ca",
        hover: "#9ceda0",
        active: "#54d961",
      },
      fgColor: {
        rest: "#2b6e3f",
        hover: "#285c3b",
        active: "#254b34",
      },
      borderColor: "#ffffff00",
    },
    orange: {
      bgColor: {
        rest: "#ffe7d1",
        hover: "#fecfaa",
        active: "#fbaf74",
      },
      fgColor: {
        rest: "#a24610",
        hover: "#8d3c11",
        active: "#70300f",
      },
      borderColor: "#ffffff00",
    },
    purple: {
      bgColor: {
        rest: "#f1e5ff",
        hover: "#e6d2fe",
        active: "#d1b1fc",
      },
      fgColor: {
        rest: "#783ae4",
        hover: "#6223d7",
        active: "#4f21ab",
      },
      borderColor: "#ffffff00",
    },
    red: {
      bgColor: {
        rest: "#ffe2e0",
        hover: "#fecdcd",
        active: "#fda5a7",
      },
      fgColor: {
        rest: "#c50d28",
        hover: "#a60c29",
        active: "#880c27",
      },
      borderColor: "#ffffff00",
    },
    yellow: {
      bgColor: {
        rest: "#ffec9e",
        hover: "#ffd642",
        active: "#ebb400",
      },
      fgColor: {
        rest: "#805900",
        hover: "#704d00",
        active: "#5c3d00",
      },
      borderColor: "#ffffff00",
    },
    gray: {
      bgColor: {
        rest: "#e8ecf2",
        hover: "#d2dae4",
        active: "#b4c0cf",
      },
      fgColor: {
        rest: "#5c6570",
        hover: "#4e535a",
        active: "#424448",
      },
      borderColor: "#ffffff00",
    },
    auburn: {
      bgColor: {
        rest: "#f2e9e9",
        hover: "#e6d6d5",
        active: "#d4b7b5",
      },
      fgColor: {
        rest: "#8a5551",
        hover: "#744744",
        active: "#5d3937",
      },
      borderColor: "#ffffff00",
    },
    brown: {
      bgColor: {
        rest: "#eeeae2",
        hover: "#dfd7c8",
        active: "#cbbda4",
      },
      fgColor: {
        rest: "#755f43",
        hover: "#64513a",
        active: "#51412f",
      },
      borderColor: "#ffffff00",
    },
    lemon: {
      bgColor: {
        rest: "#f7eea1",
        hover: "#f0db3d",
        active: "#d8bd0e",
      },
      fgColor: {
        rest: "#786002",
        hover: "#654f01",
        active: "#523f00",
      },
      borderColor: "#ffffff00",
    },
    olive: {
      bgColor: {
        rest: "#f0f0ad",
        hover: "#dbe170",
        active: "#b9c832",
      },
      fgColor: {
        rest: "#56682c",
        hover: "#495a2b",
        active: "#3b4927",
      },
      borderColor: "#ffffff00",
    },
    lime: {
      bgColor: {
        rest: "#e3f2b5",
        hover: "#c7e580",
        active: "#9bd039",
      },
      fgColor: {
        rest: "#476c28",
        hover: "#3a5b25",
        active: "#2f4a21",
      },
      borderColor: "#ffffff00",
    },
    pine: {
      bgColor: {
        rest: "#bff8db",
        hover: "#80efb9",
        active: "#1dd781",
      },
      fgColor: {
        rest: "#156f4b",
        hover: "#135d41",
        active: "#114b36",
      },
      borderColor: "#ffffff00",
    },
    teal: {
      bgColor: {
        rest: "#c7f5ef",
        hover: "#89ebe1",
        active: "#22d3c7",
      },
      fgColor: {
        rest: "#106e75",
        hover: "#0d5b63",
        active: "#0a4852",
      },
      borderColor: "#ffffff00",
    },
    cyan: {
      bgColor: {
        rest: "#bdf4ff",
        hover: "#7ae9ff",
        active: "#00d0fa",
      },
      fgColor: {
        rest: "#006a80",
        hover: "#00596b",
        active: "#004857",
      },
      borderColor: "#ffffff00",
    },
    indigo: {
      bgColor: {
        rest: "#e5e9ff",
        hover: "#d2d7fe",
        active: "#b1b9fb",
      },
      fgColor: {
        rest: "#494edf",
        hover: "#393cd5",
        active: "#2d2db4",
      },
      borderColor: "#ffffff00",
    },
    blue: {
      bgColor: {
        rest: "#d1f0ff",
        hover: "#ade1ff",
        active: "#75c8ff",
      },
      fgColor: {
        rest: "#005fcc",
        hover: "#004db3",
        active: "#003d99",
      },
      borderColor: "#ffffff00",
    },
    plum: {
      bgColor: {
        rest: "#f8e5ff",
        hover: "#f0cdfe",
        active: "#e2a7fb",
      },
      fgColor: {
        rest: "#961edc",
        hover: "#7d1eb8",
        active: "#651d96",
      },
      borderColor: "#ffffff00",
    },
    pink: {
      bgColor: {
        rest: "#ffe5f1",
        hover: "#fdc9e2",
        active: "#f8a5cf",
      },
      fgColor: {
        rest: "#b12f79",
        hover: "#8e2e66",
        active: "#6e2b53",
      },
      borderColor: "#ffffff00",
    },
    coral: {
      bgColor: {
        rest: "#ffe5db",
        hover: "#fecebe",
        active: "#fcab92",
      },
      fgColor: {
        rest: "#ba2e12",
        hover: "#9b2712",
        active: "#7e2011",
      },
      borderColor: "#ffffff00",
    },
  },
  menu: {
    bgColor: {
      active: "#ffffff00",
    },
  },
  overlay: {
    bgColor: "#ffffff",
    borderColor: "#d1d9e080",
    backdrop: {
      bgColor: "#c8d1da66",
    },
  },
  page: {
    header: {
      bgColor: "#f6f8fa",
    },
  },
  progressBar: {
    track: {
      bgColor: "#d1d9e0",
      borderColor: "#ffffff00",
    },
    bgColor: {
      danger: "#cf222e",
      severe: "#bc4c00",
      sponsors: "#bf3989",
      done: "#8250df",
      accent: "#0969da",
      success: "#1f883d",
      neutral: "#59636e",
      attention: "#9a6700",
    },
  },
  reactionButton: {
    selected: {
      bgColor: {
        rest: "#ddf4ff",
        hover: "#caecff",
      },
      fgColor: {
        rest: "#0969da",
        hover: "#0550ae",
      },
    },
  },
  selectMenu: {
    borderColor: "#ffffff00",
    bgColor: {
      active: "#b6e3ff",
    },
  },
  sideNav: {
    bgColor: {
      selected: "#ffffff",
    },
  },
  skeletonLoader: {
    bgColor: "#818b981a",
  },
  timelineBadge: {
    bgColor: "#f6f8fa",
  },
  tooltip: {
    bgColor: "#25292e",
    fgColor: "#ffffff",
  },
  topicTag: {
    borderColor: "#ffffff00",
  },
  treeViewItem: {
    leadingVisual: {
      iconColor: {
        rest: "#54aeff",
      },
    },
  },
  underlineNav: {
    borderColor: {
      active: "#fd8c73",
      hover: "#d1d9e0b3",
    },
    iconColor: {
      rest: "#59636e",
    },
  },
};
