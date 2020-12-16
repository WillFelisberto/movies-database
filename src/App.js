import React, { useEffect, useState } from 'react';
import './App.css';
import { getPopularMovie } from './api/services';
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';
import { IMG_URL } from './utils';

export default function App() {
	const [movies, setMovies] = useState([]);
	const [loading, setLoading] = useState(false);
	const [pageCount, setPageCount] = useState(0);

	useEffect(() => {
		const getMovies = async () => {
			const res = await getPopularMovie();
			setMovies(res);
			setLoading(true);
			setPageCount(1);
		};
		getMovies();
	}, []);

	const handlePageClick = async (page) => {
		const res = await getPopularMovie(page);
		setMovies(res);
		setLoading(true);
		setPageCount(page);
	};

	return (
		<>
			{loading ? (
				<div className='App'>
					<header className='App-header'>
						{movies.results.map((el) => {
							return (
								<>
									<img
										alt={el.title}
										src={IMG_URL + el.poster_path}
									/>
									<p key={el.id}>{el.title}</p>
								</>
							);
						})}

						<Pagination
							onChange={handlePageClick}
							current={pageCount}
							total={movies.total_pages}
						/>
					</header>
				</div>
			) : null}
		</>
	);
}
