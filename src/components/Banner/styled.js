import styled, { css } from 'styled-components';

export const Moviecard = styled.div`
	position: relative;
	display: flex;
	margin: 50px auto;
	overflow: hidden;
	transition: all 0.4s;
	border: 0px;
	width: 100% important;
	outline: none;

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

	.slick-track {
		height: 400px;
	}

	.info_section {
		padding: 20px;
		justify-content: center;
		display: flex;
		flex-direction: column;
		img {
			width: 100%;
			position: relative;
			border-top-left-radius: 10px;
			border-top-right-radius: 10px;
		}
		outline: none;
	}

	.movie_header {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		background: rgb(0, 0, 0); /* fallback color */
		background: rgba(0, 0, 0, 0.7);
		border-bottom-left-radius: 10px;
		border-bottom-right-radius: 10px;
		span {
			color: white;
			font: 300 18px/35px Helvetica, Sans-Serif;
			letter-spacing: -1px;
			padding: 10px;
		}
	}
`;
