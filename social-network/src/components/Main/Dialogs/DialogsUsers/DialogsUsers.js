import React from "react";
import { NavLink } from "react-router-dom";
import "./DialogsUsers.scss";

const DialogsUsers = props => {
  const usersElements = props.friends.map(e => {
    return (
      <NavLink exact to={`/dialogs/${e.name}`} className="dialogs__friend" key={e.id}>
        {e.name}
      </NavLink>
    );
  });

  return (
    <div className="dialogs__friends">
      <h3 className="dialogs__title">Friends:</h3>
      <ul>{usersElements}</ul>
    </div>
  );
};

export default DialogsUsers;
