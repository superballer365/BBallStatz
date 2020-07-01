import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import awsmobile from "./aws-exports";
import Amplify from "aws-amplify";
import "react-datepicker/dist/react-datepicker.css";

// set auth type for AppSync API to be API Key
awsmobile.aws_appsync_authenticationType = "API_KEY";
console.log("Amplify config:");
console.log(awsmobile);
Amplify.configure(awsmobile);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
