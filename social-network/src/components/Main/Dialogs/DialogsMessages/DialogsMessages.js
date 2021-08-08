import React from "react";
import "./DialogsMessages.scss";

const DialogsMessages = props => {
  const messagesElements = props.dialogs.map(e => {
    return (
      <li className="dialogs__message" key={e.id}>
        {e.message}
      </li>
    );
  });

  return (
    <div className="dialogs__messages">
      <h3 className="dialogs__title">Messages:</h3>
      <ul>{messagesElements}</ul>
    </div>
  );
};

export default DialogsMessages;
