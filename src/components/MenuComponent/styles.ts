import styled from "styled-components";

export const MenuContainer = styled.nav`
  background: rgba(0, 0, 0, 0.6);
  width: 100vw;
  display: none;
  padding-top: 4.375rem;
  position: fixed;
  z-index: 99;

  & .MuiList-root {
    background: var(--main-green);
    width: 14.625rem;
    padding-top: 0rem;
    padding-bottom: 0rem;
    height: calc(100vh - 4.375rem);
    overflow-y: scroll;
  }

  & .MuiList-root::-webkit-scrollbar {
    display: none;
  }

  & .MuiTypography-root {
    font-family: var(--main-font-sans);
    font-size: 1.125rem;
    color: var(--dark-green);
  }

  & .MuiButtonBase-root {
    display: flex;
    gap: 10px;
  }

  & .MuiButtonBase-root.active {
    background-color: var(--dark-green);

    & .MuiTypography-root {
      color: var(--main-white);
    }

    svg.stroked-svg {
      stroke: var(--main-white);
    }

    svg.filled-svg {
      fill: var(--main-white);
    }
  }

  &.openMenu {
    display: flex;
    animation: showMenu 0.5s;
  }

  /* Animations to open and close menu MOBILE */
  @keyframes showMenu {
    0% {
      transform: translateX(-100%);
      opacity: 1;
    }
    100% {
      transform: translateX(0%);
      opacity: 1;
    }
  }

  @keyframes closeMenu {
    0% {
      transform: translateX(0%);
      opacity: 1;
    }
    100% {
      transform: translateX(-100%);
      opacity: 0;
    }
  }

  //MENU DESKTOP STYLE
  @media (min-width: 1200px) {
    display: initial;
    z-index: auto;
    background: transparent;
    width: auto;

    & .MuiList-root {
      box-shadow: rgba(0, 1, 1, 0.6) 1px 1px 2px;
      background: var(--main-green);
    }

    & .MuiButtonBase-root:hover {
      svg.stroked-svg {
        stroke: var(--main-white);
      }

      svg.filled-svg {
        fill: var(--main-white);
      }
      background-color: var(--medium-green);
      .MuiTypography-root {
        color: var(--main-white);
      }
    }
  }
`;
