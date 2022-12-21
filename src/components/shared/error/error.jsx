import { useSelector } from "react-redux";
const Error = (props) => {
  const loader = useSelector((data) => data.loader.loader);
  const error = useSelector((data) => data.error.error);
  return (
    <>
      {!loader && error && (
        <div className="col-12 text-center mt-25">
          <h5>{error}</h5>
        </div>
      )}
    </>
  );
};
export default Error;
