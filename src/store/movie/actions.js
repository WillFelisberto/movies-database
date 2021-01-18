import { REQUEST_MOVIE, CLEAR_MOVIE } from './constants';

export function carregaDetailMovie(movie) {
	return { type: REQUEST_MOVIE, movie: movie };
}
export function limpaMovie() {
	return { type: CLEAR_MOVIE };
}
