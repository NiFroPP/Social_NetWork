import React from "react";
import Dialogs from "./Dialogs/Dialogs";
import "./MainContent.scss";
// import Posts from "./Posts/Posts";

const MainContent = () => {
  return (
    <div className="main__wrapper">
      {/* <Posts /> */}
      <Dialogs />
    </div>
  );
};

export default MainContent;
