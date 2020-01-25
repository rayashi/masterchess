import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { getMoves } from "../board/BoardActions";

import "./Menu.css";

export default function Menu() {
  const dispatch = useDispatch();
  const knight = useSelector(state => state.BoardReducer.knight);

  function onGetMovesPress(){
    dispatch(getMoves(knight.id));
  }

  return(
    <button type="button" onClick={onGetMovesPress}>
      Show second turn possibilities
    </button>
  );
}