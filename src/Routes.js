import React from "react";
import { Switch, Route } from "react-router-dom";
import { ContactPage, ExchangePage, ExchangePointsMap } from './components/index';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={ExchangePage}/>
      <Route path="/home" component={ExchangePage} />
      <Route path="/map" component={ExchangePointsMap} />
      <Route path="/contacts" component={ContactPage} />
      <Route
        exact
        path={"**"}
        component={() => (
          <h1 style={{ color: "red", textAlign: "center", marginTop: "50px" }}>
            Page was not found!
          </h1>
        )}
      />
    </Switch>
  );
}
