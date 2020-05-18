import React from "react";
import { Route } from "react-router-dom"
import Form from "./Form";
import Home from "./Home";

const App = () => {
  return (
    <div className="App">
        <Route exact path="/" component={Home} />
        <Route path="/order" component={Form} />
    </div>
  );
};
export default App;
