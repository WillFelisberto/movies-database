import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { getNowPlaying } from '../../api/services';
import { IMG_URL } from '../../utils';
import { Link } from 'react-router-dom';
import { Moviecard } from './styled';
import { carregaBanners } from '../../store/banner/actions';
import { useSelector, useDispatch } from 'react-redux';

export default function Banner() {
	const getBanners = useSelector((state) => state.banner);

	const [playing, setPlaying] = useState([]);
	const [loading, setLoading] = useState(false);
	const dispatch = useDispatch();

	useEffect(() => {
		if (!getBanners.loaded && !getBanners.loading) {
			dispatch(carregaBanners());
		} else if (getBanners.loaded && !getBanners.loading) {
			setPlaying(getBanners.dados);
			setLoading(true);
		}
	}, [getBanners, dispatch]);

	var settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
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

	const FilterPlayingMovies = playing.filter((el) => el.backdrop_path);

	return (
		<>
			{loading ? (
				<Slider {...settings}>
					{FilterPlayingMovies.map((el, index) => (
						<Moviecard key={index}>
							<div className='info_section'>
								<Link title={el.title} to={`/movie/` + el.id}>
									<img
										alt={el.title}
										src={IMG_URL + el.backdrop_path}></img>
									<div className='movie_header'>
										<span>{el.title}</span>
									</div>
								</Link>
							</div>
						</Moviecard>
					))}
				</Slider>
			) : null}
		</>
	);
}
