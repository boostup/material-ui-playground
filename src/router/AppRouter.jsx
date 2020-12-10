import React from "react";
import { Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "redux-store/configureStore";

import PrivateRoute from "./PrivateRoute";
import LoginPage from "pages/LoginPage";
import DemoPage from "pages/DemoPage";
import NotFoundPage from "pages/NotFoundPage";
import ErrorBoundary from "components/ErrorBoundary";

const AppRouter = () => {
  return (
    <ConnectedRouter history={history}>
      <ErrorBoundary>
        <Switch>
          <PrivateRoute exact path="/">
            <DemoPage />
          </PrivateRoute>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </ErrorBoundary>
    </ConnectedRouter>
  );
};
export default AppRouter;
