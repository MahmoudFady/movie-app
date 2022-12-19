const changeError = (payload) => {
  return {
    type: "SET_ERROR",
    payload,
  };
};
export default changeError;
