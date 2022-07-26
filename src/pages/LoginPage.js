import React, { Component } from "react";

import "./LoginPage.scss";
import LoginHeader from "../components/login-header/LoginHeader";
import LoginForm from "../components/login-inputs/LoginForm";
import footerImage from "../images/pattern.png";

class LoginPage extends Component {
  render() {
    return (
      <div className="login-container">
        <LoginHeader />
        <LoginForm />
        <img
          className="footer-image"
          src={footerImage}
          alt=""
          width="100%"
          height="254px"
        />
      </div>
    );
  }
}

export default LoginPage;
