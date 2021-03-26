import React, { useState, createContext } from "react";
import FaqContainer from "../CONTAINERS/FaqContainer";
import FooterContainer from "../CONTAINERS/FooterContainer";
import HeaderContainer from "../CONTAINERS/HeaderContainer";
import JumbotronContainer from "../CONTAINERS/JumbotronContainer";
import { HeroHome, OptForm } from "../COMPONENTS/index";
import { useHistory } from "react-router-dom";
import * as ROUTES from "../CONSTANTS/routes";

export const InputEmailContext = createContext("");

export default function Home() {
  const [emailInput, seteEmailInput] = useState("");
  const history = useHistory();
  const [emailWarning, setemailWarning] = useState(false);

  function optfunc(e) {
    e.preventDefault();
    emailInput ? sessionStorage.setItem("email", emailInput) : setemailWarning(true);
    emailInput && history.push(ROUTES.SIGN_UP);
  }

  return (
    <>
      <HeaderContainer>
        <OptForm>
          <HeroHome>
            <HeroHome.Title>Unlimited movies, TV shows and more.</HeroHome.Title>
            <HeroHome.SubTitle>Watch anywhere. Cancel anytime.</HeroHome.SubTitle>
          </HeroHome>

          <OptForm.Text>
            Ready to watch? Enter your email to create or restart your membership.
          </OptForm.Text>

          <OptForm.FieldContainer onSubmit={optfunc}>
            <OptForm.Input
              onChange={(e) => seteEmailInput(e.target.value)}
              value={emailInput}
              type="email"
            />
            <OptForm.Button>
              Get Started
              <img src="./images/icons/chevron-right.png" alt="click to submit email" />
            </OptForm.Button>
          </OptForm.FieldContainer>

          {emailWarning && <OptForm.Warning>Email is required.</OptForm.Warning>}
        </OptForm>
      </HeaderContainer>
      <JumbotronContainer />
      <FaqContainer />
      <FooterContainer />
    </>
  );
}
