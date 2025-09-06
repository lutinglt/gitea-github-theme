import { css } from "src/types/vars";

export const milestones = css`
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
  .page-content.repository.milestones {
  }
`;
