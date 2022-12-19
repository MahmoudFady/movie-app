import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMovieDetailsById } from "../movie-http";
import { useSelector } from "react-redux";
import Loader from "../../shared/loader/loader";
import Error from "../../shared/error/error";

const MovieDetails = (props) => {
  const loader = useSelector((data) => data.loader.loader);
  const error = useSelector((data) => data.error.error);
  const { id } = useParams();
  const [movie, setMovie] = useState();
  useEffect(() => {
    getMovieDetailsById(id).then((response) => {
      const movie = response.data;
      setMovie(movie);
    });
  }, [id]);
  return (
    <>
      {!loader && !error && (
        <div className="movie-details-hook">
          <h3>movie details</h3>
          <p>welcome to smsm</p>
        </div>
      )}
      <div className="row">
        <Loader />
        <Error />
      </div>
    </>
  );
};
export default MovieDetails;
