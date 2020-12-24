import React from 'react';
import { IMG_URL } from '../../utils';
import { ContainerCard, ContainerGeneros, TituloFilme, Nota } from './styled';
//TODO: pegar algum template de card bonito

export default function Card({ movie, Allgenres, filter }) {
	let result = movie.genre_ids.filter((o1) => filter.some((o2) => o1 === o2));
	const genero = Allgenres.filter((el) =>
		movie.genre_ids.some((el2) => el.id === el2)
	);

	const listaGenero = Array.prototype.map
		.call(genero, function (item) {
			return item.name;
		})
		.join(', ');

	return (
		<ContainerCard style={{ display: result.length ? 'none' : 'block' }}>
			<a title={movie.title} href={`/movie/` + movie.id}>
				<Nota>
					<div>{movie.vote_average.toFixed(1)}</div>
				</Nota>
				<img alt={movie.title} src={IMG_URL + movie.poster_path} />

				<TituloFilme>{movie.title}</TituloFilme>
				<ContainerGeneros>
					<p>{listaGenero}</p>
				</ContainerGeneros>
			</a>
		</ContainerCard>
	);
}
