import React, { useState } from "react";
import { Link } from "react-router-dom";
import { login } from "../../api/login";
import "./LoginForm.scss";

const LoginForm = () => {
  const [isAuthFirst, setIsAuthFirst] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    return login();
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
        ></input>
        <p className="input-caption">Введи пароль из письма</p>
        <div className="password-container">
          <input className="form-input" placeholder="Пароль"></input>
          <button className="visibility-button"></button>
        </div>
        <button className="login-button" onClick={handleLogin}>
          Войти
        </button>
        <Link
          className={isAuthFirst ? "hidden" : "forgot-link"}
          to="/auth/forgot"
        >
          О нет! Я забыл пароль
        </Link>
      </form>
    </div>
  );
};

export { LoginForm };
