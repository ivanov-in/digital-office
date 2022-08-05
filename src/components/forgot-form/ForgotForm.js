import React, { useState } from "react";
import "./ForgotForm.scss";

const ForgotForm = () => {
  const [isResetSuccess, setIsResetSuccess] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <div>
      <form className={isResetSuccess ? "hidden" : "form-container"}>
        <p className="input-caption">
          Введи свой логин или e-mail, и в течение 10 минут мы вышлем тебе на
          почту ссылку для смены пароля.
        </p>
        <input
          className="form-input"
          placeholder="Логин или e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <button className="reset-button">Сменить пароль</button>
      </form>
      <p className={isResetSuccess ? "input-caption" : "hidden"}>
        Ссылка для сброса пароля была отправлена на почту {email}
      </p>
    </div>
  );
};

export { ForgotForm };
