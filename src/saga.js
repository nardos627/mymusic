import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchSongsSuccess, fetchSongsFailure } from './actions';
import { FETCH_SONGS_REQUEST } from './constants';
import { get } from './api';

function* fetchSongs() {
  try {
    const songs = yield call(get, '/songs');
    yield put(fetchSongsSuccess(songs));
  } catch (error) {
    yield put(fetchSongsFailure(error));
  }
}

function* songsSaga() {
  yield takeLatest(FETCH_SONGS_REQUEST, fetchSongs);
}

export default songsSaga;