import styled from "styled-components";

export const FormContainer = styled.section`
  max-width: 330px;
  background-color: var(--grey-100);
  border-radius: 6px;
  border: 1px solid var(--grey-400);
  box-shadow: 0px 5px 10px -3px rgba(0, 0, 0, 0.1);
  height: 840px;
  margin: 30px auto;
  @media (min-width: 750px) {
    max-width: 600px;
  }
`;

export const TitleIconContainer = styled.div`
  & .chef-logo-icon {
    width: 60px;
    height: 60px;
  }
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 30px;
`;

export const TitleForm = styled.h1`
  color: var(--green-300);
  font-weight: bold;
  font-size: 1.5rem;
  margin-top: 1rem;
  text-align: center;
  @media (min-width: 750px) {
    font-size: 2.5rem;
  }
`;

export const SubtitleForm = styled.p`
  color: var(--grey-800);
  text-align: center;
  font-size: 1rem;
  padding: 0 1.75rem;
`;

export const SignUpForm = styled.form``;

export const SignUpFormWrappFields = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  gap: 1.25rem;
  flex-direction: column;
  justify-content: center;
  padding: 0 1.5rem;
  & .MuiTextField-root {
    background-color: var(--white);
  }

  @media (min-width: 750px) {
    padding: 0 4rem;
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 2rem;
  padding: 0 1.5rem;
  position: relative;
  @media (min-width: 750px) {
    padding: 0 4rem;
  }
`;

export const ErrorMessage = styled.p`
  color: #e10036;
  font-size: 0.75rem;
  position: absolute;
  top: -25px;
  padding: 0rem 1.5rem 0rem 0rem;
`;
