import { overlayAppearDown, overlayAppearUp } from "src/core/theme";
import { css } from "src/types/vars";

export const keyframe = css`
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
