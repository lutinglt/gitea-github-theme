export default {
  shadow: {
    inset: "inset 0 1px 0 0 #0104093d",
    resting: {
      xsmall: "0 1px 1px 0 #010409cc",
      small: "0 1px 1px 0 #01040999, 0 1px 3px 0 #01040999",
      medium: "0 1px 1px 0 #01040966, 0 3px 6px 0 #010409cc",
    },
    floating: {
      small: "0 0 0 1px #3d444d, 0 6px 12px -3px #01040966, 0 6px 18px 0 #01040966",
      medium:
        "0 0 0 1px #3d444d, 0 8px 16px -4px #01040966, 0 4px 32px -4px #01040966, 0 24px 48px -12px #01040966, 0 48px 96px -24px #01040966",
      large: "0 0 0 1px #3d444d, 0 24px 48px 0 #010409",
      xlarge: "0 0 0 1px #3d444d, 0 32px 64px 0 #010409",
    },
  },
  border: {
    default: "0.0625rem solid #3d444d",
    muted: "0.0625rem solid #3d444db3",
    emphasis: "0.0625rem solid #656c76",
    disabled: "0.0625rem solid #656c761a",
    transparent: "0.0625rem solid #00000000",
    translucent: "0.0625rem solid #ffffff26",
    neutral: {
      emphasis: "0.0625rem solid #656c76",
      muted: "0.0625rem solid #3d444db3",
    },
    accent: {
      emphasis: "0.0625rem solid #1f6feb",
      muted: "0.0625rem solid #388bfd66",
    },
    success: {
      emphasis: "0.0625rem solid #1f6feb",
      muted: "0.0625rem solid #388bfd66",
    },
    open: {
      emphasis: "0.0625rem solid #1f6feb",
      muted: "0.0625rem solid #388bfd66",
    },
    danger: {
      emphasis: "0.0625rem solid #da3633",
      muted: "0.0625rem solid #f8514966",
    },
    closed: {
      emphasis: "0.0625rem solid #da3633",
      muted: "0.0625rem solid #f8514966",
    },
    draft: {
      emphasis: "0.0625rem solid #656c76",
      muted: "0.0625rem solid #3d444d66",
    },
    attention: {
      emphasis: "0.0625rem solid #9e6a03",
      muted: "0.0625rem solid #bb800966",
    },
    severe: {
      emphasis: "0.0625rem solid #da3633",
      muted: "0.0625rem solid #f8514966",
    },
    done: {
      emphasis: "0.0625rem solid #8957e5",
      muted: "0.0625rem solid #ab7df866",
    },
    upsell: {
      emphasis: "0.0625rem solid #8957e5",
      muted: "0.0625rem solid #ab7df866",
    },
    sponsors: {
      emphasis: "0.0625rem solid #bf4b8a",
      muted: "0.0625rem solid #db61a266",
    },
  },
  bgColor: {
    default: "#0d1117",
    muted: "#151b23",
    inset: "#010409",
    emphasis: "#3d444d",
    inverse: "#ffffff",
    white: "#ffffff",
    black: "#010409",
    disabled: "#212830",
    transparent: "#00000000",
    neutral: {
      muted: "#656c7633",
      emphasis: "#656c76",
    },
    accent: {
      muted: "#388bfd1a",
      emphasis: "#1f6feb",
    },
    success: {
      muted: "#388bfd26",
      emphasis: "#1f6feb",
    },
    open: {
      muted: "#f851491a",
      emphasis: "#da3633",
    },
    attention: {
      muted: "#bb800926",
      emphasis: "#9e6a03",
    },
    severe: {
      muted: "#f851491a",
      emphasis: "#da3633",
    },
    danger: {
      muted: "#f851491a",
      emphasis: "#da3633",
    },
    closed: {
      muted: "#656c761a",
      emphasis: "#656c76",
    },
    draft: {
      muted: "#656c761a",
      emphasis: "#656c76",
    },
    done: {
      muted: "#ab7df826",
      emphasis: "#8957e5",
    },
    upsell: {
      muted: "#ab7df826",
      emphasis: "#8957e5",
    },
    sponsors: {
      muted: "#db61a21a",
      emphasis: "#bf4b8a",
    },
  },
  borderColor: {
    default: "#3d444d",
    muted: "#3d444db3",
    emphasis: "#656c76",
    disabled: "#656c761a",
    transparent: "#00000000",
    translucent: "#ffffff26",
    neutral: {
      muted: "#3d444db3",
      emphasis: "#656c76",
    },
    accent: {
      muted: "#388bfd66",
      emphasis: "#1f6feb",
    },
    success: {
      muted: "#388bfd66",
      emphasis: "#1f6feb",
    },
    open: {
      muted: "#f8514966",
      emphasis: "#da3633",
    },
    attention: {
      muted: "#bb800966",
      emphasis: "#9e6a03",
    },
    severe: {
      muted: "#f8514966",
      emphasis: "#da3633",
    },
    danger: {
      muted: "#f8514966",
      emphasis: "#da3633",
    },
    closed: {
      muted: "#3d444d66",
      emphasis: "#656c76",
    },
    draft: {
      muted: "#3d444d66",
      emphasis: "#656c76",
    },
    done: {
      muted: "#ab7df866",
      emphasis: "#8957e5",
    },
    upsell: {
      muted: "#ab7df866",
      emphasis: "#8957e5",
    },
    sponsors: {
      muted: "#db61a266",
      emphasis: "#bf4b8a",
    },
  },
  control: {
    bgColor: {
      rest: "#212830",
      hover: "#262c36",
      active: "#2a313c",
      disabled: "#212830",
      selected: "#212830",
    },
    fgColor: {
      rest: "#f0f6fc",
      placeholder: "#9198a1",
      disabled: "#656c76",
    },
    borderColor: {
      rest: "#3d444d",
      emphasis: "#656c76",
      disabled: "#656c761a",
      selected: "#f0f6fc",
      success: "#1f6feb",
      danger: "#da3633",
      warning: "#9e6a03",
    },
    iconColor: {
      rest: "#9198a1",
    },
    transparent: {
      bgColor: {
        rest: "#00000000",
        hover: "#656c7633",
        active: "#656c7640",
        disabled: "#212830",
        selected: "#656c7633",
      },
      borderColor: {
        rest: "#00000000",
        hover: "#00000000",
        active: "#00000000",
      },
    },
    danger: {
      fgColor: {
        rest: "#f85149",
        hover: "#ff7b72",
      },
      bgColor: {
        hover: "#f851491a",
        active: "#f8514966",
      },
    },
    checked: {
      bgColor: {
        rest: "#1f6feb",
        hover: "#2a7aef",
        active: "#3685f3",
        disabled: "#656c76",
      },
      fgColor: {
        rest: "#ffffff",
        disabled: "#010409",
      },
      borderColor: {
        rest: "#1f6feb",
        hover: "#2a7aef",
        active: "#3685f3",
        disabled: "#656c76",
      },
    },
  },
  controlTrack: {
    bgColor: {
      rest: "#010409",
      hover: "#2a313c",
      active: "#2f3742",
      disabled: "#656c76",
    },
    fgColor: {
      rest: "#9198a1",
      disabled: "#ffffff",
    },
    borderColor: {
      rest: "#3d444d",
      disabled: "#656c76",
    },
  },
  controlKnob: {
    bgColor: {
      rest: "#262c36",
      disabled: "#212830",
      checked: "#ffffff",
    },
    borderColor: {
      rest: "#3d444d",
      disabled: "#212830",
      checked: "#1f6feb",
    },
  },
  data: {
    blue: {
      color: {
        emphasis: "#0576ff",
        muted: "#001a47",
      },
    },
    auburn: {
      color: {
        emphasis: "#a86f6b",
        muted: "#271817",
      },
    },
    orange: {
      color: {
        emphasis: "#984b10",
        muted: "#311708",
      },
    },
    yellow: {
      color: {
        emphasis: "#895906",
        muted: "#2e1a00",
      },
    },
    green: {
      color: {
        emphasis: "#2f6f37",
        muted: "#122117",
      },
    },
    teal: {
      color: {
        emphasis: "#106c70",
        muted: "#041f25",
      },
    },
    purple: {
      color: {
        emphasis: "#975bf1",
        muted: "#211047",
      },
    },
    pink: {
      color: {
        emphasis: "#d34591",
        muted: "#2d1524",
      },
    },
    plum: {
      color: {
        emphasis: "#b643ef",
        muted: "#2a0e3f",
      },
    },
    red: {
      color: {
        emphasis: "#eb3342",
        muted: "#3c0614",
      },
    },
    gray: {
      color: {
        emphasis: "#576270",
        muted: "#1c1c1c",
      },
    },
    coral: {
      color: {
        emphasis: "#e1430e",
        muted: "#351008",
      },
    },
    brown: {
      color: {
        emphasis: "#94774c",
        muted: "#241c14",
      },
    },
    lemon: {
      color: {
        emphasis: "#977b0c",
        muted: "#291d00",
      },
    },
    olive: {
      color: {
        emphasis: "#7a8321",
        muted: "#171e0b",
      },
    },
    lime: {
      color: {
        emphasis: "#5f892f",
        muted: "#141f0f",
      },
    },
    pine: {
      color: {
        emphasis: "#18915e",
        muted: "#082119",
      },
    },
  },
  display: {
    blue: {
      scale: {
        "0": "#001a47",
        "1": "#002766",
        "2": "#00378a",
        "3": "#0046a8",
        "4": "#005bd1",
        "5": "#0576ff",
        "6": "#4da0ff",
        "7": "#61adff",
        "8": "#85c2ff",
        "9": "#a3d3ff",
      },
      bgColor: {
        muted: "#001a47",
        emphasis: "#005bd1",
      },
      fgColor: "#4da0ff",
      borderColor: {
        muted: "#002766",
        emphasis: "#0576ff",
      },
    },
    green: {
      scale: {
        "0": "#122117",
        "1": "#182f1f",
        "2": "#214529",
        "3": "#285830",
        "4": "#2f6f37",
        "5": "#388f3f",
        "6": "#41b445",
        "7": "#46c144",
        "8": "#75d36f",
        "9": "#99e090",
      },
      bgColor: {
        muted: "#122117",
        emphasis: "#2f6f37",
      },
      fgColor: "#41b445",
      borderColor: {
        muted: "#182f1f",
        emphasis: "#388f3f",
      },
    },
    orange: {
      scale: {
        "0": "#311708",
        "1": "#43200a",
        "2": "#632f0d",
        "3": "#7b3c0e",
        "4": "#984b10",
        "5": "#c46212",
        "6": "#ed8326",
        "7": "#f1933b",
        "8": "#f6b06a",
        "9": "#fac68f",
      },
      bgColor: {
        muted: "#311708",
        emphasis: "#984b10",
      },
      fgColor: "#ed8326",
      borderColor: {
        muted: "#43200a",
        emphasis: "#c46212",
      },
    },
    purple: {
      scale: {
        "0": "#211047",
        "1": "#31146b",
        "2": "#481a9e",
        "3": "#5b1cca",
        "4": "#7730e8",
        "5": "#975bf1",
        "6": "#b687f7",
        "7": "#c398fb",
        "8": "#d2affd",
        "9": "#e1c7ff",
      },
      bgColor: {
        muted: "#211047",
        emphasis: "#7730e8",
      },
      fgColor: "#b687f7",
      borderColor: {
        muted: "#31146b",
        emphasis: "#975bf1",
      },
    },
    plum: {
      scale: {
        "0": "#2a0e3f",
        "1": "#40125e",
        "2": "#5c1688",
        "3": "#7517ab",
        "4": "#9518d8",
        "5": "#b643ef",
        "6": "#d07ef7",
        "7": "#d889fa",
        "8": "#e4a5fd",
        "9": "#edbdff",
      },
      bgColor: {
        muted: "#2a0e3f",
        emphasis: "#9518d8",
      },
      fgColor: "#d07ef7",
      borderColor: {
        muted: "#40125e",
        emphasis: "#b643ef",
      },
    },
    red: {
      scale: {
        "0": "#3c0614",
        "1": "#58091a",
        "2": "#790c20",
        "3": "#990f24",
        "4": "#c31328",
        "5": "#eb3342",
        "6": "#f27d83",
        "7": "#f48b8d",
        "8": "#f7adab",
        "9": "#f9c1be",
      },
      bgColor: {
        muted: "#3c0614",
        emphasis: "#c31328",
      },
      fgColor: "#f27d83",
      borderColor: {
        muted: "#58091a",
        emphasis: "#eb3342",
      },
    },
    coral: {
      scale: {
        "0": "#351008",
        "1": "#51180b",
        "2": "#72220d",
        "3": "#902a0e",
        "4": "#b3350f",
        "5": "#e1430e",
        "6": "#f7794b",
        "7": "#fa8c61",
        "8": "#fdaa86",
        "9": "#ffc0a3",
      },
      bgColor: {
        muted: "#3c0614",
        emphasis: "#c31328",
      },
      fgColor: "#f27d83",
      borderColor: {
        muted: "#58091a",
        emphasis: "#eb3342",
      },
    },
    yellow: {
      scale: {
        "0": "#2e1a00",
        "1": "#3d2401",
        "2": "#5a3702",
        "3": "#6d4403",
        "4": "#895906",
        "5": "#aa7109",
        "6": "#d3910d",
        "7": "#df9e11",
        "8": "#edb431",
        "9": "#f0ca6a",
      },
      bgColor: {
        muted: "#2e1a00",
        emphasis: "#895906",
      },
      fgColor: "#d3910d",
      borderColor: {
        muted: "#3d2401",
        emphasis: "#aa7109",
      },
    },
    gray: {
      scale: {
        "0": "#1c1c1c",
        "1": "#2a2b2d",
        "2": "#393d41",
        "3": "#474e57",
        "4": "#576270",
        "5": "#6e7f96",
        "6": "#92a1b5",
        "7": "#9babbf",
        "8": "#b3c0d1",
        "9": "#c4cfde",
      },
      bgColor: {
        muted: "#1c1c1c",
        emphasis: "#576270",
      },
      fgColor: "#92a1b5",
      borderColor: {
        muted: "#2a2b2d",
        emphasis: "#6e7f96",
      },
    },
    auburn: {
      scale: {
        "0": "#271817",
        "1": "#3a2422",
        "2": "#543331",
        "3": "#6d4340",
        "4": "#87534f",
        "5": "#a86f6b",
        "6": "#bf9592",
        "7": "#c6a19f",
        "8": "#d4b7b5",
        "9": "#dfcac8",
      },
      bgColor: {
        muted: "#271817",
        emphasis: "#87534f",
      },
      fgColor: "#bf9592",
      borderColor: {
        muted: "#3a2422",
        emphasis: "#a86f6b",
      },
    },
    brown: {
      scale: {
        "0": "#241c14",
        "1": "#342a1d",
        "2": "#483a28",
        "3": "#5d4a32",
        "4": "#755e3e",
        "5": "#94774c",
        "6": "#b69a6d",
        "7": "#bfa77d",
        "8": "#cdbb98",
        "9": "#dbceb3",
      },
      bgColor: {
        muted: "#241c14",
        emphasis: "#755e3e",
      },
      fgColor: "#b69a6d",
      borderColor: {
        muted: "#342a1d",
        emphasis: "#94774c",
      },
    },
    lemon: {
      scale: {
        "0": "#291d00",
        "1": "#372901",
        "2": "#4f3c02",
        "3": "#614c05",
        "4": "#786008",
        "5": "#977b0c",
        "6": "#ba9b12",
        "7": "#c4a717",
        "8": "#d7bc1d",
        "9": "#e3d04f",
      },
      bgColor: {
        muted: "#291d00",
        emphasis: "#786008",
      },
      fgColor: "#ba9b12",
      borderColor: {
        muted: "#372901",
        emphasis: "#977b0c",
      },
    },
    olive: {
      scale: {
        "0": "#171e0b",
        "1": "#252d10",
        "2": "#374115",
        "3": "#485219",
        "4": "#5e681d",
        "5": "#7a8321",
        "6": "#a2a626",
        "7": "#b2af24",
        "8": "#cbc025",
        "9": "#e2d04b",
      },
      bgColor: {
        muted: "#171e0b",
        emphasis: "#5e681d",
      },
      fgColor: "#a2a626",
      borderColor: {
        muted: "#252d10",
        emphasis: "#7a8321",
      },
    },
    lime: {
      scale: {
        "0": "#141f0f",
        "1": "#1f3116",
        "2": "#2c441d",
        "3": "#375421",
        "4": "#496c28",
        "5": "#5f892f",
        "6": "#7dae37",
        "7": "#89ba36",
        "8": "#9fcc3e",
        "9": "#bcda67",
      },
      bgColor: {
        muted: "#141f0f",
        emphasis: "#496c28",
      },
      fgColor: "#7dae37",
      borderColor: {
        muted: "#1f3116",
        emphasis: "#5f892f",
      },
    },
    pine: {
      scale: {
        "0": "#082119",
        "1": "#0b3224",
        "2": "#0e4430",
        "3": "#115a3e",
        "4": "#14714c",
        "5": "#18915e",
        "6": "#1bb673",
        "7": "#1ac176",
        "8": "#1bda81",
        "9": "#3eea97",
      },
      bgColor: {
        muted: "#082119",
        emphasis: "#14714c",
      },
      fgColor: "#1bb673",
      borderColor: {
        muted: "#0b3224",
        emphasis: "#18915e",
      },
    },
    teal: {
      scale: {
        "0": "#041f25",
        "1": "#073036",
        "2": "#0a464d",
        "3": "#0c555a",
        "4": "#106c70",
        "5": "#158a8a",
        "6": "#1cb0ab",
        "7": "#1fbdb2",
        "8": "#24d6c4",
        "9": "#5fe3d1",
      },
      bgColor: {
        muted: "#041f25",
        emphasis: "#106c70",
      },
      fgColor: "#1cb0ab",
      borderColor: {
        muted: "#073036",
        emphasis: "#158a8a",
      },
    },
    cyan: {
      scale: {
        "0": "#001f29",
        "1": "#002e3d",
        "2": "#014156",
        "3": "#02536f",
        "4": "#036a8c",
        "5": "#0587b3",
        "6": "#07ace4",
        "7": "#09b7f1",
        "8": "#45cbf7",
        "9": "#80dbf9",
      },
      bgColor: {
        muted: "#001f29",
        emphasis: "#036a8c",
      },
      fgColor: "#07ace4",
      borderColor: {
        muted: "#002e3d",
        emphasis: "#0587b3",
      },
    },
    indigo: {
      scale: {
        "0": "#1b183f",
        "1": "#25215f",
        "2": "#312c90",
        "3": "#3935c0",
        "4": "#514ed4",
        "5": "#7070e1",
        "6": "#9899ec",
        "7": "#a2a5f1",
        "8": "#b7baf6",
        "9": "#c8cbf9",
      },
      bgColor: {
        muted: "#1b183f",
        emphasis: "#514ed4",
      },
      fgColor: "#9899ec",
      borderColor: {
        muted: "#25215f",
        emphasis: "#7070e1",
      },
    },
    pink: {
      scale: {
        "0": "#2d1524",
        "1": "#451c35",
        "2": "#65244a",
        "3": "#842a5d",
        "4": "#ac2f74",
        "5": "#d34591",
        "6": "#e57bb2",
        "7": "#ec8dbd",
        "8": "#f4a9cd",
        "9": "#f9bed9",
      },
      bgColor: {
        muted: "#2d1524",
        emphasis: "#ac2f74",
      },
      fgColor: "#e57bb2",
      borderColor: {
        muted: "#451c35",
        emphasis: "#d34591",
      },
    },
  },
  fgColor: {
    default: "#f0f6fc",
    muted: "#9198a1",
    onEmphasis: "#ffffff",
    onInverse: "#010409",
    white: "#ffffff",
    black: "#010409",
    disabled: "#656c76",
    link: "#4493f8",
    neutral: "#9198a1",
    accent: "#4493f8",
    success: "#58a6ff",
    open: "#f85149",
    attention: "#d29922",
    severe: "#f85149",
    danger: "#f85149",
    closed: "#9198a1",
    draft: "#9198a1",
    done: "#ab7df8",
    upsell: "#ab7df8",
    sponsors: "#db61a2",
  },
  selection: {
    bgColor: "#1f6febb3",
  },
  ansi: {
    black: "#2f3742",
    blackBright: "#656c76",
    white: "#f0f6fc",
    whiteBright: "#ffffff",
    gray: "#656c76",
    red: "#ff7b72",
    redBright: "#ffa198",
    green: "#58a6ff",
    greenBright: "#79c0ff",
    yellow: "#d29922",
    yellowBright: "#e3b341",
    blue: "#58a6ff",
    blueBright: "#79c0ff",
    magenta: "#be8fff",
    magentaBright: "#d2a8ff",
    cyan: "#39c5cf",
    cyanBright: "#56d4dd",
  },
  prettylights: {
    syntax: {
      comment: "#9198a1",
      constant: "#79c0ff",
      constantOtherReferenceLink: "#a5d6ff",
      "constant-other-reference-link": "#a5d6ff",
      entityTag: "#a5d6ff",
      entity: "#d2a8ff",
      storageModifierImport: "#f0f6fc",
      storage: {
        modifier: {
          import: "#f0f6fc",
        },
      },
      "entity-tag": "#a5d6ff",
      keyword: "#ff7b72",
      string: "#a5d6ff",
      variable: "#ffa198",
      bracketHighlighterUnmatched: "#f85149",
      bracketHighlighterAngle: "#9198a1",
      brackethighlighter: {
        unmatched: "#f85149",
        angle: "#9198a1",
      },
      invalidIllegal: {
        text: "#f85149",
        bg: "#f851491a",
      },
      invalid: {
        illegal: {
          text: "#f85149",
          bg: "#f851491a",
        },
      },
      carriageReturn: {
        text: "#f0f6fc",
        bg: "#b62324",
      },
      carriage: {
        return: {
          text: "#f0f6fc",
          bg: "#b62324",
        },
      },
      stringRegexp: "#a5d6ff",
      "string-regexp": "#a5d6ff",
      markup: {
        list: "#f2cc60",
        heading: "#1f6feb",
        italic: "#f0f6fc",
        bold: "#f0f6fc",
        deleted: {
          text: "#ffdcd7",
          bg: "#67060c",
        },
        inserted: {
          text: "#cae8ff",
          bg: "#0c2d6b",
        },
        changed: {
          text: "#ffdcd7",
          bg: "#67060c",
        },
        ignored: {
          text: "#f0f6fc",
          bg: "#1158c7",
        },
      },
      metaDiffRange: "#d2a8ff",
      meta: {
        diff: {
          range: "#d2a8ff",
        },
      },
      sublimeLinterGutterMark: "#3d444d",
      sublimelinter: {
        gutter: {
          mark: "#3d444d",
        },
      },
    },
  },
  color: {
    ansi: {
      black: "#2f3742",
      "black-bright": "#656c76",
      white: "#f0f6fc",
      "white-bright": "#ffffff",
      gray: "#656c76",
      red: "#ff7b72",
      "red-bright": "#ffa198",
      green: "#58a6ff",
      "green-bright": "#79c0ff",
      yellow: "#d29922",
      "yellow-bright": "#e3b341",
      blue: "#58a6ff",
      "blue-bright": "#79c0ff",
      magenta: "#be8fff",
      "magenta-bright": "#d2a8ff",
      cyan: "#39c5cf",
      "cyan-bright": "#56d4dd",
    },
    prettylights: {
      syntax: {
        comment: "#9198a1",
        constant: "#79c0ff",
        "constant-other-reference-link": "#a5d6ff",
        entity: "#d2a8ff",
        storage: {
          modifier: {
            import: "#f0f6fc",
          },
        },
        "entity-tag": "#a5d6ff",
        keyword: "#ff7b72",
        string: "#a5d6ff",
        variable: "#ffa198",
        brackethighlighter: {
          unmatched: "#f85149",
          angle: "#9198a1",
        },
        invalid: {
          illegal: {
            text: "#f85149",
            bg: "#f851491a",
          },
        },
        carriage: {
          return: {
            text: "#f0f6fc",
            bg: "#b62324",
          },
        },
        "string-regexp": "#a5d6ff",
        markup: {
          list: "#f2cc60",
          heading: "#1f6feb",
          italic: "#f0f6fc",
          bold: "#f0f6fc",
          deleted: {
            text: "#ffdcd7",
            bg: "#67060c",
          },
          inserted: {
            text: "#cae8ff",
            bg: "#0c2d6b",
          },
          changed: {
            text: "#ffdcd7",
            bg: "#67060c",
          },
          ignored: {
            text: "#f0f6fc",
            bg: "#1158c7",
          },
        },
        meta: {
          diff: {
            range: "#d2a8ff",
          },
        },
        sublimelinter: {
          gutter: {
            mark: "#3d444d",
          },
        },
      },
    },
  },
  avatar: {
    bgColor: "#ffffff1a",
    borderColor: "#ffffff26",
    shadow: "0 0 0 2px #0d1117",
  },
  avatarStack: {
    fade: {
      bgColor: {
        default: "#3d444d",
        muted: "#2a313c",
      },
    },
  },
  button: {
    default: {
      fgColor: {
        rest: "#f0f6fc",
        disabled: "#656c76",
      },
      bgColor: {
        rest: "#212830",
        hover: "#262c36",
        active: "#2a313c",
        selected: "#2a313c",
        disabled: "#212830",
      },
      borderColor: {
        rest: "#3d444d",
        hover: "#3d444d",
        active: "#3d444d",
        disabled: "#656c761a",
      },
      shadow: {
        resting: "0 0 0 0 #00000000",
      },
    },
    primary: {
      fgColor: {
        rest: "#ffffff",
        disabled: "#ffffff66",
      },
      iconColor: {
        rest: "#ffffff",
        disabled: "#ffffff66",
      },
      bgColor: {
        rest: "#1f6feb",
        hover: "#2a7aef",
        active: "#3685f3",
        disabled: "#5fabfe",
      },
      borderColor: {
        rest: "#ffffff26",
        hover: "#ffffff26",
        active: "#ffffff26",
        disabled: "#5fabfe",
      },
      shadow: {
        selected: "0 0 0 0 #00000000",
      },
    },
    invisible: {
      fgColor: {
        rest: "#f0f6fc",
        hover: "#f0f6fc",
        active: "#f0f6fc",
        disabled: "#656c76",
      },
      iconColor: {
        rest: "#9198a1",
        hover: "#9198a1",
        disabled: "#656c76",
      },
      bgColor: {
        rest: "#00000000",
        hover: "#656c7633",
        active: "#656c7640",
        disabled: "#00000000",
      },
      borderColor: {
        rest: "#00000000",
        hover: "#00000000",
        disabled: "#00000000",
      },
    },
    outline: {
      fgColor: {
        rest: "#388bfd",
        hover: "#58a6ff",
        active: "#ffffff",
        disabled: "#4493f880",
      },
      bgColor: {
        rest: "#f0f6fc",
        hover: "#262c36",
        active: "#0d419d",
        disabled: "#212830",
      },
      borderColor: {
        hover: "#3d444d",
        active: "#3d444d",
      },
      shadow: {
        selected: "0 0 0 0 #00000000",
      },
    },
    danger: {
      fgColor: {
        rest: "#fa5e55",
        hover: "#ffffff",
        active: "#ffffff",
        disabled: "#f8514980",
      },
      iconColor: {
        rest: "#fa5e55",
        hover: "#ffffff",
        disabled: "#f8514980",
      },
      bgColor: {
        rest: "#212830",
        hover: "#b62324",
        active: "#da3633",
        disabled: "#212830",
      },
      borderColor: {
        rest: "#3d444d",
        hover: "#ffffff26",
        active: "#ffffff26",
      },
      shadow: {
        selected: "0 0 0 0 #00000000",
      },
    },
    inactive: {
      fgColor: "#9198a1",
      bgColor: "#262c36",
    },
    star: {
      iconColor: "#e3b341",
    },
  },
  buttonCounter: {
    default: {
      bgColor: {
        rest: "#2f3742",
      },
    },
    invisible: {
      bgColor: {
        rest: "#656c7633",
      },
    },
    primary: {
      bgColor: {
        rest: "#04260f33",
      },
    },
    outline: {
      bgColor: {
        rest: "#051d4d33",
        hover: "#051d4d33",
        disabled: "#1f6feb0d",
      },
      fgColor: {
        rest: "#388bfd",
        hover: "#58a6ff",
        disabled: "#4493f880",
      },
    },
    danger: {
      bgColor: {
        hover: "#ffffff33",
        disabled: "#da36330d",
        rest: "#49020233",
      },
      fgColor: {
        rest: "#f85149",
        hover: "#ffffff",
        disabled: "#f8514980",
      },
    },
  },
  buttonKeybindingHint: {
    default: {
      bgColor: {
        rest: "#2a313c",
        disabled: "#2a313c",
      },
      borderColor: {
        rest: "#3d444db3",
        disabled: "#656c761a",
      },
      fgColor: {
        rest: "#9198a1",
        disabled: "#656c76",
      },
    },
    invisible: {
      bgColor: {
        rest: "#2a313c",
        hover: "#656c7633",
        active: "#656c7640",
        disabled: "#00000000",
      },
      borderColor: {
        rest: "#00000000",
        disabled: "#656c761a",
      },
      fgColor: {
        rest: "#9198a1",
        disabled: "#656c76",
      },
    },
    primary: {
      bgColor: {
        rest: "#04260f33",
        disabled: "#04260f1a",
      },
      borderColor: {
        rest: "#04260f1a",
        disabled: "#656c761a",
      },
      fgColor: {
        rest: "#ffffff",
        disabled: "#ffffff66",
      },
    },
    danger: {
      bgColor: {
        rest: "#2a313c",
        hover: "#01040933",
        active: "#01040966",
        disabled: "#2a313c",
      },
      borderColor: {
        rest: "#3d444db3",
        hover: "#0104091a",
        active: "#0104091a",
        disabled: "#656c761a",
      },
      fgColor: {
        rest: "#9198a1",
        hover: "#ffffff",
        active: "#ffffff",
        disabled: "#656c76",
      },
    },
    inactive: {
      bgColor: "#2a313c",
      borderColor: "#3d444db3",
      fgColor: "#9198a1",
    },
  },
  card: {
    bgColor: "#151b23",
  },
  codeMirror: {
    fgColor: "#f0f6fc",
    bgColor: "#0d1117",
    gutters: {
      bgColor: "#0d1117",
    },
    gutterMarker: {
      fgColor: {
        default: "#0d1117",
        muted: "#9198a1",
      },
    },
    lineNumber: {
      fgColor: "#9198a1",
    },
    cursor: {
      fgColor: "#f0f6fc",
    },
    selection: {
      bgColor: "#388bfd66",
    },
    activeline: {
      bgColor: "#656c7633",
    },
    matchingBracket: {
      fgColor: "#f0f6fc",
    },
    lines: {
      bgColor: "#0d1117",
    },
    syntax: {
      fgColor: {
        comment: "#656c76",
        constant: "#79c0ff",
        entity: "#d2a8ff",
        keyword: "#ff7b72",
        storage: "#ff7b72",
        string: "#a5d6ff",
        support: "#79c0ff",
        variable: "#ffa198",
      },
    },
  },
  contribution: {
    default: {
      bgColor: {
        "0": "#151b23",
        "1": "#033a16",
        "2": "#196c2e",
        "3": "#2ea043",
        "4": "#56d364",
      },
      borderColor: {
        "0": "#0104090d",
        "1": "#0104090d",
        "2": "#0104090d",
        "3": "#0104090d",
        "4": "#0104090d",
      },
    },
    winter: {
      bgColor: {
        "1": "#0c2d6b",
        "2": "#1158c7",
        "3": "#58a6ff",
        "4": "#cae8ff",
      },
    },
    halloween: {
      bgColor: {
        "1": "#fac68f",
        "2": "#c46212",
        "3": "#984b10",
        "4": "#e3d04f",
      },
    },
  },
  counter: {
    borderColor: "#00000000",
    bgColor: {
      muted: "#656c7633",
      emphasis: "#656c76",
    },
  },
  dashboard: {
    bgColor: "#010409",
  },
  diffBlob: {
    additionLine: {
      fgColor: "#f0f6fc",
      bgColor: "#388bfd26",
    },
    additionWord: {
      fgColor: "#f0f6fc",
      bgColor: "#388bfd66",
    },
    additionNum: {
      fgColor: "#f0f6fc",
      bgColor: "#58a6ff4d",
    },
    deletionLine: {
      fgColor: "#f0f6fc",
      bgColor: "#f851491a",
    },
    deletionWord: {
      fgColor: "#f0f6fc",
      bgColor: "#f8514966",
    },
    deletionNum: {
      fgColor: "#f0f6fc",
      bgColor: "#f851494d",
    },
    hunkLine: {
      bgColor: "#212830",
      fgColor: "#9198a1",
    },
    hunkNum: {
      fgColor: {
        rest: "#f0f6fc",
        hover: "#ffffff",
      },
      bgColor: {
        rest: "#2f3742",
        hover: "#656c76",
      },
    },
    emptyNum: {
      bgColor: "#151b23",
    },
    emptyLine: {
      bgColor: "#151b23",
    },
    expander: {
      iconColor: "#9198a1",
    },
  },
  focus: {
    outline: "0.125rem solid #1f6feb",
    "outline-color": "#1f6feb",
    outlineColor: "#1f6feb",
  },
  header: {
    bgColor: "#151b23f2",
    fgColor: {
      default: "#ffffffb3",
      logo: "#f0f6fc",
    },
    borderColor: {
      divider: "#656c76",
    },
  },
  headerSearch: {
    bgColor: "#0d1117",
    borderColor: "#2a313c",
  },
  highlight: {
    neutral: {
      bgColor: "#d2992266",
    },
  },
  label: {
    green: {
      bgColor: {
        rest: "#122117",
        hover: "#182f1f",
        active: "#214529",
      },
      fgColor: {
        rest: "#41b445",
        hover: "#46c144",
        active: "#75d36f",
      },
      borderColor: "#00000000",
    },
    orange: {
      bgColor: {
        rest: "#311708",
        hover: "#43200a",
        active: "#632f0d",
      },
      fgColor: {
        rest: "#ed8326",
        hover: "#f1933b",
        active: "#f6b06a",
      },
      borderColor: "#00000000",
    },
    purple: {
      bgColor: {
        rest: "#211047",
        hover: "#31146b",
        active: "#481a9e",
      },
      fgColor: {
        rest: "#b687f7",
        hover: "#c398fb",
        active: "#d2affd",
      },
      borderColor: "#00000000",
    },
    red: {
      bgColor: {
        rest: "#3c0614",
        hover: "#58091a",
        active: "#790c20",
      },
      fgColor: {
        rest: "#f27d83",
        hover: "#f48b8d",
        active: "#f7adab",
      },
      borderColor: "#00000000",
    },
    yellow: {
      bgColor: {
        rest: "#2e1a00",
        hover: "#3d2401",
        active: "#5a3702",
      },
      fgColor: {
        rest: "#d3910d",
        hover: "#df9e11",
        active: "#edb431",
      },
      borderColor: "#00000000",
    },
    gray: {
      bgColor: {
        rest: "#1c1c1c",
        hover: "#2a2b2d",
        active: "#393d41",
      },
      fgColor: {
        rest: "#92a1b5",
        hover: "#9babbf",
        active: "#b3c0d1",
      },
      borderColor: "#00000000",
    },
    auburn: {
      bgColor: {
        rest: "#271817",
        hover: "#3a2422",
        active: "#543331",
      },
      fgColor: {
        rest: "#bf9592",
        hover: "#c6a19f",
        active: "#d4b7b5",
      },
      borderColor: "#00000000",
    },
    brown: {
      bgColor: {
        rest: "#241c14",
        hover: "#342a1d",
        active: "#483a28",
      },
      fgColor: {
        rest: "#b69a6d",
        hover: "#bfa77d",
        active: "#cdbb98",
      },
      borderColor: "#00000000",
    },
    lemon: {
      bgColor: {
        rest: "#291d00",
        hover: "#372901",
        active: "#4f3c02",
      },
      fgColor: {
        rest: "#ba9b12",
        hover: "#c4a717",
        active: "#d7bc1d",
      },
      borderColor: "#00000000",
    },
    olive: {
      bgColor: {
        rest: "#171e0b",
        hover: "#252d10",
        active: "#374115",
      },
      fgColor: {
        rest: "#a2a626",
        hover: "#b2af24",
        active: "#cbc025",
      },
      borderColor: "#00000000",
    },
    lime: {
      bgColor: {
        rest: "#141f0f",
        hover: "#1f3116",
        active: "#2c441d",
      },
      fgColor: {
        rest: "#7dae37",
        hover: "#89ba36",
        active: "#9fcc3e",
      },
      borderColor: "#00000000",
    },
    pine: {
      bgColor: {
        rest: "#082119",
        hover: "#0b3224",
        active: "#0e4430",
      },
      fgColor: {
        rest: "#1bb673",
        hover: "#1ac176",
        active: "#1bda81",
      },
      borderColor: "#00000000",
    },
    teal: {
      bgColor: {
        rest: "#041f25",
        hover: "#073036",
        active: "#0a464d",
      },
      fgColor: {
        rest: "#1cb0ab",
        hover: "#1fbdb2",
        active: "#24d6c4",
      },
      borderColor: "#00000000",
    },
    cyan: {
      bgColor: {
        rest: "#001f29",
        hover: "#002e3d",
        active: "#014156",
      },
      fgColor: {
        rest: "#07ace4",
        hover: "#09b7f1",
        active: "#45cbf7",
      },
      borderColor: "#00000000",
    },
    indigo: {
      bgColor: {
        rest: "#1b183f",
        hover: "#25215f",
        active: "#312c90",
      },
      fgColor: {
        rest: "#9899ec",
        hover: "#a2a5f1",
        active: "#b7baf6",
      },
      borderColor: "#00000000",
    },
    blue: {
      bgColor: {
        rest: "#001a47",
        hover: "#002766",
        active: "#00378a",
      },
      fgColor: {
        rest: "#4da0ff",
        hover: "#61adff",
        active: "#85c2ff",
      },
      borderColor: "#00000000",
    },
    plum: {
      bgColor: {
        rest: "#2a0e3f",
        hover: "#40125e",
        active: "#5c1688",
      },
      fgColor: {
        rest: "#d07ef7",
        hover: "#d889fa",
        active: "#e4a5fd",
      },
      borderColor: "#00000000",
    },
    pink: {
      bgColor: {
        rest: "#2d1524",
        hover: "#451c35",
        active: "#65244a",
      },
      fgColor: {
        rest: "#e57bb2",
        hover: "#ec8dbd",
        active: "#f4a9cd",
      },
      borderColor: "#00000000",
    },
    coral: {
      bgColor: {
        rest: "#351008",
        hover: "#51180b",
        active: "#72220d",
      },
      fgColor: {
        rest: "#f7794b",
        hover: "#fa8c61",
        active: "#fdaa86",
      },
      borderColor: "#00000000",
    },
  },
  menu: {
    bgColor: {
      active: "#151b23",
    },
  },
  overlay: {
    bgColor: "#010409",
    borderColor: "#3d444db3",
    backdrop: {
      bgColor: "#21283066",
    },
  },
  page: {
    header: {
      bgColor: "#0d1117",
    },
  },
  progressBar: {
    track: {
      bgColor: "#3d444d",
      borderColor: "#00000000",
    },
    bgColor: {
      danger: "#da3633",
      severe: "#da3633",
      sponsors: "#bf4b8a",
      done: "#8957e5",
      accent: "#1f6feb",
      success: "#1f6feb",
      neutral: "#656c76",
      attention: "#9e6a03",
    },
  },
  reactionButton: {
    selected: {
      bgColor: {
        rest: "#388bfd33",
        hover: "#3a8cfd5c",
      },
      fgColor: {
        rest: "#4493f8",
        hover: "#79c0ff",
      },
    },
  },
  selectMenu: {
    borderColor: "#3d444d",
    bgColor: {
      active: "#0c2d6b",
    },
  },
  sideNav: {
    bgColor: {
      selected: "#212830",
    },
  },
  skeletonLoader: {
    bgColor: "#656c7633",
  },
  timelineBadge: {
    bgColor: "#212830",
  },
  tooltip: {
    bgColor: "#3d444d",
    fgColor: "#ffffff",
  },
  topicTag: {
    borderColor: "#00000000",
  },
  treeViewItem: {
    leadingVisual: {
      iconColor: {
        rest: "#9198a1",
      },
    },
  },
  underlineNav: {
    borderColor: {
      active: "#f78166",
      hover: "#3d444db3",
    },
    iconColor: {
      rest: "#9198a1",
    },
  },
};
