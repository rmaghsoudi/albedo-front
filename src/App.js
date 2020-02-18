import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import NavBar from "./components/NavBar";
import { useAuth0 } from "./react-auth0-spa";
import history from "./utils/history";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./components/Dashboard";
import ExternalApi from "./components/ExternalApi"
import Journal from "./components/Journal";
import Test from "./components/Test"
import Exercise from "./components/Exercise";

function App() {
  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <Router history={history}>
        <header>
          <NavBar />
        </header>
        <Switch>
          <Route path="/" exact />
          <PrivateRoute path="/profile" component={Dashboard} />
          <PrivateRoute path="/external-api" component={ExternalApi} />
          <PrivateRoute path="/journal" component={Journal} />
          <Route path="/test" component={Test} />
          <Route path="/exercise" component={Exercise} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;