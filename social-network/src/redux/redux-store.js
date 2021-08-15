import { combineReducers, createStore } from "redux";
import postsReducer from "./postsReducer";
import dialogsReducer from "./dialogsReducer";
import navigationReducer from "./navigationReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";

let reducers = combineReducers({
  postsPage: postsReducer,
  dialogsPage: dialogsReducer,
  navigation: navigationReducer,
  usersPage: usersReducer,
  auth: authReducer,
});

const store = createStore(reducers);

window.store = store;

export default store;
