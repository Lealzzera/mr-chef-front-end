import styled from "styled-components";

export const TableWrap = styled.div`
  & .MuiTableContainer-root {
    height: calc(100vh - 12.5rem);
    background-color: transparent;

    & .MuiTable-root {
    }

    & .MuiTableHead-root {
      & .MuiTableCell-root {
        color: var(--blue-900);
        font-size: 1rem;
        font-weight: bold;
      }
    }

    & .MuiTableBody-root {
      overflow-y: scroll;

      & .MuiTableCell-root {
        cursor: pointer;
        font-family: var(--second-font);
        font-size: 1rem;
        color: var(--blue-900);
      }

      & .MuiTableCell-root .MuiButtonBase-root {
        height: 30px;
        font-weight: normal;
        font-family: Arial, Helvetica, sans-serif;
        background-color: var(--green-200);
        text-transform: capitalize;
      }
    }
  }
`;
