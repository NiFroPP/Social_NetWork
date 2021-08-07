import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import { addPost, subscribe, updateNewPostText } from "./redux/state";
import state from "./redux/state";

const rerenderEntireTree = data => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={data} addPost={addPost} updateNewPostText={updateNewPostText} />
    </React.StrictMode>,
    document.getElementById("root")
  );
};

rerenderEntireTree(state);

subscribe(rerenderEntireTree);

reportWebVitals();
