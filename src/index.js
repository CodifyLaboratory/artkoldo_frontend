import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Routing from './routes/routes'



ReactDOM.render(
  <React.StrictMode>
    <App />
    <Routing />
  </React.StrictMode>,
  document.getElementById("root")
);
