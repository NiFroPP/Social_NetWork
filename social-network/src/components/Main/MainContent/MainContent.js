import React from "react";
import "./MainContent.scss";
import Posts from "./Posts/Posts";

const MainContent = () => {
  return (
    <div className="main__wrapper">
      <div className="main__photo">
        <img src="./images/panorama_gorod.jpeg" alt="panorama" />
      </div>
      <Posts />
    </div>
  );
};

export default MainContent;
