import { put, call, takeLatest } from 'redux-saga/effects';
import { getVideo } from '../../api/services';
import {
	FAILURE_MOVIE_VIDEOS,
	REQUEST_MOVIE_VIDEOS,
	SUCCESS_MOVIE_VIDEOS,
} from './constants';

async function buscaFilmeVideo(movie) {
	try {
		return await getVideo(movie);
	} catch (error) {
		throw error;
	}
}

function* getMoviesVideos(action) {
	try {
		const response = yield call(buscaFilmeVideo, action.movie);
		yield put({ type: SUCCESS_MOVIE_VIDEOS, payload: { dados: response } });
	} catch (err) {
		yield put({
			type: FAILURE_MOVIE_VIDEOS,
			payload: { message: err.message },
		});
	}
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function* () {
	yield takeLatest(REQUEST_MOVIE_VIDEOS, getMoviesVideos);
}
