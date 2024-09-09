import styled from "styled-components";

export const CardContainer = styled.div`
  max-width: 25rem;
`;

export const CardContent = styled.div`
  padding-top: 0.938rem;
  padding-left: 0.938rem;
  padding-right: 0.938rem;
  display: flex;
  flex-direction: column;
  gap: 0.313rem;
  color: var(--black-text-color);
`;

export const CardOptionTitle = styled.p`
  font-family: var(--main-font-sans);
  font-weight: bold;
`;

export const CardOptionDescription = styled.span`
  font-family: var(--second-font);
  max-width: 9.375rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: unset;
`;

export const CardOption = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CardActions = styled.div`
  padding-left: 0.938rem;
  padding-right: 0.938rem;
  display: flex;
  justify-content: space-between;
  height: 3.75rem;
  gap: 3.125rem;
  align-items: center;

  & .MuiButtonBase-root {
    height: 1.875rem;
    font-weight: normal;
    font-family: Arial, Helvetica, sans-serif;
    text-transform: capitalize;
  }

  & .MuiButtonBase-root.details-button {
    background-color: transparent;
    font-weight: bold;
    color: var(--green-700);
    border: 0.063rem solid var(--green-700);
  }
  & .print-button.MuiButtonBase-root {
    background-color: var(--green-200);
  }
`;
