import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div class="footer__container">
        <a class="footer__github" href="https://github.com/NiFroPP" target="_blank" rel="noreferrer">
          Github
        </a>
        <a class="footer__rss" href="https://rs.school/js/" target="_blank" rel="noreferrer">
          <div class="footer__rss-content">
            <div class="footer__rss-image"></div>
            <div class="footer__rss-year">'21</div>
          </div>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
