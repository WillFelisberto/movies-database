import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getMovieDetails } from '../../api/services';
import { IMG_URL } from '../../utils';
import { ContainerImg, ContainerDetails, ContainerInfos } from './styled';
//TODO: Desenhar modelo de pagina interna no figma
export default function DetailsMovie() {
	let { id } = useParams();
	const [movieDetails, setMovieDetails] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const getDetails = async () => {
			const res = await getMovieDetails(id);
			setMovieDetails(res);
			setLoading(true);
		};
		getDetails();
	}, [id]);

	return (
		<>
			{!loading ? null : (
				<ContainerDetails>
					<ContainerImg>
						<img
							alt={movieDetails.title}
							src={IMG_URL + movieDetails.poster_path}></img>
					</ContainerImg>
					<ContainerInfos>{movieDetails.title}</ContainerInfos>
				</ContainerDetails>
			)}
		</>
	);
}
