import React from 'react';
import { IMG_URL } from '../../utils';
import { ContainerCard } from './styled';

export default function Card({ movie }) {
	return (
		<ContainerCard key={movie.id}>
			<img alt={movie.title} src={IMG_URL + movie.poster_path} />
			<p>{movie.title}</p>
		</ContainerCard>
	);
}
