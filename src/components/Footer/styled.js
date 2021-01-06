import styled from 'styled-components';

export const ContainerFooter = styled.footer`
	padding: 10px 0px;
	text-align: center;
	background-color: #d9d9d9;
	font-size: 25px;
	position: fixed;
	width: 100%;
	left: 0;
	bottom: 0;
	right: 0;
	background-image: linear-gradient(to right, #354c58, #18232c);

	@media (max-width: 768px) {
		position: static;
	}
	a {
		padding: 0px 10px;
	}

	i {
		color: white;

		:hover {
			color: #adadad;
		}
	}
`;
