import styled from "styled-components";

export const TextFieldContainer = styled.div`
	width: 100%;
	& label.Mui-focused {
		color: var(--main-green);
	}
	& .MuiOutlinedInput-root {
		&:hover fieldset {
			border-color: var(--light-green);
		}
		&.Mui-focused fieldset {
			border-color: var(--main-green);
		}
	}

	& .MuiInputBase-input {
		color: var(--black-text-color);
	}
`;
