export const getHistory = cell=> (
  { type: "GET_HISTORY", payload: cell }
);

export const getHistorySuccess = moves => (
  { type: "GET_HISTORY_SUCCESS", payload: moves }
);

export const getHistoryFailed = () => (
  { type: "GET_HISTORY_FAILED" }
);
