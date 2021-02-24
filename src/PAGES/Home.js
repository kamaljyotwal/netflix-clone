import React from "react";
import FaqContainer from "../CONTAINERS/FaqContainer";
import FooterContainer from "../CONTAINERS/FooterContainer";
import HeaderContainer from "../CONTAINERS/HeaderContainer";
import JumbotronContainer from "../CONTAINERS/JumbotronContainer";
import { HeroHome, OptForm } from "../COMPONENTS/index";

export default function Home() {
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

          <OptForm.FieldContainer>
            <OptForm.Input />
            <OptForm.Button>
              Get Started
              <img src="./images/icons/chevron-right.png" alt="click to submit email" />
            </OptForm.Button>
          </OptForm.FieldContainer>
        </OptForm>
      </HeaderContainer>

      <JumbotronContainer />
      <FaqContainer />
      <FooterContainer />
    </>
  );
}
