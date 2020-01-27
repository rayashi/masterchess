import React from "react";

import Board from "./board/Board";
import Menu from "./menu/Menu";
import "./Game.css";

export default function Game() {

  return(
    <div className="game">
      <Board/>
      <Menu/>
    </div>

  );
}