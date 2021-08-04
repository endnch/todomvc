import gql from "graphql-tag";

const TOGGLE_TODO_MUTATION = gql`
  mutation TodoToggle($id: ID!, $completed: Boolean!) {
    todoUpdate(filter: { id: $id }, data: { completed: $completed }) {
      id
      text
      completed
    }
  }
`;

export default TOGGLE_TODO_MUTATION;
