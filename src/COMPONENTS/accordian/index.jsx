import React, { useState, createContext, useContext } from "react";
import { Container, Title, Inner, Item, Header, Body } from "./styles/accordianStyles";

const ToggleContext = createContext();

export default function Accordian({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
}

Accordian.Title = function AccordianTitle({ children, ...restProps }) {
  return <Title>{children}</Title>;
};

Accordian.Item = function AccordianItem({ children, ...restProps }) {
  const [toggleShow, setToggleShow] = useState(false);

  return (
    <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
      <Item>{children}</Item>
    </ToggleContext.Provider>
  );
};

Accordian.Header = function AccordianHeader({ children, ...restProps }) {
  const { toggleShow, setToggleShow } = useContext(ToggleContext);

  return <Header onClick={() => setToggleShow((toggleShow) => !toggleShow)}>{children}</Header>;
};

Accordian.Body = function AccordianBody({ children, ...restProps }) {
  const { toggleShow } = useContext(ToggleContext);
  return toggleShow && <Body>{children}</Body>;
};
