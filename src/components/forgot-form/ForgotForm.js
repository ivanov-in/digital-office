import React, { Component } from "react";
import "./ForgotForm.scss";

class ForgotForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isResetSuccess: false,
      email: "a@a.com",
    };
  }
  render() {
    const { isResetSuccess, email } = this.state;

    return (
      <div>
        <form className={isResetSuccess ? "hidden" : "form-container"}>
          <p className="input-caption">
            Введи свой логин или e-mail, и в течение 10 минут мы вышлем тебе на
            почту ссылку для смены пароля.
          </p>
          <input className="form-input" placeholder="Логин или e-mail"></input>
          <button className="reset-button">Сменить пароль</button>
        </form>
        <p className={isResetSuccess ? "input-caption" : "hidden"}>
          Ссылка для сброса пароля была отправлена на почту {email}
        </p>
      </div>
    );
  }
}

export default ForgotForm;
