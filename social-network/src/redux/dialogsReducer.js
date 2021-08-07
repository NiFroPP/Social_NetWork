const ADD_MESSAGE_TEXT = "ADD_MESSAGE_TEXT";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT";

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case ADD_MESSAGE_TEXT: {
      let newMessage = {
        id: 5,
        message: state.newMessage,
      };
      state.dialogs.push(newMessage);
      state.newMessage = "";
      break;
    }
    case UPDATE_NEW_MESSAGE_TEXT: {
      state.newMessage = action.text;
      break;
    }
    default:
      break;
  }

  return state;
};

export const addMessageText = () => ({ type: ADD_MESSAGE_TEXT });
export const updateNewMessage = text => ({ type: UPDATE_NEW_MESSAGE_TEXT, text: text });

export default dialogsReducer;
