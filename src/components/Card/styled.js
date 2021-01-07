import styled from 'styled-components';

export const ContainerCard = styled.div`
	display: inline-block;
	flex-grow: 1;
	margin: 20px;
	text-align: center;
	border-radius: 10px;
	color: white;
	padding-bottom: 45px;
	margin-bottom: 80px;
	@media (min-width: 768px) {
		max-width: 50%;
	}

	@media (max-width: 768px) {
		width: 25%;
	}

	@media only screen and (min-width: 1200px) {
		max-width: 15%;
	}

	img {
		object-fit: cover;
		width: 100%;
		height: 100%;
		box-shadow: 0px 0px 20px 0px #000000de;
	}
`;

export const TituloFilme = styled.p`
	width: 90%;
	margin: 6px 0px;
	white-space: nowrap;
	overflow: hidden;
	text-align: start;
	text-overflow: ellipsis;
`;

export const ContainerGeneros = styled.div`
	display: flex;

	p {
		margin: 0px;
		font-size: 14px;
	}
`;

export const Nota = styled.div`
	position: absolute;
	div {
		display: flex;
		justify-content: center;
		width: 100%;
		background-color: #fb0404;
		padding: 6px 3px;
		font-weight: bold;
		border-bottom-right-radius: 5px;

		background-image: linear-gradient(#fd9102, #c97708);
	}
`;
