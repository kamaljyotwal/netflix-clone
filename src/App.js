import React from "react";
import * as ROUTES from "./CONSTANTS/routes";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, Browse, SignIn, SignUp } from "./PAGES";
import LoginHelp from "./PAGES/LoginHelp";
// import { IsUserRedirect } from "./helpers/routehelp";
import { AuthListenerHook } from "./customHooks";

function App() {
  const userVar = AuthListenerHook();
  console.log(userVar);

  return (
    <Router>
      <Switch>
        <Route exact={true} path={ROUTES.HOME}>
          <Home />
        </Route>

        <Route path={ROUTES.SIGN_IN}>
          <SignIn />
        </Route>

        <Route path={ROUTES.SIGN_UP}>
          <SignUp />
        </Route>

        <Route path={ROUTES.LOGIN_HELP}>
          <LoginHelp />
        </Route>

        <Route exact={true} path={ROUTES.BROWSE}>
          <Browse />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
