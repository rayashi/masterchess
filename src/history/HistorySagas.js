import { call, put } from "redux-saga/effects";
import axios from "axios";

import { getHistorySuccess, getHistoryFailed } from "./HistoryActions";

const fetchHistory = async () => {
  const response = await axios.get("/history");
  return response.data;
};

export function* getHistoryAsync(action) {
  try {
    const data = yield call(fetchHistory);
    yield put(getHistorySuccess(data));
  } catch (e) {
    yield put(getHistoryFailed());
  }
}