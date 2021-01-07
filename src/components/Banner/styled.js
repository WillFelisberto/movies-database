import styled, { css } from 'styled-components';

export const Moviecard = styled.div`
	position: relative;
	display: flex;
	height: 400px;
	margin: 50px auto;
	overflow: hidden;
	transition: all 0.4s;
	border: 0px;
	width: 100% important;
	&:hover {
		transform: scale(1.02);
		transition: all 0.4s;
	}

	${({ img }) => {
		return css`
			background: url(${img}) no-repeat;

			@media (max-width: 768px) {
				background: url(${img}) right no-repeat;
			}
		`;
	}}
	background-repeat: no-repeat;
	background-position: center;
	background-size: contain;
`;
