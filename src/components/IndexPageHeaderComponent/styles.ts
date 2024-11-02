import styled from "styled-components";

export const HeaderPage = styled.header`
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  @media (min-width: 1200px) {
    padding: 1.875rem 9.375rem;
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
