import "./movie.css";
import { Link } from "react-router-dom";
const Movie = (props) => {
  const { id, poster_path, original_title, release_date, vote_average, adult } =
    props.movie;
  return (
    <div class="col-xs-2 col-sm-6 col-md-4 col-lg-3 movie-container">
      <Link to={"/movies/" + id}>
        <div className="movie-card">
          <div className="header">
            <img
              src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
              alt=""
            />
            <span className="vote_avg">{vote_average * 10}%</span>
            {adult && <span className="adult">+18</span>}
          </div>
          <div className="foot">
            <h5>{original_title}</h5>
            <h6>{new Date(release_date).toDateString()}</h6>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default Movie;
