import React from "react";
import NavBar from "./NavBar";

const NavBarContainer = props => {
  const navigationState = props.store.getState().navigation;

  return <NavBar navigation={navigationState} />;
};

export default NavBarContainer;
