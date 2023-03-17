import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import cartDataReducer from "./Reducers/cartDataReducer";
import CommonProvider from "./CustomHooks/CommonProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));

const store = configureStore({
  reducer: { cart: cartDataReducer },
});

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <CommonProvider>
        <App />
      </CommonProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
