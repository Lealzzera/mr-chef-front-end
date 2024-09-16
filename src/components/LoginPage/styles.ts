import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  background-color: var(--green-400);
  @media (min-width: 1200px) {
    width: 100%;
    height: 100%;
  }
`;

export const LoginTitle = styled.h1`
  font-size: 2.25rem;
  color: var(--main-white);
`;

export const LoginDescription = styled.h2`
  font-weight: 400;
  font-size: 1.625rem;
`;

export const TextWrap = styled.div`
  @media (min-width: 1200px) {
    max-width: 30.625rem;
    margin-top: 6.25rem;
    margin-left: 6.25rem;
    margin-bottom: 1.25rem;
  }
`;

export const LeftSideContainer = styled.div`
  display: none;
  @media (min-width: 1200px) {
    display: block;
    background-color: var(--green-400);
    color: var(--white);
    min-height: 100vh;
    width: 60vw;
  }
`;

export const RightSideContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  width: 100%;
  @media (min-width: 1200px) {
    background-color: var(--main-white);
    width: 40vw;
    height: auto;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.25rem;
  width: 20.938rem;
`;

export const ContainerFormInfo = styled.div`
  background: #f0f0f0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 7.5rem;
  width: 100%;
  height: 100vh;
  @media (min-width: 600px) {
    width: 25rem;
    height: 37.5rem;
    padding-top: 0rem;
    justify-content: center;
    border-radius: 0.375rem;
    box-shadow: 0rem 0.063rem 0.063rem 0.063rem rgba(0, 0, 0, 0.1);
  }
  @media (min-width: 1200px) {
    height: 40.938rem;
    width: 29.375rem;
    justify-content: flex-start;
  }
`;

export const TitleFormLogin = styled.p`
  color: var(--green-400);
  font-weight: bold;
  font-size: 1.5rem;
  margin-bottom: 1.875rem;
  width: 20.938rem;
  @media (min-width: 1200px) {
    margin-top: 5rem;
  }
`;

export const ForgotPasswordLink = styled.p`
  font-size: 0.875rem;
  color: var(--blue-link-color);
  cursor: pointer;
`;

export const AccountInfo = styled.p`
  font-size: 1rem;
  color: var(--black-text-color);
  margin-top: 3.125rem;
`;

export const AccessHereLink = styled.span`
  font-size: 1rem;
  font-weight: 700;
  color: var(--green-400);
  text-decoration: underline;
  cursor: pointer;
`;

export const ContainerInfo = styled.div`
  width: 20.938rem;
  margin-top: 1.875rem;
`;

export const LoginButtonContainer = styled.div`
  margin-top: 0.5rem;
  position: relative;
`;

export const ErrorMessage = styled.p`
  color: #e10036;
  font-size: 0.75rem;
  position: absolute;
  top: -10px;
`;
