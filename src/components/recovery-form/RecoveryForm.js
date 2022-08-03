import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./RecoveryForm.scss";

const RecoveryForm = () => {
  const [isPasswordChangeSuccess, setIsPasswordChangeSuccess] = useState(false);

  return (
    <div>
      <form className={isPasswordChangeSuccess ? "hidden" : "form-container"}>
        <p className="input-caption">Логин или e-mail</p>
        <input className="form-input" placeholder="Логин или e-mail"></input>
        <p className="input-caption">Введи новый пароль</p>
        <div className="password-container">
          <input className="form-input" placeholder="Новый пароль"></input>
          <button className="visibility-button"></button>
        </div>
        <p className="input-caption">Повтори новый пароль</p>
        <div className="password-container">
          <input className="form-input" placeholder="Новый пароль"></input>
          <button className="visibility-button"></button>
        </div>
        <p className="input-caption">Введи секретный пароль</p>
        <input className="form-input" placeholder="Секретный пароль"></input>
        <button className="login-button">Сменить пароль</button>
      </form>
      <div
        className={
          isPasswordChangeSuccess ? "recovery-success-container" : "hidden"
        }
      >
        <p className="success-message">Пароль был успешно изменен</p>
        <button className="login-button">Войти</button>
      </div>
    </div>
  );
};

export { RecoveryForm };
