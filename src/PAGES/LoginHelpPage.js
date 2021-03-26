import React from "react";
import { Header, LoginHelp, Form } from "../COMPONENTS";
import * as ROUTES from "../CONSTANTS/routes";

export default function LoginHelpPage() {
  return (
    <>
      <Header src="loginhelpBG" position>
        <Header.Frame>
          <Header.Logo to={ROUTES.HOME} src="images/misc/logo.svg" alt="Netflix logo" />
          <Header.ButtonLink to={ROUTES.SIGN_IN} noborder>
            Sign In
          </Header.ButtonLink>
        </Header.Frame>

        <LoginHelp>
          <LoginHelp.Title>Forgot Email/Password</LoginHelp.Title>
          <LoginHelp.Text>Would you like to reset your password?</LoginHelp.Text>

          <LoginHelp.Text>
            We will send you an email with instructions on how to reset your password.
          </LoginHelp.Text>

          <LoginHelp.Input />
          <LoginHelp.Button>Email Me</LoginHelp.Button>
        </LoginHelp>
        <Form.SubText center>
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
        </Form.SubText>
      </Header>
    </>
  );
}
