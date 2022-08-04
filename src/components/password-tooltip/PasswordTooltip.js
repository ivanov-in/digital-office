import React from "react";

import "./PasswordTooltip.scss";
import iconWrong from "../../images/PasswordTooltip_wrong.png";
import iconDone from "../../images/PasswordTooltip_done.png";

const PasswordTooltip = (props) => {
  return (
    <div className={`tooltip-container ${props.isShow ? "" : "hidden"}`}>
      <div className="tooltip-item">
        <img
          className="tooltip-status"
          src={
            props.passwordValidation.moreEightCharacters ? iconDone : iconWrong
          }
          alt=""
        />
        <p>не менее восьми символов</p>
      </div>
      <div className="tooltip-item">
        <img
          className="tooltip-status"
          src={props.passwordValidation.capitalLetters ? iconDone : iconWrong}
          alt=""
        />
        <p>заглавные буквы</p>
      </div>
      <div className="tooltip-item">
        <img
          className="tooltip-status"
          src={props.passwordValidation.lowerLetters ? iconDone : iconWrong}
          alt=""
        />
        <p>строчные буквы</p>
      </div>
      <div className="tooltip-item">
        <img
          className="tooltip-status"
          src={props.passwordValidation.haveNumbers ? iconDone : iconWrong}
          alt=""
        />
        <p>минимум 1 цифра</p>
      </div>
      <div className="tooltip-item">
        <img
          className="tooltip-status"
          src={
            props.passwordValidation.haveSpecialSymbols ? iconDone : iconWrong
          }
          alt=""
        />
        <p>минимум 1 специальный символ</p>
      </div>
      <div className="tooltip-item">
        <img
          className="tooltip-status"
          src={props.passwordValidation.noSpaceSymbol ? iconDone : iconWrong}
          alt=""
        />
        <p>нельзя использовать пробел</p>
      </div>
    </div>
  );
};

export { PasswordTooltip };
