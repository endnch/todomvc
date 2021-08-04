import { graphql } from "react-apollo";
import TODO_LIST_QUERY from "../queries/todoListQuery";
import DELETE_TODO_MUTATION from "../mutations/deleteTodoMutation";

const withClearCompletedTodos = graphql(DELETE_TODO_MUTATION, {
  props: ({ mutate, ownProps: { todos } }) => ({
    clearCompletedTodos: () => {
      todos
        .filter((todo) => todo.completed)
        .forEach((todo) => {
          mutate({
            variables: { id: todo.id },
            refetchQueries: [{ query: TODO_LIST_QUERY }],
          });
        });
    },
  }),
});

export default withClearCompletedTodos;
