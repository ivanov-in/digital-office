import React, { Component } from "react";

import "./RecoveryPage.scss";
import LoginHeader from "../../components/login-header/LoginHeader";
import RecoveryForm from "../../components/recovery-form/RecoveryForm";
import footerImage from "../../images/pattern.png";

class LoginPage extends Component {
  render() {
    return (
      <div className="recovery-container">
        <LoginHeader />
        <RecoveryForm/>
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
