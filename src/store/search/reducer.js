const searchDefaultState = {
	dados: '',
};

const search = (state = searchDefaultState, action) => {
	switch (action.type) {
		case 'SET_SEARCH':
			return {
				...state,
				dados: action.dados,
			};

		default:
			return state;
	}
};

export default search;
