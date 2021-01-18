import {
	FAILURE_MOVIE_VIDEOS,
	SUCCESS_MOVIE_VIDEOS,
	REQUEST_MOVIE_VIDEOS,
} from './constants';

const INITIAL_STATE = {
	dados: [],
	loading: false,
	error: false,
	loaded: false,
	message: '',
};

export default function movieVideoReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case REQUEST_MOVIE_VIDEOS:
			return { ...state, loading: true };
		case SUCCESS_MOVIE_VIDEOS:
			return {
				...state,
				dados: action.payload.dados,
				loading: false,
				loaded: true,
				error: false,
			};
		case FAILURE_MOVIE_VIDEOS:
			return {
				...state,
				dados: [],
				loading: false,
				loaded: true,
				error: true,
				message: action.payload.message,
			};
		default:
			return state;
	}
}
