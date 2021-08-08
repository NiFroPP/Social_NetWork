import React from "react";
import "./Main.scss";
import MainContent from "./MainContent/MainContent";
import NavBarContainer from "../NavBar/NavBarContainer";

const Main = props => {
  return (
    <main className="main">
      <NavBarContainer store={props.store} />
      <MainContent store={props.store} />
    </main>
  );
};

export default Main;
