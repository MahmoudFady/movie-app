const getMovieById = (movie = {}, action) => {
  switch (action.type) {
    case "GET_MOVIE_BY_ID":
      return action.movie;
    default:
      return movie;
  }
};
export default getMovieById;
