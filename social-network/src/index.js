import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import store from "./redux/state";

const renderDOMTree = data => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={store.getState()} dispatch={store.dispatch.bind(store)} />
    </React.StrictMode>,
    document.getElementById("root")
  );
};

renderDOMTree(store.getState());

store.subscribe(renderDOMTree);

reportWebVitals();
