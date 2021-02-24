import React from "react";
import { Background, Container, LogoImg, ButtonLinkStyled } from "./styles/HeaderStyles";
import { Link as RouterLink } from "react-router-dom";

export default function Header({ bg = true, children, ...restProps }) {
  return bg ? <Background {...restProps}>{children}</Background> : { children };
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Header.Logo = function HeaderLogo({ to, ...restProps }) {
  return (
    <RouterLink to={to}>
      <LogoImg {...restProps} />
    </RouterLink>
  );
};

Header.ButtonLink = function HeaderButtonLink({ children, to, ...restProps }) {
  return <ButtonLinkStyled to={to}>{children}</ButtonLinkStyled>;
};
