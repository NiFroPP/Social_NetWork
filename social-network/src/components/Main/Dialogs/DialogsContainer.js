import React from "react";
import { addMessageText, updateNewMessage } from "../../../redux/dialogsReducer";
import StoreContext from "../../../StoreContext";
import Dialogs from "./Dialogs";

const DialogsContainer = () => {
  return (
    <StoreContext.Consumer>
      {store => {
        const dialogsPage = store.getState().dialogsPage;
        const friends = dialogsPage.users;
        const dialogs = dialogsPage.dialogs;

        const onMessageChange = text => {
          store.dispatch(updateNewMessage(text));
        };
        const onMessageAdd = () => {
          store.dispatch(addMessageText());
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
      }}
    </StoreContext.Consumer>
  );
};

export default DialogsContainer;
