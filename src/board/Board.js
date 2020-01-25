import React, { useState , useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Cell from "./Cell";
import { setCells } from "./BoardActions";

import './board.css';

export default function Board() {
    const dispatch = useDispatch();
    const cells = useSelector(state => state.BoardReducer.cells);

    function onCellPress(clickedCell) {
        const newCells = cells.map(line => 
            line.map(cell => 
                cell.id === clickedCell.id ? {...cell, knight: true} : {...cell, knight: false}
            )
        );
        dispatch(setCells(newCells));
    }

    return(
        <div id="board">
            {cells.map((line, lineIndex) =>
                <div key={lineIndex} className="line">
                    {line.map(cell => 
                        <Cell key={cell.id} cell={cell} onCellPress={onCellPress}/>
                    )}
                </div>
            )}
        </div>
    );
}