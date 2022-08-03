import React from "react";

import "./RecoveryPage.scss";
import { LoginHeader } from "../../components/login-header/LoginHeader";
import { RecoveryForm } from "../../components/recovery-form/RecoveryForm";
import footerImage from "../../images/pattern.png";

const RecoveryPage = () => {
  return (
    <div className="recovery-container">
      <LoginHeader />
      <RecoveryForm />
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

export { RecoveryPage };
