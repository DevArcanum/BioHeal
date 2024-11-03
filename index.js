import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import App from "./src/App.jsx";

const appRouting = (
  <Router>
    <App />
  </Router>
);

ReactDOM.render(appRouting, document.getElementById("root"));