import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Login, UserLayout, ConsultantLayout } from "../pages/index";

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/app/user" component={UserLayout} />
      <Route path="/app/consultant" component={ConsultantLayout} />
    </Switch>
  </BrowserRouter>
);
export default Routes;
