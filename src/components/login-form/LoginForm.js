import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../api/login";
import "./LoginForm.scss";

const LoginForm = () => {
  const [isAuthFirst, setIsAuthFirst] = useState(false);
  const [isPasswordShow, setIsPasswordShow] = useState(false);
  const [AuthError, setAuthError] = useState(false);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleClickLogin = async () => {
    const res = await auth(login, password);

    if (res.status === 200) {
      console.log(res);
    } else if (res.status === 404) {
      setAuthError(true);
    }
  };

  const togglePasswordVisibility = () => {
    if (isPasswordShow) {
      setIsPasswordShow(false);
    } else {
      setIsPasswordShow(true);
    }
  };

  return (
    <div>
      <form className="form-container">
        <p className="input-caption">
          {isAuthFirst
            ? "Придумай логин"
            : "Введи логин или корпоративный e-mail"}
        </p>
        <input
          className="form-input"
          placeholder={isAuthFirst ? "Новый логин" : "Логин или e-mail"}
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        ></input>
        <p className="input-caption">Введи пароль из письма</p>
        <div className="password-container">
          <input
            className="form-input"
            placeholder="Пароль"
            type={isPasswordShow ? "" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <button
            className="visibility-button"
            type="button"
            onClick={togglePasswordVisibility}
          ></button>
        </div>
        <button
          className="login-button"
          onClick={handleClickLogin}
          type="button"
        >
          Войти
        </button>
        <Link
          className={`${isAuthFirst ? "hidden" : "forgot-link"} ${
            AuthError ? "error" : ""
          }`}
          to="/forgot"
        >
          О нет! Я забыл пароль
        </Link>
      </form>
    </div>
  );
};

export { LoginForm };
