import React from "react";
import { addMessageText, updateNewMessage } from "../../../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = props => {
  const dialogsPage = props.store.getState().dialogsPage;
  const friends = dialogsPage.users;
  const dialogs = dialogsPage.dialogs;

  const onMessageChange = text => {
    props.store.dispatch(updateNewMessage(text));
  };
  const onMessageAdd = () => {
    props.store.dispatch(addMessageText());
  };

  return (
    <Dialogs
      dialogsPage={dialogsPage}
      friends={friends}
      dialogs={dialogs}
      updateNewMessage={onMessageChange}
      addMessageText={onMessageAdd}
    />
  );
};

export default DialogsContainer;
