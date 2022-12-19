const Error = (props) => {
  const { loader, error } = props;
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
