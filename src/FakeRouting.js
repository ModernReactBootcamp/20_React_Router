import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import About from "./About";
import Contact from "./Contact";
import Dog from "./Dog";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: "about"
    };
  }

  changePage(newPage) {
    this.setState({ page: newPage });
  }
  renderPage() {
    if (this.state.page === "about") return <About />;
    else if (this.state.page === "contact") return <Contact />;
    else if (this.state.page === "dog") return <Dog />;
  }
  render() {
    return (
      <div className="App">
        <nav className="App-nav">
          <a onClick={() => this.changePage("about")}>About</a>
          <a onClick={() => this.changePage("contact")}>Contact</a>
          <a onClick={() => this.changePage("dog")}>Dog</a>
        </nav>
        {this.renderPage()}
      </div>
    );
  }
}

export default App;
