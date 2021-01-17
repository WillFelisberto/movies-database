import React, { useEffect, useState } from 'react';
import { getRecommendations } from '../../../api/services';
import { ContainerRecommends, Moviecard } from './styled';
import Slider from 'react-slick';
import { IMG_URL } from '../../../utils';
import { Link } from 'react-router-dom';

export default function Recommendations({ movie }) {
	const [recommendation, setRecommendation] = useState([]);

	useEffect(() => {
		const getMovies = async () => {
			const res = await getRecommendations(movie);
			setRecommendation(res.results);
		};
		getMovies();
	}, [movie]);

	var settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 43,
		arrows: false,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	const FilterPlayingMovies = recommendation.filter((el) => el.backdrop_path);

	return (
		<ContainerRecommends>
			<h4>Recomendados</h4>
			<Slider {...settings}>
				{FilterPlayingMovies.map((el, index) => (
					<Moviecard key={index}>
						<div className="info_section">
							<Link title={el.title} to={`/movie/` + el.id}>
								<img alt={el.title} src={IMG_URL + el.backdrop_path}></img>
								<div className="movie_header">
									<span>{el.title}</span>
								</div>
							</Link>
						</div>
					</Moviecard>
				))}
			</Slider>
		</ContainerRecommends>
	);
}
