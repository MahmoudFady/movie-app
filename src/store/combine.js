import { combineReducers } from "redux";
import error from "./reducers/error";
import loader from "./reducers/loader";
export default combineReducers({
  error,
  loader,
});
