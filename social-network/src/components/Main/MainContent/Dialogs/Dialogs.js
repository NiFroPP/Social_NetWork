import React from "react";
import "./Dialogs.scss";
import DialogsMessages from "./DialogsMessages/DialogsMessages";
import DialogsUsers from "./DialogsUsers/DialogsUsers";

const Dialogs = props => {
  return (
    <div className="dialogs">
      <DialogsUsers users={props.users} />
      <DialogsMessages dialogs={props.dialogs} />
    </div>
  );
};

export default Dialogs;
