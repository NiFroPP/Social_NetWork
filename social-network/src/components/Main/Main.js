import React from "react";
import "./Main.scss";
import NavBar from "../NavBar/NavBar";
import MainContent from "./MainContent/MainContent";

const Main = () => {
  return (
    <main className="main">
      <NavBar />
      <MainContent />
    </main>
  );
};

export default Main;
