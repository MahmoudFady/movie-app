import axiosInstance from "../../components/axios-instance";
const getMovieById = (id) => async (dispatch) => {
  try {
    const response = await axiosInstance.get(`movie/${id}`);
    return dispatch({ type: "GET_MOVIE_BY_ID", movie: response.data });
  } catch (err) {
    console.log(err.message);
  }
};
export default getMovieById;
