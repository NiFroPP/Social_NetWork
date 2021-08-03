import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <a className="footer__github" href="https://github.com/NiFroPP" target="_blank" rel="noreferrer">
          Github
        </a>
        <a className="footer__rss" href="https://rs.school/js/" target="_blank" rel="noreferrer">
          <div className="footer__rss-content">
            <div className="footer__rss-image"></div>
            <div className="footer__rss-year">'21</div>
          </div>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
