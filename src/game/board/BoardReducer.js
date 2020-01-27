
import { createInitialBoard } from "./InitialBoard";

const INITIAL_STATE = {
  cells: createInitialBoard(),
  knight: null,
  loading: false,
  moves: []
};

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case "SET_KNIGHT":
      return { ...state, knight: action.payload, moves: [] };

    case "SET_CELLS":
      return { ...state, cells: action.payload };
    
    case "GET_MOVES":
      return { ...state, cell: action.payload, loading: true, moves: [] };

    case "GET_MOVES_SUCCESS":
      return { ...state, moves: action.payload, loading: true, knight: null };

    case "GET_MOVES_FAILUED":
      return { ...state, cell: action.payload, loading: false };

    default:
      return state;
  }
};

