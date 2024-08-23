import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4.375rem;
  position: fixed;
  z-index: 999;
  width: 100%;
  background-color: var(--white-2);
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px;
  padding: 0rem 3.125rem;
`;

export const HeaderContent = styled.div``;

export const MenuMobileButton = styled.button`
  background: none;
  cursor: pointer;
  padding: 0.75rem;
  border: none;
  transform: rotate(0deg);
  transition: transform 0.7s ease;
  &.active {
    transform: rotate(180deg);
    transition: transform 0.7s ease;
  }

  @media (min-width: 1200px) {
    display: none;
  }
`;
