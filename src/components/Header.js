import React, { useState } from "react";
import withCreateTodo from "../with/withCreateTodo";

function Header({ createTodo }) {
  const [text, setText] = useState("");

  return (
    <header className="header">
      <h1>todos</h1>
      <input
        className="new-todo"
        onChange={(e) => setText(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            createTodo({ text: text });
            setText("");
          }
        }}
        value={text}
        placeholder="What needs to be done?"
      />
    </header>
  );
}

export default withCreateTodo(Header);
