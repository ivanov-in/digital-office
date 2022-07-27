import React, { Component } from "react";
import "./ForgotForm.scss";

class ForgotForm extends Component {
  render() {
    return (
      <div>
        <form className="form-container">
          <p className="input-caption">
            Введи свой логин или e-mail, и в течение 10 минут мы вышлем тебе на
            почту ссылку для смены пароля.
          </p>
          <input className="form-input" placeholder="Логин или e-mail"></input>
          <button className="reset-button">Сменить пароль</button>
        </form>
      </div>
    );
  }
}

export default ForgotForm;
