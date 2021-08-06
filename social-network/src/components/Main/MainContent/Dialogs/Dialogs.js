import React from "react";
import "./Dialogs.scss";
import DialogsMessages from "./DialogsMessages/DialogsMessages";
import DialogsUsers from "./DialogsUsers/DialogsUsers";

const Dialogs = props => {
  return (
    <div className="dialogs">
      <DialogsUsers users={props.dialogsPage.users} />
      <DialogsMessages dialogs={props.dialogsPage.dialogs} />
    </div>
  );
};

export default Dialogs;
