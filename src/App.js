import React from "react";
import * as ROUTES from "./CONSTANTS/routes";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Home, Browse, SignIn, SignUp, LoginHelpPage } from "./PAGES";
import { IsUserRedirect, ProtectedRoute } from "./helpers/routehelp";
import { AuthListenerHook } from "./customHooks";

function App() {
  const { user } = AuthListenerHook();
  // console.log(user);

  return (
    <Router>
      <Switch>
        <IsUserRedirect exact={true} user={user} loggedInpath={ROUTES.BROWSE} path={ROUTES.HOME}>
          <Home />
        </IsUserRedirect>

        <IsUserRedirect exact={true} user={user} loggedInpath={ROUTES.BROWSE} path={ROUTES.SIGN_IN}>
          <SignIn />
        </IsUserRedirect>

        <IsUserRedirect exact={true} user={user} loggedInpath={ROUTES.BROWSE} path={ROUTES.SIGN_UP}>
          <SignUp />
        </IsUserRedirect>

        <IsUserRedirect
          exact={true}
          user={user}
          loggedInpath={ROUTES.BROWSE}
          path={ROUTES.LOGIN_HELP}
        >
          <LoginHelpPage />
        </IsUserRedirect>

        <ProtectedRoute user={user} signInPage={ROUTES.SIGN_IN}>
          <Browse />
        </ProtectedRoute>

        {/* <Route exact={true} path={ROUTES.HOME}>
          <Home />
        </Route> */}
        {/* <Route path={ROUTES.SIGN_IN}>
          <SignIn />
        </Route> */}
        {/* 
        <Route path={ROUTES.SIGN_UP}>
          <SignUp />
        </Route> */}
        {/* <Route exact={true} path={ROUTES.BROWSE} signInPage={ROUTES.SIGN_IN}>
          <Browse />
        </Route> */}
        {/* <Route path={ROUTES.LOGIN_HELP}>
          <LoginHelp />
        </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
