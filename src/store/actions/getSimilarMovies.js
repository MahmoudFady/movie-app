import axiosInstance from "../../components/axios-instance";
const getSimilarMovies =
  (id, page = 1) =>
  async (dispatch) => {
    try {
      const response = await axiosInstance.get(
        `movie/${id}/similar?page=${page}`
      );
      return dispatch({
        type: "GET_SIMILAR_MOVIES",
        movies: response.data.results,
      });
    } catch (err) {
      console.log(err.message);
    }
  };
export default getSimilarMovies;
