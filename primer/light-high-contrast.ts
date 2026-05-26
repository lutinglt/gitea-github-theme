export default {
  shadow: {
    inset: "inset 0 1px 0 0 #0104090a",
    resting: {
      xsmall: "0 1px 1px 0 #0104090d",
      small: "0 1px 1px 0 #0104090a, 0 1px 2px 0 #01040908",
      medium: "0 1px 1px 0 #25292e1a, 0 3px 6px 0 #25292e1f",
    },
    floating: {
      small: "0 0 0 1px #454c5440, 0 6px 12px -3px #25292e0a, 0 6px 18px 0 #25292e1f",
      medium:
        "0 0 0 1px #454c54, 0 8px 16px -4px #25292e14, 0 4px 32px -4px #25292e14, 0 24px 48px -12px #25292e14, 0 48px 96px -24px #25292e14",
      large: "0 0 0 1px #454c54, 0 40px 80px 0 #25292e3d",
      xlarge: "0 0 0 1px #454c54, 0 56px 112px 0 #25292e52",
    },
  },
  border: {
    default: "0.0625rem solid #454c54",
    muted: "0.0625rem solid #454c54",
    emphasis: "0.0625rem solid #454c54",
    disabled: "0.0625rem solid #59636e1f",
    transparent: "0.0625rem solid #ffffff00",
    translucent: "0.0625rem solid #59636e",
    neutral: {
      emphasis: "0.0625rem solid #59636e",
      muted: "0.0625rem solid #454c54",
    },
    accent: {
      emphasis: "0.0625rem solid #0349b4",
      muted: "0.0625rem solid #368cf9",
    },
    success: {
      emphasis: "0.0625rem solid #055d20",
      muted: "0.0625rem solid #26a148",
    },
    open: {
      emphasis: "0.0625rem solid #055d20",
      muted: "0.0625rem solid #26a148",
    },
    danger: {
      emphasis: "0.0625rem solid #a0111f",
      muted: "0.0625rem solid #ee5a5d",
    },
    closed: {
      emphasis: "0.0625rem solid #a0111f",
      muted: "0.0625rem solid #ee5a5d",
    },
    draft: {
      emphasis: "0.0625rem solid #59636e",
      muted: "0.0625rem solid #454c54",
    },
    attention: {
      emphasis: "0.0625rem solid #744500",
      muted: "0.0625rem solid #b58407",
    },
    severe: {
      emphasis: "0.0625rem solid #873800",
      muted: "0.0625rem solid #dc6d1a",
    },
    done: {
      emphasis: "0.0625rem solid #622cbc",
      muted: "0.0625rem solid #a371f7",
    },
    upsell: {
      emphasis: "0.0625rem solid #622cbc",
      muted: "0.0625rem solid #a371f7",
    },
    sponsors: {
      emphasis: "0.0625rem solid #971368",
      muted: "0.0625rem solid #ed4baf",
    },
  },
  bgColor: {
    default: "#ffffff",
    muted: "#e6eaef",
    inset: "#eff2f5",
    emphasis: "#25292e",
    inverse: "#25292e",
    white: "#ffffff",
    black: "#010409",
    disabled: "#e0e6eb",
    transparent: "#ffffff00",
    neutral: {
      muted: "#e0e6eb",
      emphasis: "#454c54",
    },
    accent: {
      muted: "#dff7ff",
      emphasis: "#0349b4",
    },
    success: {
      muted: "#d2fedb",
      emphasis: "#055d20",
    },
    open: {
      muted: "#d2fedb",
      emphasis: "#055d20",
    },
    attention: {
      muted: "#fcf7be",
      emphasis: "#744500",
    },
    severe: {
      muted: "#fff2d5",
      emphasis: "#873800",
    },
    danger: {
      muted: "#fff0ee",
      emphasis: "#a0111f",
    },
    closed: {
      muted: "#fff0ee",
      emphasis: "#a0111f",
    },
    draft: {
      muted: "#e0e6eb",
      emphasis: "#454c54",
    },
    done: {
      muted: "#faf0fe",
      emphasis: "#622cbc",
    },
    upsell: {
      muted: "#faf0fe",
      emphasis: "#622cbc",
    },
    sponsors: {
      muted: "#feeff7",
      emphasis: "#971368",
    },
  },
  borderColor: {
    default: "#454c54",
    muted: "#454c54",
    emphasis: "#454c54",
    disabled: "#59636e1f",
    transparent: "#ffffff00",
    translucent: "#59636e",
    neutral: {
      muted: "#454c54",
      emphasis: "#59636e",
    },
    accent: {
      muted: "#368cf9",
      emphasis: "#0349b4",
    },
    success: {
      muted: "#26a148",
      emphasis: "#055d20",
    },
    open: {
      muted: "#26a148",
      emphasis: "#055d20",
    },
    attention: {
      muted: "#b58407",
      emphasis: "#744500",
    },
    severe: {
      muted: "#dc6d1a",
      emphasis: "#873800",
    },
    danger: {
      muted: "#ee5a5d",
      emphasis: "#a0111f",
    },
    closed: {
      muted: "#ee5a5d",
      emphasis: "#a0111f",
    },
    draft: {
      muted: "#454c54",
      emphasis: "#59636e",
    },
    done: {
      muted: "#a371f7",
      emphasis: "#622cbc",
    },
    upsell: {
      muted: "#a371f7",
      emphasis: "#622cbc",
    },
    sponsors: {
      muted: "#ed4baf",
      emphasis: "#971368",
    },
  },
  control: {
    bgColor: {
      rest: "#e0e6eb",
      hover: "#dae0e7",
      active: "#d1d9e0",
      disabled: "#e0e6eb",
      selected: "#e0e6eb",
    },
    fgColor: {
      rest: "#25292e",
      placeholder: "#454c54",
      disabled: "#59636e",
    },
    borderColor: {
      rest: "#454c54",
      emphasis: "#454c54",
      disabled: "#59636e1f",
      selected: "#e0e6eb",
      success: "#055d20",
      danger: "#a0111f",
      warning: "#744500",
    },
    iconColor: {
      rest: "#454c54",
    },
    transparent: {
      bgColor: {
        rest: "#ffffff00",
        hover: "#dae0e7",
        active: "#d1d9e0",
        disabled: "#e0e6eb",
        selected: "#dae0e7",
      },
      borderColor: {
        rest: "#ffffff00",
        hover: "#454c54",
        active: "#454c54",
      },
    },
    danger: {
      fgColor: {
        rest: "#960d1e",
        hover: "#ffffff",
      },
      bgColor: {
        hover: "#a0111f",
        active: "#8c0b1d",
      },
    },
    checked: {
      bgColor: {
        rest: "#0349b4",
        hover: "#0344a8",
        active: "#033f9d",
        disabled: "#59636e",
      },
      fgColor: {
        rest: "#ffffff",
        disabled: "#ffffff",
      },
      borderColor: {
        rest: "#0349b4",
        hover: "#0344a8",
        active: "#033f9d",
        disabled: "#59636e",
      },
    },
  },
  controlTrack: {
    bgColor: {
      rest: "#dae0e7",
      hover: "#d1d9e0",
      active: "#c8d1da",
      disabled: "#59636e",
    },
    fgColor: {
      rest: "#59636e",
      disabled: "#ffffff",
    },
    borderColor: {
      rest: "#454c54",
      disabled: "#59636e",
    },
  },
  controlKnob: {
    bgColor: {
      rest: "#ffffff",
      disabled: "#e0e6eb",
      checked: "#ffffff",
    },
    borderColor: {
      rest: "#454c54",
      disabled: "#e0e6eb",
      checked: "#0349b4",
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
        emphasis: "#004db3",
      },
      fgColor: "#003d99",
      borderColor: {
        muted: "#ade1ff",
        emphasis: "#005fcc",
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
        emphasis: "#285c3b",
      },
      fgColor: "#254b34",
      borderColor: {
        muted: "#9ceda0",
        emphasis: "#2b6e3f",
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
        emphasis: "#8d3c11",
      },
      fgColor: "#70300f",
      borderColor: {
        muted: "#fecfaa",
        emphasis: "#a24610",
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
        emphasis: "#6223d7",
      },
      fgColor: "#4f21ab",
      borderColor: {
        muted: "#e6d2fe",
        emphasis: "#783ae4",
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
        emphasis: "#7d1eb8",
      },
      fgColor: "#651d96",
      borderColor: {
        muted: "#f0cdfe",
        emphasis: "#961edc",
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
        emphasis: "#a60c29",
      },
      fgColor: "#880c27",
      borderColor: {
        muted: "#fecdcd",
        emphasis: "#c50d28",
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
        emphasis: "#9b2712",
      },
      fgColor: "#7e2011",
      borderColor: {
        muted: "#fecebe",
        emphasis: "#ba2e12",
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
        emphasis: "#704d00",
      },
      fgColor: "#5c3d00",
      borderColor: {
        muted: "#ffd642",
        emphasis: "#805900",
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
        emphasis: "#4e535a",
      },
      fgColor: "#424448",
      borderColor: {
        muted: "#d2dae4",
        emphasis: "#5c6570",
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
        emphasis: "#744744",
      },
      fgColor: "#5d3937",
      borderColor: {
        muted: "#e6d6d5",
        emphasis: "#8a5551",
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
        emphasis: "#64513a",
      },
      fgColor: "#51412f",
      borderColor: {
        muted: "#dfd7c8",
        emphasis: "#755f43",
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
        emphasis: "#654f01",
      },
      fgColor: "#523f00",
      borderColor: {
        muted: "#f0db3d",
        emphasis: "#786002",
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
        emphasis: "#495a2b",
      },
      fgColor: "#3b4927",
      borderColor: {
        muted: "#dbe170",
        emphasis: "#56682c",
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
        emphasis: "#3a5b25",
      },
      fgColor: "#2f4a21",
      borderColor: {
        muted: "#c7e580",
        emphasis: "#476c28",
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
        emphasis: "#135d41",
      },
      fgColor: "#114b36",
      borderColor: {
        muted: "#80efb9",
        emphasis: "#156f4b",
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
        emphasis: "#0d5b63",
      },
      fgColor: "#0a4852",
      borderColor: {
        muted: "#89ebe1",
        emphasis: "#106e75",
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
        emphasis: "#00596b",
      },
      fgColor: "#004857",
      borderColor: {
        muted: "#7ae9ff",
        emphasis: "#006a80",
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
        emphasis: "#393cd5",
      },
      fgColor: "#2d2db4",
      borderColor: {
        muted: "#d2d7fe",
        emphasis: "#494edf",
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
        emphasis: "#8e2e66",
      },
      fgColor: "#6e2b53",
      borderColor: {
        muted: "#fdc9e2",
        emphasis: "#b12f79",
      },
    },
  },
  fgColor: {
    default: "#010409",
    muted: "#454c54",
    onEmphasis: "#ffffff",
    onInverse: "#ffffff",
    white: "#ffffff",
    black: "#010409",
    disabled: "#59636e",
    link: "#023b95",
    neutral: "#393f46",
    accent: "#023b95",
    success: "#04591f",
    open: "#04591f",
    attention: "#603700",
    severe: "#702c00",
    danger: "#960d1e",
    closed: "#960d1e",
    draft: "#393f46",
    done: "#5e2bb4",
    upsell: "#5e2bb4",
    sponsors: "#7d0c57",
  },
  selection: {
    bgColor: "#0349b433",
  },
  ansi: {
    black: "#010409",
    blackBright: "#393f46",
    white: "#59636e",
    whiteBright: "#818b98",
    gray: "#59636e",
    red: "#a0111f",
    redBright: "#86061d",
    green: "#024c1a",
    greenBright: "#055d20",
    yellow: "#3f2200",
    yellowBright: "#4e2c00",
    blue: "#0349b4",
    blueBright: "#1168e3",
    magenta: "#622cbc",
    magentaBright: "#844ae7",
    cyan: "#1b7c83",
    cyanBright: "#3192aa",
  },
  prettylights: {
    syntax: {
      comment: "#59636e",
      constant: "#023b95",
      constantOtherReferenceLink: "#032563",
      "constant-other-reference-link": "#032563",
      entityTag: "#023b95",
      entity: "#512598",
      storageModifierImport: "#010409",
      storage: {
        modifier: {
          import: "#010409",
        },
      },
      "entity-tag": "#023b95",
      keyword: "#a0111f",
      string: "#032563",
      variable: "#702c00",
      bracketHighlighterUnmatched: "#6e011a",
      bracketHighlighterAngle: "#59636e",
      brackethighlighter: {
        unmatched: "#6e011a",
        angle: "#59636e",
      },
      invalidIllegal: {
        text: "#960d1e",
        bg: "#fff0ee",
      },
      invalid: {
        illegal: {
          text: "#960d1e",
          bg: "#fff0ee",
        },
      },
      carriageReturn: {
        text: "#f6f8fa",
        bg: "#a0111f",
      },
      carriage: {
        return: {
          text: "#f6f8fa",
          bg: "#a0111f",
        },
      },
      stringRegexp: "#024c1a",
      "string-regexp": "#024c1a",
      markup: {
        list: "#2e1800",
        heading: "#023b95",
        italic: "#010409",
        bold: "#010409",
        deleted: {
          text: "#6e011a",
          bg: "#fff0ee",
        },
        inserted: {
          text: "#024c1a",
          bg: "#d2fedb",
        },
        changed: {
          text: "#702c00",
          bg: "#ffc67b",
        },
        ignored: {
          text: "#d1d9e0",
          bg: "#023b95",
        },
      },
      metaDiffRange: "#622cbc",
      meta: {
        diff: {
          range: "#622cbc",
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
      black: "#010409",
      "black-bright": "#393f46",
      white: "#59636e",
      "white-bright": "#818b98",
      gray: "#59636e",
      red: "#a0111f",
      "red-bright": "#86061d",
      green: "#024c1a",
      "green-bright": "#055d20",
      yellow: "#3f2200",
      "yellow-bright": "#4e2c00",
      blue: "#0349b4",
      "blue-bright": "#1168e3",
      magenta: "#622cbc",
      "magenta-bright": "#844ae7",
      cyan: "#1b7c83",
      "cyan-bright": "#3192aa",
    },
    prettylights: {
      syntax: {
        comment: "#59636e",
        constant: "#023b95",
        "constant-other-reference-link": "#032563",
        entity: "#512598",
        storage: {
          modifier: {
            import: "#010409",
          },
        },
        "entity-tag": "#023b95",
        keyword: "#a0111f",
        string: "#032563",
        variable: "#702c00",
        brackethighlighter: {
          unmatched: "#6e011a",
          angle: "#59636e",
        },
        invalid: {
          illegal: {
            text: "#960d1e",
            bg: "#fff0ee",
          },
        },
        carriage: {
          return: {
            text: "#f6f8fa",
            bg: "#a0111f",
          },
        },
        "string-regexp": "#024c1a",
        markup: {
          list: "#2e1800",
          heading: "#023b95",
          italic: "#010409",
          bold: "#010409",
          deleted: {
            text: "#6e011a",
            bg: "#fff0ee",
          },
          inserted: {
            text: "#024c1a",
            bg: "#d2fedb",
          },
          changed: {
            text: "#702c00",
            bg: "#ffc67b",
          },
          ignored: {
            text: "#d1d9e0",
            bg: "#023b95",
          },
        },
        meta: {
          diff: {
            range: "#622cbc",
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
    borderColor: "#454c54",
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
        disabled: "#59636e",
      },
      bgColor: {
        rest: "#e0e6eb",
        hover: "#dae0e7",
        active: "#d1d9e0",
        selected: "#d1d9e0",
        disabled: "#e0e6eb",
      },
      borderColor: {
        rest: "#454c54",
        hover: "#454c54",
        active: "#454c54",
        disabled: "#59636e1f",
      },
      shadow: {
        resting: "0 1px 0 0 #0104090a",
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
        rest: "#055d20",
        hover: "#04571e",
        active: "#03501b",
        disabled: "#85cb97",
      },
      borderColor: {
        rest: "#013d14",
        hover: "#013d14",
        active: "#013d14",
        disabled: "#85cb97",
      },
      shadow: {
        selected: "inset 0 1px 0 0 #00230b4d",
      },
    },
    invisible: {
      fgColor: {
        rest: "#25292e",
        hover: "#393f46",
        active: "#25292e",
        disabled: "#59636e",
      },
      iconColor: {
        rest: "#454c54",
        hover: "#393f46",
        disabled: "#59636e",
      },
      bgColor: {
        rest: "#ffffff00",
        hover: "#dae0e7",
        active: "#d1d9e0",
        disabled: "#ffffff00",
      },
      borderColor: {
        rest: "#ffffff00",
        hover: "#454c54",
        disabled: "#ffffff00",
      },
    },
    outline: {
      fgColor: {
        rest: "#023b95",
        hover: "#ffffff",
        active: "#ffffff",
        disabled: "#023b9580",
      },
      bgColor: {
        rest: "#e0e6eb",
        hover: "#0349b4",
        active: "#033f9d",
        disabled: "#e0e6eb",
      },
      borderColor: {
        hover: "#022f7a",
        active: "#022f7a",
      },
      shadow: {
        selected: "inset 0 1px 0 0 #021a4a33",
      },
    },
    danger: {
      fgColor: {
        rest: "#960d1e",
        hover: "#ffffff",
        active: "#ffffff",
        disabled: "#960d1e80",
      },
      iconColor: {
        rest: "#960d1e",
        hover: "#ffffff",
        disabled: "#960d1e80",
      },
      bgColor: {
        rest: "#e0e6eb",
        hover: "#a0111f",
        active: "#86061d",
        disabled: "#e0e6eb",
      },
      borderColor: {
        rest: "#454c54",
        hover: "#6e011a",
        active: "#6e011a",
      },
      shadow: {
        selected: "inset 0 1px 0 0 #43001133",
      },
    },
    inactive: {
      fgColor: "#454c54",
      bgColor: "#e0e6eb",
    },
    star: {
      iconColor: "#d5a824",
    },
  },
  buttonCounter: {
    default: {
      bgColor: {
        rest: "#c8d1da",
      },
    },
    invisible: {
      bgColor: {
        rest: "#e0e6eb",
      },
    },
    primary: {
      bgColor: {
        rest: "#00230b33",
      },
    },
    outline: {
      bgColor: {
        rest: "#0349b41a",
        hover: "#ffffff33",
        disabled: "#0349b40d",
      },
      fgColor: {
        rest: "#023b95",
        hover: "#ffffff",
        disabled: "#023b9580",
      },
    },
    danger: {
      bgColor: {
        hover: "#ffffff33",
        disabled: "#a0111f0d",
        rest: "#a0111f1a",
      },
      fgColor: {
        rest: "#960d1e",
        hover: "#ffffff",
        disabled: "#960d1e80",
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
        rest: "#454c54",
        disabled: "#59636e1f",
      },
      fgColor: {
        rest: "#454c54",
        disabled: "#59636e",
      },
    },
    invisible: {
      bgColor: {
        rest: "#eff2f5",
        hover: "#dae0e7",
        active: "#d1d9e0",
        disabled: "#ffffff00",
      },
      borderColor: {
        rest: "#454c54",
        disabled: "#59636e1f",
      },
      fgColor: {
        rest: "#454c54",
        disabled: "#59636e",
      },
    },
    primary: {
      bgColor: {
        rest: "#00230b33",
        disabled: "#00230b1a",
      },
      borderColor: {
        rest: "#ffffff",
        disabled: "#59636e1f",
      },
      fgColor: {
        rest: "#ffffff",
        disabled: "#ffffffcc",
      },
    },
    danger: {
      bgColor: {
        rest: "#eff2f5",
        hover: "#01040933",
        active: "#01040966",
        disabled: "#eff2f5",
      },
      borderColor: {
        rest: "#454c54",
        hover: "#ffffff",
        active: "#ffffff",
        disabled: "#59636e1f",
      },
      fgColor: {
        rest: "#454c54",
        hover: "#ffffff",
        active: "#ffffff",
        disabled: "#59636e",
      },
    },
    inactive: {
      bgColor: "#eff2f5",
      borderColor: "#454c54",
      fgColor: "#454c54",
    },
  },
  card: {
    bgColor: "#ffffff",
  },
  codeMirror: {
    fgColor: "#010409",
    bgColor: "#ffffff",
    gutters: {
      bgColor: "#ffffff",
    },
    gutterMarker: {
      fgColor: {
        default: "#ffffff",
        muted: "#454c54",
      },
    },
    lineNumber: {
      fgColor: "#454c54",
    },
    cursor: {
      fgColor: "#010409",
    },
    selection: {
      bgColor: "#368cf9",
    },
    activeline: {
      bgColor: "#e0e6eb",
    },
    matchingBracket: {
      fgColor: "#010409",
    },
    lines: {
      bgColor: "#ffffff",
    },
    syntax: {
      fgColor: {
        comment: "#010409",
        constant: "#023b95",
        entity: "#622cbc",
        keyword: "#a0111f",
        storage: "#a0111f",
        string: "#032563",
        support: "#023b95",
        variable: "#702c00",
      },
    },
  },
  contribution: {
    default: {
      bgColor: {
        "0": "#ffffff",
        "1": "#82e596",
        "2": "#26a148",
        "3": "#117f32",
        "4": "#024c1a",
      },
      borderColor: {
        "0": "#010409",
        "1": "#010409",
        "2": "#010409",
        "3": "#010409",
        "4": "#010409",
      },
    },
    winter: {
      bgColor: {
        "1": "#9cd7ff",
        "2": "#368cf9",
        "3": "#0349b4",
        "4": "#032563",
      },
    },
    halloween: {
      bgColor: {
        "1": "#f0db3d",
        "2": "#ffd642",
        "3": "#f68c41",
        "4": "#010409",
      },
    },
  },
  counter: {
    borderColor: "#454c54",
    bgColor: {
      muted: "#e0e6eb",
      emphasis: "#454c54",
    },
  },
  dashboard: {
    bgColor: "#ffffff",
  },
  diffBlob: {
    additionLine: {
      fgColor: "#010409",
      bgColor: "#d2fedb",
    },
    additionWord: {
      fgColor: "#ffffff",
      bgColor: "#055d20",
    },
    additionNum: {
      fgColor: "#010409",
      bgColor: "#82e596",
    },
    deletionLine: {
      fgColor: "#010409",
      bgColor: "#fff0ee",
    },
    deletionWord: {
      fgColor: "#ffffff",
      bgColor: "#a0111f",
    },
    deletionNum: {
      fgColor: "#010409",
      bgColor: "#ffc1bc",
    },
    hunkLine: {
      bgColor: "#dff7ff",
      fgColor: "#454c54",
    },
    hunkNum: {
      fgColor: {
        rest: "#010409",
        hover: "#ffffff",
      },
      bgColor: {
        rest: "#9cd7ff",
        hover: "#0349b4",
      },
    },
    emptyNum: {
      bgColor: "#e6eaef",
    },
    emptyLine: {
      bgColor: "#e6eaef",
    },
    expander: {
      iconColor: "#010409",
    },
  },
  focus: {
    outline: "0.125rem solid #0349b4",
    "outline-color": "#0349b4",
    outlineColor: "#0349b4",
  },
  header: {
    bgColor: "#25292e",
    fgColor: {
      default: "#ffffffb3",
      logo: "#ffffff",
    },
    borderColor: {
      divider: "#c8d1da",
    },
  },
  headerSearch: {
    bgColor: "#25292e",
    borderColor: "#818b98",
  },
  highlight: {
    neutral: {
      bgColor: "#fcf7be",
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
      borderColor: "#2b6e3f",
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
      borderColor: "#a24610",
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
      borderColor: "#783ae4",
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
      borderColor: "#c50d28",
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
      borderColor: "#805900",
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
      borderColor: "#5c6570",
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
      borderColor: "#8a5551",
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
      borderColor: "#755f43",
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
      borderColor: "#786002",
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
      borderColor: "#56682c",
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
      borderColor: "#476c28",
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
      borderColor: "#156f4b",
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
      borderColor: "#106e75",
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
      borderColor: "#006a80",
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
      borderColor: "#494edf",
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
      borderColor: "#005fcc",
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
      borderColor: "#961edc",
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
      borderColor: "#b12f79",
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
      borderColor: "#ba2e12",
    },
  },
  menu: {
    bgColor: {
      active: "#ffffff00",
    },
  },
  overlay: {
    bgColor: "#ffffff",
    borderColor: "#454c54",
    backdrop: {
      bgColor: "#393f4666",
    },
  },
  page: {
    header: {
      bgColor: "#e6eaef",
    },
  },
  progressBar: {
    track: {
      bgColor: "#ffffff",
      borderColor: "#393f46",
    },
    bgColor: {
      danger: "#a0111f",
      severe: "#873800",
      sponsors: "#971368",
      done: "#622cbc",
      accent: "#0349b4",
      success: "#055d20",
      neutral: "#818b98",
      attention: "#744500",
    },
  },
  reactionButton: {
    selected: {
      bgColor: {
        rest: "#dff7ff",
        hover: "#c7e9ff",
      },
      fgColor: {
        rest: "#023b95",
        hover: "#023b95",
      },
    },
  },
  selectMenu: {
    borderColor: "#ffffff00",
    bgColor: {
      active: "#9cd7ff",
    },
  },
  sideNav: {
    bgColor: {
      selected: "#ffffff",
    },
  },
  skeletonLoader: {
    bgColor: "#dae0e7",
  },
  timelineBadge: {
    bgColor: "#e6eaef",
  },
  tooltip: {
    bgColor: "#25292e",
    fgColor: "#ffffff",
  },
  topicTag: {
    borderColor: "#0349b4",
  },
  treeViewItem: {
    leadingVisual: {
      iconColor: {
        rest: "#368cf9",
      },
    },
  },
  underlineNav: {
    borderColor: {
      active: "#cd3425",
      hover: "#454c54",
    },
    iconColor: {
      rest: "#454c54",
    },
  },
};
