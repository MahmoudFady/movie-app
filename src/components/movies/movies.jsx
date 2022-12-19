import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMovies, searchByName } from "./movie-http";
import "./movies.css";
import Movie from "./movie/movie";
import { useSelector } from "react-redux";
import Loader from "../shared/loader/loader";
import Error from "../shared/error/error";
const Movies = () => {
  const { movieState } = useParams();
  const [movies, setMovies] = useState([]);
  const [pageIndex, setPageIndex] = useState(1);
  const loader = useSelector((data) => data.loader.loader);
  const error = useSelector((data) => data.error.error);
  useEffect(() => {
    getMovies(movieState, pageIndex).then((response) => {
      const movies = response.data.results;
      setMovies(movies);
    });
  }, [movieState, pageIndex]);
  const handleMovieSearch = (e) => {
    const target = e.target.value;
    const moviesPromise =
      target.trim() === ""
        ? getMovies(movieState, pageIndex)
        : searchByName(target);
    moviesPromise.then((response) => {
      const movies = response.data.results;
      setMovies(movies);
    });
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
