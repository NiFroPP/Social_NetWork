import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <img src="/my-social-logo.png" alt="social" />
        <h1 className="header__title">My Social Network</h1>
      </div>
    </header>
  );
};

export default Header;
