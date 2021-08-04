import React, { Component } from "react";
import withCreateTodo from "../with/withCreateTodo";

class Header extends Component {
  state = { text: "" };
  render() {
    const { createTodo } = this.props;
    return (
      <header className="header">
        <h1>todos</h1>
        <input
          className="new-todo"
          onChange={({ target }) =>
            this.setState(({ text }) => ({ text: target.value }))
          }
          onKeyPress={({ key }) => {
            if (key === "Enter") {
              createTodo({ text: this.state.text });
              this.setState({ text: "" });
            }
          }}
          value={this.state.text}
          placeholder="What needs to be done?"
        />
      </header>
    );
  }
}

export default withCreateTodo(Header);
