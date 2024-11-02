import styled from "styled-components";

export const MainContainer = styled.div``;

export const CreateAccountSection = styled.section`
  padding: 0 2rem;
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainTitle = styled.h1`
  font-size: 2rem;
  color: var(--green-300);
  text-align: center;
  @media (min-width: 1200px) {
    font-size: 2.5rem;
  }
`;

export const SubTitle = styled.h2`
  text-align: center;
  color: var(--grey-800);
  font-size: 1rem;
  font-weight: 400;
  margin-top: 0.25rem;
  @media (min-width: 1200px) {
    font-size: 1.5rem;
  }
`;

export const CreateAccountButtonContainer = styled.div`
  & .MuiButtonBase-root.MuiButton-root {
    margin-top: 2.5rem;
    text-transform: capitalize;
    background-color: var(--green-300);
    height: 2.813rem;
  }
`;

export const CardsInfoSection = styled.section`
  margin: 0 auto;
  margin-top: 2.5rem;
  padding: 0 2rem;
  max-width: 1000px;
`;

export const MainInfoCardContainer = styled.div`
  & .main-card p:nth-of-type(1) {
    @media (min-width: 800px) {
      font-size: 1.5rem;
    }
  }

  & .main-card p:nth-of-type(2) {
    @media (min-width: 800px) {
      font-size: 1rem;
    }
  }
`;

export const InfoCardsContainer = styled.div`
  margin-top: 4rem;
`;

export const InfoCardsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
