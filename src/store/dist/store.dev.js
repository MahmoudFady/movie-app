"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _reduxThunk = _interopRequireDefault(require("redux-thunk"));

var _combine = _interopRequireDefault(require("./combine"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var store = (0, _redux.createStore)(_combine["default"], (0, _redux.applyMiddleware)(_reduxThunk["default"]));
var _default = store;
exports["default"] = _default;