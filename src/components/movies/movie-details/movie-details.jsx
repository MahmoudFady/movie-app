import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMovieDetailsById, getSimilarMovies } from "../movie-http";
import { useSelector } from "react-redux";
import Movie from "../movie/movie";
import Loader from "../../shared/loader/loader";
import Error from "../../shared/error/error";
import "./movie-details.css";
const MovieDetails = (props) => {
  const loader = useSelector((data) => data.loader.loader);
  const error = useSelector((data) => data.error.error);
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [similarMovies, setSimilarMovies] = useState([]);

  useEffect(() => {
    getMovieDetailsById(id).then((response) => {
      const movie = response.data;
      setMovie(movie);
      console.log(movie);
    });
    getSimilarMovies(id).then((response) => {
      const movies = response.data.results;
      setSimilarMovies(movies);
      console.log(similarMovies);
    });
  }, [id]);
  return (
    <>
      {!loader && !error && (
        <div className="row movie-details-hook">
          <div className="col-xs-12 col-sm-4">
            <img
              className="poster-img"
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            />
          </div>
          <div className="col-xs-12 col-sm-8">
            <div className="movie-details">
              <div className="title">
                {" "}
                <h3>{movie.title}</h3>
                <p>{movie.tagline}</p>
              </div>
              <div className="movie-time">
                <span className="release_date">
                  {" "}
                  <i class="fa-solid fa-calendar-days"></i>
                  {new Date(movie.release_date).toDateString()}
                </span>
                <span className="runtime">
                  <i class="fa-solid fa-clock"></i>
                  {movie.runtime} min
                </span>
              </div>
              <div className="rate">
                <h5>
                  <i class="fa-solid fa-star"></i> rate
                </h5>
                <div className="rate-container">
                  <span style={{ width: movie.vote_average * 10 + "%" }}>
                    {Math.round(movie.vote_average * 10)} %
                  </span>
                </div>
              </div>
              <div className="overview">
                {" "}
                <h5>overview</h5>
                <p>{movie.overview}</p>
              </div>
              <div className="watch-now">
                <button className="btn">
                  <i class="fa-solid fa-play"></i> watch now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="row">
        <Loader />
        <Error />
      </div>
      <div className="row" style={{ "margin-top": "50px" }}>
        {""}
        {similarMovies.map((movie, index) => (
          <Movie movie={movie} />
        ))}
      </div>
    </>
  );
};
export default MovieDetails;
