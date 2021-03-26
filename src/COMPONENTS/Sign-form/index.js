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
  ErrorDiv,
  RegistrationDiv,
} from "./styles/signinFormStyles";

export default function Form({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Form.InnerContainer = function FormIC({ children }) {
  return <InnerTextContainer>{children}</InnerTextContainer>;
};

Form.Title = function FormTitle({ children }) {
  return <Title>{children}</Title>;
};

Form.Form = function FormForm({ children, ...restProps }) {
  return <FormDiv {...restProps}>{children}</FormDiv>;
};

Form.Error = function FormError({ children, ...restProps }) {
  return <ErrorDiv>{children}</ErrorDiv>;
};
Form.Registration = function FormRegistration({ children }) {
  return <RegistrationDiv>{children}</RegistrationDiv>;
};

Form.Input = function FormInput({ children, ...restProps }) {
  return <Input {...restProps}>{children}</Input>;
};

Form.Submit = function Formsubmit({ children, ...restProps }) {
  return <SubmitBtn {...restProps}>{children}</SubmitBtn>;
};

Form.SecondaryContainer = function FormSecondaryContainer({ children, ...restProps }) {
  return <SecondaryContainer {...restProps}>{children}</SecondaryContainer>;
};

Form.CheckBoxNneedHelpContainer = function FormChecknHelp({ children, ...restProps }) {
  return <CheckboxNLinkContainer>{children}</CheckboxNLinkContainer>;
};

Form.CheckBox = function FormCheckbox({ children, text, ...restProps }) {
  return (
    <CheckboxContainer {...restProps}>
      <Checkbox {...restProps} id="checkboxSignin" />
      <label htmlFor="checkboxSignin">{text}</label>
    </CheckboxContainer>
  );
};

Form.Link = function Formlinkstyled({ children, to, ...restProps }) {
  return <LinkStyled to={to}>{children}</LinkStyled>;
};

Form.Text = function FormText({ children, to, ...restProps }) {
  return <Text>{children}</Text>;
};
Form.Link = function FormLink({ children, to, ...restProps }) {
  return <StyledLink2 to={to}>{children}</StyledLink2>;
};

Form.SubText = function FormSubText({ children, ...restProps }) {
  return <SubText {...restProps}>{children}</SubText>;
};
