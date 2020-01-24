import React, { useState , useEffect } from "react";
import Cell from "./Cell";

import './board.css';

export default function Board() {
    const rows = [8, 7, 6, 5, 4, 3, 2, 1];
    const columns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

    const [cells, setCells] = useState([]);

    useEffect(initilazeBoard, []);

    function initilazeBoard() {
        let initialCells = [];
        rows.map((row, rowIndex) => {
            let line = []; 
            columns.map((column, columnIndex) => {
                line.push({
                    id: `${column}${row}`, 
                    rowIndex: rowIndex,
                    columnIndex: columnIndex,
                    className: (columnIndex+rowIndex)%2 ? "even" : "odd",
                    knight: false
                });
            });
            initialCells.push(line);
        });
        setCells(initialCells);
    }

    function onCellPress(clickedCell) {
        const newCells = cells.map(line => 
            line.map(cell => 
                cell.id == clickedCell.id ? {...cell, knight: true} : {...cell, knight: false}
            )
        );
        setCells(newCells);
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