import React from 'react';
import { Link } from 'react-router-dom';
import { ContainerHeader } from './styled';

export default function Header() {
	return (
		<ContainerHeader>
			<div>
				<Link to={'/'}>
					<strong>Movies DataBase</strong>
				</Link>
			</div>
		</ContainerHeader>
	);
}
