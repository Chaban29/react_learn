import classes from "../styles/main.module.scss";
import React from "react";

class ClassCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { like: 0 };
    this.Increment = this.Increment.bind(this);
    this.Decrement = this.Decrement.bind(this);
  }
  Increment() {
    this.setState({ like: this.state.like + 1 });
  }
  Decrement() {
    if (this.state.like < 1) {
      return;
    }
    this.setState({ like: this.state.like - 1 });
  }
  render() {
    return (
      <div className={classes.class__counter}>
        <h1>{this.state.like}</h1>
        <button onClick={this.Increment}>Icrease</button>
        <button onClick={this.Decrement}>Decrement</button>
      </div>
    );
  }
}

export default ClassCounter;
