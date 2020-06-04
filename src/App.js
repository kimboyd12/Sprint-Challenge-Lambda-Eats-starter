import React from "react";
import { Route } from "react-router-dom"
import Form from "./Form";
import Home from "./Home";
import NavBar from "./Nav";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const App = () => {
  return (
    <div className="App">
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route exact path="/form" component={Form} />
        <Route exact path="/login" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
    </div>
  );
};
export default App;
