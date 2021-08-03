import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.scss";

const NavBar = () => {
  const state = [{ id: "posts" }, { id: "dialogs" }, { id: "news" }, { id: "music" }, { id: "settings" }];

  const navLinkElements = state.map(e => {
    return (
      <li className="nav__item">
        <NavLink to={`/${e.id}`}>{`${e.id}`}</NavLink>
      </li>
    );
  });

  return (
    <nav className="nav">
      <ul className="nav__grupp">{navLinkElements}</ul>
    </nav>
  );
};

export default NavBar;
