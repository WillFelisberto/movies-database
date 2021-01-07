import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getMovieDetails, getVideo } from '../../api/services';
import { IMG_URL } from '../../utils';
import {
	ContainerImg,
	ContainerDetails,
	Buttom,
	ContainerInfos,
} from './styled';
import { usePalette } from 'react-palette';
import LogoIMDB from '../../assets/img/imdb.png';

export default function DetailsMovie() {
	let { id } = useParams();
	const [movieDetails, setMovieDetails] = useState([]);
	const [movieVideos, setMovieVideos] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const getDetails = async () => {
			const res = await getMovieDetails(id);
			const videos = await getVideo(id);
			setMovieDetails(res);
			setMovieVideos(videos);
			setLoading(true);
		};
		getDetails();
	}, [id]);

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
			{!loading &&
			movieVideos.length === 0 &&
			movieDetails.length < 0 ? null : (
				<ContainerDetails>
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
						<div className='overview'>{movieDetails.overview}</div>
						<div className='trailer'>
							{movieVideos[0] && movieVideos[0].key ? (
								<Buttom>
									<a
										target='_blank'
										rel='noopener noreferrer'
										href={`https://www.youtube.com/watch?v=${movieVideos[0].key}`}>
										<strong>Trailer</strong>
									</a>
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
				</ContainerDetails>
			)}
		</>
	);
}
