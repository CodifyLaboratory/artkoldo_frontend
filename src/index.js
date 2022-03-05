import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Routing from './routes/routes'
import { BrowserRouter } from "react-router-dom";



ReactDOM.render(
    <BrowserRouter>
     <Routing />
    </BrowserRouter>,

  document.getElementById("root")
);
