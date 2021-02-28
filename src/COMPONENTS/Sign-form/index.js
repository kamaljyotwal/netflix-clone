import React from "react";

import {
  Container,
  InnerTextContainer,
  Title,
  FormDiv,
  Input,
  SubmitBtn,
  SecondaryContainer,
  Checkbox,
  CheckboxNLinkContainer,
  LinkStyled,
  CheckboxContainer,
  Text,
  SubText,
  StyledLink2,
} from "./styles/signinFormStyles";

export default function SigninForm({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

SigninForm.InnerContainer = function SigninFormIC({ children }) {
  return <InnerTextContainer>{children}</InnerTextContainer>;
};

SigninForm.Title = function SigninFormTitle({ children }) {
  return <Title>{children}</Title>;
};

SigninForm.Form = function SigninFormForm({ children, ...restProps }) {
  return <FormDiv {...restProps}>{children}</FormDiv>;
};

SigninForm.Input = function SigninFormInput({ children, ...restProps }) {
  return <Input {...restProps}>{children}</Input>;
};

SigninForm.Submit = function SigninFormsubmit({ children, ...restProps }) {
  return <SubmitBtn {...restProps}>{children}</SubmitBtn>;
};

SigninForm.SecondaryContainer = function SigninFormSecondaryContainer({ children, ...restProps }) {
  return <SecondaryContainer {...restProps}>{children}</SecondaryContainer>;
};

SigninForm.CheckBoxNneedHelpContainer = function SigninFormChecknHelp({ children, ...restProps }) {
  return <CheckboxNLinkContainer>{children}</CheckboxNLinkContainer>;
};

SigninForm.CheckBox = function SigninFormCheckbox({ children, text, ...restProps }) {
  return (
    <CheckboxContainer {...restProps}>
      <Checkbox {...restProps} id="checkboxSignin" />
      <label htmlFor="checkboxSignin">{text}</label>
    </CheckboxContainer>
  );
};

SigninForm.Link = function SigninFormlinkstyled({ children, to, ...restProps }) {
  return <LinkStyled to={to}>{children}</LinkStyled>;
};

SigninForm.Text = function SigninFormText({ children, to, ...restProps }) {
  return (
    <>
      <Text>{children}</Text>
    </>
  );
};
SigninForm.Link = function SigninFormLink({ children, to, ...restProps }) {
  return <StyledLink2 to={to}>{children}</StyledLink2>;
};

SigninForm.SubText = function SigninFormSubText({ children, ...restProps }) {
  return <SubText>{children}</SubText>;
};
