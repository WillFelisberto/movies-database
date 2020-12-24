const defineFilter = (filter) => {
	return {
		type: 'SET_FILTER',
		dados: filter,
	};
};

const removeFilter = (filter) => {
	return {
		type: 'REMOVE_FILTER',
		dados: filter,
	};
};

const filterActions = { defineFilter, removeFilter };

export default filterActions;
