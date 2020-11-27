import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import PrivateRoute from "./PrivateRoute";
import LoginPage from "pages/LoginPage";
import DemoPage from "pages/DemoPage";
import NotFoundPage from "pages/NotFoundPage";
import ErrorBoundary from "components/ErrorBoundary";

const AppRouter = () => {
  return (
    <Router>
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
    </Router>
  );
};
export default AppRouter;
