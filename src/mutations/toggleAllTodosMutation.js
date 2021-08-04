import gql from "graphql-tag";

const TOGGLE_ALL_TODOS_MUTATION = gql`
  mutation TodoToggleAll($completed: Boolean!) {
    todoUpdateByFilter(data: { completed: { set: $completed } }) {
      count
    }
  }
`;

export default TOGGLE_ALL_TODOS_MUTATION;
