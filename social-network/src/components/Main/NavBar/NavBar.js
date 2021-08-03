import React from "react";
import "./NavBar.scss";

const NavBar = () => {
  return (
    <nav className="nav">
      <ul>
        <li>
          <a href="/profile">Posts</a>
        </li>
        <li>
          <a href="/messages">Dialogs</a>
        </li>
        <li>
          <a href="/news">News</a>
        </li>
        <li>
          <a href="/music">Music</a>
        </li>
        <li>
          <a href="/settings">Settings</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
