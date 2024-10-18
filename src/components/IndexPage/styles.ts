import styled from "styled-components";

export const MainContainer = styled.div``;

export const HeaderPage = styled.header`
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  @media (min-width: 1200px) {
    padding: 30px 150px;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: end;
  gap: 0.5rem;
`;

export const LogoText = styled.p`
  font-size: 1rem;
  color: var(--green-300);
`;

export const LoginButtonContainer = styled.div`
  & .MuiButtonBase-root.MuiButton-root {
    text-transform: capitalize;
    font-weight: 400;
    height: 2rem;
  }
`;

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
    height: 45px;
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

export const FooterPage = styled.footer`
  margin: 0 auto;
  margin-top: 100px;
  display: flex;
  margin-bottom: 2rem;
  max-width: 1000px;
  align-items: center;
  gap: 0.2rem;
  justify-content: center;
`;

export const CopyRightText = styled.p`
  color: var(--green-300);
  font-size: 0.75rem;
`;
