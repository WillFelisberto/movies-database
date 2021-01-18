import { put, call, takeLatest } from 'redux-saga/effects';
import { getNowPlaying } from '../../api/services';
import { FAILURE_BANNERS, REQUEST_BANNERS, SUCCESS_BANNERS } from './constants';

async function buscaFilmes() {
	try {
		return await getNowPlaying();
	} catch (error) {
		throw error;
	}
}

function* getPlaying() {
	try {
		const response = yield call(buscaFilmes);
		yield put({ type: SUCCESS_BANNERS, payload: { dados: response } });
	} catch (err) {
		yield put({ type: FAILURE_BANNERS, payload: { message: err.message } });
	}
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function* () {
	yield takeLatest(REQUEST_BANNERS, getPlaying);
}
