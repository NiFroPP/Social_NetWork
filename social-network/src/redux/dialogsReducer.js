const ADD_MESSAGE_TEXT = "ADD_MESSAGE_TEXT";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT";

const initialState = {
  dialogs: [
    { id: "1", message: "Hi" },
    { id: "2", message: "Hi" },
    { id: "3", message: "Hello" },
    { id: "4", message: "Hello, Polina!" },
    { id: "5", message: "Hello, Sveta!" },
    { id: "6", message: "Hello, Ira!" },
    { id: "7", message: "Hello, Sasha!" },
    { id: "8", message: "Hello, Andrey!" },
    { id: "9", message: "Hello, Julia!" },
  ],
  users: [
    { id: "1", name: "Nick", messages: ["Hi", "Hello, Nick!"] },
    { id: "2", name: "Olga", messages: ["Hi", "Hello, Olga!"] },
    { id: "3", name: "Artem", messages: ["Hi", "Hello, Artem!"] },
    { id: "4", name: "Polina", messages: ["Hi", "Hello, Polina!"] },
    { id: "5", name: "Sveta", messages: ["Hi", "Hello, Sveta!"] },
    { id: "6", name: "Ira", messages: ["Hi", "Hello, Ira!"] },
    { id: "7", name: "Sasha", messages: ["Hi", "Hello, Sasha!"] },
    { id: "8", name: "Andrey", messages: ["Hi", "Hello, Andrey!"] },
    { id: "9", name: "Julia", messages: ["Hi", "Hello, Julia!"] },
  ],
  newMessage: "",
};

const dialogsReducer = (state = initialState, action) => {
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
