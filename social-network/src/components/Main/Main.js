import React from "react";
import "./Main.scss";
import NavBar from "../NavBar/NavBar";
import MainContent from "./MainContent/MainContent";

const Main = props => {
  return (
    <main className="main">
      <NavBar navigation={props.navigation} />
      <MainContent posts={props.posts} users={props.users} dialogs={props.dialogs} />
    </main>
  );
};

export default Main;
