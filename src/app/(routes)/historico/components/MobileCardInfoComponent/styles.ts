import styled from "styled-components";

export const MobileCardInfoContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 0.625rem;

	@media (max-width: 600px) {
		grid-template-columns: 1fr;
	}
`;
