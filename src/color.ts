import type { MapLeafNodes } from "src/types";
import { color } from "src/vars";

export type Primary = MapLeafNodes<typeof color.primary, string>;
export type Secondary = MapLeafNodes<typeof color.secondary, string>;
export type Self = MapLeafNodes<typeof color.self, string>;
