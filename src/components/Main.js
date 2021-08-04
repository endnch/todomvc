import React, { Component } from "react";
import compose from "lodash/flowRight";
import { withRouter } from "react-router-dom";
import withTodos from "../with/withTodos";
import withToggleTodo from "../with/withToggleTodo";
import withToggleAllTodos from "../with/withToggleAllTodos";
import withRemoveTodo from "../with/withRemoveTodo";

class Main extends Component {
  render() {
    const { todos, toggleTodo, toggleAllTodos, removeTodo, location } =
      this.props;
    return todos && todos.length ? (
      <section className="main">
        <input
          className="toggle-all"
          type="checkbox"
          onChange={() =>
            todos.some((todo) => todo.completed === false)
              ? toggleAllTodos({ completed: true })
              : toggleAllTodos({ completed: false })
          }
          checked={false}
        />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          {todos
            .filter((todo) => {
              if (location.pathname === "/completed") {
                return todo.completed;
              }
              if (location.pathname === "/active") {
                return !todo.completed;
              }
              return true;
            })
            .map((todo) => (
              <li
                key={todo.id}
                className={todo.completed ? "completed" : undefined}
              >
                <div className="view">
                  <input
                    className="toggle"
                    onChange={() =>
                      toggleTodo({ id: todo.id, completed: !todo.completed })
                    }
                    checked={todo.completed}
                    type="checkbox"
                  />
                  <label>{todo.text}</label>
                  <button
                    onClick={() => removeTodo(todo.id)}
                    className="destroy"
                  />
                </div>
                <input className="edit" onChange={() => {}} value={todo.text} />
              </li>
            ))}
        </ul>
      </section>
    ) : null;
  }
}

export default compose(
  withRouter,
  withTodos,
  withToggleTodo,
  withToggleAllTodos,
  withRemoveTodo
)(Main);
