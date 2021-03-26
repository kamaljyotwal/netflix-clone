import React from "react";
import { Container,Title,Text,Input,Button } from "./styles/loginhelpStyles";

export default function LoginHelp({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

LoginHelp.Title = function LoginHelpTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

LoginHelp.Text = function LoginHelpText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};
LoginHelp.Input = function LoginHelpInput({ children, ...restProps }) {
  return <Input {...restProps} placeholder="name@example.com">{children}</Input>;
};

LoginHelp.Button = function LoginHelpInput({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};
