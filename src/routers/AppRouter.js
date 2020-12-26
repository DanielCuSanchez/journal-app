import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";

import { AuthRouter } from "./AuthRouter";
import { JournalScreen } from "./../components/journal/JournalScreen";

export const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/auth" component={AuthRouter} />
        <Route path="/" component={JournalScreen} exact />
        <Redirect to="/auth/login" />
      </Switch>
    </Router>
  );
};
