import gql from "graphql-tag";

const DELETE_TODO_MUTATION = gql`
  mutation TodoDelete($id: ID!) {
    todoDelete(filter: { id: $id }) {
      success
    }
  }
`;

export default DELETE_TODO_MUTATION;
