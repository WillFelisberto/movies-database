import filter from './filterReducer';
import pages from './pagesReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	filter,
	pages,
});

export default rootReducer;
