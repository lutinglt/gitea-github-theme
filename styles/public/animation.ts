import { overlayAppear, overlayAppearDown, overlayAppearUp } from "src/core/theme";
import { css } from "src/types/vars";

export const keyframe = css`
  // 出现动画
  @keyframes ${overlayAppear} {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  // 向下出现动画
  @keyframes ${overlayAppearDown} {
    0% {
      opacity: 0;
      transform: translateY(-8px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  // 向上出现动画
  @keyframes ${overlayAppearUp} {
    0% {
      opacity: 0;
      transform: translateY(8px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
