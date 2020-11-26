import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import RouteDebugging from "./RouteDebugging";
import PrivateRoute from "./PrivateRoute";
import LoginPage from "pages/LoginPage";
import DemoPage from "pages/DemoPage";
import NotFoundPage from "pages/NotFoundPage";
import ErrorBoundary from "components/ErrorBoundary";

const AppRouter = () => {
  return (
    <Router>
      <RouteDebugging>
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
      </RouteDebugging>
    </Router>
  );
};
export default AppRouter;
