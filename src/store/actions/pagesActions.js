const definePage = (dados) => {
	return {
		type: 'SET_PAGE',
		dados: dados,
	};
};

const pagesActions = { definePage };

export default pagesActions;
