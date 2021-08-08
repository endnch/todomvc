import React from "react";
import { compose } from "recompose";
import { withAuth } from "@8base/react-sdk";
import { Query, withApollo } from "react-apollo";

import { CURRENT_USER_QUERY } from "../shared/graphql";

import "./AuthButton.css";

function AuthButton({ auth, client }) {
  function renderContent({ loading }) {
    if (loading) {
      return null;
    }

    const Logout = () => (
      <button
        className="auth-button"
        onClick={async () => {
          await client.clearStore();
          auth.authClient.logout();
        }}
      >
        Sign Out
      </button>
    );

    const Login = () => (
      <button
        className="auth-button"
        onClick={() => auth.authClient.authorize()}
      >
        Sign In
      </button>
    );

    return <>{auth.isAuthorized ? <Logout /> : <Login />}</>;
  }

  return <Query query={CURRENT_USER_QUERY}>{renderContent}</Query>;
}

export default compose(withApollo, withAuth)(AuthButton);
