import React from "react";
import ReactDOM from "react-dom";
import Login from "./Login.js";
import Register from "./Register.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./styles.css";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { reducer } from "./reducer";
import thunk from "redux-thunk";
import { library } from "@fortawesome/fontawesome-svg-core";

import Dashboard from "./Dashboard.js";

const store = createStore(reducer, applyMiddleware(thunk));

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/dashboard" component={Dashboard} />
    </div>
  );
}

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  rootElement
);
