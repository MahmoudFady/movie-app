const getSimilarMovies = (movies = [], action) => {
  switch (action.type) {
    case "GET_SIMILAR_MOVIES":
      return action.movies;
    default:
      return movies;
  }
};
export default getSimilarMovies;
