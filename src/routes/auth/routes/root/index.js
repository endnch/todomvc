import React, { useEffect } from "react";
import { withAuth } from "@8base/app-provider";

function AuthContainer({ auth }) {
  useEffect(() => {
    (async function () {
      await auth.authClient.authorize();
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <h2>Loading...</h2>;
}

const AuthContainerWithAuth = withAuth(AuthContainer);

export { AuthContainerWithAuth as AuthContainer };
