import React from "react";
import { NavLink } from "react-router-dom";
import "./LoginBlock.scss";

const LoginBlock = props => {
  return <div className="header__login">{props.isAuth ? props.login : <NavLink to="/login">Login</NavLink>}</div>;
};

export default LoginBlock;
