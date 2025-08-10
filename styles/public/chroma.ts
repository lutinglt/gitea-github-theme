import { css, themeVars } from "src/types/vars";

// https://github.com/go-gitea/gitea/blob/main/web_src/css/chroma/base.css
export const chromaBase = css`
  .chroma {
    // LineTableTD
    .lntd {
      vertical-align: top;
      padding: 0;
      margin: 0;
      border: 0;
    }
    // LineTable
    .lntable {
      border-spacing: 0;
      padding: 0;
      margin: 0;
      border: 0;
      width: auto;
      overflow: auto;
      display: block;
    }
    // LineHighlight
    .hl {
      display: block;
      width: 100%;
    }
    // LineNumbersTable
    .lnt,
    // LineNumbers
    .ln {
      margin-right: 0.4em;
      padding: 0 0.4em;
    }
    // GenericStrong
    .gs {
      font-weight: var(--font-weight-semibold);
    }
    // GenericUnderline
    .gl {
      text-decoration: underline;
    }
  }
`;

// https://github.com/alecthomas/chroma/blob/6428fb4e65f3c1493491571c8a6a8f1add1da822/types.go#L208
export const chromaCode = css`
  .chroma {
    // TextWhiteSpace
    .w {
      color: ${themeVars.chroma.textWhiteSpace};
    }
    // Error
    .err {
      color: ${themeVars.chroma.err};
    }
    // Keyword
    .k {
      color: ${themeVars.chroma.keyword.self};
    }
    .kc {
      color: ${themeVars.chroma.keyword.constant};
    }
    .kd {
      color: ${themeVars.chroma.keyword.declaration};
    }
    .kn {
      color: ${themeVars.chroma.keyword.namespace};
    }
    .kp {
      color: ${themeVars.chroma.keyword.pseudo};
    }
    .kr {
      color: ${themeVars.chroma.keyword.reserved};
    }
    .kt {
      color: ${themeVars.chroma.keyword.type};
    }
    // Name
    .n {
      color: ${themeVars.chroma.name.self};
    }
    .na {
      color: ${themeVars.chroma.name.attribute};
    }
    .nb {
      color: ${themeVars.chroma.name.builtin};
    }
    .bp {
      color: ${themeVars.chroma.name.builtinPseudo};
    }
    .nc {
      color: ${themeVars.chroma.name.class};
    }
    .no {
      color: ${themeVars.chroma.name.constant};
    }
    .nd {
      color: ${themeVars.chroma.name.decorator};
    }
    .ni {
      color: ${themeVars.chroma.name.entity};
    }
    .ne {
      color: ${themeVars.chroma.name.exception};
    }
    .nf {
      color: ${themeVars.chroma.name.function};
    }
    .fm {
      color: ${themeVars.chroma.name.functionMagic};
    }
    .py {
      color: ${themeVars.chroma.name.property};
    }
    .nl {
      color: ${themeVars.chroma.name.label};
    }
    .nn {
      color: ${themeVars.chroma.name.namespace};
    }
    .nx {
      color: ${themeVars.chroma.name.other};
    }
    .nt {
      color: ${themeVars.chroma.name.tag};
    }
    .nv {
      color: ${themeVars.chroma.name.variable};
    }
    .vc {
      color: ${themeVars.chroma.name.variableClass};
    }
    .vg {
      color: ${themeVars.chroma.name.variableGlobal};
    }
    .vi {
      color: ${themeVars.chroma.name.variableInstance};
    }
    .vm {
      color: ${themeVars.chroma.name.variableMagic};
    }
    // Literal
    .l {
      color: ${themeVars.chroma.literal.self};
    }
    .ld {
      color: ${themeVars.chroma.literal.date};
    }
    // String
    .s {
      color: ${themeVars.chroma.string.self};
    }
    .sa {
      color: ${themeVars.chroma.string.affix};
    }
    .sb {
      color: ${themeVars.chroma.string.backtick};
    }
    .sc {
      color: ${themeVars.chroma.string.char};
    }
    .dl {
      color: ${themeVars.chroma.string.delimiter};
    }
    .sd {
      color: ${themeVars.chroma.string.doc};
    }
    .s2 {
      color: ${themeVars.chroma.string.double};
    }
    .se {
      color: ${themeVars.chroma.string.escape};
    }
    .sh {
      color: ${themeVars.chroma.string.heredoc};
    }
    .si {
      color: ${themeVars.chroma.string.interpol};
    }
    .sx {
      color: ${themeVars.chroma.string.other};
    }
    .sr {
      color: ${themeVars.chroma.string.regex};
    }
    .s1 {
      color: ${themeVars.chroma.string.single};
    }
    .ss {
      color: ${themeVars.chroma.string.symbol};
    }
    // Number
    .m {
      color: ${themeVars.chroma.number.self};
    }
    .mb {
      color: ${themeVars.chroma.number.bin};
    }
    .mf {
      color: ${themeVars.chroma.number.float};
    }
    .mh {
      color: ${themeVars.chroma.number.hex};
    }
    .mi {
      color: ${themeVars.chroma.number.integer};
    }
    .il {
      color: ${themeVars.chroma.number.integerLong};
    }
    .mo {
      color: ${themeVars.chroma.number.oct};
    }
    // Operator
    .o {
      color: ${themeVars.chroma.operator.self};
    }
    .ow {
      color: ${themeVars.chroma.operator.word};
    }
    // Punctuation
    .p {
      color: ${themeVars.chroma.punctuation};
    }
    // Comment
    .c {
      color: ${themeVars.chroma.comment.self};
    }
    .ch {
      color: ${themeVars.chroma.comment.hashbang};
    }
    .cm {
      color: ${themeVars.chroma.comment.multiline};
    }
    .cp {
      color: ${themeVars.chroma.comment.preproc};
    }
    .cpf {
      color: ${themeVars.chroma.comment.preprocFile};
    }
    .c1 {
      color: ${themeVars.chroma.comment.single};
    }
    .cs {
      color: ${themeVars.chroma.comment.special};
    }
    // Generic
    .g {
      color: ${themeVars.chroma.generic.self};
    }
    .gd {
      color: ${themeVars.chroma.generic.deleted};
    }
    .ge {
      color: ${themeVars.chroma.generic.emph};
    }
    .gr {
      color: ${themeVars.chroma.generic.error};
    }
    .gh {
      color: ${themeVars.chroma.generic.heading};
    }
    .gi {
      color: ${themeVars.chroma.generic.inserted};
    }
    .go {
      color: ${themeVars.chroma.generic.output};
    }
    .gp {
      color: ${themeVars.chroma.generic.prompt};
    }
    .gs {
      color: ${themeVars.chroma.generic.strong};
    }
    .gu {
      color: ${themeVars.chroma.generic.subheading};
    }
    .gt {
      color: ${themeVars.chroma.generic.traceback};
    }
    .gu {
      color: ${themeVars.chroma.generic.underline};
    }
  }
`;
