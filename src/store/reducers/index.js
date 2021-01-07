import filter from './filterReducer';
import pages from './pagesReducer';
import search from './searchReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	filter,
	pages,
	search,
});

export default rootReducer;
