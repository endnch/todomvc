import React, { useEffect } from "react";
import { withAuth } from "@8base/react-sdk";

import { client } from "../../../../shared/api";
import * as gql from "../../../../shared/graphql";

function CallbackContainer({ auth, history }) {
  async function handleAuthentication({ idToken, email }) {
    /**
     * Auth headers for communicating with the 8base API.
     */
    client.setIdToken(idToken);
    /**
     * Check if user exists in 8base.
     */
    try {
      await client.request(gql.CURRENT_USER_QUERY);
    } catch {
      /**
       * If user doesn't exist, an error will be
       * thrown, which then the new user can be
       * created using the authResult values.
       */
      await client.request(gql.USER_SIGN_UP_MUTATION, {
        user: { email: email },
        authProfileId: process.env.REACT_APP_AUTH_PROFILE_ID,
      });
    }
  }

  useEffect(() => {
    (async function () {
      /* Get authResult from auth client after redirect */
      const authResult = await auth.authClient.getAuthorizedData();
      /* Identify or create user record using authenticated details */
      await handleAuthentication(authResult);
      /* Add the idToken to the auth state */
      auth.authClient.setState({ token: authResult.idToken });
      /* Redirect user to root path */
      history.replace("/");
    })();
  }, []);

  return <h2>Loading...</h2>;
}

CallbackContainer = withAuth(CallbackContainer);

export { CallbackContainer };
