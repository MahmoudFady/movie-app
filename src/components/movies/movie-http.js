import axiosInstance from "../axios-instance";

const getMovies = (state, page = 1) => {
  return axiosInstance.get(`movie/${state}?page=${page}`);
};
const searchByName = (target) => {
  return axiosInstance.get(`search/movie?query=${target}`);
};
const getMovieDetailsById = (id) => {
  return axiosInstance.get(`movie/${id}`);
};
export { getMovies, searchByName, getMovieDetailsById };
