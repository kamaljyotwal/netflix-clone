import React from "react";
import {
  Container,
  Input,
  Button,
  Text,
  FieldContainer,
  Warning,
  InnerContainer,
} from "./styles/optFormStyles";

export default function OptForm({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

OptForm.Text = function OptFormText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

OptForm.Input = function OptFormInput({ ...restProps }) {
  return <Input {...restProps} type="email" placeholder="Email address" />;
};

OptForm.Button = function OptFormButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};

OptForm.FieldContainer = function OptFormFieldContainer({ children, ...restProps }) {
  return <FieldContainer {...restProps}>{children}</FieldContainer>;
};

OptForm.InnerContainer = function OptFormOuterContainer({ children, ...restProps }) {
  return <InnerContainer {...restProps}>{children}</InnerContainer>;
};
OptForm.Warning = function OptFormButton({ children, ...restProps }) {
  return <Warning {...restProps}>{children}</Warning>;
};
