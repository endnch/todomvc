import { graphql } from "react-apollo";
import TODO_LIST_QUERY from "../queries/todoListQuery";

const withTodos = graphql(TODO_LIST_QUERY, {
  props: ({ data: { todosList } }) => {
    let todos = [];
    if (todosList) {
      todos = todosList.items;
    }
    return {
      todos,
    };
  },
});

export default withTodos;
