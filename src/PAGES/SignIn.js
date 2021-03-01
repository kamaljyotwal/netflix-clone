import React, { useState } from "react";
import { Form } from "../COMPONENTS";
import FooterContainer from "../CONTAINERS/FooterContainer";
import HeaderContainer from "../CONTAINERS/HeaderContainer";
import * as ROUTES from "../CONSTANTS/routes";

export default function SignIn() {
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");

  const isInvalid = password.length === 0 || emailAddress.length === 0;

  // Form Submission functions
  const handleSignin = (e) => {
    e.preventDefault();
    console.log(emailAddress);
    console.log(password);
    setEmailAddress("");
    setPassword("");
  };
  const alerting = (e) => {
    e.preventDefault();
    alert("Input fields cannot be empty");
  };

  return (
    <>
      <HeaderContainer noButton>
        <Form>
          <Form.InnerContainer>
            <Form.Title>Sign In</Form.Title>
            <Form.Form onSubmit={isInvalid ? alerting : handleSignin}>
              <Form.Input
                placeholder="Email or phone number"
                value={emailAddress}
                onChange={(e) => setEmailAddress(e.target.value)}
                type="email"
              />

              <Form.Input
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                autoComplete="off"
              />
              <Form.Submit type="submit">Sign In</Form.Submit>
            </Form.Form>
          </Form.InnerContainer>

          <Form.SecondaryContainer>
            <Form.CheckBoxNneedHelpContainer>
              <Form.CheckBox text="Remember me" />

              <Form.Link to={ROUTES.LOGIN_HELP}>Need Help?</Form.Link>
            </Form.CheckBoxNneedHelpContainer>

            <Form.Text>
              New to Netflix?
              <Form.Link to={ROUTES.SIGN_UP}>Sign up now.</Form.Link>
            </Form.Text>

            <Form.SubText>
              This page is protected by Google reCAPTCHA to ensure you're not a bot.
            </Form.SubText>
          </Form.SecondaryContainer>
        </Form>
      </HeaderContainer>

      <FooterContainer />
    </>
  );
}
