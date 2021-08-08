import React, { useEffect } from "react";
import { withAuth } from "@8base/app-provider";

function AuthContainer({ auth }) {
  useEffect(() => {
    (async function () {
      await auth.authClient.authorize();
    })();
  }, []);

  return <h2>Loading...</h2>;
}

AuthContainer = withAuth(AuthContainer);

export { AuthContainer };
