import React from "react";
import Root from "./Root";
import WelcomePage from "./pages/welcomePage/welcomePage";
import Signup from "./components/signup/Signup";
import Login from "./components/login/Login";
import { Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import axios from "axios";
axios.defaults.baseURL = "http://localhost:8000";

function App() {
  return (
    <Root>
      <Switch>
        <Route exact path="/" component={WelcomePage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route path="/home" />
        <Route path="/remoterecords" />
        <Route path="/settings" />
        <Route path="/subjects" />
        <Route path="/teachingrecords" />
        <Route path="/professors" />
      </Switch>
      <ToastContainer hideProgressBar={true} newestOnTop={true} />
    </Root>
  );
}

export default App;
