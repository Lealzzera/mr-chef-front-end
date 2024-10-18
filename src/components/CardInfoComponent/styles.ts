import styled from "styled-components";

export const CardInfoContainer = styled.div`
  background-color: var(--grey-100);
  height: 200px;
  box-shadow: 2px 2px 5px -1px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  justify-content: center;
`;

export const CardInfoTitle = styled.p`
  color: var(--green-300);
  margin-top: 20px;
  font-weight: bold;
  font-size: 1rem;
  text-align: center;
`;

export const CardInfoSubTitle = styled.p`
  color: var(--grey-800);
  font-size: 0.875rem;
  margin-top: 0.25rem;
  text-align: center;
`;
