import { put, call, takeLatest } from 'redux-saga/effects';
import { getPopularMovie } from '../../api/services';
import { FAILURE_MOVIES, REQUEST_MOVIES, SUCCESS_MOVIES } from './constants';

async function buscaFilmes(page) {
	try {
		return await getPopularMovie(page);
	} catch (error) {
		throw error;
	}
}

function* getMovies(action) {
	try {
		const response = yield call(buscaFilmes, action.page);
		yield put({ type: SUCCESS_MOVIES, payload: { dados: response } });
	} catch (err) {
		yield put({ type: FAILURE_MOVIES, payload: { message: err.message } });
	}
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function* () {
	yield takeLatest(REQUEST_MOVIES, getMovies);
}
