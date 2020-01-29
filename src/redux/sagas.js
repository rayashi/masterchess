import { takeLatest, all } from "redux-saga/effects";

import { getMovesAsync } from "../game/board/BoardSagas";
import { getHistoryAsync } from "../history/HistorySagas";

export default function* rootSagas() {
  yield all([
    takeLatest("GET_MOVES", getMovesAsync),
    takeLatest("GET_HISTORY", getHistoryAsync)
  ]);
}