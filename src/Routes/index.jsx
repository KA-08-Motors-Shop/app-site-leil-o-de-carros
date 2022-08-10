import { Switch, Route, useLocation } from "react-router-dom";

import  HomePage  from "../Pages/Home";

const Routes = () => {
  const location = useLocation()

  return (
    <Switch location={location} key={location.pathname}>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/login">
        </Route>
    </Switch>
  );
};

export default Routes;
