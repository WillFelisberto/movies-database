import React, { useEffect, useState } from 'react';
import { getPopularMovie } from './api/services';
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';
import Card from './components/Card';
import GlobalStyle from './theme/globalStyles';
import { Cards, ContainerBody } from './theme/styled';

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
			<GlobalStyle />
			{loading ? (
				<>
					<header className='App-header'></header>
					<ContainerBody>
						<Cards>
							{movies.results.map((el) => (
								<Card key={el.key} movie={el} />
							))}
						</Cards>
						<Pagination
							onChange={handlePageClick}
							current={pageCount}
							total={movies.total_pages}
						/>
					</ContainerBody>
				</>
			) : null}
		</>
	);
}
