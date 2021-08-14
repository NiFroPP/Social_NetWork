import { combineReducers, createStore } from "redux";
import postsReducer from "./postsReducer";
import dialogsReducer from "./dialogsReducer";
import navigationReducer from "./navigationReducer";
import usersReducer from "./usersReducer";

let reducers = combineReducers({
  postsPage: postsReducer,
  dialogsPage: dialogsReducer,
  navigation: navigationReducer,
  usersPage: usersReducer,
});

const store = createStore(reducers);

window.store = store;

export default store;
