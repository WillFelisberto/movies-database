const filtersDefaultState = {
	dados: [],
};

const filter = (state = filtersDefaultState, action) => {
	switch (action.type) {
		case 'SET_FILTER':
			return {
				...state,
				dados: action.dados,
			};
		case 'REMOVE_FILTER':
			return {
				...state,
				dados: state.dados.filter((e) => e !== action.dados),
			};
		default:
			return state;
	}
};

export default filter;
