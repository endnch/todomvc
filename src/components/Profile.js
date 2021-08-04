import React from "react";
import { compose } from "recompose";
import { graphql } from "react-apollo";
import { CURRENT_USER_QUERY } from "../shared/graphql";

function Profile({ data }) {
  if (data.loading) {
    return <span>Loading...</span>;
  }

  return (
    <div>
      <h1>{data.user.email}</h1>
      <ul>
        <li>ID: {data.user.id}</li>
        <li>
          Name: {data.user.firstName} {data.user.lastName}
        </li>
      </ul>
    </div>
  );
}

export default compose(graphql(CURRENT_USER_QUERY))(Profile);
