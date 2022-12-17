import "./sigin.css";
import { useState } from "react";
const Signin = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({
    email: true,
    password: true,
  });
  const isInvalidInput = (name, value) => {
    if (value.trim() == "") {
      return `${name} is required`;
    }
    return false;
  };
  const isInvalidEmail = (email) => {
    if (isInvalidInput("email", email)) {
      return isInvalidInput("email", email);
    }
    const emailRegEx = new RegExp(
      /^([a-zA-Z]{1,21}[0-9]{0,10}@(gmail|yahoo)\.com)$/
    );
    if (!emailRegEx.test(email)) {
      return "invalid email ex : abc@gmail.com";
    }
    return false;
  };
  const handleInputChange = (e) => {
    const filed = e.target;
    const { name, value } = filed;
    setUser({
      ...user,
      [name]: value.trim(),
    });
    const error =
      name == "email" ? isInvalidEmail(value) : isInvalidInput(name, value);
    setErrors({
      ...errors,
      [name]: error ? error : null,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="row auth-signin">
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
              disabled={errors.email || errors.password ? true : false}
            >
              <i className="fa-solid fa-right-to-bracket"></i> sign in
            </button>
          </div>
          <div className="form-group text-center switch-auth">
            <p>
              don't have account ?{" "}
              <a className="text-danger" href="#">
                signup now
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Signin;
