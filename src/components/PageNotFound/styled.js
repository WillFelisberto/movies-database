import styled, { css } from 'styled-components';

export const Container404 = styled.div`
	${({ img }) => {
		return css`
			background: url(${img});
		`;
	}}
	background-repeat: no-repeat;
	background-size: cover;
	background-color: #cccccc;
	background-position: center;
	filter: opacity(0.4);
	min-height: calc(94vh - 68px);
`;

export const ContainerErro = styled.div`
	position: absolute;
	z-index: 2;
	height: 100%;
	width: 100%;
	text-align: center;
	margin: 0 auto;
	top: 40%;

	@media (max-width: 768px) {
		width: 100%;
		height: 0%;
	}

	.teste {
		display: flex;
		align-items: center;
		justify-content: center;
	}
`;
