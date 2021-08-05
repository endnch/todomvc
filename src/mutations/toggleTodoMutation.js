import gql from "graphql-tag";

const TOGGLE_TODO_MUTATION = gql`
  mutation TodoToggle($id: ID!, $completed: Boolean!) {
    myCustomToggleTodo(id: $id, completed: $completed) {
      result
    }
  }
`;

export default TOGGLE_TODO_MUTATION;
