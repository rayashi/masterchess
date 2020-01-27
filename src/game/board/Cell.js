import React from 'react';
import classNames from 'classnames';
import { useSelector, useDispatch } from "react-redux";
import { setKnight } from "./BoardActions";

export default function Cell(props) {
  const dispatch = useDispatch();
  const { knight, moves } = useSelector(state => state.BoardReducer);

  const styleClasses = [
    "cell",
    props.cell.className,
    knight && props.cell.id === knight.id && "knightCell",
    moves.includes(props.cell.id) && "highlightCell"
  ];

  function onCellPress() {
    dispatch(setKnight(props.cell));
  }

  return(
    <div onClick={onCellPress} className={classNames(styleClasses)} />
  )
}
