import styled from 'styled-components';

export const ContainerCard = styled.div`
	display: inline-block;
	flex-grow: 1;
	margin: 20px;

	@media only screen and (min-width: 768px) {
		max-width: 50%;
	}

	@media only screen and (min-width: 1200px) {
		max-width: 15%;
	}

	img {
		width: 100%;
	}
`;
