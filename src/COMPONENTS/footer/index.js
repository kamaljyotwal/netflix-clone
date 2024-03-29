import React from "react";
import {
  Container,
  Content,
  Row,
  Column,
  Link,
  Text,
  Title,
  Note,
  Href,
} from "./styles/footerStyle";

export default function Footer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Footer.Content = function FooterContent({ children, ...restProps }) {
  return <Content {...restProps}>{children}</Content>;
};

Footer.Title = function FooterTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Footer.Row = function FooterRow({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>;
};

Footer.Column = function FooterColumn({ children, ...restProps }) {
  return <Column {...restProps}>{children}</Column>;
};

Footer.Link = function FooterLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

Footer.Text = function FooterText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Footer.Text = function FooterText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Footer.Note = function FooterNote({ children }) {
  return <Note>{children}</Note>;
};

Footer.Href = function FooterHref({ children, ...restProps }) {
  return <Href {...restProps}>{` ${children}`}</Href>;
};
