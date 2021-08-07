const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
const ADD_MESSAGE_TEXT = "ADD_MESSAGE_TEXT";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT";

const store = {
  _state: {
    postsPage: {
      posts: [
        { id: 1, message: "Hi", likesCount: 10 },
        { id: 2, message: "Hi, how are you?", likesCount: 2 },
        { id: 3, message: "Yo", likesCount: 3 },
      ],
      newPostText: "",
    },

    dialogsPage: {
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
    },

    navigation: [{ id: "posts" }, { id: "dialogs" }, { id: "news" }, { id: "music" }, { id: "settings" }],
  },
  _callSubscriber() {},

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    switch (action.type) {
      case ADD_POST: {
        let newPost = {
          id: 5,
          message: this._state.postsPage.newPostText,
          likesCount: 5,
        };
        this._state.postsPage.posts.push(newPost);
        this._state.postsPage.newPostText = "";

        this._callSubscriber(this._state);
        break;
      }
      case UPDATE_NEW_POST_TEXT: {
        this._state.postsPage.newPostText = action.text;

        this._callSubscriber(this._state);
        break;
      }
      case ADD_MESSAGE_TEXT: {
        let newMessage = {
          id: 5,
          message: this._state.dialogsPage.newMessage,
        };
        this._state.dialogsPage.dialogs.push(newMessage);
        this._state.dialogsPage.newMessage = "";

        this._callSubscriber(this._state);
        break;
      }
      case UPDATE_NEW_MESSAGE_TEXT: {
        this._state.dialogsPage.newMessage = action.text;

        this._callSubscriber(this._state);
        break;
      }
      default:
        break;
    }
  },
};

export const addPost = () => ({ type: ADD_POST });
export const updateNewPostText = text => ({ type: UPDATE_NEW_POST_TEXT, text: text });
export const addMessageText = () => ({ type: ADD_MESSAGE_TEXT });
export const updateNewMessage = text => ({ type: UPDATE_NEW_MESSAGE_TEXT, text: text });

export default store;
