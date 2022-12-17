import "./sigin.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { handleInputError } from "../validation";
const Signin = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({
    email: true,
    password: true,
  });

  const handleInputChange = (e) => {
    const filed = e.target;
    const { name, value } = filed;
    setUser({
      ...user,
      [name]: value.trim(),
    });
    const error = handleInputError(name, value);
    setErrors({
      ...errors,
      [name]: error ? error : null,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="row auth-signin auth-template">
      <div className="col-md-6 col-lg-5">
        <form onSubmit={handleSubmit}>
          <div className="header">
            <i className="fa-solid fa-user"></i>
          </div>
          <div className="form-group">
            <h4>sign in</h4>
          </div>
          <div className="form-group">
            <i className="fa-solid fa-envelope"></i>
            <input
              type="email"
              placeholder="email..."
              name="email"
              value={user.email}
              onChange={handleInputChange}
              onFocus={handleInputChange}
              onBlur={handleInputChange}
            />
            {!errors.email ? (
              <i className="fa-solid fa-check"></i>
            ) : (
              <i className="fa-solid fa-circle-exclamation"></i>
            )}
          </div>
          {errors.email && (
            <div className="input-err-msg">
              <p>{errors.email}</p>
            </div>
          )}
          <div className="form-group">
            <i className="fa-solid fa-lock"></i>
            <input
              type="password"
              placeholder="password..."
              name="password"
              value={user.password}
              onChange={handleInputChange}
              onFocus={handleInputChange}
              onBlur={handleInputChange}
            />
            {!errors.password ? (
              <i className="fa-solid fa-check"></i>
            ) : (
              <i className="fa-solid fa-circle-exclamation"></i>
            )}
          </div>
          {errors.password && (
            <div className="input-err-msg">
              <p>{errors.password}</p>
            </div>
          )}
          <div className="form-group text-danger forget-password">
            <p>
              <a href="#">forget password ?</a>
            </p>
          </div>
          <div className="form-group">
            <button
              className="btn"
              type="submit"
              disabled={errors.email || errors.password}
            >
              <i className="fa-solid fa-right-to-bracket"></i> sign in
            </button>
          </div>
          <div className="form-group text-center switch-auth">
            <p>
              don't have account ?{" "}
              <Link to="/user/auth/signup" className="text-danger">
                signup now
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Signin;
