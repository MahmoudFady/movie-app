"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var getSimilarMovies = function getSimilarMovies() {
  var movies = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "GET_SIMILAR_MOVIES":
      return action.movies;

    default:
      return movies;
  }
};

var _default = getSimilarMovies;
exports["default"] = _default;