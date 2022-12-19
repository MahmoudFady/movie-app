import { useHistory } from "react-router-dom";
import "./404.css";
const PageNotFound = () => {
  const history = useHistory();
  const back = () => {
    history.push("/movies/m/popular");
  };
  return (
    <>
      <div className="page-not-found row mt-5 flex-column justify-content-center align-items-center">
        <div className="col-xs-6 col-sm-6 col-md-4 alert alert-danger">
          <p>page not found</p>
        </div>
        <div className="col-xs-8 col-sm-6 col-md-4">
          {" "}
          <button className="btn btn-light" onClick={back}>
            {" "}
            <i className="fa-solid fa-backword"></i> back
          </button>
        </div>
      </div>
    </>
  );
};
export default PageNotFound;
