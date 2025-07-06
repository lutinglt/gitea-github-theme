import { defineGithubTheme, type GithubColor } from "src/core/github";

const github: GithubColor = {
  isDarkTheme: true,
  display: {
    brown: { fgColor: "#b69a6d" },
    cyan: { fgColor: "#07ace4" },
    indigo: { fgColor: "#9899ec" },
    lemon: { fgColor: "#ba9b12" },
    olive: { fgColor: "#a2a626" },
    teal: { fgColor: "#1cb0ab" },
  },
  diffBlob: {
    addtionNum: { bgColor: "#3fb9504d" },
    addtionWord: { bgColor: "#2ea04366" },
    deletionNum: { bgColor: "#f851494d" },
    deletionWord: { bgColor: "#f8514966" },
    hunkNum: { bgColor: { rest: "#0c2d6b" } },
  },
  fgColor: {
    accent: "#4493f8",
    attention: "#d29922",
    danger: "#f85149",
    default: "#f0f6fc",
    disabled: "#656c7699",
    done: "#ab7df8",
    neutral: "#9198a1",
    severe: "#db6d28",
    sponsors: "#db61a2",
    success: "#3fb950",
    black: "#010409",
    white: "#ffffff",
    muted: "#9198a1",
  },
  bgColor: {
    accent: {
      emphasis: "#1f6feb",
      muted: "#388bfd1a",
    },
    attention: {
      muted: "#bb800926",
    },
    success: {
      emphasis: "#238636",
      muted: "#2ea04326",
    },
    danger: {
      muted: "#f851491a",
    },
    done: {
      emphasis: "#8957e5",
    },
    default: "#0d1117",
    inset: "#010409",
    muted: "#151b23",
    neutral: {
      muted: "#656c7633",
    },
  },
  borderColor: {
    accent: {
      emphasis: "#1f6feb",
    },
    default: "#3d444d",
    attention: {
      emphasis: "#9e6a03",
    },
    success: {
      emphasis: "#238636",
    },
    done: {
      emphasis: "#8957e5",
    },
    muted: "#3d444db3",
    translucent: "#ffffff26",
  },
  button: {
    primary: {
      fgColor: {
        accent: "#39d353",
        rest: "#ffffff",
      },
      bgColor: {
        rest: "#238636",
        hover: "#29903b",
      },
    },
    danger: {
      fgColor: {
        rest: "#fa5e55",
        hover: "#ffffff",
      },
      bgColor: {
        hover: "#b62324",
      },
    },
  },
  control: {
    bgColor: {
      active: "#2a313c",
      hover: "#262c36",
      rest: "#212830",
    },
    transparent: {
      bgColor: {
        active: "#656c7640",
        hover: "#656c7633",
        // 非官方颜色, 实在是太淡了
        // selected: "#656c761a",
        selected: "#656c762a",
      },
    },
  },
  shadow: {
    floating: "#01040966",
  },
  overlay: {
    backdrop: {
      bgColor: "#21283066",
    },
  },
  underlineNav: {
    borderColor: {
      active: "#f78166",
    },
  },
  contribution: {
    default: {
      bgColor: {
        num0: "#151b23",
        num1: "#033a16",
        num2: "#196c2e",
        num3: "#2ea043",
        num4: "#56d364",
        num5: "#7ee787",
      },
      borderColor: {
        num0: "#0104090d",
      },
    },
  },
};

export default defineGithubTheme(github);
