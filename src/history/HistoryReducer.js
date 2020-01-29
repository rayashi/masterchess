
const INITIAL_STATE = {
  history: [],
  loading: false
};

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case "GET_HISTORY":
      return { ...state, loading: true };

    case "GET_HISTORY_SUCCESS":
      return { ...state, history: action.payload, loading: false };

    case "GET_HISTORY_FAILED":
      return { ...state, loading: false };

    default:
      return state;
  }
};
