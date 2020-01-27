import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { getMoves } from "../board/BoardActions";
import "./Menu.css";

export default function Menu() {
  const dispatch = useDispatch();
  const { knight } = useSelector(state => state.BoardReducer);

  function onGetMovesPress(){
    if(knight){
      dispatch(getMoves(knight.id));
    }
  }

  return(
    <div className="menu">
      <button type="button" onClick={onGetMovesPress}>
        Show second turn possibilities
      </button>
    </div>

  );
}