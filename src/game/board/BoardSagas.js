import { call, put } from "redux-saga/effects";
import axios from "axios";

import { getMovesSuccess, getMovesFailed } from "./BoardActions";

const fetchMoves = async cell => {
  const response = await axios.post("/knight-moves", { cell });
  return response.data;
};

export function* getMovesAsync(action) {
  try {
    const data = yield call(fetchMoves, action.payload);
    yield put(getMovesSuccess(data));
  } catch (e) {
    yield put(getMovesFailed());
  }
}