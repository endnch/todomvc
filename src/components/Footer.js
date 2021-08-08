import React from "react";
import compose from "lodash/flowRight";
import { withRouter, Link } from "react-router-dom";
import withTodos from "../with/withTodos";
import withClearCompletedTodos from "../with/withClearCompletedTodos";

function Footer({ location, todos, clearCompletedTodos }) {
  return todos.length ? (
    <footer className="footer">
      <span className="todo-count">
        <strong>{todos.filter((todo) => !todo.completed).length}</strong> item
        left
      </span>
      <ul className="filters">
        <li>
          <Link
            className={location.pathname === "/" ? "selected" : undefined}
            to="/"
          >
            All
          </Link>
        </li>
        <li>
          <Link
            className={location.pathname === "/active" ? "selected" : undefined}
            to="/active"
          >
            Active
          </Link>
        </li>
        <li>
          <Link
            className={
              location.pathname === "/completed" ? "selected" : undefined
            }
            to="/completed"
          >
            Completed
          </Link>
        </li>
      </ul>
      <button className="clear-completed" onClick={clearCompletedTodos}>
        Clear completed
      </button>
    </footer>
  ) : null;
}

export default compose(withRouter, withTodos, withClearCompletedTodos)(Footer);
