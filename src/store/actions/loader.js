const changeLoader = (payload) => {
  return {
    type: "SET_LOADER",
    payload,
  };
};
export default changeLoader;
