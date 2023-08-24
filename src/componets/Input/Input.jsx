import { Component } from "react";

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <>
        <input />
        <button onClick={this.handleCount}>{this.state.count}</button>
      </>
    );
  }
}
