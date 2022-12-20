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
const getSimilarMovies = (id, page = 1) => {
  return axiosInstance.get(`movie/${id}/similar?page=${page}`);
};
export { getMovies, searchByName, getMovieDetailsById, getSimilarMovies };
