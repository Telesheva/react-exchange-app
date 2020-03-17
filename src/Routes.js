import React from "react";
import { Switch, Route } from "react-router-dom";
import ExchangePage from "./components/ExchangePage/ExchangePage.tsx";
import ExchangePointsMap from "./components/ExchangePointsMap/ExchangePointsMap.tsx";

export default function Routes() {
  return (
    <Switch>
      <Route path="/home" component={ExchangePage} />
      <Route exact path="/map" component={ExchangePointsMap} />
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
