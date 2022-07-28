import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./LoginForm.scss";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthFirst: false,
    };
  }
  render() {
    const { isAuthFirst } = this.state;

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
          <button className="login-button">Войти</button>
          <Link
            className={isAuthFirst ? "hidden" : "forgot-link"}
            to="/auth/forgot"
          >
            О нет! Я забыл пароль
          </Link>
        </form>
      </div>
    );
  }
}

export default LoginForm;
