import React from "react";

import "./ForgotPage.scss";
import { Link } from "react-router-dom";
import { LoginHeader } from "../../components/login-header/LoginHeader";
import { ForgotForm } from "../../components/forgot-form/ForgotForm";
import footerImage from "../../images/pattern.png";

const ForgotPage = () => {
  return (
    <div className="forgot-container">
      <Link className="auth-link" to="/auth">
        Назад
      </Link>
      <LoginHeader />
      <ForgotForm />
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

export { ForgotPage };
