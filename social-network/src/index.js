import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import store from "./redux/redux-store";
import StoreContext from "./StoreContext";

const renderDOMTree = data => {
  ReactDOM.render(
    <React.StrictMode>
      <StoreContext.Provider value={store}>
        <App />
      </StoreContext.Provider>
    </React.StrictMode>,
    document.getElementById("root")
  );
};

renderDOMTree(store.getState());

store.subscribe(() => {
  renderDOMTree(store.getState());
});

reportWebVitals();
