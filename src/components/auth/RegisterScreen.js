import React from "react";
import { useDispatch, useSelector } from "react-redux";
import validator from "validator";
import { startRegisterEmailPassword } from "../../actions/auth";
import { removeError, setError } from "../../actions/ui";
import { useForm } from "../../hooks/useForm";

export const RegisterScreen = () => {
  const dispatch = useDispatch();
  const { msgError } = useSelector((state) => state.ui);

  const [formValues, handleChange] = useForm({
    name: "Daniel",
    email: "dani@gmail.com",
    password: "12345678",
    password2: "12345678",
  });

  const { name, email, password, password2 } = formValues;

  const handleRegister = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      dispatch(startRegisterEmailPassword(email, password, name));
    }
  };

  const isFormValid = () => {
    if (name.trim().length === 0) {
      dispatch(setError("name is required"));
      return false;
    } else if (!validator.isEmail(email)) {
      dispatch(setError("email is required"));
      return false;
    } else if (
      password !== password2 ||
      !validator.isLength(password, { min: 6 })
    ) {
      dispatch(
        setError(
          "password should be at least 6 characters and match to each other"
        )
      );
      return false;
    }

    dispatch(removeError());
    return true;
  };

  return (
    <>
      <h3 className="auth__title">Register</h3>
      <form onSubmit={handleRegister}>
        {msgError && <div className="auth__alert-error">{msgError}</div>}
        <input
          className="auth__input"
          type="text"
          placeholder="name"
          name="name"
          autoComplete="off"
          value={name}
          onChange={handleChange}
        />
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
        <input
          className="auth__input"
          type="password"
          placeholder="confirm password"
          name="password2"
          autoComplete="off"
          value={password2}
          onChange={handleChange}
        />
        <button type="submit" className="btn btn-primary btn-block">
          Login
        </button>
      </form>
      <div className="auth__social-networks">
        <a href="/auth/login" className="link mt-5">
          Are you ready resgistered
        </a>
      </div>
    </>
  );
};
