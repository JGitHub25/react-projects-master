import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { DateComponent } from "./Date";

ReactDOM.render(
  <React.StrictMode>
    <DateComponent />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
