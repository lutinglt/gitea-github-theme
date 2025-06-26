import type { MapLeafNodes } from "src/core/types";
import * as color from "./color";

export type Primary = MapLeafNodes<typeof color.primary, string>;
export type Secondary = MapLeafNodes<typeof color.secondary, string>;
export type Named = MapLeafNodes<typeof color.named, string>;
