import axios from 'axios';

const api = axios.create({
	baseURL: 'https://api.themoviedb.org/3/',
});

const getPopularMovie = async (page = 1) => {
	try {
		const response = await api.get(
			`/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=pt-BR&page=${page}`
		);
		return response.data;
	} catch (error) {
		throw error;
	}
};

export { getPopularMovie };
