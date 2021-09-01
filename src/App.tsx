import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "css/index.scss";
import Statistics from "./views/Statistics";
import Bill from "./views/Bill";
import Labels from "./views/Labels";
import Money from "./views/Money";
import NoMatch from "./views/NoMatch";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/labels">
          <Labels />
        </Route>
        <Route path="/bill">
          <Bill />
        </Route>
        <Route path="/money">
          <Money />
        </Route>
        <Route path="/statistics">
          <Statistics />
        </Route>
        <Route exact path="/">
          <Redirect to="/money" />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
