"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _error = _interopRequireDefault(require("./reducers/error"));

var _loader = _interopRequireDefault(require("./reducers/loader"));

var _getMovieById = _interopRequireDefault(require("./reducers/getMovieById"));

var _getSimilarMovies = _interopRequireDefault(require("./reducers/getSimilarMovies"));

var _getMovies = _interopRequireDefault(require("./reducers/getMovies"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = (0, _redux.combineReducers)({
  error: _error["default"],
  loader: _loader["default"],
  movies: _getMovies["default"],
  movieDetails: _getMovieById["default"],
  similarMovies: _getSimilarMovies["default"]
});

exports["default"] = _default;