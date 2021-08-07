import React from "react";
import "./Main.scss";
import NavBar from "../NavBar/NavBar";
import MainContent from "./MainContent/MainContent";

const Main = props => {
  return (
    <main className="main">
      <NavBar navigation={props.state.navigation} />
      <MainContent state={props.state} addPost={props.addPost} updateNewPostText={props.updateNewPostText} />
    </main>
  );
};

export default Main;
