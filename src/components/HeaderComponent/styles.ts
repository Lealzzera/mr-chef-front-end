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
	border: none;
	transform: rotate(-180deg);
	transition: transform 0.5s ease;
	&.active {
		transform: rotate(180deg);
		transition: transform 0.5s ease;
	}
`;
