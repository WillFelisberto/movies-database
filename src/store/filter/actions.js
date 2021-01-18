export const defineFilter = (filter) => {
	return {
		type: 'SET_FILTER',
		dados: filter,
	};
};

export const removeFilter = (filter) => {
	return {
		type: 'REMOVE_FILTER',
		dados: filter,
	};
};
