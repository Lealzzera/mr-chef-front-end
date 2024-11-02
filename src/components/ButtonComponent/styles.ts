import styled from "styled-components";

export const ButtonContainer = styled.div`
  width: 100%;
  & .MuiButtonBase-root {
    color: var(--white);
    background-color: var(--green-400);
    font-weight: bold;
    margin-top: 0.625rem;
    height: 3.5rem;
    cursor: "pointer";
  }

  & .MuiButtonBase-root.Mui-disabled {
    opacity: 0.6;
  }

  & .MuiCircularProgress-circle {
    color: var(--green-200);
  }

  & .MuiButton-outlined {
    background-color: transparent;
    color: var(--green-300);
    border: 2px solid var(--green-300);
  }
`;
