import axios from "axios";
import changeLoader from "../store/actions/loader";
import changeError from "../store/actions/error";
import store from "../store/store";
const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});
axiosInstance.interceptors.request.use(
  (req) => {
    req.params = { api_key: "a61e7e79de46af66f3609a59e8e08af5" };
    store.dispatch(changeLoader(true));
    return req;
  },
  (err) => {
    return Promise.reject(err);
  }
);
axiosInstance.interceptors.response.use(
  (response) => {
    store.dispatch(changeLoader(false));
    const error =
      response.data.results?.length === 0 ? "no movies found" : null;
    store.dispatch(changeError(error));
    return response;
  },
  (err) => {
    store.dispatch(changeError(err.message));
    store.dispatch(changeLoader(false));
    return Promise.reject(err);
  }
);
export default axiosInstance;
