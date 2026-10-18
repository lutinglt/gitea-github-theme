export default {
  shadow: {
    inset: "inset 0 1px 0 0 #0104093d",
    resting: {
      xsmall: "0 1px 1px 0 #010409cc",
      small: "0 1px 1px 0 #01040999, 0 1px 3px 0 #01040999",
      medium: "0 1px 1px 0 #01040966, 0 3px 6px 0 #010409cc",
    },
    floating: {
      small: "0 0 0 1px #b7bdc8, 0 6px 12px -3px #01040966, 0 6px 18px 0 #01040966",
      medium:
        "0 0 0 1px #b7bdc8, 0 8px 16px -4px #01040966, 0 4px 32px -4px #01040966, 0 24px 48px -12px #01040966, 0 48px 96px -24px #01040966",
      large: "0 0 0 1px #b7bdc8, 0 24px 48px 0 #010409",
      xlarge: "0 0 0 1px #b7bdc8, 0 32px 64px 0 #010409",
    },
  },
  border: {
    default: "0.0625rem solid #b7bdc8",
    muted: "0.0625rem solid #b7bdc8",
    emphasis: "0.0625rem solid #b7bdc8",
    disabled: "0.0625rem solid #656c761a",
    transparent: "0.0625rem solid #00000000",
    translucent: "0.0625rem solid #9198a1",
    neutral: {
      emphasis: "0.0625rem solid #b7bdc8",
      muted: "0.0625rem solid #b7bdc8",
    },
    accent: {
      emphasis: "0.0625rem solid #6cb6ff",
      muted: "0.0625rem solid #6cb6ff",
    },
    success: {
      emphasis: "0.0625rem solid #6bc46d",
      muted: "0.0625rem solid #6bc46d",
    },
    open: {
      emphasis: "0.0625rem solid #6bc46d",
      muted: "0.0625rem solid #6bc46d",
    },
    danger: {
      emphasis: "0.0625rem solid #ff938a",
      muted: "0.0625rem solid #ff938a",
    },
    closed: {
      emphasis: "0.0625rem solid #ff938a",
      muted: "0.0625rem solid #ff938a",
    },
    draft: {
      emphasis: "0.0625rem solid #b7bdc8",
      muted: "0.0625rem solid #b7bdc8",
    },
    attention: {
      emphasis: "0.0625rem solid #daaa3f",
      muted: "0.0625rem solid #daaa3f",
    },
    severe: {
      emphasis: "0.0625rem solid #f69d50",
      muted: "0.0625rem solid #f69d50",
    },
    done: {
      emphasis: "0.0625rem solid #dcbdfb",
      muted: "0.0625rem solid #dcbdfb",
    },
    upsell: {
      emphasis: "0.0625rem solid #dcbdfb",
      muted: "0.0625rem solid #dcbdfb",
    },
    sponsors: {
      emphasis: "0.0625rem solid #e275ad",
      muted: "0.0625rem solid #fc8dc7",
    },
  },
  avatar: {
    bgColor: "#cdd9e51a",
    borderColor: "#b7bdc8",
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
        rest: "#262c36",
        hover: "#2a313c",
        active: "#2f3742",
        selected: "#2f3742",
        disabled: "#2a313c",
      },
      borderColor: {
        rest: "#b7bdc8",
        hover: "#b7bdc8",
        active: "#b7bdc8",
        disabled: "#656c761a",
      },
      shadow: {
        resting: "0 0 0 0 #00000000",
      },
    },
    primary: {
      fgColor: {
        rest: "#ffffff",
        disabled: "#cdd9e566",
      },
      iconColor: {
        rest: "#ffffff",
        disabled: "#cdd9e566",
      },
      bgColor: {
        rest: "#245829",
        hover: "#2b6a30",
        active: "#347d39",
        disabled: "#105823",
      },
      borderColor: {
        rest: "#6bc46d",
        hover: "#6bc46d",
        active: "#6bc46d",
        disabled: "#105823",
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
        rest: "#d1d7e0",
        hover: "#d1d7e0",
        disabled: "#656c76",
      },
      bgColor: {
        rest: "#00000000",
        hover: "#2f3742",
        active: "#3d444d",
        disabled: "#00000000",
      },
      borderColor: {
        rest: "#00000000",
        hover: "#b7bdc8",
        disabled: "#00000000",
      },
    },
    outline: {
      fgColor: {
        rest: "#4184e4",
        hover: "#539bf5",
        active: "#cdd9e5",
        disabled: "#96d0ff80",
      },
      bgColor: {
        rest: "#f0f6fc",
        hover: "#2a313c",
        active: "#1b4b91",
        disabled: "#2a313c",
      },
      borderColor: {
        hover: "#b7bdc8",
        active: "#b7bdc8",
      },
      shadow: {
        selected: "0 0 0 0 #00000000",
      },
    },
    danger: {
      fgColor: {
        rest: "#ffb8b0",
        hover: "#ffffff",
        active: "#ffffff",
        disabled: "#ffb8b080",
      },
      iconColor: {
        rest: "#ffb8b0",
        hover: "#ffffff",
        disabled: "#ffb8b080",
      },
      bgColor: {
        rest: "#262c36",
        hover: "#922323",
        active: "#922323",
        disabled: "#2a313c",
      },
      borderColor: {
        rest: "#b7bdc8",
        hover: "#ffb8b0",
        active: "#ffb8b0",
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
      iconColor: "#daaa3f",
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
        rest: "#11341733",
      },
    },
    outline: {
      bgColor: {
        rest: "#0f2d5c33",
        hover: "#0f2d5c33",
        disabled: "#1b4b910d",
      },
      fgColor: {
        rest: "#4184e4",
        hover: "#539bf5",
        disabled: "#96d0ff80",
      },
    },
    danger: {
      bgColor: {
        hover: "#cdd9e533",
        disabled: "#9223230d",
        rest: "#5d0f1233",
      },
      fgColor: {
        rest: "#ffb8b0",
        hover: "#cdd9e5",
        disabled: "#ffb8b080",
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
        rest: "#b7bdc8",
        disabled: "#656c761a",
      },
      fgColor: {
        rest: "#b7bdc8",
        disabled: "#656c76",
      },
    },
    invisible: {
      bgColor: {
        rest: "#2a313c",
        hover: "#2f3742",
        active: "#3d444d",
        disabled: "#00000000",
      },
      borderColor: {
        rest: "#00000000",
        disabled: "#656c761a",
      },
      fgColor: {
        rest: "#b7bdc8",
        disabled: "#656c76",
      },
    },
    primary: {
      bgColor: {
        rest: "#11341733",
        disabled: "#1134171a",
      },
      borderColor: {
        rest: "#cdd9e5",
        disabled: "#656c761a",
      },
      fgColor: {
        rest: "#ffffff",
        disabled: "#cdd9e566",
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
        rest: "#b7bdc8",
        hover: "#cdd9e5",
        active: "#cdd9e5",
        disabled: "#656c761a",
      },
      fgColor: {
        rest: "#b7bdc8",
        hover: "#ffffff",
        active: "#ffffff",
        disabled: "#656c76",
      },
    },
    inactive: {
      bgColor: "#2a313c",
      borderColor: "#b7bdc8",
      fgColor: "#9198a1",
    },
  },
  card: {
    bgColor: "#262c36",
  },
  codeMirror: {
    fgColor: "#f0f6fc",
    bgColor: "#212830",
    gutters: {
      bgColor: "#212830",
    },
    gutterMarker: {
      fgColor: {
        default: "#212830",
        muted: "#b7bdc8",
      },
    },
    lineNumber: {
      fgColor: "#b7bdc8",
    },
    cursor: {
      fgColor: "#f0f6fc",
    },
    selection: {
      bgColor: "#4184e466",
    },
    activeline: {
      bgColor: "#656c7633",
    },
    matchingBracket: {
      fgColor: "#f0f6fc",
    },
    lines: {
      bgColor: "#212830",
    },
    syntax: {
      fgColor: {
        comment: "#656c76",
        constant: "#6cb6ff",
        entity: "#dcbdfb",
        keyword: "#f47067",
        storage: "#f47067",
        string: "#96d0ff",
        support: "#6cb6ff",
        variable: "#f69d50",
      },
    },
  },
  contribution: {
    default: {
      bgColor: {
        "0": "#151b23",
        "1": "#1b4721",
        "2": "#2b6a30",
        "3": "#46954a",
        "4": "#6bc46d",
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
        "1": "#143d79",
        "2": "#255ab2",
        "3": "#539bf5",
        "4": "#c6e6ff",
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
    borderColor: "#b7bdc8",
    bgColor: {
      muted: "#656c7633",
      emphasis: "#3d444d",
    },
  },
  dashboard: {
    bgColor: "#151b23",
  },
  diffBlob: {
    additionLine: {
      fgColor: "#f0f6fc",
      bgColor: "#46954a26",
    },
    additionWord: {
      fgColor: "#f0f6fc",
      bgColor: "#46954a66",
    },
    additionNum: {
      fgColor: "#f0f6fc",
      bgColor: "#57ab5a4d",
    },
    deletionLine: {
      fgColor: "#f0f6fc",
      bgColor: "#e5534b1a",
    },
    deletionWord: {
      fgColor: "#f0f6fc",
      bgColor: "#e5534b66",
    },
    deletionNum: {
      fgColor: "#f0f6fc",
      bgColor: "#e5534b4d",
    },
    hunkLine: {
      bgColor: "#4184e41a",
      fgColor: "#b7bdc8",
    },
    hunkNum: {
      fgColor: {
        rest: "#f0f6fc",
        hover: "#ffffff",
      },
      bgColor: {
        rest: "#143d79",
        hover: "#1b4b91",
      },
    },
    emptyNum: {
      bgColor: "#262c36",
    },
    emptyLine: {
      bgColor: "#262c36",
    },
    expander: {
      iconColor: "#b7bdc8",
    },
  },
  focus: {
    outline: "0.125rem solid #6cb6ff",
    "outline-color": "#6cb6ff",
    outlineColor: "#6cb6ff",
  },
  header: {
    bgColor: "#151b23f2",
    fgColor: {
      default: "#cdd9e5b3",
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
      bgColor: "#c6902666",
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
      borderColor: "#41b445",
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
      borderColor: "#ed8326",
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
      borderColor: "#b687f7",
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
      borderColor: "#f27d83",
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
      borderColor: "#d3910d",
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
      borderColor: "#92a1b5",
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
      borderColor: "#bf9592",
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
      borderColor: "#b69a6d",
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
      borderColor: "#ba9b12",
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
      borderColor: "#a2a626",
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
      borderColor: "#7dae37",
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
      borderColor: "#1bb673",
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
      borderColor: "#1cb0ab",
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
      borderColor: "#07ace4",
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
      borderColor: "#9899ec",
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
      borderColor: "#4da0ff",
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
      borderColor: "#d07ef7",
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
      borderColor: "#e57bb2",
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
      borderColor: "#f7794b",
    },
  },
  menu: {
    bgColor: {
      active: "#151b23",
    },
  },
  overlay: {
    bgColor: "#262c36",
    borderColor: "#b7bdc8",
    backdrop: {
      bgColor: "#9198a166",
    },
  },
  page: {
    header: {
      bgColor: "#212830",
    },
  },
  progressBar: {
    track: {
      bgColor: "#cdd9e5",
      borderColor: "#cdd9e5",
    },
    bgColor: {
      danger: "#922323",
      severe: "#7f3913",
      sponsors: "#7e325a",
      done: "#5936a2",
      accent: "#1b4b91",
      success: "#245829",
      neutral: "#656c76",
      attention: "#6c4400",
    },
  },
  reactionButton: {
    selected: {
      bgColor: {
        rest: "#4184e433",
        hover: "#3a8cfd5c",
      },
      fgColor: {
        rest: "#96d0ff",
        hover: "#6cb6ff",
      },
    },
  },
  selectMenu: {
    borderColor: "#b7bdc8",
    bgColor: {
      active: "#143d79",
    },
  },
  sideNav: {
    bgColor: {
      selected: "#212830",
    },
  },
  skeletonLoader: {
    bgColor: "#2a313c",
  },
  timelineBadge: {
    bgColor: "#212830",
  },
  tooltip: {
    bgColor: "#cdd9e5",
    fgColor: "#010409",
  },
  topicTag: {
    borderColor: "#6cb6ff",
  },
  treeViewItem: {
    leadingVisual: {
      iconColor: {
        rest: "#b7bdc8",
      },
    },
  },
  underlineNav: {
    borderColor: {
      active: "#ec775c",
      hover: "#b7bdc8",
    },
    iconColor: {
      rest: "#b7bdc8",
    },
  },
  bgColor: {
    default: "#212830",
    muted: "#262c36",
    inset: "#151b23",
    emphasis: "#3d444d",
    inverse: "#cdd9e5",
    white: "#cdd9e5",
    black: "#010409",
    disabled: "#2a313c",
    transparent: "#00000000",
    neutral: {
      muted: "#656c7633",
      emphasis: "#3d444d",
    },
    accent: {
      muted: "#4184e41a",
      emphasis: "#1b4b91",
    },
    success: {
      muted: "#46954a26",
      emphasis: "#245829",
    },
    open: {
      muted: "#46954a26",
      emphasis: "#245829",
    },
    attention: {
      muted: "#ae7c1426",
      emphasis: "#6c4400",
    },
    severe: {
      muted: "#cc6b2c1a",
      emphasis: "#7f3913",
    },
    danger: {
      muted: "#e5534b1a",
      emphasis: "#922323",
    },
    closed: {
      muted: "#e5534b1a",
      emphasis: "#922323",
    },
    draft: {
      muted: "#656c7633",
      emphasis: "#3d444d",
    },
    done: {
      muted: "#986ee226",
      emphasis: "#5936a2",
    },
    upsell: {
      muted: "#986ee226",
      emphasis: "#5936a2",
    },
    sponsors: {
      muted: "#c961981a",
      emphasis: "#7e325a",
    },
  },
  borderColor: {
    default: "#b7bdc8",
    muted: "#b7bdc8",
    emphasis: "#b7bdc8",
    disabled: "#656c761a",
    transparent: "#00000000",
    translucent: "#9198a1",
    neutral: {
      muted: "#b7bdc8",
      emphasis: "#b7bdc8",
    },
    accent: {
      muted: "#6cb6ff",
      emphasis: "#6cb6ff",
    },
    success: {
      muted: "#6bc46d",
      emphasis: "#6bc46d",
    },
    open: {
      muted: "#6bc46d",
      emphasis: "#6bc46d",
    },
    attention: {
      muted: "#daaa3f",
      emphasis: "#daaa3f",
    },
    severe: {
      muted: "#f69d50",
      emphasis: "#f69d50",
    },
    danger: {
      muted: "#ff938a",
      emphasis: "#ff938a",
    },
    closed: {
      muted: "#ff938a",
      emphasis: "#ff938a",
    },
    draft: {
      muted: "#b7bdc8",
      emphasis: "#b7bdc8",
    },
    done: {
      muted: "#dcbdfb",
      emphasis: "#dcbdfb",
    },
    upsell: {
      muted: "#dcbdfb",
      emphasis: "#dcbdfb",
    },
    sponsors: {
      muted: "#fc8dc7",
      emphasis: "#e275ad",
    },
  },
  control: {
    bgColor: {
      rest: "#262c36",
      hover: "#2a313c",
      active: "#2f3742",
      disabled: "#2a313c",
      selected: "#262c36",
    },
    fgColor: {
      rest: "#f0f6fc",
      placeholder: "#b7bdc8",
      disabled: "#656c76",
    },
    borderColor: {
      rest: "#b7bdc8",
      emphasis: "#b7bdc8",
      disabled: "#656c761a",
      selected: "#f0f6fc",
      success: "#6bc46d",
      danger: "#ff938a",
      warning: "#daaa3f",
    },
    iconColor: {
      rest: "#b7bdc8",
    },
    transparent: {
      bgColor: {
        rest: "#00000000",
        hover: "#2f3742",
        active: "#3d444d",
        disabled: "#2a313c",
        selected: "#2f3742",
      },
      borderColor: {
        rest: "#00000000",
        hover: "#b7bdc8",
        active: "#b7bdc8",
      },
    },
    danger: {
      fgColor: {
        rest: "#ffb8b0",
        hover: "#ffffff",
      },
      bgColor: {
        hover: "#922323",
        active: "#c51120",
      },
    },
    checked: {
      bgColor: {
        rest: "#1b4b91",
        hover: "#2b64c1",
        active: "#3c79d0",
        disabled: "#656c76",
      },
      fgColor: {
        rest: "#ffffff",
        disabled: "#010409",
      },
      borderColor: {
        rest: "#6cb6ff",
        hover: "#6cb6ff",
        active: "#6cb6ff",
        disabled: "#656c76",
      },
    },
  },
  controlTrack: {
    bgColor: {
      rest: "#151b23",
      hover: "#2f3742",
      active: "#3d444d",
      disabled: "#656c76",
    },
    fgColor: {
      rest: "#b7bdc8",
      disabled: "#ffffff",
    },
    borderColor: {
      rest: "#b7bdc8",
      disabled: "#656c76",
    },
  },
  controlKnob: {
    bgColor: {
      rest: "#2a313c",
      disabled: "#2a313c",
      checked: "#cdd9e5",
    },
    borderColor: {
      rest: "#b7bdc8",
      disabled: "#2a313c",
      checked: "#1b4b91",
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
        emphasis: "#0046a8",
      },
      fgColor: "#85c2ff",
      borderColor: {
        muted: "#002766",
        emphasis: "#4da0ff",
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
        emphasis: "#285830",
      },
      fgColor: "#75d36f",
      borderColor: {
        muted: "#182f1f",
        emphasis: "#41b445",
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
        emphasis: "#7b3c0e",
      },
      fgColor: "#f6b06a",
      borderColor: {
        muted: "#43200a",
        emphasis: "#ed8326",
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
        emphasis: "#5b1cca",
      },
      fgColor: "#d2affd",
      borderColor: {
        muted: "#31146b",
        emphasis: "#b687f7",
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
        emphasis: "#7517ab",
      },
      fgColor: "#e4a5fd",
      borderColor: {
        muted: "#40125e",
        emphasis: "#d07ef7",
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
        emphasis: "#990f24",
      },
      fgColor: "#f7adab",
      borderColor: {
        muted: "#58091a",
        emphasis: "#f27d83",
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
        emphasis: "#902a0e",
      },
      fgColor: "#fdaa86",
      borderColor: {
        muted: "#58091a",
        emphasis: "#f7794b",
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
        emphasis: "#6d4403",
      },
      fgColor: "#edb431",
      borderColor: {
        muted: "#3d2401",
        emphasis: "#d3910d",
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
        emphasis: "#474e57",
      },
      fgColor: "#b3c0d1",
      borderColor: {
        muted: "#2a2b2d",
        emphasis: "#92a1b5",
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
        emphasis: "#6d4340",
      },
      fgColor: "#d4b7b5",
      borderColor: {
        muted: "#3a2422",
        emphasis: "#bf9592",
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
        emphasis: "#5d4a32",
      },
      fgColor: "#cdbb98",
      borderColor: {
        muted: "#342a1d",
        emphasis: "#b69a6d",
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
        emphasis: "#614c05",
      },
      fgColor: "#d7bc1d",
      borderColor: {
        muted: "#372901",
        emphasis: "#ba9b12",
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
        emphasis: "#485219",
      },
      fgColor: "#cbc025",
      borderColor: {
        muted: "#252d10",
        emphasis: "#a2a626",
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
        emphasis: "#375421",
      },
      fgColor: "#9fcc3e",
      borderColor: {
        muted: "#1f3116",
        emphasis: "#7dae37",
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
        emphasis: "#115a3e",
      },
      fgColor: "#1bda81",
      borderColor: {
        muted: "#0b3224",
        emphasis: "#1bb673",
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
        emphasis: "#0c555a",
      },
      fgColor: "#24d6c4",
      borderColor: {
        muted: "#073036",
        emphasis: "#1cb0ab",
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
        emphasis: "#02536f",
      },
      fgColor: "#45cbf7",
      borderColor: {
        muted: "#002e3d",
        emphasis: "#07ace4",
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
        emphasis: "#3935c0",
      },
      fgColor: "#b7baf6",
      borderColor: {
        muted: "#25215f",
        emphasis: "#9899ec",
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
        emphasis: "#842a5d",
      },
      fgColor: "#f4a9cd",
      borderColor: {
        muted: "#451c35",
        emphasis: "#e57bb2",
      },
    },
  },
  fgColor: {
    default: "#f0f6fc",
    muted: "#b7bdc8",
    onEmphasis: "#ffffff",
    onInverse: "#010409",
    white: "#cdd9e5",
    black: "#010409",
    disabled: "#656c76",
    link: "#96d0ff",
    neutral: "#d1d7e0",
    accent: "#96d0ff",
    success: "#b4f1b4",
    open: "#b4f1b4",
    attention: "#eac55f",
    severe: "#ffbc6f",
    danger: "#ffb8b0",
    closed: "#ffb8b0",
    draft: "#d1d7e0",
    done: "#dcbdfb",
    upsell: "#dcbdfb",
    sponsors: "#ffb3d8",
  },
  selection: {
    bgColor: "#1b4b91b3",
  },
  ansi: {
    black: "#2f3742",
    blackBright: "#656c76",
    white: "#f0f6fc",
    whiteBright: "#cdd9e5",
    gray: "#656c76",
    red: "#f47067",
    redBright: "#ff938a",
    green: "#57ab5a",
    greenBright: "#6bc46d",
    yellow: "#c69026",
    yellowBright: "#daaa3f",
    blue: "#539bf5",
    blueBright: "#6cb6ff",
    magenta: "#b083f0",
    magentaBright: "#dcbdfb",
    cyan: "#39c5cf",
    cyanBright: "#56d4dd",
  },
  prettylights: {
    syntax: {
      comment: "#9198a1",
      constant: "#6cb6ff",
      constantOtherReferenceLink: "#96d0ff",
      "constant-other-reference-link": "#96d0ff",
      entityTag: "#8ddb8c",
      entity: "#dcbdfb",
      storageModifierImport: "#f0f6fc",
      storage: {
        modifier: {
          import: "#f0f6fc",
        },
      },
      "entity-tag": "#8ddb8c",
      keyword: "#f47067",
      string: "#96d0ff",
      variable: "#f69d50",
      bracketHighlighterUnmatched: "#e5534b",
      bracketHighlighterAngle: "#9198a1",
      brackethighlighter: {
        unmatched: "#e5534b",
        angle: "#9198a1",
      },
      invalidIllegal: {
        text: "#ffb8b0",
        bg: "#e5534b1a",
      },
      invalid: {
        illegal: {
          text: "#ffb8b0",
          bg: "#e5534b1a",
        },
      },
      carriageReturn: {
        text: "#f0f6fc",
        bg: "#ad2e2c",
      },
      carriage: {
        return: {
          text: "#f0f6fc",
          bg: "#ad2e2c",
        },
      },
      stringRegexp: "#8ddb8c",
      "string-regexp": "#8ddb8c",
      markup: {
        list: "#eac55f",
        heading: "#316dca",
        italic: "#f0f6fc",
        bold: "#f0f6fc",
        deleted: {
          text: "#ffd8d3",
          bg: "#78191b",
        },
        inserted: {
          text: "#b4f1b4",
          bg: "#1b4721",
        },
        changed: {
          text: "#ffddb0",
          bg: "#682d0f",
        },
        ignored: {
          text: "#f0f6fc",
          bg: "#255ab2",
        },
      },
      metaDiffRange: "#dcbdfb",
      meta: {
        diff: {
          range: "#dcbdfb",
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
      "white-bright": "#cdd9e5",
      gray: "#656c76",
      red: "#f47067",
      "red-bright": "#ff938a",
      green: "#57ab5a",
      "green-bright": "#6bc46d",
      yellow: "#c69026",
      "yellow-bright": "#daaa3f",
      blue: "#539bf5",
      "blue-bright": "#6cb6ff",
      magenta: "#b083f0",
      "magenta-bright": "#dcbdfb",
      cyan: "#39c5cf",
      "cyan-bright": "#56d4dd",
    },
    prettylights: {
      syntax: {
        comment: "#9198a1",
        constant: "#6cb6ff",
        "constant-other-reference-link": "#96d0ff",
        entity: "#dcbdfb",
        storage: {
          modifier: {
            import: "#f0f6fc",
          },
        },
        "entity-tag": "#8ddb8c",
        keyword: "#f47067",
        string: "#96d0ff",
        variable: "#f69d50",
        brackethighlighter: {
          unmatched: "#e5534b",
          angle: "#9198a1",
        },
        invalid: {
          illegal: {
            text: "#ffb8b0",
            bg: "#e5534b1a",
          },
        },
        carriage: {
          return: {
            text: "#f0f6fc",
            bg: "#ad2e2c",
          },
        },
        "string-regexp": "#8ddb8c",
        markup: {
          list: "#eac55f",
          heading: "#316dca",
          italic: "#f0f6fc",
          bold: "#f0f6fc",
          deleted: {
            text: "#ffd8d3",
            bg: "#78191b",
          },
          inserted: {
            text: "#b4f1b4",
            bg: "#1b4721",
          },
          changed: {
            text: "#ffddb0",
            bg: "#682d0f",
          },
          ignored: {
            text: "#f0f6fc",
            bg: "#255ab2",
          },
        },
        meta: {
          diff: {
            range: "#dcbdfb",
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
};
