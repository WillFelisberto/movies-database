import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { getNowPlaying } from '../../api/services';
import { IMG_URL } from '../../utils';
import { Moviecard } from './styled';

export default function Banner() {
	const [playing, setPlaying] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const getPlaying = async () => {
			const res = await getNowPlaying();
			setPlaying(res);
			setLoading(true);
		};
		getPlaying();
	}, []);

	var settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
	};

	const FilterPlayingMovies = playing.filter((el) => el.backdrop_path);

	return (
		<Slider {...settings}>
			{FilterPlayingMovies.map((el, index) => (
				<Moviecard img={IMG_URL + el.backdrop_path} key={index}>
					<div className='info_section'>
						<div className='movie_header'>
							<h1>{el.title}</h1>
						</div>
					</div>
				</Moviecard>
				// <div key={index} style={{ display: 'flex !important' }}>
				// 	<img
				// 		alt={el.original_title}
				// 		src={IMG_URL + el.backdrop_path}></img>
				// 	<h3>	</h3>
				// </div>
			))}
		</Slider>
	);
}
