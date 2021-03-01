import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import HomePage from "../routes/HomePage";
import GreeterPage from "../routes/GreeterPage";
import ChangeTextSizePage from "../routes/ChangeTextSizePage";
import PieChartPage from "../routes/PieChartPage";
import ProfilePage from "../routes/ProfilePage";

const AppRouter = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/greeter">
          <GreeterPage />
        </Route>
        <Route path="/changetextsize">
          <ChangeTextSizePage />
        </Route>
        <Route path="/piechart">
          <PieChartPage />
        </Route>
        <Route path="/profile">
          <ProfilePage />
        </Route>
      </Switch>
    </Router>
  );
};

export default AppRouter;
