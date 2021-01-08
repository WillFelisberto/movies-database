import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import queryString from 'query-string';
import { getSearchMovie } from '../../api/services';
import MovieList from '../MovieList';
import { useSelector } from 'react-redux';
import { BreadCrumbs } from './styled';

export default function Search() {
	const location = useLocation();
	const searchWord = queryString.parse(location.search);
	const [movies, setMovies] = useState([]);
	const [loading, setLoading] = useState(false);
	const pageState = useSelector((state) => state.pages.dados);

	useEffect(() => {
		const getDetails = async () => {
			const res = await getSearchMovie(searchWord.query, pageState);
			setMovies(res);
			setLoading(true);
		};
		getDetails();
	}, [searchWord.query, pageState]);

	return (
		<div>
			{loading ? (
				<>
					<BreadCrumbs>
						<strong>{movies.total_results} </strong> records were
						found for the word <strong> {searchWord.query}</strong>
					</BreadCrumbs>
					<MovieList defaultMovies={movies}></MovieList>
				</>
			) : null}
		</div>
	);
}
