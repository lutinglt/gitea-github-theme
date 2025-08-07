import { css } from "src/types/vars";

// [TODO] 先重构为 Gitea 变量, 或者本主题的变量, 再建立 GitHub 的颜色映射

export const chroma = css`
  .chroma {
    background-color: var(--color-code-bg);

    .lntd {
      vertical-align: top;
      border: 0;
      margin: 0;
      padding: 0;
    }

    .lntable {
      border-spacing: 0;
      border: 0;
      width: auto;
      margin: 0;
      padding: 0;
      display: block;
      overflow: auto;
    }

    .hl {
      width: 100%;
      display: block;
    }

    .lnt,
    .ln {
      margin-right: 0.4em;
      padding: 0 0.4em;
    }

    .gs {
      font-weight: var(--font-weight-semibold);
    }

    .gl {
      text-decoration: underline;
    }

    .bp {
      color: #fabd2f;
    }

    .c,
    .c1,
    .ch,
    .cm {
      color: #777e94;
    }

    .cp {
      color: #8ec07c;
    }

    .cpf {
      color: #79c0ff;
    }

    .cs {
      color: #9075cd;
    }

    .dl {
      color: #79c0ff;
    }

    .gd {
      color: #fff;
      background-color: #5f3737;
    }

    .ge {
      color: #ddee30;
    }

    .gh {
      color: #ffaa10;
    }

    .gi {
      color: #fff;
      background-color: #3a523a;
    }

    .go {
      color: #777e94;
    }

    .gp {
      color: #ebdbb2;
    }

    .gr {
      color: #f43;
    }

    .gs {
      color: #ebdbb2;
    }

    .gt {
      color: #7ee787;
    }

    .gu {
      color: #a5d6ff;
    }

    .il {
      color: #79c0ff;
    }

    .k {
      color: #ff7b72;
    }

    .kc {
      color: #79c0ff;
    }

    .kd {
      color: #ff7b72;
    }

    .kn {
      color: #ff7b72;
    }

    .kp {
      color: #5f8700;
    }

    .kr {
      color: #7ee787;
    }

    .kt {
      color: #ff7b72;
    }

    .m,
    .mb,
    .mf,
    .mh,
    .mi,
    .mo {
      color: #79c0ff;
    }

    .n {
      color: #c9d1d9;
    }

    .na {
      color: #d2a8ff;
    }

    .nb {
      color: #a5d6ff;
    }

    .nc {
      color: #e6edf3;
    }

    .nd {
      color: #79c0ff;
    }

    .ne {
      color: #7ee787;
    }

    .nf,
    .ni {
      color: #d2a8ff;
    }

    .nl {
      color: #7ee787;
    }

    .nn {
      color: #e6edf3;
    }

    .no {
      color: #79c0ff;
    }

    .nt {
      color: #7ee787;
    }

    .nv {
      color: #ebdbb2;
    }

    .nx {
      color: #b6bac5;
    }

    .o {
      color: #7ee787;
    }

    .ow {
      color: #5f8700;
    }

    .p {
      color: #d2d4db;
    }

    .s,
    .s1,
    .s2 {
      color: #a5d6ff;
    }

    .sa {
      color: #79c0ff;
    }

    .sb {
      color: #a5d6ff;
    }

    .sc {
      color: #79c0ff;
    }

    .sd {
      color: #777e94;
    }

    .se {
      color: #7ee787;
    }

    .sh {
      color: #79c0ff;
    }

    .si {
      color: #ffaa10;
    }

    .sr {
      color: #9075cd;
    }

    .ss {
      color: #7ee787;
    }

    .sx {
      color: #ffaa10;
    }

    .vc {
      color: #7ee787;
    }

    .vg,
    .vi {
      color: #ffaa10;
    }

    .w {
      color: #7f8699;
    }
  }
`;
