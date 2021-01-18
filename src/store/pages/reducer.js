const pagesDefaultState = {
	dados: 1,
};

const pages = (state = pagesDefaultState, action) => {
	switch (action.type) {
		case 'SET_PAGE':
			return {
				...state,
				dados: action.dados,
			};

		default:
			return state;
	}
};

export default pages;
