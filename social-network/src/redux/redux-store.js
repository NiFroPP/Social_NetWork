import { combineReducers, createStore } from "redux";
import postsReducer from "./postsReducer";
import dialogsReducer from "./dialogsReducer";
import navigationReducer from "./navigationReducer";

let reducers = combineReducers({
  postsReducer,
  dialogsReducer,
  navigationReducer,
});

const store = createStore(reducers);

export default store;
