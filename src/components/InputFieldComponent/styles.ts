import styled from "styled-components";

export const TextFieldContainer = styled.div`
  width: 100%;
  & label.Mui-focused {
    color: var(--green-400);
  }
  & .MuiOutlinedInput-root {
    &:hover fieldset {
      border-color: var(--green-200);
    }
    &.Mui-focused fieldset {
      border-color: var(--green-400);
    }
  }

  & .MuiInputBase-input {
    color: var(--black-text-color);
  }
`;
