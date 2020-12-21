import styled from 'styled-components';

export const ContainerDetails = styled.div`
	display: flex;
	flex-flow: row;
	flex-wrap: wrap;
	margin: 50px;
`;
export const ContainerImg = styled.div`
	display: flex;
	flex-grow: 1;
	text-align: center;
	border-radius: 10px;
	justify-content: space-around img {
		max-width: 100%;
	}
`;

export const ContainerInfos = styled.div`
	display: flex;
	flex-grow: 1;
	text-align: center;
	border-radius: 10px;
`;
