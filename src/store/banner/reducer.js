import { REQUEST_BANNERS, SUCCESS_BANNERS, FAILURE_BANNERS } from './constants';

const INITIAL_STATE = {
	dados: [],
	loading: false,
	error: false,
	loaded: false,
	message: '',
};

export default function bannerReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case REQUEST_BANNERS:
			return { ...state, loading: true };
		case SUCCESS_BANNERS:
			return {
				...state,
				dados: action.payload.dados,
				loading: false,
				loaded: true,
				error: false,
			};
		case FAILURE_BANNERS:
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
