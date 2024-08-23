import styled from "styled-components";

export const SkeletonContainer = styled.div`
  margin-bottom: 1.5rem;
  @media (min-width: 1200px) {
    margin: 0;
  }
  & .MuiSkeleton-root {
    height: 320px;
    border-radius: 0.25rem;

    @media (min-width: 1200px) {
      height: 4rem;
    }
  }
`;
