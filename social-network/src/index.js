import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import store from "./redux/redux-store";

const renderDOMTree = data => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={data} dispatch={store.dispatch.bind(store)} />
    </React.StrictMode>,
    document.getElementById("root")
  );
};

renderDOMTree(store.getState());

store.subscribe(() => {
  renderDOMTree(store.getState());
});

reportWebVitals();
