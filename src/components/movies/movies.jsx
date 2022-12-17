import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMovies, searchByName } from "./movie-http";
import "./movies.css";
import Movie from "./movie/movie";
const Movies = (props) => {
  const [loading, setLoading] = useState(false);
  const { state } = useParams();
  const [movies, setMovies] = useState([]);
  const [responseError, setResponseError] = useState(null);
  const [pageIndex, setPageIndex] = useState(1);
  useEffect(() => {
    setLoading(true);
    getMovies(state, pageIndex)
      .then((response) => {
        const movies = response.data.results;
        setMovies(movies);
        setTimeout(() => {
          setLoading(false);
          setResponseError(movies.length == 0 ? "no movie founded" : null);
        }, 250);
      })
      .catch((err) => {
        setResponseError(err.message);
        setLoading(false);
      });
  }, [state, pageIndex]);
  const handleMovieSearch = (e) => {
    const target = e.target.value;
    const moviesPromise =
      target.trim() === "" ? getMovies(state, pageIndex) : searchByName(target);
    moviesPromise
      .then((response) => {
        const movies = response.data.results;
        setMovies(movies);
        setResponseError(movies.length == 0 ? "no movie founded" : null);
      })
      .catch((err) => {
        setResponseError(err.message);
      });
  };
  const handleMoviesPageIndex = (operator) => {
    const num = operator === "+" ? 1 : -1;
    setPageIndex(num + pageIndex);
  };
  return (
    <>
      <div className="row search-contolls mt-5">
        <div className="col-md-6">
          <input
            type="text"
            placeholder="search..."
            onChange={handleMovieSearch}
          />
          <i className="fa-solid fa-search"></i>
        </div>
      </div>
      <div className="movies-hook row">
        {" "}
        <div className="pagination-controlls col-12">
          <button
            type="btn"
            disabled={pageIndex == 1}
            onClick={() => handleMoviesPageIndex("-")}
          >
            <i class="fa-solid fa-arrow-left"></i> prev
          </button>
          <button onClick={() => handleMoviesPageIndex("+")}>
            next <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
        {!loading &&
          movies.map((movie, index) => <Movie key={index} movie={movie} />)}
      </div>
      <div className="row">
        {loading && (
          <div className="col text-center mt-25 loading">
            <h5>loading...</h5>
            <span className="spinner-border"></span>
          </div>
        )}
        {responseError && (
          <div className="col-12 text-center mt-25">
            <h5>{responseError}</h5>
          </div>
        )}
      </div>
    </>
  );
};
export default Movies;
