import { graphql } from "react-apollo";
import TODO_LIST_QUERY from "../queries/todoListQuery";
import DELETE_COMPLETED_TODOS_MUTATION from "../mutations/deleteCompletedTodosMutations";

const withClearCompletedTodos = graphql(DELETE_COMPLETED_TODOS_MUTATION, {
  props: ({ mutate }) => ({
    clearCompletedTodos: () => {
      mutate({
        refetchQueries: [{ query: TODO_LIST_QUERY }],
      });
    },
  }),
});

export default withClearCompletedTodos;
