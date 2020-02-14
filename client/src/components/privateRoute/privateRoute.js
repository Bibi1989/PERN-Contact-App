import React from "react";
import { Route, Redirect } from "react-router-dom";
import auth from "./auth";

export const PrivateRoute = ({ component, ...rest }) => {
  const routeComponent = props =>
    auth.authenticate() ? (
      React.createElement(component, props)
    ) : (
      <Redirect to={{ pathname: "/login" }} />
    );
  return <Route {...rest} render={routeComponent} />;
};

// export const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route
//     {...rest}
//     render={props =>
//       auth.authenticate() ? (
//         <Component {...props} />
//       ) : (
//         <Redirect to='/login' />
//       )
//     }
//   />
// );
