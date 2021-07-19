import React, { useRef } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import "./css/normalize.css";
import "./css/webflow.css";
import "./css/yoms.webflow.css";
import FaceWebCam from "./components/faceWebCam";
import ApiLogin from "./screens/ApiLogin";
import ApiSignUp from "./screens/ApiSignUp";
import Home from "./screens/Home";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import Success from "./screens/Success";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/success/:/:userImage" component={Success} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signUp" component={SignUp} />
        <Route exact path="/api/login" component={ApiLogin} />
        <Route exact path="/api/signUp" component={ApiSignUp} />
      </Switch>
    </div>
  );
}

export default App;
