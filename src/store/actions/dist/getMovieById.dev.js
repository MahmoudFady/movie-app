"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axiosInstance = _interopRequireDefault(require("../../components/axios-instance"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getMovieById = function getMovieById(id) {
  return function _callee(dispatch) {
    var response;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return regeneratorRuntime.awrap(_axiosInstance["default"].get("movie/".concat(id)));

          case 3:
            response = _context.sent;
            return _context.abrupt("return", dispatch({
              type: "GET_MOVIE_BY_ID",
              movie: response.data
            }));

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0.message);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 7]]);
  };
};

var _default = getMovieById;
exports["default"] = _default;