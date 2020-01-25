
import initialBoard from './InitialBoard';

const INITIAL_STATE = {
  cells: initialBoard(),
  knight: null
};

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case 'SET_KNIGHT':
      return { ...state, knight: action.payload };

    case 'SET_CELLS':
      return { ...state, cells: action.payload };
      
    default:
      return state;
  }
};

