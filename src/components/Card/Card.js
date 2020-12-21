import React from 'react';
import { IMG_URL } from '../../utils';
import { ContainerCard } from './styled';
//TODO: pegar algum template de card bonito

export default function Card({ movie, Allgenres, filter }) {
	let result = movie.genre_ids.filter((o1) => filter.some((o2) => o1 === o2));

	return (
		<ContainerCard style={{ display: result.length ? 'none' : 'block' }}>
			<a title={movie.title} href={`/movie/` + movie.id}>
				<img alt={movie.title} src={IMG_URL + movie.poster_path} />

				<p>{movie.title}</p>
			</a>
		</ContainerCard>
	);
}
