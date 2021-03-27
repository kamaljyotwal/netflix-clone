import React from "react";
import { Accordian } from "../COMPONENTS/index";
import json from "../JSON/faqData.json";

export default function FaqContainer({ children }) {
  return (
    <Accordian>
      <Accordian.Title>Frequently Asked Questions</Accordian.Title>
      {json.map((i) => (
        <Accordian.Item key={i.id}>
          <Accordian.Header>{i.header}</Accordian.Header>
          <Accordian.Body>{i.body}</Accordian.Body>
        </Accordian.Item>
      ))}
      {children}
    </Accordian>
  );
}
