const Loader = (props) => {
  const { loader } = props;
  return (
    <>
      {loader && (
        <div className="col text-center mt-25 loading">
          <h5>loading...</h5>
          <span className="spinner-border"></span>
        </div>
      )}
    </>
  );
};
export default Loader;
