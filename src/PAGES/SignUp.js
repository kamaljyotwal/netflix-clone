import React, { useState, useContext } from "react";
import { Form } from "../COMPONENTS";
import { useHistory } from "react-router-dom";
import FooterContainer from "../CONTAINERS/FooterContainer";
import HeaderContainer from "../CONTAINERS/HeaderContainer";
import * as ROUTES from "../CONSTANTS/routes";
import { FirebaseContext } from "../context/firebaseContext";

export default function SignUp() {
  const history = useHistory();
  const [name, setName] = useState("");
  const [emailAddress, setEmailAddress] = useState(sessionStorage.getItem("email"));
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  // const [registration, setRegistration] = useState(false);
  const { firebaseConst } = useContext(FirebaseContext);

  const isInvalid = password.length === 0 || emailAddress.length === 0 || name.length === 0;

  // Form submission handling functions
  const handleSignup = (e) => {
    e.preventDefault();
    firebaseConst
      .auth()
      .createUserWithEmailAndPassword(emailAddress, password)
      .then((res) =>
        res.user.updateProfile({
          displayName: name,
          photoURL: Math.floor(Math.random() * 5) + 1,
        })
      )
      .then(() => history.push(ROUTES.BROWSE))
      .catch((err) => {
        setError(err.message);
        setPassword("");
      });
  };

  const alerting = (e) => {
    e.preventDefault();
    alert("Input fields cannot be empty");
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.InnerContainer>
            <Form.Title>Sign Up Here</Form.Title>

            <Form.Form onSubmit={isInvalid ? alerting : handleSignup}>
              {error && <Form.Error>{error}</Form.Error>}

              <Form.Input
                placeholder="First name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
              />

              <Form.Input
                placeholder="Email"
                value={emailAddress}
                onChange={(e) => setEmailAddress(e.target.value)}
                type="email"
              />

              {/* password field */}
              <Form.Input
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                autoComplete="off"
              />
              <Form.Submit type="submit">Create Account</Form.Submit>
            </Form.Form>
          </Form.InnerContainer>

          <Form.SecondaryContainer>
            <Form.Text>
              Already a User
              <Form.Link to={ROUTES.SIGN_IN}>Sign in here.</Form.Link>
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
