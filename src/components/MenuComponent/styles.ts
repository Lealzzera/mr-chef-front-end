import styled from "styled-components";

export const MenuMobileContainer = styled.nav`
	background: rgba(0, 0, 0, 0.6);
	position: absolute;
	width: 100%;
	margin-top: 4.375rem;
	display: none;
	& .MuiList-root {
		background: var(--main-green);
		width: 14.625rem;
		padding-top: 0rem;
		height: 100vh;
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

	& .MuiButtonBase-root:hover {
		background-color: var(--medium-green);
		.MuiTypography-root {
			color: var(--main-white);
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
`;

// MENU DESKTOP STYLE

export const MenuDesktop = styled.nav`
	padding-top: 4.375rem;
	& .MuiList-root {
		box-shadow: rgba(0, 1, 1, 0.6) 1px 1px 2px;
		background: var(--main-green);
		width: 14.625rem;
		padding-top: 0rem;
		height: calc(100vh - 4.375rem);
		overflow-y: scroll;
	}

	/* TODO: REMOVE THIS DISPLAY NONE AND CUSTOMIZE THIS WITH THE MOST SUBTLE STYLE */
	& .MuiList-root::-webkit-scrollbar {
		display: none;
	}

	& .MuiTypography-root {
		font-family: var(--main-font-sans);
		font-size: 1.125rem;
		color: var(--dark-green);
	}

	& .MuiButtonBase-root:hover {
		background-color: var(--medium-green);
		.MuiTypography-root {
			color: var(--main-white);
		}
	}
`;
