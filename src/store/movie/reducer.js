import {
	FAILURE_MOVIE,
	REQUEST_MOVIE,
	SUCCESS_MOVIE,
	CLEAR_MOVIE,
} from './constants';

const INITIAL_STATE = {
	dados: [],
	loading: false,
	error: false,
	loaded: false,
	message: '',
};

export default function movieReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case REQUEST_MOVIE:
			return { ...state, loading: true };
		case SUCCESS_MOVIE:
			return {
				...state,
				dados: action.payload.dados,
				loading: false,
				loaded: true,
				error: false,
			};
		case FAILURE_MOVIE:
			return {
				...state,
				dados: [],
				loading: false,
				loaded: true,
				error: true,
				message: action.payload.message,
			};

		case CLEAR_MOVIE:
			return {
				...state,
				dados: [],
				loading: false,
				loaded: false,
				error: false,
			};
		default:
			return state;
	}
}
