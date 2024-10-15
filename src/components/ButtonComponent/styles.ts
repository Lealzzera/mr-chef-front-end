import styled from "styled-components";

export const ButtonContainer = styled.div`
  width: 100%;
  & .MuiButtonBase-root {
    color: var(--white);
    background-color: var(--green-400);
    font-weight: bold;
    margin-top: 0.625rem;
    height: 3.5rem;
  }

  & .MuiButtonBase-root.Mui-disabled {
    opacity: 0.6;
  }

  & .MuiCircularProgress-circle {
    color: var(--green-200);
  }
`;
