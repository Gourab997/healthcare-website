import React from "react";
import { Spinner } from "react-bootstrap";
import { Route } from "react-router";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

import useAuth from "../../../hooks/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
  const { isLoading, user } = useAuth();
  if (isLoading) {
    return <Spinner animation='grow' variant='info' />;
  }

  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          >
            {" "}
          </Redirect>
        )
      }
    ></Route>
  );
};

export default PrivateRoute;
