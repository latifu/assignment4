import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import HomePage from "./Pages/HomePage";
import Header from "./components/Header";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={SignIn} />

        <Route path="/signup" component={SignUp} />

        <Route path="/homepage" component={HomePage} />
      </Switch>
    </BrowserRouter>

    {/* <App /> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
