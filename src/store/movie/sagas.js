import { put, call, takeLatest } from 'redux-saga/effects';
import { getMovieDetails } from '../../api/services';
import { FAILURE_MOVIE, REQUEST_MOVIE, SUCCESS_MOVIE } from './constants';

async function buscaFilme(movie) {
	try {
		return await getMovieDetails(movie);
	} catch (error) {
		throw error;
	}
}

function* getMovies(action) {
	try {
		const response = yield call(buscaFilme, action.movie);
		yield put({ type: SUCCESS_MOVIE, payload: { dados: response } });
	} catch (err) {
		yield put({ type: FAILURE_MOVIE, payload: { message: err.message } });
	}
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function* () {
	yield takeLatest(REQUEST_MOVIE, getMovies);
}
