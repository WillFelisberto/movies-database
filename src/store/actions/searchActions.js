const defineSearch = (dados) => {
	return {
		type: 'SET_SEARCH',
		dados: dados,
	};
};

const searchActions = { defineSearch };

export default searchActions;
