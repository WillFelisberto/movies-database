/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Cards, ContainerBody } from './styled';
import Card from '../Card';
import { useSelector, useDispatch } from 'react-redux';
import Pagination from '@material-ui/lab/Pagination';
import { definePage } from '../../store/pages/actions';
import { carregaMovies } from '../../store/movies/actions';
import { limpaMovie } from '../../store/movie/actions';

export default function MovieList({ defaultMovies }) {
	const filmes = useSelector((state) => state.movies);

	const [movies, setMovies] = useState([]);
	const [genres, setGenres] = useState([]);
	const [useSearch, setUseSearch] = useState(defaultMovies ? true : false);
	const [loading, setLoading] = useState(false);
	const dispatch = useDispatch();
	const pageState = useSelector((state) => state.pages.dados);
	const filterState = useSelector((state) => state.filter.dados);

	const [filter] = useState(filterState);

	useEffect(() => {
		dispatch(carregaMovies(pageState));
		dispatch(limpaMovie());
	}, [dispatch, pageState]);

	useEffect(() => {
		if (defaultMovies && defaultMovies.results.length > 0) {
			setMovies(defaultMovies);
			setLoading(true);
			setUseSearch(true);
		} else {
			if (filmes.loaded && !filmes.loading) {
				setMovies(filmes.dados);
				setLoading(true);
			}
		}
	}, [filterState, filmes, pageState, defaultMovies]);

	const handlePageClick = async (page, value) => {
		dispatch(definePage(value));
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
