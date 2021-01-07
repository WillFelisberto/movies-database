import React, { useEffect, useState } from 'react';
import { getPopularMovie, getGenres } from '../../api/services';
import { Cards, ContainerBody } from './styled';
import Card from '../Card';
import { useSelector, useDispatch } from 'react-redux';
import allActions from '../../store/actions';
import Pagination from '@material-ui/lab/Pagination';

export default function Home() {
	const [movies, setMovies] = useState([]);
	const [genres, setGenres] = useState([]);
	const [loading, setLoading] = useState(false);
	const dispatch = useDispatch();
	const pageState = useSelector((state) => state.pages.dados);
	const filterState = useSelector((state) => state.filter.dados);
	const [filter] = useState(filterState);

	useEffect(() => {
		const getMovies = async () => {
			const res = await getPopularMovie(pageState);
			const resGenges = await getGenres();
			setMovies(res);
			setGenres(resGenges.genres);
			setLoading(true);
		};
		getMovies();
	}, [filterState, pageState]);

	const handlePageClick = async (page, value) => {
		const res = await getPopularMovie(value);
		setMovies(res);
		setLoading(true);

		dispatch(allActions.pagesActions.definePage(value));
	};
	// const handleFilter = (e) => {
	// 	const checkValue = Number(e.target.value);
	// 	const teste = e.target.checked;

	// 	if (!teste) {
	// 		dispatch(allActions.filterActions.removeFilter(checkValue));
	// 		setFilter(filterState);
	// 	} else {
	// 		setFilter([...filter, checkValue]);
	// 		dispatch(
	// 			allActions.filterActions.defineFilter([...filter, checkValue])
	// 		);
	// 	}
	// };
	return (
		<>
			{loading ? (
				<ContainerBody>
					{/* {genres.map((el) => (
						<Filter
							setFilterValue={(e) => handleFilter(e)}
							key={el.id}
							nome={el.name}
							value={el.id}
						/>
					))} */}
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
						color='primary'
						count={movies.total_pages}
						page={pageState}
						onChange={handlePageClick}
					/>
				</ContainerBody>
			) : null}
		</>
	);
}
