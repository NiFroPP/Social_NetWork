import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.scss";

const NavBar = props => {
  const navLinkElements = props.navigation.map(e => {
    return (
      <li className="nav__item" key={e.id}>
        <NavLink to={`/${e.id}`} key={e.id}>
          {`${e.id}`}
        </NavLink>
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
