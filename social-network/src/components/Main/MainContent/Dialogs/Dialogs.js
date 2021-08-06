import React from "react";
import "./Dialogs.scss";
import DialogsAddMessage from "./DialogsAddMessage/DialogsAddMessage";
import DialogsMessages from "./DialogsMessages/DialogsMessages";
import DialogsUsers from "./DialogsUsers/DialogsUsers";

const Dialogs = props => {
  return (
    <div className="dialogs">
      <DialogsUsers users={props.dialogsPage.users} />
      <DialogsMessages dialogs={props.dialogsPage.dialogs} />
      <DialogsAddMessage />
    </div>
  );
};

export default Dialogs;
