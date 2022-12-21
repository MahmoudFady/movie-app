import { combineReducers } from "redux";
import error from "./reducers/error";
import loader from "./reducers/loader";
import getMovieById from "./reducers/getMovieById";
import getSimilarMovies from "./reducers/getSimilarMovies";
import getMovies from "./reducers/getMovies";
export default combineReducers({
  error,
  loader,
  movies: getMovies,
  movieDetails: getMovieById,
  similarMovies: getSimilarMovies,
});
