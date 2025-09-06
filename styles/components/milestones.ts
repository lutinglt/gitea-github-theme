import { css, themeVars } from "src/types/vars";

export const milestone = css`
  // 里程碑头部
  .milestone-header {
    gap: 16px;
    // 进度条
    progress {
      height: 5px;
      width: 300px;
      max-width: 80vw;
    }
  }
  // 里程碑 Issue 列表的进度条
  .milestone-progress-big {
    height: 8px;
  }
  // 里程碑 Issue 列表
  .page-content.repository.milestone-issue-list {
    > .ui.container {
      > .flex-text-block:first-child {
        margin-bottom: 16px;
        > h1 {
          font-size: 32px;
          font-weight: 600;
          line-height: 48px;
          word-break: keep-all;
        }
        + .tw-flex {
          flex-direction: row !important;
          align-items: center;
          gap: 8px !important;
          padding-top: 8px;
          padding-bottom: 10px;
          font-size: 14px;
          color: ${themeVars.color.text.light.num1};
          strong {
            color: ${themeVars.color.text.self};
          }
          > .flex-text-block {
            gap: 8px !important;
          }
        }
      }
      > .divider {
        border-top-color: #0000;
      }
    }
  }
`;

// 避免手机/平板下菜单错位
export const milestoneMobile = css`
  @media (max-width: 767.98px) {
    .page-content.repository.milestone-issue-list > .ui.container > .flex-text-block:first-child + .tw-flex {
      flex-direction: column !important;
    }
  }
`;
