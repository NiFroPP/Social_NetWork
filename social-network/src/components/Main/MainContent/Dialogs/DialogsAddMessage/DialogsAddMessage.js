import React from "react";
import "./DialogsAddMessage.scss";

const DialogsAddMessage = props => {
  const onMessageChange = event => {
    props.updateNewMessage(event.target.value);
  };
  const onMessageAdd = () => {
    props.addMessageText();
  };

  return (
    <div className="dialogs__form">
      <textarea onChange={onMessageChange} value={props.dialogsPage.newMessage} placeholder="Enter your message..." />
      <button onClick={onMessageAdd}>Add message</button>
    </div>
  );
};

export default DialogsAddMessage;
