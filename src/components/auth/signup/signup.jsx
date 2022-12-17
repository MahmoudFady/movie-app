import { useState } from "react";
import { Link } from "react-router-dom";
import { handleInputError } from "../validation";
const Signup = (props) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    name: true,
    email: true,
    phone: true,
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
    <div className="row auth-sinup auth-template">
      <div className="col-md-6 col-lg-5">
        <form onSubmit={handleSubmit}>
          <div className="header">
            <i className="fa-solid fa-user-plus"></i>
          </div>
          <div className="form-group">
            <h4>sign up</h4>
          </div>
          <div className="form-group">
            <i className="fa-solid fa-user"></i>
            <input
              type="name"
              placeholder="name..."
              name="name"
              value={user.name}
              onChange={handleInputChange}
              onFocus={handleInputChange}
              onBlur={handleInputChange}
            />
            {!errors.name ? (
              <i className="fa-solid fa-check"></i>
            ) : (
              <i className="fa-solid fa-circle-exclamation"></i>
            )}
          </div>
          {errors.name && (
            <div className="input-err-msg">
              <p>{errors.name}</p>
            </div>
          )}
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
            <i className="fa-solid fa-phone"></i>
            <input
              type="tel"
              placeholder="phone num..."
              name="phone"
              value={user.phone}
              onChange={handleInputChange}
              onFocus={handleInputChange}
              onBlur={handleInputChange}
            />
            {!errors.phone ? (
              <i className="fa-solid fa-check"></i>
            ) : (
              <i className="fa-solid fa-circle-exclamation"></i>
            )}
          </div>
          {errors.phone && (
            <div className="input-err-msg">
              <p>{errors.phone}</p>
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
          <div className="form-group">
            <button
              className="btn"
              type="submit"
              disabled={
                errors.name || errors.email || errors.phone || errors.password
              }
            >
              <i className="fa-solid fa-right-to-bracket"></i> sign up
            </button>
          </div>
          <div className="form-group text-center switch-auth">
            <p>
              already have account ?{" "}
              <Link to="/user/auth/signin" className="text-danger">
                signin now
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Signup;
