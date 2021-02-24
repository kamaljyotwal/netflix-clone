import React from "react";
import { Accordian, OptForm } from "../COMPONENTS/index";
import json from "../JSON/faqData.json";

export default function FaqContainer() {
  return (
    <Accordian>
      <Accordian.Title>Frequently Asked Questions</Accordian.Title>
      {json.map((i) => (
        <Accordian.Item key={i.id}>
          <Accordian.Header>{i.header}</Accordian.Header>
          <Accordian.Body>{i.body}</Accordian.Body>
        </Accordian.Item>
      ))}


      {/*----------------------opt-In Form starts here----------------------- */}
      <OptForm>
        <OptForm.Text>
          Ready to watch? Enter your email to create or restart your membership.
        </OptForm.Text>

        <OptForm.FieldContainer>
          <OptForm.Input />
          <OptForm.Button>
            Get Started
            <img src="./images/icons/chevron-right.png" alt="click to submit email" />
          </OptForm.Button>
        </OptForm.FieldContainer>
      </OptForm>
      
    </Accordian>
  );
}
