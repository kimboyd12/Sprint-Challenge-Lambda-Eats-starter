import React from "react";
import { Route } from "react-router-dom"
import Form from "./Form";
import Home from "./Home";
import NavBar from "./Nav";

const App = () => {
  return (
    <div className="App">
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route path="/pizza" component={Form} />
    </div>
  );
};
export default App;
