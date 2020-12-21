import styled from 'styled-components';

export const ContainerCard = styled.div`
	display: inline-block;
	flex-grow: 1;
	margin: 20px;
	background-color: #d9d9d9;
	box-shadow: 0px 0px 3px 0px;
	text-align: center;
	border-radius: 10px;

	@media only screen and (min-width: 768px) {
		max-width: 50%;
	}

	@media only screen and (min-width: 1200px) {
		max-width: 15%;
	}

	img {
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
		width: 100%;
	}
`;
