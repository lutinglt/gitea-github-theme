import { prettylights2Chroma, type prettylightsColor } from "./prettylights";

export const lightPrettylights: prettylightsColor = {
  syntax: {
    brackethighlighter: { angle: "#59636e", unmatched: "#82071e" },
    carriage: { return: { bg: "#cf222e", text: "#f6f8fa" } },
    comment: "#59636e",
    constant: "#0550ae",
    constantOtherReferenceLink: "#0a3069",
    entity: "#6639ba",
    entityTag: "#0550ae",
    invalid: { illegal: { bg: "#82071e", text: "#f6f8fa" } },
    keyword: "#cf222e",
    markup: {
      bold: "#1f2328",
      changed: { bg: "#ffd8b5", text: "#953800" },
      deleted: { bg: "#ffebe9", text: "#82071e" },
      heading: "#0550ae",
      ignored: { bg: "#0550ae", text: "#d1d9e0" },
      inserted: { bg: "#dafbe1", text: "#116329" },
      italic: "#1f2328",
      list: "#3b2300",
    },
    metaDiffRange: "#8250df",
    storageModifierImport: "#1f2328",
    string: "#0a3069",
    stringRegexp: "#116329",
    sublimelinterGutterMark: "#818b98",
    variable: "#953800",
  },
};

export const darkPrettylights: prettylightsColor = {
  syntax: {
    brackethighlighter: { angle: "#9198a1", unmatched: "#f85149" },
    carriage: { return: { bg: "#b62324", text: "#f0f6fc" } },
    comment: "#9198a1",
    constant: "#79c0ff",
    constantOtherReferenceLink: "#a5d6ff",
    entity: "#d2a8ff",
    entityTag: "#7ee787",
    invalid: { illegal: { bg: "#8e1519", text: "#f0f6fc" } },
    keyword: "#ff7b72",
    markup: {
      bold: "#f0f6fc",
      changed: { bg: "#5a1e02", text: "#ffdfb6" },
      deleted: { bg: "#67060c", text: "#ffdcd7" },
      heading: "#1f6feb",
      ignored: { bg: "#1158c7", text: "#f0f6fc" },
      inserted: { bg: "#033a16", text: "#aff5b4" },
      italic: "#f0f6fc",
      list: "#f2cc60",
    },
    metaDiffRange: "#d2a8ff",
    storageModifierImport: "#f0f6fc",
    string: "#a5d6ff",
    stringRegexp: "#7ee787",
    sublimelinterGutterMark: "#3d444d",
    variable: "#ffa657",
  },
};

export const defaultLightChroma = prettylights2Chroma(lightPrettylights);
export const defaultDarkChroma = prettylights2Chroma(darkPrettylights);
