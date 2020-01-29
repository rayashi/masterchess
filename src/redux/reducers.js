import { combineReducers } from "redux";

import BoardReducer from "../game/board/BoardReducer";
import HistoryReducer from "../history/HistoryReducer";

export default combineReducers({
  BoardReducer,
  HistoryReducer
});
