import { graphql } from "react-apollo";
import TOGGLE_TODO_MUTATION from "../mutations/toggleTodoMutation";
import TODO_LIST_QUERY from "../queries/todoListQuery";

const withToggleTodo = graphql(TOGGLE_TODO_MUTATION, {
  props: ({ mutate }) => ({
    toggleTodo: ({ id, completed }) => {
      mutate({
        variables: { id, completed },
        refetchQueries: [{ query: TODO_LIST_QUERY }],
      });
    },
  }),
});

export default withToggleTodo;
