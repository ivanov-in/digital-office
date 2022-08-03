import React from "react";

import "./LoginPage.scss";
import { LoginHeader } from "../../components/login-header/LoginHeader";
import { LoginForm } from "../../components/login-form/LoginForm";
import footerImage from "../../images/pattern.png";

const LoginPage = () => {
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
};

export { LoginPage };
