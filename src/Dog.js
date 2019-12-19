import React, { Component } from "react";

class Dog extends Component {
  componentDidMount() {
    console.log("dog did mount");
  }

  componentWillUnmount() {
    console.log("dog will unmount");
  }
  render() {
    console.log("dog render");
    return (
      <div className="Dog">
        <h1>DOG PAGE</h1>
        <h3>This dog is named: {this.props.name}</h3>
        <img src="https://images-na.ssl-images-amazon.com/images/I/514e1-wkceL._SX331_BO1,204,203,200_.jpg" />
      </div>
    );
  }
}

export default Dog;
