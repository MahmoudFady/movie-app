const initial = {
  loader: false,
};
const loader = (state = initial, action) => {
  switch (action.type) {
    case "SET_LOADER":
      return {
        ...state,
        loader: action.payload,
      };
    default:
      return state;
  }
};
export default loader;
