import { REQUEST_MOVIES } from './constants';

export function carregaMovies(page) {
	return { type: REQUEST_MOVIES, page: page };
}
