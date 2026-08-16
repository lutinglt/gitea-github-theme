/*!
 * Copyright (c) https://github.com/lutinglt
 *
 * See the NOTICE file distributed with this work for additional
 * information regarding copyright ownership.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Hatsune Miku Theme — for Gitea
 *
 * Dark:  Hatsune Miku — the concert hall at night.
 *        Tonic at F# (180° teal), skirt-stage (249°),
 *        twelve-tone hue system, soprano/mp ensemble.
 *        Design: docs/DESIGN.md (hatsune-miku-theme)
 *
 * Light: Snow Miku 2026 — Shiawase Patisserie.
 *        Tonic at G (210° cyan), warm cream canvas + cool blue chrome,
 *        dual-tier ensemble (sopranino/soprano), gamut-max mp.
 *        Design: docs/DESIGN-LIGHT.md (hatsune-miku-theme)
 *
 * ── Source Conventions ────────────────────────────────────
 * "core.ts"         = hatsune-miku-theme/src/palette/core.ts  (character hex palette)
 * "design.ts"       = hatsune-miku-theme/src/tokens/dark/syntax.ts, ui.ts etc.
 * "light-syntax.ts" = hatsune-miku-theme/src/tokens/light/syntax.ts
 * "workbench"       = hatsune-miku-theme/themes/hatsune-miku-theme-color-theme.json
 * "workbench-light" = hatsune-miku-theme/themes/hatsune-miku-snow-color-theme.json
 * "DESIGN.md §N"    = hatsune-miku-theme/docs/DESIGN.md section N
 * "DESIGN-LIGHT.md §N" = hatsune-miku-theme/docs/DESIGN-LIGHT.md section N
 *
 * Hex derivation tags:
 *   [exact: X]       = exact hex rendered in built theme output X
 *   [blend: C on B]  = color C blended (opacity) on background B
 *   [approx: C ±Δ]   = approximate, adjusted ±Δ from base color C
 *   [computed]       = derived programmatically (scaleColorLight / alpha blend)
 */

import type {
  Ansi,
  Console,
  Diff,
  GiteaColor,
  Message,
  Named,
  Other,
  Primary,
  Secondary,
  Syntax,
} from "@lutinglt/gitea-github-theme/core";
import { defineTheme, themeVars } from "@lutinglt/gitea-github-theme/core";

// ===================================================================
// DARK MIKU — 12-tone hue system, tonic F#=180° teal, soprano/mp
// DESIGN.md §6 The Score, §7 Her Outfit
// ===================================================================

const mikuDarkPrimary: Primary = {
  // DESIGN.md §4: tonic teal F#=180°, the canonical hair color is #39C5BB.
  // core.ts: character.hair.base = '#39C5BB', shadow = '#067C82'.
  //
  // CRITICAL: primary.self is used as button background in Gitea's framework.
  // #39C5BB + white text (#FCF8F0) = CR 2.0 — unreadable (WCAG AA requires ≥4.5).
  // Using hair.shadow #067C82 instead: CR 5.5 with white text.
  // The canonical #39C5BB is preserved at dark.num3 for link/accent text usage.
  //
  // [exact: core.ts → character.hair.shadow]
  self: "#067C82",
  // DESIGN.md §7: "Blouse white" — the brightest neutral on her body
  // core.ts: character.top.blouse = '#FCF8F0'
  // [exact: workbench → button.foreground]
  contrast: "#FCF8F0",
  dark: {
    // DESIGN.md §5 Registers: hair gradient, lightened from shadow toward canonical.
    // In dark themes "dark" variants are lighter — used for accent text, links, badges.
    // dark.num3 = canonical #39C5BB — the true Miku teal for emphasis.
    // [computed: scaleColorLight(#067C82, 12%→84%)]
    num1: "#1A8A82", // tie.shadow (core.ts: character.tie.shadow)
    num2: "#2EA89E",
    num3: "#39C5BB", // ★ canonical Miku teal (core.ts: character.hair.base)
    num4: "#54D0C8",
    num5: "#75DCD5",
    num6: "#96E8E2",
    num7: "#B8F4EF",
  },
  light: {
    // Darkened from shadow — used for hover/active press states,
    // contribution heatmap lower tiers, and accent muted backgrounds.
    // Conservative descent: num5 still carries visible teal tint.
    // [computed: scaleColorLight(#067C82, -8%→-56%)]
    num1: "#055D6A",
    num2: "#044F5A",
    num3: "#04414A",
    num4: "#03333A",
    num5: "#02252A",
    num6: "#01171A",
    num7: "#00090A",
  },
  alpha: {
    // [computed: #067C82 + hex alpha]
    num10: "#067C8219",
    num20: "#067C8233",
    num30: "#067C824B",
    num40: "#067C8266",
    num50: "#067C8280",
    num60: "#067C8299",
    num70: "#067C82B3",
    num80: "#067C82CC",
    num90: "#067C82E1",
  },
  hover: themeVars.color.primary.light.num1,
  active: themeVars.color.primary.light.num2,
};

const mikuDarkSecondary: Secondary = {
  // DESIGN.md §7: Skirt-family structural chrome. secondary.self must be
  // visibly lighter than body (#1A1F24) for borders to read. Compared to
  // other Gitea dark themes (GitHub #3D444D, Gitea #3F4248, Catppuccin
  // #45475A), using House tier (#23282D) is too close to Stage.
  // Bumped to #2C3339 (≈Stage+0.012Jz) for ~18-point lightness gap.
  // [approx: skirt #1A1F24 + significant Jz offset for border visibility]
  self: "#2C3339",
  dark: {
    // Lighter steps from secondary.self toward Float and beyond.
    // [computed: scaleColorLight(#2C3339, 6%→78% steps)]
    num1: "#363D44",
    num2: "#404850",
    num3: "#4A535C",
    num4: "#545E68", // = secondary.button reference
    num5: "#5F6A75",
    num6: "#6A7682",
    num7: "#758290",
    num8: "#808E9D",
    num9: "#8C9BAA",
    num10: "#97A8B8",
    num11: "#A3B5C5",
    num12: "#B0C2D3",
    num13: "#B0C2D3",
  },
  light: {
    // Darker steps from secondary.self toward Stage and Void.
    // [computed: scaleColorLight(#2C3339, -12%→-48%)]
    num1: "#23282D", // House tier — was secondary.self
    num2: "#1A1F24", // Stage tier — body
    num3: "#111417", // toward Void
    num4: "#0A0D10",
  },
  alpha: {
    // [computed: #23282D + hex alpha]
    num10: "#23282D19",
    num20: "#23282D33",
    num30: "#23282D4B",
    num40: "#23282D66",
    num50: "#23282D80",
    num60: "#23282D99",
    num70: "#23282DB3",
    num80: "#23282DCC",
    num90: "#23282DE1",
  },
  button: themeVars.color.secondary.dark.num4,
  hover: themeVars.color.secondary.dark.num3,
  active: themeVars.color.secondary.dark.num2,
};

const mikuDarkConsole: Console = {
  fg: {
    // DESIGN.md §7: primary foreground, blouse ice-white
    // [exact: workbench → editor.foreground]
    self: "#DEE8F2",
    // DESIGN.md §7: secondary foreground, silver vest
    // [exact: workbench → statusBar.foreground]
    subtle: "#BDD7D9",
  },
  // DESIGN.md §7: Stage tier — editor canvas
  // [exact: workbench → editor.background]
  bg: "#1A1F24",
  // DESIGN.md §7: border = secondary.self tier, visible structural edge
  // [exact: workbench → secondary medium-light border]
  border: "#2C3339",
  // [approx: between Void and Stage, for Actions log step active]
  activeBg: "#1C2128",
  // [approx: between Void and Stage, for Actions log step hover]
  hoverBg: "#181D23",
  menu: {
    // [approx: nav tier, for Actions log settings menu]
    bg: "#15191D",
    border: "#2C3339",
  },
  // [exact: core.ts → character.hair.base]
  link: "#39C5BB",
};

const mikuDarkNamed: Named = {
  // ===================================================================
  // DESIGN.md §4 The Twelve Tones + §6 The Score
  // Each named color maps to exact rendered hex from the Miku VS Code
  // theme output. light/dark variants are ±10-20% scaleColorLight steps.
  // ===================================================================

  // === C Rose (0°) — Tritone: she stumbles ===
  // [exact: workbench → editorError.foreground]
  // DESIGN.md §6 error signal: alto/f (maximum alarm)
  // DESIGN.md §7: commit signature badge — unverified color
  red: {
    self: "#FF8DED",
    light: "#FFA8F2", // [computed: scaleColorLight(self, 10%)]
    dark: { num1: "#E57FD5", num2: "#CC71BE" }, // [computed: scaleColorLight(self, -10%,-20%)]
    badge: { self: "#FF8DED", bg: "#FF8DED1A", hover: { bg: "#FF8DED4D" } }, // [computed: self + alpha 10%/30%]
  },

  // === D Orange (60°) — Minor 6th: she reaches ===
  // [exact: workbench → tokenColor "User Functions", scope entity.name.function]
  // DESIGN.md §6 function/method: soprano+0.004Jz/mp
  orange: {
    self: "#FFC39B",
    light: "#FFD0B0",
    dark: { num1: "#E5B08B", num2: "#CC9C7B" },
    badge: { self: "#FFC39B", bg: "#FFC39B1A", hover: { bg: "#FFC39B4D" } },
  },

  // === D# Gold (90°) — Major 6th: written with love ===
  // [exact: workbench → editorWarning.foreground]
  // DESIGN.md §7 Status: gold 85°, warnings / caution / modified
  yellow: {
    self: "#F0CD7B",
    light: "#F4D990",
    dark: { num1: "#D8B86F", num2: "#C0A463" },
    badge: { self: "#F0CD7B", bg: "#F0CD7B1A", hover: { bg: "#F0CD7B4D" } },
  },

  // === E Lime (120°) — Minor 7th: someone's truth ===
  // [exact: workbench → tokenColor "Strings", scope string.quoted]
  // DESIGN.md §6 string/regex: soprano/mp, rendered #BCE498 / #B7E888
  // For named.olive, use a mid-point green derived from the lime family, slightly shifted toward yellow
  // [approx: between lime(120°) and green(150°)]
  olive: {
    self: "#7AB840",
    light: "#8DCC58", // [computed: scaleColorLight(self, 15%)]
    dark: { num1: "#6EA63A", num2: "#619434" }, // [computed: scaleColorLight(self, -10%,-20%)]
  },

  // === F Green (150°) — Major 7th: negi green ===
  // DESIGN.md §7: negi green = success / added
  // core.ts: character.negi.stalk #8FBF68, character.negi.bright #79E2A8
  //
  // CRITICAL: Gitea uses --color-green as BUTTON BACKGROUND for .ui.green.button.
  // Borderline vs foreground green:
  //   .ui.green.button { color: white; background: var(--color-green) }
  // #8AF9B4 (negi.bright, L≈0.60) + white = CR 1.8 — unreadable.
  // Using negi.stalk deepened further: #5A8F4A (L≈0.25, CR≈3.1).
  // The bright negi is preserved in named.green.light and in git/diff/message
  // where green is used as foreground text, not background.
  green: {
    self: "#5A8F4A",
    light: "#8AF9B4", // bright negi = foreground emphasis (git added, success text)
    dark: { num1: "#4E7E3E", num2: "#426E32" },
    badge: { self: "#5A8F4A", bg: "#5A8F4A1A", hover: { bg: "#5A8F4A4D" } },
  },

  // === F# Teal (180°) — Unison: she sings ===
  // [exact: core.ts → character.hair.base]
  // DESIGN.md §4: The tonic, the canonical hex printed on a thousand concert tickets
  teal: {
    self: "#39C5BB",
    light: "#54D0C8", // [computed: scaleColorLight(self, 15%)]
    dark: { num1: "#2EA89E", num2: "#249188" }, // [computed: scaleColorLight(self, -10%,-20%)]
  },

  // === A Blue (270°) — Minor 3rd: the shape beneath ===
  // [exact: workbench → editorInfo.foreground]
  // DESIGN.md §6 type: blue 270°/mp
  // DESIGN.md §7 info status: blue 260° (CVD-tuned)
  blue: {
    self: "#C1D5FF",
    light: "#D0E0FF",
    dark: { num1: "#AEC0E5", num2: "#9AACCC" },
  },

  // === A# Violet (300°) — Major 3rd: transformation ===
  // [exact: workbench → tokenColor "Decorators / Attributes", scope entity.name.function.macro]
  // DESIGN.md §6 decorator/macro: soprano+0.012Jz/mp
  violet: {
    self: "#F5C1FF",
    light: "#F8D5FF",
    dark: { num1: "#DDAEE5", num2: "#C49ACC" },
  },

  // === B Magenta (330°) — Perfect 4th: the heartbeat ===
  // purple slot used for operator family — distinct from pink (cushion identity)
  // [exact: workbench → tokenColor "Operators", scope keyword.operator]
  // DESIGN.md §6 operator: soprano+0.014Jz/mp, rendered #FFB7FF
  // For named.purple, use a slightly muted variant to separate from named.pink
  // [approx: #FFB7FF desaturated ×0.8]
  purple: {
    self: "#D080E0",
    light: "#DCA0E8",
    dark: { num1: "#BB73C9", num2: "#A666B2" },
  },

  // === Headphone cushion pink — identity voice ===
  // [exact: core.ts → character.headphones.cushion]
  // DESIGN.md §7: "The cursor blinks magenta — her headphone cushion"
  // DESIGN.md §7 Four Voices: Identity = cushion #E05096
  pink: {
    self: "#E05096",
    light: "#E878AE",
    dark: { num1: "#C94887", num2: "#B24078" },
  },

  // === Brown — warm neutral, derived from chocolate family ===
  // [approx: warm brown ~40° Hz, Jz 0.12, Cz 0.02]
  // Used for Gitea's brown labels (rarely used, needs a plausible fallback)
  brown: {
    self: "#8B6C5C",
    light: "#A08070",
    dark: { num1: "#7D6153", num2: "#6F5649" },
  },
  // === Black — skirt stage base ===
  // [exact: core.ts → character.skirt.base]
  // DESIGN.md §7: "The editor canvas is Miku's skirt"
  black: {
    self: "#1A1F24",
    light: "#3D464D", // [approx: secondary.dark.num3 level]
    dark: { num1: "#2C3339", num2: "#111417" }, // [computed: scaleColorLight, void direction]
  },
  // === Grey — silver vest tertiary ===
  // [exact: workbench → editorLineNumber.foreground]
  // DESIGN.md §7: tertiary text = silver (dim)
  grey: {
    self: "#89A0A1",
    light: "#9AB2B3", // [exact: workbench → terminal.ansiBrightBlack]
  },
  // === Gold — class/enum syntax ===
  // [exact: workbench → tokenColor "User Classes", scope entity.name.class]
  // DESIGN.md §6 class: gold 90°/mf, rendered #E9D27B
  gold: "#E9D27B",
  // === White — blouse white ===
  // [exact: core.ts → character.top.blouse]
  // DESIGN.md §7: blouse white = primary foreground base
  white: "#FCF8F0",
};

const mikuDarkAnsi: Ansi = {
  // ── DESIGN.md §8 Terminal ───────────────────────────────────────
  // 16 ANSI colors: CVD-safe Jz ladder spanning mezzo→sopranino.
  // Normal (soprano/mp): the reading voice.
  // Bright (soprano↑/mf-f): the emphasis voice.
  //
  // All values: [exact: workbench → terminal.ansi*]
  // ──────────────────────────────────────────────────────────────────
  black: "#909BA7", // countertenor/ppp — near-background
  red: "#FF8FC4", // rose mezzo+mf — alert
  green: "#51FEA1", // green 150° soprano/f — success (deutan-safe)
  yellow: "#FFE8C7", // amber sopranino/p — caution (bright + soft)
  blue: "#AEB4FA", // azure mezzo/mp — info
  magenta: "#FFC4FA", // violet treble/p — special
  cyan: "#76FFE6", // tonic teal treble/mp — ★ her voice ★
  white: "#F3BEC4", // warm peach soprano/pp — muted foreground
  bright: {
    black: "#9AB2B3", // alto — comment-level gray
    red: "#FF8DD2", // soprano+f — bright alert
    green: "#62FFB1", // treble/f — bright success
    yellow: "#FFE2B7", // sopranino/mp — bright warning
    blue: "#AAB0FF", // mezzo/mf — bright info
    magenta: "#FFD6FF", // sopranino/p — bright magic
    cyan: "#4BFFF9", // sopranino/mf — bright Miku ★
    white: "#8CE5EA", // soprano/p cool — bright foreground
  },
};

const mikuDarkDiff: Diff = {
  // ── DESIGN.md §7 Diff Background Colors ─────────────────────────
  // Inserted = negi green 150°, removed = warm rose 10°.
  // Background tints blended on Stage (#1A1F24) via alpha.
  // Linenum/row/word tiers at increasing opacity (medium→strong).
  // ──────────────────────────────────────────────────────────────────
  added: {
    // [exact: workbench → gitDecoration.addedResourceForeground]
    fg: "#8AF9B4",
    // [blend: #8AF9B4 at 15% on Stage(#1A1F24)]
    linenum: { bg: "#1A3020" },
    // [blend: #8AF9B4 at 15-20% on Stage]
    row: { bg: "#1B281E", border: "#2E4A30" },
    // [blend: #8AF9B4 at 25-30% on Stage]
    word: { bg: "#3A603A" },
  },
  moved: {
    // [blend: warm gold on Stage, modest opacity]
    row: { bg: "#2A2820", border: "#908A40" },
  },
  removed: {
    // [exact: workbench → gitDecoration.deletedResourceForeground]
    fg: "#FA91F9",
    // [blend: #FA91F9 at 15% on Stage]
    linenum: { bg: "#302025" },
    // [blend: #FA91F9 at 15-20% on Stage]
    row: { bg: "#281B20", border: "#4A2E3A" },
    // [blend: #FA91F9 at 25-30% on Stage]
    word: { bg: "#603040" },
  },
  // DESIGN.md §7: inactive diff regions use Stage background
  // [exact: workbench → editor.background]
  inactive: "#1A1F24",
};

const mikuDarkMessage: Message = {
  // ── DESIGN.md §7 Status Pattern ──────────────────────────────────
  // Four-quadrant CVD-safe layout: Error=magenta(330°),
  // Warning=gold(85°), Info=blue(260°), Success=teal(170°).
  // Foreground = primary signal, Background = tint on Stage(#1A1F24),
  // Border = mid-opacity solid.
  //
  // Bg derivation: self=15% alpha blend of fg on Stage,
  // active = 50% blend, hover = 25% blend.
  // ──────────────────────────────────────────────────────────────────
  error: {
    // [blend: #FF8DED at 15%/50%/25% on Stage(#1A1F24)]
    bg: { self: "#230C1A", active: "#3D1A30", hover: "#301224" },
    // [blend: #FF8DED at ~40% on Stage → visible but not overwhelming]
    border: "#7F1A73",
    // [exact: workbench → editorError.foreground]
    text: "#FF8DED",
  },
  success: {
    // [blend: #8AF9B4 at 15% on Stage]
    bg: "#0F221A",
    border: "#437A50",
    // [exact: workbench → gitDecoration.addedResourceForeground]
    text: "#8AF9B4",
  },
  warning: {
    // [blend: #F0CD7B at 15% on Stage]
    bg: "#281E0A",
    border: "#755A1A",
    // [exact: workbench → editorWarning.foreground]
    text: "#F0CD7B",
  },
  info: {
    // [blend: #C1D5FF at 15% on Stage]
    bg: "#0D1828",
    border: "#2A4878",
    // [exact: workbench → editorInfo.foreground]
    text: "#C1D5FF",
  },
  priority: {
    // [blend: #BFA0F0 at 15% on Stage — violet family]
    bg: "#1A0F2A",
    border: "#482A78",
    text: "#BFA0F0",
  },
};

const mikuDarkOther: Other = {
  // ===================================================================
  // DESIGN.md §7: Four background tiers + Three text tiers
  // Void (Jz 0.023) < Stage (0.031) < House (0.039) < Float (0.046)
  // Primary text = blouse white (#FCF8F0 → rendered #DEE8F2)
  // Secondary = silver vest → rendered #BDD7D9
  // Tertiary = silver dim → rendered #89A0A1
  // ===================================================================

  // [exact: core.ts → character.hair.base]
  logo: "#39C5BB",
  // DESIGN.md §7: Stage tier — skirt base, editor canvas
  // [exact: workbench → editor.background]
  body: "#1A1F24",
  footer: themeVars.color.nav.bg,
  // [exact: workbench → secondary light border; ≈ secondary.dark.num1]
  timeline: "#2C3339",
  box: {
    // DESIGN.md §7: Between Void and Stage — structural header
    // [blend: Stage + reduced Jz, reduced Cz]
    header: "#171C22",
    body: {
      // [exact: workbench → editor.background]
      self: "#1A1F24",
      // [approx: Stage + slight Jz boost, for alternating row highlight]
      highlight: "#20252B",
    },
  },
  text: {
    // DESIGN.md §7: Primary text — blouse white tuned anti-halation
    // core.ts: special.foreground = '#DEE8F2'
    // [exact: workbench → editor.foreground]
    self: "#DEE8F2",
    light: {
      // DESIGN.md §7: Secondary text — silver vest
      // [exact: workbench → statusBar.foreground]
      self: "#BDD7D9",
      // DESIGN.md §7: Tertiary text — line numbers
      // [exact: workbench → editorLineNumber.foreground]
      num1: "#89A0A1",
      // [approx: deeper tertiary step, derived from num1 −10%]
      num2: "#6E8A8C",
      // [approx: deepest visible text, derived from num1 −24%]
      num3: "#565E6B",
    },
    // DESIGN.md §7: Dark text — blouse white for high contrast emphasis
    // [exact: core.ts → character.top.blouse]
    dark: "#FCF8F0",
  },
  input: {
    text: themeVars.color.text.dark,
    // DESIGN.md §7: Glass material — matches container tier (House for editor inputs)
    // [exact: workbench → input.background = House tier]
    background: "#23282D",
    // [approx: secondary.dark.num3, for toggle/switch knobs]
    toggleBackground: "#3D464D",
    border: themeVars.color.secondary.dark.num1,
  },
  light: {
    // DESIGN.md §7: Alternating row highlight — blouse white at 3%, border at 15%
    // [blend: #FCF8F0 at 3% on Stage]
    self: "#FCF8F008",
    // [blend: #DEE8F2 at 15% on Stage]
    border: "#DEE8F228",
  },
  hover: {
    // DESIGN.md §7: Four Voices — Engagement (teal tint ~10% alpha on body)
    // [blend: #39C5BB at 10% on House]
    self: "#39C5BB19",
    // [approx: House tier #23282D — subtle hover on body(#1A1F24), visible vs dark nav(#15191D)]
    opaque: "#23282D",
  },
  // DESIGN.md §7: Four Voices — Selection (frost tint)
  // [exact: workbench → editor.selectionBackground]
  // core.ts: special.frost = '#81D4FA'
  // [blend: #81D4FA at 14% on Stage]
  active: "#81D4FA24",
  // DESIGN.md §7: Float tier — overlays, hover widgets, notifications
  // [exact: workbench → editorWidget.background, menu.background]
  menu: "#2A3035",
  // [approx: between Stage and House, for card surfaces above the body background]
  card: "#1C2128",
  markup: {
    // DESIGN.md §7: Markdown table alternating row
    // [blend: primary teal at very low opacity]
    tableRow: "#39C5BB0F",
    code: {
      // [blend: primary teal at low opacity]
      block: "#39C5BB12",
      inline: "#39C5BB28",
    },
  },
  // DESIGN.md §7: Glass material — rest state, matches container
  // [exact: workbench → input.background]
  button: "#23282D",
  // DESIGN.md §7: Void tier — empty groups, shadow source (reduced Cz ×0.4)
  // [blend: skirt hue 249° at Jz 0.023]
  codeBg: "#0F1117",
  // DESIGN.md §7: Shadows — void-hue black at low opacity
  // [approx: void-hue #0F1117 at 34% and 100%]
  shadow: { self: "#0F111758", opaque: "#0F1117" },
  // [approx: House tier, for hidden scrollbar area vs body]
  secondaryBg: "#1C2128",
  // [exact: workbench → timeline color, now = secondary.self]
  expandButton: "#2C3339",
  // DESIGN.md §7: Placeholder text — tertiary + slight desaturation
  // [exact: workbench → input.placeholderForeground]
  placeholderText: "#82A2A3",
  editor: {
    // DESIGN.md §7: Selection voice — frost tint on editor
    // [computed: secondary alpha at 40% for subtle line highlight]
    lineHighlight: themeVars.color.secondary.alpha.num40,
    // [computed: primary alpha at 50% for selection]
    selection: themeVars.color.primary.alpha.num50,
  },
  // Gitea: project kanban column sits on body, should recede slightly.
  // [approx: between Void and Stage, same tier as nav]
  projectColumnBg: "#15191D",
  // DESIGN.md §7: Identity voice — cursor
  // core.ts: character.headphones.cushion #E05096 + 0.055Jz
  // [exact: workbench → editorCursor.foreground]
  caret: "#FF8CD9",
  reaction: {
    // DESIGN.md §7: Reaction buttons — subtle engagement tint
    // [blend: primary teal at 7%]
    bg: "#39C5BB12",
    hoverBg: themeVars.color.primary.light.num5,
    activeBg: themeVars.color.primary.light.num6,
  },
  tooltip: {
    // [exact: workbench → text primary foreground]
    text: "#DEE8F2",
    // [blend: void at 94% opacity → near-opaque dark tooltip]
    bg: "#0F1117F0",
  },
  nav: {
    // Gitea convention: nav recedes darker than body (all dark themes do nav < body).
    // VS Code has sidebar lighter than editor, but Gitea layout inverts this —
    // the nav bar hugs the edge and should visually retreat.
    // Void tier (§7): Stage − 0.008Jz, reduced Cz ×0.4
    // [approx: skirt #1A1F24 darkened to Void direction]
    bg: "#15191D",
    hoverBg: themeVars.color.secondary.dark.num1,
    text: themeVars.color.text.self,
  },
  // Gitea convention: secondary nav matches primary nav for consistent chrome
  // [exact: same as nav.bg]
  secondaryNavBg: "#15191D",
  label: {
    text: themeVars.color.text.self,
    // DESIGN.md §7: Labels — silver-grey tint at 29%/62%/100%
    // Base grey #6E8A8C (tertiary text)
    bg: "#6E8A8C4B",
    hoverBg: "#6E8A8CA0",
    activeBg: "#6E8A8CFF",
  },
  // DESIGN.md §7: Bracket and accent signals
  // core.ts: character.hair.highlight #84CCC8 → lightened for Lc≥70
  // [exact: workbench → sideBarTitle.foreground, editorLineNumber.activeForeground]
  accent: "#95DFDB",
  smallAccent: themeVars.color.primary.light.num5,
  highlight: {
    // DESIGN.md §7: Find match — gold warning overlay
    // [exact: workbench → editorWarning.foreground]
    fg: "#F0CD7B",
    // [exact: workbench → editor.findMatchBackground ≈ #F0CD7B25]
    bg: "#F0CD7B25",
  },
  // DESIGN.md §7: Modal backdrop — void at 75% opacity
  // [blend: void #0F1117 at 75%]
  overlayBackdrop: "#0F1117C0",
  danger: themeVars.color.red.self,
  // Gitea-specific: transparency checkerboard grid
  transparency: { grid: { light: "#2A2A2A", dark: "#1A1A1A" } },
  // DESIGN.md §7: Workflow edges — accent secondary color
  // [exact: workbench → accentSecondary]
  workflowEdgeHover: "#95DFDB",
};

export const mikuDarkColor: GiteaColor = {
  isDarkTheme: true,
  primary: mikuDarkPrimary,
  secondary: mikuDarkSecondary,
  named: mikuDarkNamed,
  message: mikuDarkMessage,
  ansi: mikuDarkAnsi,
  console: mikuDarkConsole,
  diff: mikuDarkDiff,
  other: mikuDarkOther,
};

// ===================================================================
// DARK MIKU SYNTAX — 12 tones, soprano/mp ensemble
//
// DESIGN.md §6 The Score:
//   All primary tokens share soprano register (Jz 0.185) + mp dynamic (Cz 0.060).
//   Hue alone carries semantic meaning. Within a hue group, ±1 dynamic step
//   distinguishes tokens (number p < constant mp, regex mf > string mp).
//
// DESIGN.md §6 Departures:
//   Comments: alto+0.008/pp (whisper — her voice between the lines)
//   Punctuation: mezzo/p (structure — connective tissue)
//   Error: alto/f (signal — tritone at fortissimo)
//
// All hex values: [exact: workbench → tokenColors, matched by semantic scope name]
// Comments reference the original JzCzhz coordinates from design.ts.
// ===================================================================

export const mikuDarkSyntax: Syntax = {
  // === Tonic F# Teal (180°) — Unison: her voice ===
  // design.ts: soprano/mp → Jz 0.185, Cz 0.060, hz 180
  // [exact: workbench → tokenColor "Control Keywords", scope keyword.control]
  keyword: "#66F3D3",
  // [exact: same as keyword — tonic family]
  control: "#66F3D3",
  // === Orange (60°) — Minor 6th, function names ===
  // design.ts: soprano+0.004/mf → Jz 0.189, Cz 0.075, hz 60
  // [exact: workbench → tokenColor "Library/Support Functions", scope support.function]
  name: "#FFC492",
  // === Blue (270°) — Minor 3rd, type names ===
  // design.ts: soprano+0.008/mp → Jz 0.193, Cz 0.060, hz 270
  // [exact: workbench → tokenColor "Types / Primitives", scope storage.type]
  type: "#C9D0FF",
  // === Azure (240°) — Major 2nd, numbers/booleans ===
  // design.ts: soprano+0.004/p → Jz 0.189, Cz 0.045, hz 240
  // (p dynamic = one step quieter than constant at mp)
  // [exact: workbench → tokenColor "Numbers", scope constant.numeric]
  number: "#A8DEFF",
  bool: "#A8DEFF",
  // === Magenta (330°) — Perfect 4th, operators ===
  // design.ts: soprano+0.014/mp → Jz 0.199, Cz 0.060, hz 330
  // [exact: workbench → tokenColor "Operators", scope keyword.operator]
  operator: "#FFB7FF",
  // === Lime (120°) — Minor 7th, regex ===
  // design.ts: soprano/mf → Jz 0.185, Cz 0.075, hz 120
  // (mf = one step louder than string at mp)
  // [exact: workbench → tokenColor "Regex", scope string.regexp]
  regexp: "#B7E888",
  // === Lime (120°) — Minor 7th, strings ===
  // design.ts: soprano/mp → Jz 0.185, Cz 0.060, hz 120
  // [exact: workbench → tokenColor "Strings", scope string.quoted]
  string: "#BCE498",
  // === Departure: whisper — tonic at alto+0.008/pp ===
  // design.ts: alto+0.008/pp → Jz 0.163, Cz 0.030, hz 180
  // [exact: workbench → tokenColor "Comments", scope comment]
  comment: "#8DC6B6",
  // === Departure: signal — rose at alto/f ===
  // design.ts: alto/f → tritone at alto register, loud dynamic
  // [exact: workbench → tokenColor "Invalid", scope invalid]
  invalid: "#FF97CD",
  link: themeVars.color.primary.self,
  // === Orange (60°) — Minor 6th, tags ===
  // design.ts: soprano+0.004/p → one step quieter than function
  // [exact: workbench → tokenColor "HTML/JSX Tags", scope entity.name.tag]
  tag: "#FAC8AA",
  // === Red (20°) — Perfect 5th, attributes ===
  // design.ts: soprano+0.018/mp → Jz compensation for red gamut
  // [exact: workbench → tokenColor "Attribute Names", scope entity.other.attribute-name]
  attribute: "#FFBECD",
  // [exact: same hue as attribute — parameter family]
  property: "#FFBECD",
  // === Cyan (210°) — Minor 2nd, variables ===
  // design.ts: soprano/mf → Jz 0.185, Cz 0.075, hz 210
  // (mf for distinction: cyan sits between teal(180) and azure(240) at 30° gaps)
  // [exact: workbench → tokenColor "Variables", scope variable.other]
  variable: "#27F1FC",
  // [exact: same hue as string]
  stringSpecial: "#BCE498",
  // === Red (20°) — escape sequences ===
  // design.ts: escape = interpolated values, red 20° family
  // [exact: workbench → tokenColor "Escape Sequences", scope constant.character.escape]
  escape: "#FFBECD",
  // === Violet (300°) — Major 3rd, decorators/macros ===
  // design.ts: soprano+0.012/mp → Jz 0.197, Cz 0.060, hz 300
  // [exact: workbench → tokenColor "Decorators / Attributes", scope meta.decorator]
  entity: "#F5C1FF",
  // === Preprocessor keyword — tonic teal ===
  // [exact: workbench → tokenColor "Preprocessor", scope keyword.control]
  preproc: "#66F3D3",
  // === Preprocessor file — azure (import/include, type-like) ===
  // [exact: workbench → tokenColor "Numbers" (shared azure)]
  preprocFile: "#A8DEFF",
  // [exact: same as entity — violet family]
  decorator: "#F5C1FF",
  // === Blue (270°) — namespace ≈ type ===
  // [exact: workbench → tokenColor "Namespaces", scope entity.name.namespace]
  namespace: "#C9D0FF",
  // [exact: same as decorator — violet family]
  namePseudo: "#F5C1FF",
  // [exact: same violet family for special comment annotations]
  commentSpecial: "#F5C1FF",
  // [exact: workbench → editor.foreground]
  text: "#DEE8F2",
  // [exact: workbench → statusBar.foreground]
  textAlt: "#BDD7D9",
  // === Departure: structure — tonic at mezzo/p ===
  // design.ts: mezzo/p → Jz 0.170, Cz 0.045, hz 180
  // (one register step below ensemble, one dynamic step below ensemble)
  // [exact: workbench → tokenColor "Punctuation", scope punctuation]
  punctuation: "#7AD7C0",
  // [exact: workbench → editorWhitespace.foreground]
  whitespace: "#89A0A1",
  // [exact: core.ts → character.top.blouse — emphasized on diff backgrounds]
  diffFg: "#FCF8F0",
  // [blend: warm rose on Stage — #FF97CD at ~30%]
  deletedBg: "#603040",
  // [blend: negi green on Stage — #8AF9B4 at ~30%]
  insertedBg: "#3A603A",
  // === Markdown emphasis — orange ===
  // DESIGN.md §8: heading = orange 60°/mf+bold
  // [exact: workbench → tokenColor "Markdown Bold", markup.bold]
  emph: "#FFC492",
  // [exact: workbench → tokenColor "User Functions" (stronger orange)]
  strong: "#FFC39B",
  // [exact: workbench → tokenColor "Markdown Headings", markup.heading]
  heading: "#FFC492",
  // [exact: workbench → tokenColor "Markdown List", markup.list]
  subheading: "#BCE498",
  // [exact: workbench → tertiary text]
  output: "#89A0A1",
  // [exact: workbench → tokenColor "User Functions" (orange)]
  prompt: "#FFC39B",
  // [exact: same as invalid — rose family]
  traceback: "#FF97CD",
  // DESIGN.md §7: bracket match — tonic teal at 28% alpha
  // [exact: workbench → editorBracketMatch.background ≈ #39C5BB25]
  matchingBracketBg: "#39C5BB48",
  // DESIGN.md §7: unmatched bracket — error rose at 28% alpha
  // [approx: #FF8DED at 28%]
  nonmatchingBracketBg: "#FF8DED48",
};

export const mikuDarkTheme = defineTheme({
  colorType: "gitea",
  themeColor: mikuDarkColor,
  syntaxColor: mikuDarkSyntax,
});

// ===================================================================
// LIGHT MIKU — Snow Miku 2026, Shiawase Patisserie
//
// DESIGN-LIGHT.md §4 The Score:
//   Tonic at G=210° cyan. Dual-tier ensemble:
//   Cool hues (120°–240°) at sopranino (Jz 0.079)
//   Warm hues (0°–90°, 270°–330°) at soprano (Jz 0.100)
//   All at mp (Cz 0.120, gamut-max clipped automatically)
//
// DESIGN-LIGHT.md §3 Principles:
//   Warm content, cool chrome — cream canvas (editor) + blue shopfront (sidebar)
//   Temperature contrast: cyan tonic pops on cream canvas (~125° hue gap)
//   Chocolate ink foreground (~40° Hz) on warm cream (~85° Hz)
// ===================================================================

const mikuLightPrimary: Primary = {
  // DESIGN-LIGHT.md §2: Snow Miku hair mid-tone #55A8E0, tonic accent at ~210°
  // Rendered in light workbench as #4E9CA1 — the tonic accent used for
  // scrollbar slider, progress bar, badges, accent borders.
  // [exact: workbench-light → scrollbarSlider.background (#4E9CA140)]
  self: "#4E9CA1",
  // DESIGN-LIGHT.md §2: cream white for button text
  // [exact: workbench-light → button.foreground]
  contrast: "#FFF5E0",
  dark: {
    // DESIGN-LIGHT.md §5: light theme dark variants = deeper into cool blue.
    // num1 = sidebar title foreground, num2 = sidebar link active
    // [exact: workbench-light → sideBarTitle.foreground]
    num1: "#00717F",
    // [exact: workbench-light → editorLink.activeForeground]
    num2: "#005C6F",
    // [computed: scaleColorLight(#4E9CA1, -54%→-132%)]
    num3: "#00475A",
    num4: "#003245",
    num5: "#001E30",
    num6: "#000A1A",
    num7: "#000005",
  },
  light: {
    // Lighter tints for accent backgrounds, badges, muted accent
    // num2 = extension button secondary background
    // [exact: workbench-light → extensionButton.background]
    num1: "#78C0F0",
    num2: "#9CD4F4",
    // [computed: scaleColorLight(#4E9CA1, 36%→84%)]
    num3: "#BDE5F8",
    num4: "#D5F0FB",
    num5: "#EAF8FD",
    num6: "#F5FCFE",
    num7: "#FAFDFF",
  },
  alpha: {
    // [computed: #4E9CA1 + hex alpha]
    num10: "#4E9CA119",
    num20: "#4E9CA133",
    num30: "#4E9CA14B",
    num40: "#4E9CA166",
    num50: "#4E9CA180",
    num60: "#4E9CA199",
    num70: "#4E9CA1B3",
    num80: "#4E9CA1CC",
    num90: "#4E9CA1E1",
  },
  hover: themeVars.color.primary.dark.num1,
  active: themeVars.color.primary.dark.num2,
};

const mikuLightSecondary: Secondary = {
  // DESIGN-LIGHT.md §5: House tier — cool shopfront walls
  // [exact: workbench-light → sideBar.background]
  self: "#D5EAF4",
  dark: {
    // Darker steps from House toward deeper cool blue.
    // num2 = input border
    // [exact: workbench-light → input.border]
    num1: "#C0D8E4",
    num2: "#A4B2B9",
    // [computed: scaleColorLight(#D5EAF4, -18%→-90%)]
    num3: "#8A9AA2",
    num4: "#6F848E",
    num5: "#576C76",
    num6: "#40555E",
    num7: "#2A3D46",
    num8: "#1A2A30",
    num9: "#0D1A20",
    num10: "#050D11",
    num11: "#000308",
    num12: "#000000",
    num13: "#000000",
  },
  light: {
    // Lighter steps from House toward white
    // [computed: scaleColorLight(#D5EAF4, 18%→72%)]
    num1: "#DDEFF8",
    num2: "#E5F4FB",
    num3: "#EEF8FD",
    num4: "#F6FCFE",
  },
  alpha: {
    // [computed: #D5EAF4 + hex alpha]
    num10: "#D5EAF419",
    num20: "#D5EAF433",
    num30: "#D5EAF44B",
    num40: "#D5EAF466",
    num50: "#D5EAF480",
    num60: "#D5EAF499",
    num70: "#D5EAF4B3",
    num80: "#D5EAF4CC",
    num90: "#D5EAF4E1",
  },
  button: themeVars.color.secondary.dark.num4,
  hover: themeVars.color.secondary.dark.num5,
  active: themeVars.color.secondary.dark.num6,
};

const mikuLightConsole: Console = {
  fg: {
    // DESIGN-LIGHT.md §6: chocolate ink, Hz~40°
    // [exact: workbench-light → editor.foreground]
    self: "#753826",
    // DESIGN-LIGHT.md §6: muted secondary foreground
    // [exact: workbench-light → editorLineNumber.foreground]
    subtle: "#7B7170",
  },
  // DESIGN-LIGHT.md §5: Void tier — warm ivory
  // [approx: warm white, slightly lighter than Stage]
  bg: "#FCF8F0",
  // DESIGN-LIGHT.md §5: chrome border — secondary chrome
  // [approx: between House and Float for border]
  border: "#D0D8E0",
  // [approx: border, used for Actions active step]
  activeBg: "#D0D8E0",
  // [approx: very light grey — hover in light context]
  hoverBg: "#F1F3F5",
  menu: {
    // [approx: warm white]
    bg: "#F8F9FB",
    // [approx: chrome border]
    border: "#D0D8E0",
  },
  // DESIGN-LIGHT.md §6: link inherits primary ink
  // [exact: workbench-light → editor.foreground]
  link: "#753826",
};

const mikuLightNamed: Named = {
  // ===================================================================
  // DESIGN-LIGHT.md §7 Status & Git — vivid chroma for visibility
  // on cream canvas. Warm hues need darker Jz, cool hues brighter.
  // light/dark variants: ±10-20 scaleColorLight steps.
  // ===================================================================

  // === Strawberry Red (30°) — error ===
  // DESIGN-LIGHT.md §7: error Hz~30°, vivid for alarm on cream
  // [exact: workbench-light → editorError.foreground]
  red: {
    self: "#BF0028",
    light: "#D83048",
    dark: { num1: "#A00020", num2: "#8A0018" },
    badge: { self: "#BF0028", bg: "#BF00281A", hover: { bg: "#BF00284D" } },
  },

  // === Baked Peach Orange (60°) — warning ===
  // DESIGN-LIGHT.md §7: warning gingerbread Hz~70°
  // [exact: workbench-light → editorWarning.foreground]
  orange: {
    self: "#B04C00",
    light: "#C86810",
    dark: { num1: "#904000", num2: "#783400" },
    badge: { self: "#B04C00", bg: "#B04C001A", hover: { bg: "#B04C004D" } },
  },

  // === Gingerbread Gold (70°) — git modified ===
  // DESIGN-LIGHT.md §7: git modified Hz~70°
  // [exact: workbench-light → gitDecoration.modifiedResourceForeground]
  yellow: {
    self: "#9B4900",
    light: "#B86010",
    dark: { num1: "#804000", num2: "#683400" },
    badge: { self: "#9B4900", bg: "#9B49001A", hover: { bg: "#9B49004D" } },
  },

  // === Olive — between lime and green ===
  // [approx: warm olive, midpoint of green family]
  olive: {
    self: "#5A8010",
    light: "#78A020",
    dark: { num1: "#487008", num2: "#386000" },
  },

  // === Mint Green (180°) — success / git added ===
  // DESIGN-LIGHT.md §7: success Hz~180°, vivid mint
  // [exact: workbench-light → gitDecoration.addedResourceForeground]
  green: {
    self: "#007954",
    light: "#209868",
    dark: { num1: "#006040", num2: "#005030" },
    badge: { self: "#007954", bg: "#0079541A", hover: { bg: "#0079544D" } },
  },

  // === Canonical Teal (180°) — interface/accent ===
  // DESIGN-LIGHT.md §7: success text in testing/debug contexts
  // [exact: workbench-light → testing.iconPassed]
  teal: {
    self: "#008A63",
    light: "#20A878",
    dark: { num1: "#007050", num2: "#005A40" },
  },

  // === Blue (270°) — variable / info ===
  // DESIGN-LIGHT.md §7: info status / terminal blue
  // [exact: workbench-light → terminal.ansiBlue]
  blue: {
    self: "#005B9F",
    light: "#2878B8",
    dark: { num1: "#004888", num2: "#003870" },
  },

  // === Violet (300°) — twilight (type family) ===
  // DESIGN-LIGHT.md §7: git deleted, terminal magenta area
  // [exact: workbench-light → gitDecoration.deletedResourceForeground]
  violet: {
    self: "#7900A4",
    light: "#9828C0",
    dark: { num1: "#600088", num2: "#4A0068" },
  },

  // === Purple — deeper violet for UI elements ===
  // [approx: #7900A4 shifted toward purple for Gitea badge variety]
  purple: {
    self: "#A050C0",
    light: "#B878D8",
    dark: { num1: "#8840A8", num2: "#703090" },
  },

  // === Necktie Pink (27°) — identity / cursor ===
  // DESIGN-LIGHT.md §2: pastel-pink necktie
  // DESIGN-LIGHT.md §7: button.background, focus ring
  // [exact: workbench-light → button.background]
  pink: {
    self: "#E88493",
    light: "#EEA0AC",
    dark: {
      // [exact: workbench-light → button.hoverBackground]
      num1: "#D67081",
      num2: "#C05868",
    },
  },

  // === Brown — chocolate ink deep ===
  // [approx: ink color #753826 darkened, for brown labels]
  brown: {
    self: "#6C3A28",
    light: "#8C5840",
    dark: { num1: "#502818", num2: "#3A1808" },
  },
  // === Black — deepest chocolate ===
  // DESIGN-LIGHT.md §6: darkest text emphasis
  // [exact: workbench-light → text.dark emphasis ≈ #211311]
  black: {
    self: "#211311",
    light: "#4A3028",
    dark: { num1: "#3A2820", num2: "#100808" },
  },
  // === Grey — chrome tertiary ===
  // DESIGN-LIGHT.md §6: muted foreground
  // [exact: workbench-light → editorLineNumber.foreground]
  grey: {
    self: "#7B7170",
    light: "#968F8E",
  },
  // === Gold — function emphasis (light theme) ===
  // DESIGN-LIGHT.md §4: gold 90° soprano/mp, function color
  // [exact: workbench-light → tokenColor "Markdown Headings" ≈ #764A00, use gold variant]
  gold: "#886000",
  // === White — cream white ===
  // [exact: workbench-light → button.foreground]
  white: "#FFF5E0",
};

const mikuLightAnsi: Ansi = {
  // ── DESIGN-LIGHT.md §8 Terminal ──────────────────────────────────
  // Warm cream canvas (Stage). "Bright" variants use darker Jz
  // for contrast on light background (inverse of dark theme logic).
  //
  // All values: [exact: workbench-light → terminal.ansi*]
  // ──────────────────────────────────────────────────────────────────
  black: "#AB9894", // warm brown — near background
  red: "#BD0067", // vivid rose — alarm
  green: "#467E00", // vivid pistachio — success
  yellow: "#8F2B00", // vivid baked — caution
  blue: "#005B9F", // vivid azure — info
  magenta: "#7B00A7", // vivid raspberry — special
  cyan: "#007D8D", // vivid tonic — ★ her voice ★
  white: "#6E6B50", // warm cream — muted foreground
  bright: {
    // DESIGN-LIGHT.md §8: "Bright" = darker Jz on light bg
    black: "#746461", // deeper brown
    red: "#9F0051", // deeper rose
    green: "#407700", // deeper green
    yellow: "#8A2500", // deeper amber
    blue: "#004F91", // deeper blue
    magenta: "#6F0099", // deeper magenta
    cyan: "#006E7E", // deeper tonic
    white: "#483430", // deep chocolate ink
  },
};

const mikuLightDiff: Diff = {
  // ── DESIGN-LIGHT.md §7 Overlays (Diff) ───────────────────────────
  // Inserted = mint-green (~180°, Hz), removed = pastel pink (~27°)
  // Opacity at light(8%) to medium(15%) to preserve cool-syntax contrast.
  // ──────────────────────────────────────────────────────────────────
  added: {
    // [exact: workbench-light → gitDecoration.addedResourceForeground]
    fg: "#007954",
    // [blend: mint at ~8% on cream]
    linenum: { bg: "#D1F8D9" },
    // [blend: mint at ~8% on cream]
    row: { bg: "#E6FFED", border: "#E6FFED" },
    // [blend: mint at ~12% on cream]
    word: { bg: "#ACF2BD" },
  },
  moved: {
    // [blend: warm yellow on cream, modest opacity]
    row: { bg: "#F1F8D1", border: "#D0E27F" },
  },
  removed: {
    // [exact: workbench-light → gitDecoration.deletedResourceForeground]
    fg: "#BF0028",
    // [blend: strawberry pink at ~8% on cream]
    linenum: { bg: "#FFCECB" },
    // [blend: strawberry pink at ~5% on cream]
    row: { bg: "#FFEEF0", border: "#F1C0C0" },
    // [blend: strawberry pink at ~10% on cream]
    word: { bg: "#FDB8C0" },
  },
  // [approx: very light grey for inactive diff regions]
  inactive: "#F0F2F4",
};

const mikuLightMessage: Message = {
  // ── DESIGN-LIGHT.md §7 Status ────────────────────────────────────
  // Light backgrounds: bg = light tint, border = mid-alpha,
  // text = vivid foreground (Jz 0.085-0.095, Cz 0.100-0.124).
  // ──────────────────────────────────────────────────────────────────
  error: {
    // [blend: #BF0028 at ~5-8% on white → light pink tint]
    bg: { self: "#FFEBE9", active: "#FFDCD7", hover: "#FFE3DF" },
    // [approx: #BF0028 at 40% alpha]
    border: "#BF002866",
    // [exact: workbench-light → editorError.foreground]
    text: "#BF0028",
  },
  success: {
    // [blend: #007954 at ~5% on white → light mint tint]
    bg: "#DAFBE1",
    border: "#00795466",
    // [exact: workbench-light → gitDecoration.addedResourceForeground]
    text: "#007954",
  },
  warning: {
    // [blend: #B04C00 at ~4% on white → light gingerbread tint]
    bg: "#FFF8C5",
    border: "#B04C0066",
    // [exact: workbench-light → editorWarning.foreground]
    text: "#B04C00",
  },
  info: {
    // [blend: #008595 at ~5% on white → light blue tint]
    bg: "#DDF4FF",
    border: "#00859566",
    // [exact: workbench-light → editorInfo.foreground]
    text: "#008595",
  },
  priority: {
    // [blend: #7900A4 at ~4% on white → light violet tint]
    bg: "#F3E7FF",
    border: "#7900A466",
    // [exact: workbench-light → gitDecoration.deletedResourceForeground]
    text: "#7900A4",
  },
};

const mikuLightOther: Other = {
  // ===================================================================
  // DESIGN-LIGHT.md §5 Backgrounds — Warm content, cool chrome.
  // Void(warm ivory) > Stage(warm cream) > House(cool blue) > Float(deep cool)
  // DESIGN-LIGHT.md §6 Foreground — Chocolate ink on cream.
  // ===================================================================

  // [exact: primary accent = tonic cyan]
  logo: "#4E9CA1",
  // DESIGN-LIGHT.md §5: Stage tier — warm cream canvas
  // [exact: workbench-light → editor.background]
  body: "#F5F0E2",
  footer: themeVars.color.nav.bg,
  // DESIGN-LIGHT.md §5: chrome — secondary structural
  // [approx: between House and Float]
  timeline: "#D0D8E0",
  box: {
    // DESIGN-LIGHT.md §5: cool tint header (slightly blue)
    // [approx: House + slight white lift]
    header: "#E8F0F8",
    body: {
      // DESIGN-LIGHT.md §5: Void tier — warm ivory
      // [approx: warm ivory, slightly lighter than Stage]
      self: "#FEFAF0",
      // [approx: blue tint highlight for alternating rows]
      highlight: "#EBF5FB",
    },
  },
  text: {
    // DESIGN-LIGHT.md §6: chocolate ink, Hz~40°
    // [exact: workbench-light → editor.foreground]
    self: "#753826",
    light: {
      // DESIGN-LIGHT.md §6: Secondary/muted — cool chrome Hz~235°
      // [exact: workbench-light → search.resultsInfoForeground ≈ description text]
      self: "#646A6D",
      // DESIGN-LIGHT.md §6: line numbers
      // [exact: workbench-light → editorLineNumber.foreground]
      num1: "#7B7170",
      // [approx: subtitle level, num1 −8%]
      num2: "#968F8E",
      // [exact: workbench-light → input.placeholderForeground]
      num3: "#978F8D",
    },
    // DESIGN-LIGHT.md §6: deepest chocolate for emphasis
    // [approx: ink #753826 darkened ~60%]
    dark: "#211311",
  },
  input: {
    text: themeVars.color.text.dark,
    // DESIGN-LIGHT.md §5: Glass material — matches Stage (editor inputs)
    // [exact: workbench-light → input.background]
    background: "#F5F0E2",
    // [approx: secondary chrome, for toggle/switch knobs]
    toggleBackground: "#D0D8E0",
    border: themeVars.color.secondary.dark.num2,
  },
  light: {
    // DESIGN-LIGHT.md §5: alternating row — faint cream tint, border = chrome
    // [approx: warm cream at very low opacity on white, border = chrome dark]
    self: "#00001706",
    border: "#0000171D",
  },
  hover: {
    // DESIGN-LIGHT.md §7: Four Voices — Engagement (tonic cyan tint, very subtle on light)
    // [blend: tonic #4E9CA1 at 3% opacity (design adjusts for light amplification)]
    self: "#4E9CA108",
    // [approx: very light grey — hover surface on cream]
    opaque: "#F1F3F5",
  },
  // DESIGN-LIGHT.md §7: Ice on cream — selection frost tint
  // [approx: selection tint at 8% on cream]
  active: "#3B97C014",
  // DESIGN-LIGHT.md §5: Float tier — deep cool blue, menu/overlay
  // [exact: workbench-light → editorWidget.background, menu.background]
  menu: "#C7E1EE",
  // DESIGN-LIGHT.md §5: warm white card surface
  // [approx: Void + slight lift]
  card: "#FCF8F0",
  markup: {
    // [blend: blue tint at very low opacity on cream]
    tableRow: "#0030600A",
    code: {
      // [blend: blue tint at low opacity]
      block: "#00306010",
      inline: "#00306012",
    },
  },
  // [approx: very light cream for button rest state]
  button: "#FDF8EC",
  // [approx: slightly warmer cream for code blocks]
  codeBg: "#F8F4E8",
  // [approx: warm shadow at 15% opacity, solid chrome shadow]
  shadow: { self: "#FEFAF026", opaque: "#C7D0D8" },
  // [approx: secondary bg — light grey-blue]
  secondaryBg: "#F2F5F8",
  // [exact: workbench-light → diff expand button blue]
  expandButton: "#CFE8FA",
  // DESIGN-LIGHT.md §6: placeholder text — muted chocolate
  // [exact: workbench-light → input.placeholderForeground]
  placeholderText: "#978F8D",
  editor: {
    // DESIGN-LIGHT.md §7: ice on cream — frost tint selection
    // [computed: secondary alpha at 30% (subtle frost)]
    lineHighlight: themeVars.color.secondary.alpha.num30,
    // [computed: primary alpha at 30% (tonic accent line)]
    selection: themeVars.color.primary.alpha.num30,
  },
  // [approx: lightest secondary step for project columns]
  projectColumnBg: themeVars.color.secondary.light.num4,
  // DESIGN-LIGHT.md §7: caret follows primary ink on light background
  // [exact: workbench-light → editor.foreground]
  caret: "#753826",
  reaction: {
    // DESIGN-LIGHT.md §7: reaction button — very subtle tonic tint
    // [blend: #4E9CA1 at 4% on cream]
    bg: "#4E9CA10A",
    hoverBg: themeVars.color.primary.light.num5,
    activeBg: themeVars.color.primary.light.num6,
  },
  tooltip: {
    // [approx: near-white text on near-black for contrast]
    text: "#FBFDFF",
    // [approx: deep dark at 94% opacity]
    bg: "#000017F0",
  },
  nav: {
    // DESIGN-LIGHT.md §5: House tier — cool shopfront
    // [exact: workbench-light → sideBar.background]
    bg: "#D5EAF4",
    hoverBg: themeVars.color.secondary.dark.num1,
    text: themeVars.color.text.self,
  },
  // [approx: slightly lighter House for secondary nav]
  secondaryNavBg: "#DDEFF8",
  label: {
    text: themeVars.color.text.self,
    // DESIGN-LIGHT.md §7: Labels — chrome-grey tint at 29%/62%/100%
    bg: "#949DA64B",
    hoverBg: "#949DA6A0",
    activeBg: "#949DA6FF",
  },
  // [exact: primary dark 1 — tonic accent for emphasis]
  accent: themeVars.color.primary.dark.num1,
  smallAccent: themeVars.color.primary.light.num6,
  highlight: {
    // DESIGN-LIGHT.md §7: Find match — gingerbread overlay
    // Uses dedicated overlay color (lighter than status warning) to preserve
    // cool-token contrast on the tinted background.
    // [exact: workbench-light → editorWarning.foreground ≈ find match border]
    fg: "#B04C00",
    // [exact: workbench-light → editor.findMatchBackground ≈ #B04C0015 (light tint)]
    bg: "#B04C0015",
  },
  // [approx: deep black at 75% for modal backdrop]
  overlayBackdrop: "#080808C0",
  danger: themeVars.color.red.self,
  // Gitea-specific: transparency checkerboard grid
  transparency: { grid: { light: "#FAFAFA", dark: "#E2E2E2" } },
  // [approx: secondary border tone for workflow edges]
  workflowEdgeHover: "#A4B2B9",
};

export const mikuLightColor: GiteaColor = {
  isDarkTheme: false,
  primary: mikuLightPrimary,
  secondary: mikuLightSecondary,
  named: mikuLightNamed,
  message: mikuLightMessage,
  ansi: mikuLightAnsi,
  console: mikuLightConsole,
  diff: mikuLightDiff,
  other: mikuLightOther,
};

// ===================================================================
// LIGHT MIKU SYNTAX — dual-tier ensemble
//
// DESIGN-LIGHT.md §4 The Score:
//   Cool hues (120°–240°) at sopranino (Jz 0.079)
//   Warm hues (0°–90°, 270°–330°) at soprano (Jz 0.100)
//   All at mp (Cz 0.120), gamut-max clipped.
//
// DESIGN-LIGHT.md §4 Departures:
//   Comments: tonic alto−0.010/pp (whisper)
//   Punctuation: tonic mezzo/p (structure)
//   Operator: rose 0°/soprano (strawberry glaze — inverted from dark)
//
// Each syntax token has its patisserie element name and exact
// JzCzhz register from light-syntax.ts.
// All hex: [exact: workbench-light → tokenColors, matched by scope]
// ===================================================================

export const mikuLightSyntax: Syntax = {
  // === Tonic cyan (210°) — keyword family — sopranino/mp ===
  // light-syntax.ts: sopranino/mp → Jz 0.079, Cz 0.120, hz 210
  // Patisserie: "her hair — the first stroke on every line"
  // [exact: workbench-light → tokenColor "Control Keywords", scope keyword.control]
  keyword: "#007284",
  // [exact: same as keyword]
  control: "#007284",
  // === Gold (90°) — butter croissant, function names — soprano/mp ===
  // light-syntax.ts: soprano/mp → Jz 0.100, Cz 0.120, hz 90
  // [exact: workbench-light → tokenColor "Library/Support Functions", markup.heading]
  name: "#764A00",
  // === Violet (300°) — twilight, type names — soprano/mp ===
  // light-syntax.ts: soprano/mp → Jz 0.100, Cz 0.120, hz 300
  // Patisserie: "twilight through the shop window"
  // [exact: workbench-light → tokenColor "Types / Primitives", scope storage.type]
  type: "#8B12BA",
  // === Azure (240°) — shopfront blue, constants/numbers — sopranino/mp ===
  // light-syntax.ts: sopranino/mp → Jz 0.079, Cz 0.120, hz 240
  // Patisserie: "shopfront blue, deep truth"
  // [exact: workbench-light → tokenColor "Constants", scope constant]
  number: "#0058A3",
  bool: "#0058A3",
  // === Rose (0°) — strawberry glaze, operator — soprano/mp ===
  // light-syntax.ts: soprano/mp → Jz 0.100, Cz 0.120, hz 0
  // (Inverted from dark: operator moves from magenta to rose in light theme)
  // [exact: workbench-light → tokenColor "Operators", scope keyword.operator]
  operator: "#B80067",
  // === Green (150°) — mint leaf, regex — sopranino/mp ===
  // light-syntax.ts: sopranino/mp → Jz 0.079, Cz 0.120, hz 150
  // [exact: workbench-light → tokenColor "Regex", scope string.regexp]
  regexp: "#00791B",
  // === Green (150°) — mint leaf, strings — sopranino/mp ===
  // light-syntax.ts: sopranino/mp → Jz 0.079, Cz 0.120, hz 150
  // [exact: workbench-light → tokenColor "Strings", scope string.quoted]
  string: "#00791B",
  // === Departure: whisper — tonic alto−0.010, pp ===
  // light-syntax.ts: alto−0.010/pp+0.005 → Jz 0.120, Cz 0.035, hz 210
  // DESIGN-LIGHT.md §4: "her voice between the lines"
  // [exact: workbench-light → tokenColor "Comments", scope comment]
  comment: "#578F92",
  // === Departure: error signal — vivid strawberry ===
  // [exact: workbench-light → tokenColor "Invalid", scope invalid]
  invalid: "#C70025",
  link: themeVars.color.primary.self,
  // === Gold (90°) — element invocation — soprano/mp ===
  // [exact: workbench-light → tokenColor "HTML/JSX Tags", scope entity.name.tag]
  tag: "#896700",
  // === Orange (60°) — baked peach, attributes/properties — soprano/mp ===
  // light-syntax.ts: soprano/mp → Jz 0.100, Cz 0.120, hz 60
  // Patisserie: "baked peach, warmth entering from outside"
  // [exact: workbench-light → tokenColor "Attribute Names", scope entity.other.attribute]
  attribute: "#AA4200",
  property: "#AA4200",
  // === Blue (270°) — display case glass, variables — soprano/mp ===
  // light-syntax.ts: soprano/mp → Jz 0.100, Cz 0.120, hz 270
  // DESIGN-LIGHT.md §4: "display case glass, data in motion"
  // [exact: workbench-light → tokenColor "Variables", scope variable.other]
  variable: "#5849CB",
  // [exact: same hue as string]
  stringSpecial: "#00791B",
  // === Orange (60°) — escape sequences ===
  // [exact: workbench-light → tokenColor "Escape Sequences"]
  escape: "#AA4200",
  // === Magenta (330°) — raspberry macaron, decorators/macros — mezzo/mp ===
  // light-syntax.ts: soprano/mp then entity at mezzo → Jz 0.100-0.110
  // DESIGN-LIGHT.md §4: "raspberry macaron, code changing code"
  // [exact: workbench-light → tokenColor "Decorators / Attributes", scope meta.decorator]
  entity: "#A90095",
  // === Green (150°) — preprocessor keyword (mint leaf) ===
  // [exact: workbench-light → green token family]
  preproc: "#00791B",
  // [exact: same as number = azure family]
  preprocFile: "#0058A3",
  // [exact: same as entity — magenta family]
  decorator: "#A90095",
  // === Violet (300°) — namespace (same as type) ===
  // [exact: workbench-light → tokenColor "Namespaces"]
  namespace: "#8B12BA",
  // [exact: same violet/magenta family]
  namePseudo: "#A90095",
  // [exact: same magenta family for special comment annotations]
  commentSpecial: "#A90095",
  // DESIGN-LIGHT.md §6: chocolate ink foreground
  // [exact: workbench-light → editor.foreground]
  text: "#753826",
  // [exact: workbench-light → secondary description text]
  textAlt: "#646A6D",
  // === Departure: structure — tonic mezzo/p ===
  // DESIGN-LIGHT.md §4: punctuation = mezzo, one register below ensemble
  // [exact: workbench-light → tokenColor "Punctuation", scope punctuation]
  punctuation: "#00878E",
  // [exact: workbench-light → editorWhitespace.foreground]
  whitespace: "#919496",
  // [exact: deepest chocolate on diff backgrounds]
  diffFg: "#211311",
  // [blend: rose pink at ~15% on cream]
  deletedBg: "#FFDDDD",
  // [blend: mint green at ~15% on cream]
  insertedBg: "#DDFFDD",
  // === Markdown emphasis ===
  // [exact: workbench-light → tokenColor "Markdown Bold"]
  emph: "#886000",
  // [exact: workbench-light → tokenColor "Markdown Headings" (stronger)]
  strong: "#764A00",
  // DESIGN-LIGHT.md §8: heading = gold 90°, sopranino/f
  // [exact: workbench-light → tokenColor "Markdown Headings"]
  heading: "#704E00",
  // DESIGN-LIGHT.md §8: subheading = green 150°, sopranino/mp
  // [exact: workbench-light → tokenColor "Markdown List" ≈ green family]
  subheading: "#00791B",
  // [exact: same as comment]
  output: "#578F92",
  // [exact: same as function name]
  prompt: "#764A00",
  // [exact: same as invalid]
  traceback: "#C70025",
  // DESIGN-LIGHT.md §7: bracket match — tonic cyan at 22% alpha on cream
  // [approx: #4E9CA1 at 22%]
  matchingBracketBg: "#4E9CA138",
  // DESIGN-LIGHT.md §7: unmatched bracket — error rose at 22% alpha on cream
  // [approx: #BF0028 at 22%]
  nonmatchingBracketBg: "#BF002838",
};

export const mikuLightTheme = defineTheme({
  colorType: "gitea",
  themeColor: mikuLightColor,
  syntaxColor: mikuLightSyntax,
});
