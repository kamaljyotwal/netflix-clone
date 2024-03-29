import React from "react";
import { Header } from "../COMPONENTS/index";
import * as ROUTES from "../CONSTANTS/routes";

export default function HeaderContainer({ children, noButton, signPage, ...restProps }) {
  return (
    <Header {...restProps} >
      <Header.Frame>
        <Header.Logo to={ROUTES.HOME} src="images/misc/logo.svg" alt="Netflix logo" />
        {!noButton && <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>}
      </Header.Frame>
      {children}
    </Header>
  );
}
