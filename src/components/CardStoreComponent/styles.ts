import styled from "styled-components";

export const CardContainer = styled.div`
  width: 300px;
  background-color: var(--grey-100);
  border-radius: 0.5rem;
  box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.1);
`;

export const ContainerInfo = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  padding: 0 1rem;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  gap: 0.5rem;
  & p {
    color: var(--grey-800);
    font-weight: 700;
    font-size: 1rem;
  }

  & p span {
    font-weight: 400;
  }
`;

export const ContainerButton = styled.div`
  padding: 1rem 1rem;
  & .MuiButtonBase-root.MuiButton-root {
    text-transform: capitalize;
    height: 2.5rem;
  }
`;
