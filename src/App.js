import React, { useEffect, useState } from 'react';
import { getPopularMovie, getGenres } from './api/services';
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';
import Card from './components/Card';
import Filter from './components/Filter';
import { Cards, ContainerBody } from './theme/styled';
import Swal from 'sweetalert2';
//TODO: ajustar checkbox dos filtros(modal ou sidebar)
//TODO: infinite scroll
export default function App() {
	const [movies, setMovies] = useState([]);
	const [genres, setGenres] = useState([]);
	const [loading, setLoading] = useState(false);
	const [checked, setChecked] = useState({ id: 0, check: false });
	const [pageCount, setPageCount] = useState(0);
	const [filter, setFilter] = useState([]);

	useEffect(() => {
		const getMovies = async () => {
			const res = await getPopularMovie();
			const resGenges = await getGenres();
			setMovies(res);
			setGenres(resGenges.genres);
			setLoading(true);
			setPageCount(1);
		};
		getMovies();
	}, [filter]);

	const handlePageClick = async (page) => {
		const res = await getPopularMovie(page);
		setMovies(res);
		setLoading(true);
		setPageCount(page);
	};

	const handleFilter = (e) => {
		const checkValue = Number(e.target.value);

		setFilter([checkValue]);
	};
	return (
		<>
			{loading ? (
				<>
					{genres.map((el) => (
						<Filter
							checked={checked}
							setFilterValue={(e) => handleFilter(e)}
							key={el.id}
							nome={el.name}
							value={el.id}
						/>
					))}
					<ContainerBody>
						<Cards>
							{movies.results.map((el) => (
								<Card
									key={el.id}
									movie={el}
									filter={filter}
									Allgenres={genres}
								/>
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
