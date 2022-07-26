import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./LoginForm.scss";

class LoginInputs extends Component {
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
          <input className="login-input" placeholder="Логин или e-mail"></input>
          <p className="input-caption">Введи пароль из письма</p>
          <div>
            <input className="login-input" placeholder="Пароль"></input>
            <button className="visibility-button"></button>
          </div>
          <button className="login-button">Войти</button>
          <Link className={isAuthFirst ? "hidden" : "reset-link"} to="/restore">
            О нет! Я забыл пароль
          </Link>
        </form>
      </div>
    );
  }
}

export default LoginInputs;
