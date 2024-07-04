import styled from "styled-components";

export const MenuContainer = styled.div`
	padding-top: 4.375rem;

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
`;
