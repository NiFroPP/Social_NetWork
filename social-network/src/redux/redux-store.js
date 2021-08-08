import { combineReducers, createStore } from "redux";
import postsReducer from "./postsReducer";
import dialogsReducer from "./dialogsReducer";
import navigationReducer from "./navigationReducer";

let reducers = combineReducers({
  postsPage: postsReducer,
  dialogsPage: dialogsReducer,
  navigation: navigationReducer,
});

const store = createStore(reducers);

export default store;
