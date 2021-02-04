import React, { FunctionComponent } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CalculatorView from "./views/calculator/CalculatorView";
import HomeView from "./views/home/HomeView";

interface IProps {}

const AppNavigation: FunctionComponent<IProps> = (props) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/calculator">
          <CalculatorView />
        </Route>
        <Route exact path="/">
          <HomeView />
        </Route>
      </Switch>
    </Router>
  );
};

export default AppNavigation;
