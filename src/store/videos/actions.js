import { REQUEST_MOVIE_VIDEOS } from './constants';

export function carregaMovieVideos(movie) {
	return { type: REQUEST_MOVIE_VIDEOS, movie: movie };
}
