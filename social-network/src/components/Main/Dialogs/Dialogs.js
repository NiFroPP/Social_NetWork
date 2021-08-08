import React from "react";
import "./Dialogs.scss";
import DialogsAddMessage from "./DialogsAddMessage/DialogsAddMessage";
import DialogsMessages from "./DialogsMessages/DialogsMessages";
import DialogsUsers from "./DialogsUsers/DialogsUsers";

const Dialogs = props => {
  return (
    <div className="dialogs">
      <DialogsUsers friends={props.friends} />
      <DialogsMessages dialogs={props.dialogs} />
      <DialogsAddMessage
        dialogsPage={props.dialogsPage}
        updateNewMessage={props.updateNewMessage}
        addMessageText={props.addMessageText}
      />
    </div>
  );
};

export default Dialogs;
