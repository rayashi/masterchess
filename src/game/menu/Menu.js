import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Logo from "../../shared/logo/Logo";
import { getMoves } from "../board/BoardActions";
import "./Menu.css";

export default function Menu() {
  const dispatch = useDispatch();
  const { knight, moves } = useSelector(state => state.BoardReducer);

  function onGetMovesPress(){
    if(knight){
      dispatch(getMoves(knight.id));
    }
  }

  return(
    <div className="menu">

      <Logo />
      <div className="message">
        <p>
          {!knight && "Please select one cell!" }
        </p>
      </div>

      <button disabled={!knight} type="button" onClick={onGetMovesPress}>
        FIND
      </button>
    </div>

  );
}