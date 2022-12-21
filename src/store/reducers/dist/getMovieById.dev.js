"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var getMovieById = function getMovieById() {
  var movie = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "GET_MOVIE_BY_ID":
      return action.movie;

    default:
      return movie;
  }
};

var _default = getMovieById;
exports["default"] = _default;