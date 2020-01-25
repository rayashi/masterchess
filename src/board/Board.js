import React from "react";
import { useSelector } from "react-redux";

import Cell from "./Cell";

import './board.css';

export default function Board() {
    const cells = useSelector(state => state.BoardReducer.cells);

    return(
        <div id="board">
            {cells.map((line, lineIndex) =>
                <div key={lineIndex} className="line">
                    {line.map(cell => 
                        <Cell key={cell.id} cell={cell}/>
                    )}
                </div>
            )}
        </div>
    );
}