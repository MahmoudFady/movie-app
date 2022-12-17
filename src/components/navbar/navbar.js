import "./navbar.css";
import { Link } from "react-router-dom";
const Navbar = (props) => {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <Link className="navbar-brand" to="/movies/m/popular">
          <img src="https://www.watchit.com/assets/images/logo.png" alt="" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fa-solid fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/movies/m/popular">
                {" "}
                <i class="fa-solid fa-fire"></i> popular
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/movies/m/top_rated">
                {" "}
                <i className="fa-solid fa-arrow-trend-up"></i> top rated
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/movies/m/upcoming">
                {" "}
                <i class="fas fa-spinner"></i> coming soon
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/user/auth/signin">
                {" "}
                <i className="fa-solid fa-arrow-right-to-bracket"></i> sign in
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/user/auth/signup">
                {" "}
                <i className="fa-solid fa-user-plus"></i> sign up
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
