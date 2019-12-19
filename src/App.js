import React, { Component } from "react";
import { Route, Switch, NavLink } from "react-router-dom";
import "./App.css";
import About from "./About";
import Contact from "./Contact";
import Dog from "./Dog";

const Hater = () => <h1>HATE DOGS</h1>;

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="App-nav">
          <NavLink exact activeClassName="active-link" to="/">
            About
          </NavLink>
          <NavLink exact activeClassName="active-link" to="/contact">
            Contact
          </NavLink>
          <NavLink exact activeClassName="active-link" to="/dog/c">
            Dog(c)
          </NavLink>
          <NavLink exact activeClassName="active-link" to="/dog/c">
            Dog(r)
          </NavLink>
        </nav>
        <Route exact path="/" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/dog/c" component={() => <Dog name="Muffins" />} />
        <Route exact path="/dog/r" render={() => <Dog name="Biscuits" />} />
        <Route exact path="/dog/hater" component={Hater} />
      </div>
    );
  }
}

export default App;
