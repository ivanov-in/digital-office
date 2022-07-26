import React, { Component } from "react";
import logo from "../../images/logo.png";
import "./LoginHeader.scss";

class LoginHeader extends Component {
  render() {
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
  }
}

export default LoginHeader;
