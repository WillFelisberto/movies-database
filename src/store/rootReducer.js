import filter from './filter/reducer';
import pages from './pages/reducer';
import search from './search/reducer';
import movies from './movies/reducer';
import banner from './banner/reducer';
import movie from './movie/reducer';
import videos from './videos/reducer';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	filter,
	pages,
	search,
	movies,
	banner,
	movieDetails: movie,
	videos: videos,
});

export default rootReducer;
