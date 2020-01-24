import React from 'react';
import classNames from 'classnames';
import knight from './knight.png';

export default function Cell(props) {

    function onCellPress() {
        props.onCellPress(props.cell);
    }

    return(
        <div onClick={onCellPress} 
            className={classNames(["cell", props.cell.className, props.cell.knight && "knightCell"])}>            
        </div>
    )
}
