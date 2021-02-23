import React from "react";
import { Container, Input, Button, Text } from "./styles/optFormStyles";

export default function OptForm({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

OptForm.Text = function OptFormText({ children, ...restProps }) {
  return <Text>{children}</Text>;
};

OptForm.Input = function OptFormInput({ ...restProps }) {
  return <Input {...restProps} placeholder="Email address" />;
};

OptForm.Button = function OptFormButton({ children, ...restProps }) {
  return <Button>{children}</Button>;
};
