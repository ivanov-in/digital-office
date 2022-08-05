import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PasswordTooltip } from "../password-tooltip/PasswordTooltip";
import "./RecoveryForm.scss";

const RecoveryForm = () => {
  const [isPasswordChangeSuccess, setIsPasswordChangeSuccess] = useState(false);
  const [showTooltip, setShowTootip] = useState(false);
  const [login, setLogin] = useState("");
  const [isPasswordShow, setIsPasswordShow] = useState(false);
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [secretPassword, setSecretPassword] = "";
  const [passwordValidation, setPasswordValidation] = useState({
    noSpaceSymbol: true,
  });

  const togglePasswordVisibility = () => {
    if (isPasswordShow) {
      setIsPasswordShow(false);
    } else {
      setIsPasswordShow(true);
    }
  };

  const checkPassword = (e) => {
    setPassword(e.target.value);
    const validationResult = {};

    if (e.target.value.length >= 8) {
      validationResult.moreEightCharacters = true;
    }

    if (!/^[^A-ZА-ЯЁ]*$/.test(e.target.value)) {
      validationResult.capitalLetters = true;
    }

    if (!/^[^a-zа-яё]*$/.test(e.target.value)) {
      validationResult.lowerLetters = true;
    }

    if (!/^[^0-9]*$/.test(e.target.value)) {
      validationResult.haveNumbers = true;
    }

    if (/(?=.*[-#!$@%^&*_+~=:;?'"№()/\\.,`<>])/.test(e.target.value)) {
      validationResult.haveSpecialSymbols = true;
    }

    if (e.target.value.indexOf(" ") < 0) {
      validationResult.noSpaceSymbol = true;
    }

    setPasswordValidation(validationResult);
  };

  return (
    <div>
      <form className={isPasswordChangeSuccess ? "hidden" : "form-container"}>
        <p className="input-caption">Логин или e-mail</p>
        <input
          className="form-input"
          placeholder="Логин или e-mail"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        ></input>
        <p className="input-caption">Введи новый пароль</p>
        <div className="password-container">
          <input
            className="form-input"
            placeholder="Новый пароль"
            type={isPasswordShow ? "" : "password"}
            onFocus={() => setShowTootip(true)}
            onBlur={() => setShowTootip(false)}
            value={password}
            onChange={(e) => checkPassword(e)}
          ></input>
          <button
            className="visibility-button"
            type="button"
            onClick={togglePasswordVisibility}
          ></button>
        </div>
        <p className="input-caption">Повтори новый пароль</p>
        <div className="password-container">
          <input
            className="form-input"
            placeholder="Новый пароль"
            type={isPasswordShow ? "" : "password"}
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
          ></input>
          <button
            className="visibility-button"
            type="button"
            onClick={togglePasswordVisibility}
          ></button>
        </div>
        <p className="input-caption">Введи секретный пароль</p>
        <input
          className="form-input"
          placeholder="Секретный пароль"
          value={secretPassword}
          onChange={(e) => setSecretPassword(e.target.value)}
        ></input>
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
      <PasswordTooltip
        passwordValidation={passwordValidation}
        isShow={showTooltip}
      />
    </div>
  );
};

export { RecoveryForm };
