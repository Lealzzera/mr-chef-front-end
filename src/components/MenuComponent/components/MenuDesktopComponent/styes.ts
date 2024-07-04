import styled from "styled-components";

export const MenuDesktop = styled.nav`
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
`;
