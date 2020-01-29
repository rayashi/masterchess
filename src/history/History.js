import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getHistory } from "./HistoryActions";
import Moment from 'moment';

import "./History.css";
import Loading from "../shared/loading/Loading";

export default function History() {
  const dispatch = useDispatch();
  const { history, loading } = useSelector(state => state.HistoryReducer);

  function dispatchGetHistory(){
    dispatch(getHistory());
  }

  useEffect(dispatchGetHistory, []);

  return(
    <div className="history">
      <h3>Moves History</h3>
      {loading && <Loading />}

      <div className="historyContent">
        {history.map(item => (
          <div className="historyLine">
            {Moment(item.created_at).fromNow()} - {item.cell} - {item.moves}
          </div>
        ))}
      </div>

      <Link to="/game"><button>Back to the game</button> </Link>
    </div>

  );
}