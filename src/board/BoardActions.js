export const setKnight = knight => (
  { type: 'SET_KNIGHT', payload: knight }
);

export const getMoves = cell=> (
  { type: 'GET_MOVES', payload: cell }
);

export const getMovesSuccess = moves => (
  { type: 'GET_MOVES_SUCCESS', payload: moves }
);

export const getMovesFailued = () => (
  { type: 'GET_MOVES_FAILUED' }
);
