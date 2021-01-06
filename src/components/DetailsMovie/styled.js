import styled from 'styled-components';

export const ContainerDetails = styled.div`
	display: flex;
	flex-flow: row;
	flex-wrap: wrap;
	margin: 50px 15%;
	/* @media (max-width: 768px) {
		padding: 0px 5%;
	}
	padding: 0px 15%; */
	@media (max-width: 768px) {
		flex-direction: row;
		margin: 50px 5%;
	}
`;

export const ContainerImg = styled.div`
	display: flex;
	flex-grow: 1;
	text-align: center;
	justify-content: space-around;
	img {
		max-width: 100%;
	}

	width: 30%;

	@media (max-width: 768px) {
		width: 100%;
	}
`;

// export const DataMovies = styled.div`
// 	display: flex;
// 	justify-content: center;
// 	padding: 25px;
// `;

export const ContainerInfos = styled.div`
	display: flex;
	flex-grow: 1;
	justify-content: space-around;
	text-align: center;
	width: 60%;
	background-color: black;
	flex-direction: column;
	h1 {
		padding-top: 25px;
		margin: 0px;
	}

	div {
		display: flex;
	}

	.subtitle {
		padding: 0px 15%;
		display: flex;
		justify-content: space-around;

		@media (max-width: 768px) {
			padding: 5%;
		}
	}

	@media (max-width: 768px) {
		width: 100%;
	}

	img {
		max-width: 80px;
	}

	.movieTitle {
		flex-direction: column;
		align-self: center;
	}

	.overview {
		padding: 10px 25px;
	}

	.trailer {
		display: flex;
		justify-content: space-evenly;
		padding-bottom: 25px;
	}
`;

export const Buttom = styled.button`
	transition-duration: 0.4s;
	border: 2px solid #e6b91e;
	color: #e6b91e;
	background-color: black;
	border-radius: 5px;
	padding: 0px 20px;
	cursor: pointer;

	:hover {
		background-color: #e6b91e;
		color: black;
	}
`;
