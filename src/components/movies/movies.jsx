import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import getMovies from "../../store/actions/getMovies";
import "./movies.css";
import Movie from "./movie/movie";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../shared/loader/loader";
import Error from "../shared/error/error";
const Movies = () => {
  const { movieState } = useParams();
  const movies = useSelector((data) => data.movies);
  const dispatch = useDispatch();
  const [pageIndex, setPageIndex] = useState(1);
  const loader = useSelector((data) => data.loader.loader);
  useEffect(() => {
    dispatch(getMovies(`movie/${movieState}?page=${pageIndex}`));
  }, [movieState, pageIndex]);
  const handleMovieSearch = (e) => {
    const target = e.target.value;
    const url =
      target.trim() === ""
        ? `movie/${movieState}?page=${pageIndex}`
        : `search/movie?query=${target}`;
    dispatch(getMovies(url));
  };
  const handleMoviesPageIndex = (num) => {
    setPageIndex(num + pageIndex);
  };
  return (
    <>
      <div className="row search-contolls mt-5">
        <div className="col-md-6">
          <input
            type="text"
            placeholder="search..."
            onKeyUp={handleMovieSearch}
          />
          <i className="fa-solid fa-search"></i>
        </div>
      </div>
      <div className="row">
        <div className="pagination-controlls col-12">
          <button
            type="btn"
            disabled={pageIndex === 1}
            onClick={() => handleMoviesPageIndex(-1)}
          >
            <i class="fa-solid fa-arrow-left"></i> prev
          </button>
          <button onClick={() => handleMoviesPageIndex(1)}>
            next <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
      <div className="movies-hook row">
        {" "}
        {!loader &&
          movies.map((movie, index) => <Movie key={index} movie={movie} />)}
      </div>
      <div className="row">
        <Loader />
        <Error />
      </div>
    </>
  );
};
export default Movies;
