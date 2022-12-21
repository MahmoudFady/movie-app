"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var getMovies = function getMovies() {
  var movies = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "GET_MOVIES":
      return action.movies;

    default:
      return movies;
  }
};

var _default = getMovies;
exports["default"] = _default;