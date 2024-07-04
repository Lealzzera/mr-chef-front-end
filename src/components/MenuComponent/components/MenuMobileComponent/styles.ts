import styled from "styled-components";

export const MenuMobileContainer = styled.nav`
	background: rgba(0, 0, 0, 0.6);
	position: absolute;
	width: 100%;
	display: none;

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
