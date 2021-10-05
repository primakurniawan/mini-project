import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import { ApolloProvider } from "@apollo/client";
import client from "./apollo-client";
require("dotenv").config();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
