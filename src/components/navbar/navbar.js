import "./navbar.css";
const Navbar = (props) => {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <a className="navbar-brand" href="">
          <img src="https://www.watchit.com/assets/images/logo.png" alt="" />
        </a>
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
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link">
                {" "}
                <i className="fa-solid fa-house"></i> Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="">
                {" "}
                <i className="fa-solid fa-arrow-trend-up"></i> trends
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="">
                {" "}
                <i className="fa-solid fa-heart-circle-check"></i> Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="">
                {" "}
                <i className="fa-solid fa-arrow-right-to-bracket"></i> sign in
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="">
                {" "}
                <i className="fa-solid fa-user-plus"></i> sign up
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
