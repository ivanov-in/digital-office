import React from "react";
import logo from "../../images/logo.png";
import "./LoginHeader.scss";

const LoginHeader = () => {
  return (
    <div className="header-container">
      <img
        className="logo"
        src={logo}
        alt="logo"
        width="34px"
        height="34px"
      ></img>
      <p>Цифровой офис</p>
    </div>
  );
};

export { LoginHeader };
