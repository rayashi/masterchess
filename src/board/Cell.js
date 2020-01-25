import React from 'react';
import classNames from 'classnames';
import { useSelector, useDispatch } from "react-redux";
import { setKnight } from "./BoardActions";

export default function Cell(props) {
  const dispatch = useDispatch();
  const knight = useSelector(state => state.BoardReducer.knight);

  const styleClasses = [
    "cell",
    props.cell.className,
    knight && props.cell.id === knight.id && "knightCell"
  ];

  function onCellPress() {
    dispatch(setKnight(props.cell));
  }

  return(
    <div onClick={onCellPress} className={classNames(styleClasses)} />
  )
}
