import { takeLatest, all } from 'redux-saga/effects';

export default function* rootSagas() {
  yield all([
    takeLatest('GET_MOVES', () => null)
  ]);
}