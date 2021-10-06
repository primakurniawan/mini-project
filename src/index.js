import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import { ApolloProvider } from "@apollo/client";
import client from "./apollo-client";
import { Provider } from "react-redux";
import { persistedStore, store } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";
require("dotenv").config();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistedStore}>
        <Router>
          <ApolloProvider client={client}>
            <App />
          </ApolloProvider>
        </Router>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
