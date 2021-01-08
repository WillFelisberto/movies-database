import styled from 'styled-components';

export const ContainerHeader = styled.header`
	color: white;
	text-align: center;
	background-image: linear-gradient(to right, #354c58, #18232c);
	a {
		padding: 15px 30px;
	}

	div {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		padding: 0px 25px;

		@media (max-width: 768px) {
			flex-direction: column;
		}
	}
`;

export const SearchBar = styled.div`
	width: 200px;
	vertical-align: middle;
	white-space: nowrap;
	position: relative;
	display: flex;
	flex-direction: row;
	align-self: center;

	form {
		@media (max-width: 768px) {
			padding-bottom: 15px;
		}
		display: flex;
	}

	input#search {
		width: 200px;
		height: 25px;
		background: #2b303b;
		border: none;
		font-size: 10pt;
		float: left;
		color: #63717f;
		padding-left: 45px;
		-webkit-border-radius: 5px;
		-moz-border-radius: 5px;
		border-radius: 5px;

		-webkit-transition: background 0.55s ease;
		-moz-transition: background 0.55s ease;
		-ms-transition: background 0.55s ease;
		-o-transition: background 0.55s ease;
		transition: background 0.55s ease;
	}

	input#search::-webkit-input-placeholder {
		color: #65737e;
	}

	input#search:-moz-placeholder {
		/* Firefox 18- */
		color: #65737e;
	}
	input#search::-moz-placeholder {
		/* Firefox 19+ */
		color: #65737e;
	}
	input#search:-ms-input-placeholder {
		color: #65737e;
	}

	input#search:hover,
	input#search:focus,
	input#search:active {
		outline: none;
		background: #ffffff;
	}

	.icon {
		position: absolute;
		margin-left: 17px;
		margin-top: 2px;
		z-index: 1;
		color: #4f5b66;
	}
`;
