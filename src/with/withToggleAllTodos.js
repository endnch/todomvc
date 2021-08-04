import { graphql } from "react-apollo";
import TOGGLE_TODO_MUTATION from "../mutations/toggleTodoMutation";
import TODO_LIST_QUERY from "../queries/todoListQuery";

const withToggleAllTodos = graphql(TOGGLE_TODO_MUTATION, {
  props: ({ mutate, ownProps: { todos } }) => ({
    toggleAllTodos: ({ completed }) => {
      todos.forEach((todo) => {
        mutate({
          variables: { id: todo.id, completed },
          refetchQueries: [{ query: TODO_LIST_QUERY }],
        });
      });
    },
  }),
});

export default withToggleAllTodos;
