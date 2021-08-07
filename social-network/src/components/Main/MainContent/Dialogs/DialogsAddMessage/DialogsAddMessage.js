import React from "react";
import "./DialogsAddMessage.scss";
import { addMessageText, updateNewMessage } from "../../../../../redux/state";

const DialogsAddMessage = props => {
  let newMesageElement = React.createRef();

  const onMessageChange = () => {
    let text = newMesageElement.current.value;
    props.dispatch(updateNewMessage(text));
  };
  const onMessageAdd = () => {
    props.dispatch(addMessageText());
  };

  return (
    <div className="dialogs__form">
      <textarea ref={newMesageElement} onChange={onMessageChange} value={props.dialogsPage.newMessage} />
      <button onClick={onMessageAdd}>Add message</button>
    </div>
  );
};

export default DialogsAddMessage;
