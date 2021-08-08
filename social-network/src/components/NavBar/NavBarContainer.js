import React from "react";
import StoreContext from "../../StoreContext";
import NavBar from "./NavBar";

const NavBarContainer = () => {
  return <StoreContext.Consumer>{store => <NavBar navigation={store.getState().navigation} />}</StoreContext.Consumer>;
};

export default NavBarContainer;
