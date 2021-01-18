import { all, fork } from 'redux-saga/effects';

import * as moviesSagas from './movies/sagas';
import * as bannerSagas from './banner/sagas';
import * as movieSagas from './movie/sagas';
import * as videosSagas from './videos/sagas';

export default function* rootSaga() {
	yield all([...Object.values(moviesSagas)].map(fork));
	yield all([...Object.values(bannerSagas)].map(fork));
	yield all([...Object.values(movieSagas)].map(fork));
	yield all([...Object.values(videosSagas)].map(fork));
}
