import React from "react";
import "./DialogsAddMessage.scss";
import { addMessageText, updateNewMessage } from "../../../../../redux/dialogsReducer";

const DialogsAddMessage = props => {
  const onMessageChange = event => {
    let text = event.target.value;
    props.dispatch(updateNewMessage(text));
  };
  const onMessageAdd = () => {
    props.dispatch(addMessageText());
  };

  return (
    <div className="dialogs__form">
      <textarea onChange={onMessageChange} value={props.dialogsPage.newMessage} placeholder="Enter your message..." />
      <button onClick={onMessageAdd}>Add message</button>
    </div>
  );
};

export default DialogsAddMessage;
