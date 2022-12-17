import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  timeout: 1000,
  params: { api_key: "a61e7e79de46af66f3609a59e8e08af5" },
});
export default axiosInstance;
