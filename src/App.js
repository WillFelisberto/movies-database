import React, { useEffect, useState } from 'react';
import { getPopularMovie, getGenres } from './api/services';
import Pagination from '@material-ui/lab/Pagination';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core';
import Card from './components/Card';
import Filter from './components/Filter';
import { Cards, ContainerBody } from './theme/styled';
import allActions from './store/actions';
import { useSelector, useDispatch } from 'react-redux';

//TODO: ajustar checkbox dos filtros(modal ou sidebar)
//TODO: infinite scroll
export default function App() {
	const [movies, setMovies] = useState([]);
	const [genres, setGenres] = useState([]);
	const [loading, setLoading] = useState(false);

	const filterState = useSelector((state) => state.filter.dados);
	const pageState = useSelector((state) => state.pages.dados);

	const [filter, setFilter] = useState(filterState);

	useEffect(() => {
		const getMovies = async () => {
			const res = await getPopularMovie();
			const resGenges = await getGenres();
			setMovies(res);
			setGenres(resGenges.genres);
			setLoading(true);
		};
		getMovies();
	}, [filterState]);

	const dispatch = useDispatch();

	const handlePageClick = async (page, value) => {
		const res = await getPopularMovie(value);
		setMovies(res);
		setLoading(true);

		dispatch(allActions.pagesActions.definePage(value));
	};

	const handleFilter = (e) => {
		const checkValue = Number(e.target.value);
		const teste = e.target.checked;

		if (!teste) {
			dispatch(allActions.filterActions.removeFilter(checkValue));
			setFilter(filterState);
		} else {
			setFilter([...filter, checkValue]);
			dispatch(
				allActions.filterActions.defineFilter([...filter, checkValue])
			);
		}
	};

	const theme = createMuiTheme({
		palette: {
			type: 'dark',
		},
	});
	return (
		<ThemeProvider theme={theme}>
			{loading ? (
				<>
					{/* {genres.map((el) => (
						<Filter
							setFilterValue={(e) => handleFilter(e)}
							key={el.id}
							nome={el.name}
							value={el.id}
						/>
					))} */}

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
							color='primary'
							count={movies.total_pages}
							page={pageState}
							onChange={handlePageClick}
						/>
					</ContainerBody>
				</>
			) : null}
		</ThemeProvider>
	);
}
