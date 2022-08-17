import { Switch, Route, useLocation } from "react-router-dom";

import HomePage from "../Pages/Home";
import Profile from "../Pages/Profile";
import Register from "../Pages/Register";
import Login from "../Pages/Login";

const Routes = () => {
  const location = useLocation();

  return (
    <Switch location={location} key={location.pathname}>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/profile">
        <Profile />
      </Route>
    </Switch>
  );
};

export default Routes;
