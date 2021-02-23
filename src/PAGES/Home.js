import React from "react";
import FaqContainer from "../CONTAINERS/FaqContainer";
import FooterContainer from "../CONTAINERS/FooterContainer";
import JumbotronContainer from "../CONTAINERS/JumbotronContainer";

export default function Home() {
  return (
    <>
      <JumbotronContainer />
      <FaqContainer />
      <FooterContainer />
    </>
  );
}
