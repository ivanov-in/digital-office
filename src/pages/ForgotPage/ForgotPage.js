import React, { Component } from "react";

import "./ForgotPage.scss";
import LoginHeader from "../../components/login-header/LoginHeader";

import footerImage from "../../images/pattern.png";
import { Link } from "react-router-dom";
import ForgotForm from "../../components/forgot-form/ForgotForm";

class ForgotPage extends Component {
  render() {
    return (
      <div className="forgot-container">
        <Link className="auth-link" to="/auth">Назад</Link>
        <LoginHeader />
        <ForgotForm/>
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

export default ForgotPage;
