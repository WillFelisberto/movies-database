import React from 'react';
import { ContainerHeader } from './styled';
//TODO: Deixar cabeçalho ajeitado
export default function Header() {
	return (
		<ContainerHeader>
			<a href='/'>
				<h1>Movies DataBase</h1>
			</a>
		</ContainerHeader>
	);
}
