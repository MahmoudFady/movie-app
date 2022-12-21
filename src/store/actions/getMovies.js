import axiosInstance from "../../components/axios-instance";
const getMovies = (url) => async (dispatch) => {
  try {
    const response = await axiosInstance.get(`${url}`);
    return dispatch({ type: "GET_MOVIES", movies: response.data.results });
  } catch (err) {
    console.log(err.message);
  }
};
export default getMovies;
