import { graphql } from "react-apollo";
import CREATE_TODO_MUTATION from "../mutations/createTodoMutation";
import TODO_LIST_QUERY from "../queries/todoListQuery";

const withCreateTodo = graphql(CREATE_TODO_MUTATION, {
  props: ({ mutate }) => ({
    createTodo: ({ text }) => {
      mutate({
        variables: { data: { text, completed: false } },
        refetchQueries: [{ query: TODO_LIST_QUERY }],
      });
    },
  }),
});

export default withCreateTodo;
