import React from "react";
import "./Preloader.scss";

const Preloader = () => {
  return (
    <div className="preloader">
      <img className="preloader__image" src="./images/preloader.svg" alt="Loading..." />
    </div>
  );
};

export default Preloader;
