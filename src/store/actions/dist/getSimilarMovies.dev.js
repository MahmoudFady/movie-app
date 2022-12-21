"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axiosInstance = _interopRequireDefault(require("../../components/axios-instance"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getSimilarMovies = function getSimilarMovies(id) {
  var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return function _callee(dispatch) {
    var response;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return regeneratorRuntime.awrap(_axiosInstance["default"].get("movie/".concat(id, "/similar?page=").concat(page)));

          case 3:
            response = _context.sent;
            return _context.abrupt("return", dispatch({
              type: "GET_SIMILAR_MOVIES",
              movies: response.data.results
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

var _default = getSimilarMovies;
exports["default"] = _default;