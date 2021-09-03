import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "css/index.scss";
import Statistics from "views/Statistics";
import Bill from "views/Bill";
import Labels from "views/Labels";
import Money from "views/Money";
import NoMatch from "views/NoMatch";
import Label from "views/Labels/Label";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/labels" exact>
          <Labels />
        </Route>
        <Route path="/labels/:label" exact>
          <Label />
        </Route>
        <Route path="/bill" exact>
          <Bill />
        </Route>
        <Route path="/money" exact>
          <Money />
        </Route>
        <Route path="/statistics" exact>
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
