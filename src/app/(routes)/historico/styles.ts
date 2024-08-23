import styled from "styled-components";

export const HistoryContainer = styled.section`
  padding-top: 2.5rem;
  padding-left: 0.625rem;
  padding-right: 0.625rem;

  @media (min-width: 1200px) {
    padding-top: 3.125rem;
    padding-left: 3.125rem;
  }
`;

export const HistoryPageTitle = styled.h1`
  padding-left: 1.25rem;

  @media (min-width: 1200px) {
    padding-left: 0.625rem;
  }
`;

export const MobileCardContainer = styled.div`
  margin: 0.938rem 1.25rem 1.5rem 1.25rem;

  @media (min-width: 1200px) {
    display: none;
  }
`;

export const DesktopCardContainer = styled.div`
  display: none;

  @media (min-width: 1200px) {
    display: initial;
  }
`;

export const SkeletonContainer = styled.div`
  margin-top: 1rem;
`;
