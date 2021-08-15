import React from "react";
import "./Header.scss";
import LoginBlock from "./LoginBlock/LoginBlock";

const Header = props => {
  return (
    <header className="header">
      <div className="header__container">
        <img src="/my-social-logo.png" alt="social" />
        <h1 className="header__title">My Social Network</h1>
        <LoginBlock isAuth={props.isAuth} login={props.login} />
      </div>
    </header>
  );
};

export default Header;
