import styled from "styled-components";

export const HomePageMainContainer = styled.section`
  background-color: var(--grey-400);
  min-height: 100vh;
  padding-bottom: 2rem;
`;

export const TitleContainer = styled.div`
  padding-bottom: 2rem;
  & h1 {
    font-size: 1rem;
  }

  & .MuiButtonBase-root.MuiButton-root {
    text-transform: capitalize;
    height: 2.5rem;
    border-radius: 0.5rem;
    letter-spacing: normal;
  }

  @media (min-width: 800px) {
    & h1 {
      font-size: 1.5rem;
    }
  }
`;

export const WrapperButtonTitle = styled.div`
  display: flex;
  padding-top: 50px;
  justify-content: space-around;
  align-items: center;
  max-width: 400px;
  margin: 0 auto;
  @media (min-width: 800px) {
    max-width: 900px;
  }
`;

export const HomePageContainerContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  @media (min-width: 800px) {
    display: grid;
    grid-template-columns: auto auto;
  }
`;
