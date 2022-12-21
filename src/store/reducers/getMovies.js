const getMovies = (movies = [], action) => {
  switch (action.type) {
    case "GET_MOVIES":
      return action.movies;
    default:
      return movies;
  }
};
export default getMovies;
