import { graphql } from "react-apollo";
import TODO_LIST_QUERY from "../queries/todoListQuery";
import TOGGLE_ALL_TODOS_MUTATION from "../mutations/toggleAllTodosMutation";

const withToggleAllTodos = graphql(TOGGLE_ALL_TODOS_MUTATION, {
  props: ({ mutate }) => ({
    toggleAllTodos: ({ completed }) => {
      mutate({
        variables: { completed },
        refetchQueries: [{ query: TODO_LIST_QUERY }],
      });
    },
  }),
});

export default withToggleAllTodos;
