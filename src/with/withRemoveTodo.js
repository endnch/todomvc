import { graphql } from "react-apollo";
import DELETE_TODO_MUTATION from "../mutations/deleteTodoMutation";
import TODO_LIST_QUERY from "../queries/todoListQuery";

const withRemoveTodo = graphql(DELETE_TODO_MUTATION, {
  props: ({ mutate }) => ({
    removeTodo: (id) => {
      mutate({
        variables: { id },
        refetchQueries: [{ query: TODO_LIST_QUERY }],
      });
    },
  }),
});

export default withRemoveTodo;
