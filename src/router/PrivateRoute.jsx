import { Redirect, Route } from "react-router-dom";
import useAuth from "redux-store/auth/useAuth";

export default function PrivateRoute({ children, ...rest }) {
  const user = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
