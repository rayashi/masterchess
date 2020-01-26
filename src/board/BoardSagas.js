import { call, put } from "redux-saga/effects";
import axios from "axios";

import { getMovesSuccess, getMovesFailued} from "./BoardActions";

const fetchMoves = async cell => {
  axios.defaults.baseURL = "http://127.0.0.1:8000";
  const response = await axios.post("/next-moves", { cell });
  return response.data;
};

export function* getMovesAsync(action) {
  try {
    const data = yield call(fetchMoves, action.payload);
    yield put(getMovesSuccess(data));
  } catch (e) {
    yield put(getMovesFailued());
  }
}