import React from "react";
import { Container, Title, SubTitle } from "./styles/HeroHome";

export default function HeroHome({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

HeroHome.Title = function HeroHomeTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

HeroHome.SubTitle = function HeroHomeSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};
