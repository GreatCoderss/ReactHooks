import React, { Component } from "react";

export default class ClassComponent extends Component {
  state = {
    counter: 0,
  };

  handleCounterIncrease = () =>
    this.setState({ counter: this.state.counter + 1 });

  render() {
    return (
      <div>
        <p>Counter Class :- {this.state.counter} </p>
        <button onClick={this.handleCounterIncrease}>Increase</button>
      </div>
    );
  }
}
