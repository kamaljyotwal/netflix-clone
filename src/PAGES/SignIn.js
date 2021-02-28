import React, { useState } from "react";
import { SigninForm } from "../COMPONENTS";
import FooterContainer from "../CONTAINERS/FooterContainer";
import HeaderContainer from "../CONTAINERS/HeaderContainer";
import * as ROUTES from "../CONSTANTS/routes";

export default function SignIn() {
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");

  const isInvalid = password.length === 0 || emailAddress.length === 0;

  const handleSignin = (e) => {
    e.preventDefault();
    console.log(emailAddress);
    console.log(password);
    setEmailAddress("");
    setPassword("");
  };

  return (
    <>
      <HeaderContainer>
        <SigninForm>
          <SigninForm.InnerContainer>
            <SigninForm.Title>Sign In</SigninForm.Title>
            <SigninForm.Form onSubmit={handleSignin}>
              <SigninForm.Input
                placeholder="Email or phone number"
                value={emailAddress}
                onChange={(e) => e.target.value.length > -1 && setEmailAddress(e.target.value)}
                type="email"
              />

              {/* password field */}
              <SigninForm.Input
                placeholder="Password"
                value={password}
                onChange={(e) => e.target.value.length > -1 && setPassword(e.target.value)}
                type="password"
                autoComplete="off"
              />
              <SigninForm.Submit
                type="submit"
                onClick={(e) =>
                  isInvalid ? alert("Email or Password field cannot be empty") : handleSignin
                }
              >
                Sign In
              </SigninForm.Submit>
            </SigninForm.Form>
          </SigninForm.InnerContainer>

          <SigninForm.SecondaryContainer>
            <SigninForm.CheckBoxNneedHelpContainer>
              <SigninForm.CheckBox text="Remember me" />

              <SigninForm.Link to={ROUTES.LOGIN_HELP}>Need Help?</SigninForm.Link>
            </SigninForm.CheckBoxNneedHelpContainer>

            <SigninForm.Text>
              New to Netflix?
              <SigninForm.Link to={ROUTES.SIGN_UP}>Sign up now.</SigninForm.Link>
            </SigninForm.Text>

            <SigninForm.SubText>
              This page is protected by Google reCAPTCHA to ensure you're not a bot.
            </SigninForm.SubText>
          </SigninForm.SecondaryContainer>
        </SigninForm>
      </HeaderContainer>

      <FooterContainer />
    </>
  );
}
