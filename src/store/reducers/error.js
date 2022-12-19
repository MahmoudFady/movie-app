const initial = {
  error: null,
};
const error = (state = initial, action) => {
  switch (action.type) {
    case "SET_ERROR":
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default error;
