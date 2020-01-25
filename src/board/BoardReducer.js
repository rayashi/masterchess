
import initialBoard from "./InitialBoard";

const INITIAL_STATE = {
  cells: initialBoard(),
  knight: null,
  loading: false,
  moves: []
};

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case "SET_KNIGHT":
      return { ...state, knight: action.payload };

    case "SET_CELLS":
      return { ...state, cells: action.payload };
    
    case "GET_MOVES":
      return { ...state, cell: action.payload };

    case "GET_MOVES_SUCCESS":
      return { ...state, cell: action.payload };

    case "GET_MOVES_FAILUED":
      return { ...state, cell: action.payload };

    default:
      return state;
  }
};

