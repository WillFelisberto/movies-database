const definePage = (dados) => {
	return {
		type: 'SET_PAGE',
		dados: dados,
	};
};

const filterActions = { definePage };

export default filterActions;
