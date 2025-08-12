import { css } from "src/types/vars";

// 注册/登录界面
export const signIn = css`
  .page-content.user.signin {
    .ui.grid > .column {
      width: 384px;
      padding: 16px;
      > .ui.container {
        max-width: unset;
      }
    }
    .ui.top.attached.header {
      border: 0;
      font-size: 20px;
      font-weight: 600;
      background-color: unset !important;
      padding: 16px;
    }

    .ui.attached.segment {
      border: 0;
      padding: 16px 0 0 0;
      .field:not(.inline) {
        label {
          font-size: 14px;
          font-weight: 600;
        }
        input {
          background: unset;
          padding: 5px 12px;
          height: 40px;
          font-size: 16px;
        }
      }
      .button {
        height: 40px;
      }
    }
    .ui.top.attached.header.segment {
      font-size: 14px;
      font-weight: 400;
      gap: 16px;
      .signin-passkey {
        font-weight: 500;
      }
    }
  }
`;
