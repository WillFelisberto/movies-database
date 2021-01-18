import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { IMG_URL } from '../../utils';
import {
	ContainerImg,
	ContainerDetails,
	Buttom,
	ContainerInfos,
} from './styled';
import { usePalette } from 'react-palette';
import LogoIMDB from '../../assets/img/imdb.png';
import { carregaDetailMovie } from '../../store/movie/actions';
import { carregaMovieVideos } from '../../store/videos/actions';
import { useSelector, useDispatch } from 'react-redux';

export default function DetailsMovie() {
	let { id } = useParams();
	const dispatch = useDispatch();
	const filmeDetails = useSelector((state) => state.movieDetails);
	const filmeVideos = useSelector((state) => state.videos);

	const [movieDetails, setMovieDetails] = useState([]);
	const [movieVideos, setMovieVideos] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		if (
			(!filmeDetails.loaded && !filmeDetails.loading) ||
			(!filmeVideos.loaded && !filmeVideos.loading)
		) {
			dispatch(carregaDetailMovie(id));
			dispatch(carregaMovieVideos(id));
		} else if (
			(filmeDetails.loaded && !filmeDetails.loading) ||
			(filmeVideos.loaded && !filmeVideos.loading)
		) {
			setMovieDetails(filmeDetails.dados);
			setMovieVideos(filmeVideos.dados);
			setLoading(true);
		}
	}, [id, dispatch, filmeDetails, filmeVideos]);

	const { data } = usePalette(IMG_URL + movieDetails.poster_path);
	const listaGenero = movieDetails.genres
		? Array.prototype.map
				.call(movieDetails.genres, function (item) {
					return item.name;
				})
				.join(', ')
		: null;

	return (
		<>
			{!loading ? null : (
				<ContainerDetails>
					<div className='displayMobile'>
						<ContainerImg
							style={{
								boxShadow: `0px 0px 20px 0px ${data.vibrant}`,
							}}>
							<img
								alt={movieDetails.title}
								src={IMG_URL + movieDetails.poster_path}></img>
						</ContainerImg>
						<ContainerInfos>
							<div className='movieTitle'>
								<h1>{movieDetails.title}</h1>
								<span style={{ fontSize: 14 }}>
									{movieDetails.tagline}
								</span>
							</div>

							<div className='subtitle'>
								<span>
									{movieDetails.release_date.split('-')[0]}
								</span>
								<span>{movieDetails.runtime} min</span>
								<span>{listaGenero}</span>
							</div>
							<div className='overview'>
								{movieDetails.overview}
							</div>
							<div className='trailer'>
								{movieVideos[0] && movieVideos[0].key ? (
									<Buttom
										target='_blank'
										rel='noopener noreferrer'
										href={`https://www.youtube.com/watch?v=${movieVideos[0].key}`}>
										<strong>Trailer</strong>
									</Buttom>
								) : null}
								<a
									target='_blank'
									rel='noopener noreferrer'
									href={`https://www.imdb.com/title/${movieDetails.imdb_id}`}>
									<img
										src={LogoIMDB}
										alt={movieDetails.title}></img>
								</a>
							</div>
						</ContainerInfos>
					</div>
				</ContainerDetails>
			)}
		</>
	);
}
