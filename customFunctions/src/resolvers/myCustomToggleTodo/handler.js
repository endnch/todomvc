/**
 * This file was generated using 8base CLI.
 *
 * To learn more about writing custom GraphQL resolver functions, visit
 * the 8base documentation at:
 *
 * https://docs.8base.com/8base-console/custom-functions/resolvers
 *
 * To update this functions invocation settings, update its configuration block
 * in the projects 8base.yml file:
 *  functions:
 *    myCustomToggleTodo:
 *      ...
 *
 * Data that is sent to this function can be accessed on the event argument at:
 *  event.data[KEY_NAME]
 *
 * There are two ways to invoke this function locally:
 *
 *  (1) Explicit file mock file path using '-p' flag:
 *    8base invoke-local myCustomToggleTodo -p src/resolvers/myCustomToggleTodo/mocks/request.json
 *
 *  (2) Default mock file location using -m flag:
 *    8base invoke-local myCustomToggleTodo -m request
 *
 *  Add new mocks to this function to test different input arguments. Mocks can easily be generated
 *  the following generator command:
 *    8base generate mock myCustomToggleTodo -m [MOCK_FILE_NAME]
 */

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

export default async (event, ctx) => {
  const response = await ctx.api.gqlRequest(TOGGLE_TODO_MUTATION, {
    id: event.data.id,
    completed: event.data.completed,
  });

  return {
    data: {
      result: true
    },
  };
};
