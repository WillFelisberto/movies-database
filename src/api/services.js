import axios from 'axios';

const api = axios.create({
	baseURL: 'https://api.themoviedb.org/3/',
});

export const getPopularMovie = async (page = 1) => {
	try {
		const response = await api.get(
			`/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=pt-BR&page=${page}`
		);
		return response.data;
	} catch (error) {
		throw error;
	}
};

export const getMovieDetails = async (id) => {
	try {
		const response = await api.get(
			`/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=pt-BR`
		);
		return response.data;
	} catch (error) {
		throw error;
	}
};

export const getGenres = async () => {
	try {
		const response = await api.get(
			`genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=pt-BR`
		);
		return response.data;
	} catch (error) {
		throw error;
	}
};

export const get404Page = async (tag) => {
	try {
		const response = await axios.get(
			`https://api.giphy.com/v1/gifs/random?api_key=${process.env.REACT_APP_KEY_GIF}&tag=${tag}&rating=g`
		);
		return response.data.data;
	} catch (error) {
		throw error;
	}
};