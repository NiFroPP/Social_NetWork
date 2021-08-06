import React from "react";
import "./DialogsAddMessage.scss";

const DialogsAddMessage = props => {
  let newMesageElement = React.createRef();

  const onAddMessage = () => {
    let text = newMesageElement.current.value;
    alert(text);
  };

  return (
    <div className="dialogs__form">
      <textarea ref={newMesageElement}></textarea>
      <button onClick={onAddMessage}>Add message</button>
    </div>
  );
};

export default DialogsAddMessage;
