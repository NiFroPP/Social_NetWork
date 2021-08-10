import { addMessageText, updateNewMessage } from "../../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    dialogsPage: state.dialogsPage,
    friends: state.dialogsPage.users,
    dialogs: state.dialogsPage.dialogs,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addMessageText: () => {
      dispatch(addMessageText());
    },
    updateNewMessage: text => {
      dispatch(updateNewMessage(text));
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
