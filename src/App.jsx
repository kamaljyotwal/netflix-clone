import React from "react";
import * as ROUTES from "./CONSTANTS/routes";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home, Browse, SignIn, SignUp } from "./PAGES";
import LoginHelp from "./PAGES/LoginHelp";

function App() {
  return (
    <>
      <Router>
        <Route exact={true} path={ROUTES.HOME}>
          <Home />
        </Route>

        <Route exact={true} path={ROUTES.SIGN_IN}>
          <SignIn />
        </Route>

        <Route exact={true} path={ROUTES.LOGIN_HELP}>
          <LoginHelp />
        </Route>

        <Route exact={true} path={ROUTES.SIGN_UP}>
          <SignUp />
        </Route>

        <Route exact={true} path={ROUTES.BROWSE}>
          <Browse />
        </Route>
      </Router>
    </>
  );
}

export default App;
