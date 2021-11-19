import React from "react";
import jumboData from "../JSON/jumboData.json";
import { Jumbotron } from "../COMPONENTS/index";

export default function JumbotronContainer() {
  return (
    <Jumbotron.Container>
      {jumboData.map((i) => (
        <Jumbotron key={i.id} direction={i.direction}>
          <Jumbotron.Panel>
            <Jumbotron.Title>{i.title}</Jumbotron.Title>
            <Jumbotron.SubTitle>{i.subTitle}</Jumbotron.SubTitle>
          </Jumbotron.Panel>

          <Jumbotron.Panel>
            {i.id !== 2 && i.id !== 4 ? (
              <Jumbotron.Video src={i.vid} />
            ) : (
              <Jumbotron.Image src={i.image} alt={i.alt} />
            )}
          </Jumbotron.Panel>
        </Jumbotron>
      ))}
    </Jumbotron.Container>
  );
}
