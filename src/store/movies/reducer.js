import { FAILURE_MOVIES, REQUEST_MOVIES, SUCCESS_MOVIES } from './constants';

const INITIAL_STATE = {
	dados: [],
	loading: false,
	error: false,
	loaded: false,
	message: '',
};

export default function movieReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case REQUEST_MOVIES:
			return { ...state, loading: true };
		case SUCCESS_MOVIES:
			return {
				...state,
				dados: action.payload.dados,
				loading: false,
				loaded: true,
				error: false,
			};
		case FAILURE_MOVIES:
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
