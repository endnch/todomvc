import gql from "graphql-tag";

const DELETE_COMPLETED_TODOS_MUTATION = gql`
  mutation CompletedTodosDelete {
    todoDeleteByFilter(filter: { completed: { equals: true } }) {
      success
    }
  }
`;

export default DELETE_COMPLETED_TODOS_MUTATION;
