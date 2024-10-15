import styled from "styled-components";

export const MenuContainer = styled.nav`
  background: rgba(0, 0, 0, 0.6);
  width: 100vw;
  display: none;
  padding-top: 4.375rem;
  position: fixed;
  z-index: 99;

  & .MuiList-root {
    background: var(--green-400);
    width: 14.625rem;
    padding-top: 0rem;
    padding-bottom: 0rem;
    height: calc(100vh - 4.375rem);
    padding-bottom: 7rem;
    overflow-y: scroll;
  }

  & .MuiList-root::-webkit-scrollbar {
    display: none;
  }

  & .MuiList-root {
    scrollbar-width: none;
  }

  & .MuiTypography-root {
    font-family: var(--main-font-sans);
    font-size: 1.125rem;
    color: var(--green-900);
  }

  & .MuiButtonBase-root {
    display: flex;
    gap: 10px;
  }

  & .MuiButtonBase-root.active {
    background-color: var(--green-900);

    & .MuiTypography-root {
      color: var(--grey-400);
    }

    svg.stroked-svg {
      stroke: var(--grey-400);
    }

    svg.filled-svg {
      fill: var(--grey-400);
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
      background: var(--green-400);
      padding-bottom: 0;
    }

    & .MuiButtonBase-root:hover {
      svg.stroked-svg {
        stroke: var(--grey-400);
      }

      svg.filled-svg {
        fill: var(--grey-400);
      }
      background-color: var(--green-700);
      .MuiTypography-root {
        color: var(--grey-400);
      }
    }
  }
`;
