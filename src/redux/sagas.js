import { takeLatest, all } from "redux-saga/effects";

import { getMovesAsync } from "../board/BoardSagas";

export default function* rootSagas() {
  yield all([
    takeLatest("GET_MOVES", getMovesAsync)
  ]);
}