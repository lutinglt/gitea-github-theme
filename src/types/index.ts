import type { MapLeafNodes } from "src/core/types";
import * as color from "./color";

export type Primary = MapLeafNodes<typeof color.primary, string>;
export type Secondary = MapLeafNodes<typeof color.secondary, string>;
export type Named = MapLeafNodes<typeof color.named, string>;
export type Message = MapLeafNodes<typeof color.message, string>;
export type Ansi = MapLeafNodes<typeof color.ansi, string>;
export type Console = MapLeafNodes<typeof color.console, string>;
export type Diff = MapLeafNodes<typeof color.diff, string>;
export type Based = MapLeafNodes<typeof color.based, string>;
