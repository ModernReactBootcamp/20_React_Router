import React, { Component } from "react";
import { Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import About from "./About";
import Contact from "./Contact";
import Dog from "./Dog";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/dog" component={Dog} />
      </div>
    );
  }
}

export default App;
