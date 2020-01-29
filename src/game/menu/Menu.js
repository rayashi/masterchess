import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import Logo from "../../shared/logo/Logo";
import Loading from "../../shared/loading/Loading";
import { getMoves } from "../board/BoardActions";
import "./Menu.css";

export default function Menu() {
  const dispatch = useDispatch();
  const { knight, loading, moves } = useSelector(state => state.BoardReducer);

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
          {knight && moves.length === 0 && 
            "Now just press find to highlight the moves" 
          }
          
          {!knight && moves.length === 0 && 
            "Please select one cell!" 
          }
          
          {!knight && moves.length > 0 && 
            `
              These are all the cells where the Knight can move in exactly two turns.
              You can play again, just select another cell!
            `
          }
        </p>
      </div>

      {loading && <Loading />}

      <div>
        {knight && !loading &&
          <button disabled={!knight} onClick={onGetMovesPress}> FIND </button>      
        }

        <Link to="/history"><button>History Moves</button> </Link>
      </div>
    </div>
  );
}