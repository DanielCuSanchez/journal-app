import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "./../../hooks/useForm";
import {
  startGoogleLogin,
  startLoginEmailPassword,
} from "./../../actions/auth";

export const LoginScreen = () => {
  const dispatch = useDispatch();

  const [formValues, handleChange] = useForm({
    email: "danielcu@gmail.com",
    password: "123456",
  });

  const { email, password } = formValues;

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(startLoginEmailPassword(email, password));
  };

  const handleGoogleLogin = () => {
    dispatch(startGoogleLogin());
  };

  return (
    <>
      <h3 className="auth__title">Login</h3>
      <form onSubmit={handleLogin}>
        <input
          className="auth__input"
          type="text"
          placeholder="email"
          name="email"
          autoComplete="off"
          value={email}
          onChange={handleChange}
        />
        <input
          className="auth__input"
          type="password"
          placeholder="password"
          name="password"
          autoComplete="off"
          value={password}
          onChange={handleChange}
        />
        <button type="submit" className="btn btn-primary btn-block">
          Login
        </button>
        <div className="auth__social-networks">
          <p>Log with social networks</p>
          <div className="google-btn" onClick={handleGoogleLogin}>
            <div className="google-icon-wrapper">
              <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="google button"
              />
            </div>
            <p className="btn-text">
              <b>Sign in with google</b>
            </p>
          </div>
          <a href="/auth/register" className="link mt-5">
            Register account
          </a>
        </div>
      </form>
    </>
  );
};
