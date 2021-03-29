import React from "react";
import {
  OuterDiv,
  InnerDiv,
  Container,
  Title,
  SubTitle,
  Image,
  Panel,
  VideoContainer,
} from "./styles/jumbotronStyle";

export default function Jumbotron({ direction = "row", children, ...restProps }) {
  return (
    <OuterDiv {...restProps}>
      <InnerDiv direction={direction}>{children}</InnerDiv>
    </OuterDiv>
  );
}

Jumbotron.Container = function JumbotronContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Jumbotron.Panel = function JumbotronPanel({ children, ...restProps }) {
  return <Panel {...restProps}>{children}</Panel>;
};

Jumbotron.Title = function JumbotronTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Jumbotron.SubTitle = function JumbotronSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Jumbotron.Image = function JumbotronImage({ ...restProps }) {
  return <Image {...restProps} />;
};
Jumbotron.Video = function JumbotronVideo({ src, ...restProps }) {
  return (
    <VideoContainer {...restProps}>
      <video autoPlay muted loop>
        <source src={src} type="video/mp4" />
      </video>
    </VideoContainer>
  );
};

Jumbotron.Video2 = function JumbotronVideo({ src, ...restProps }) {
  return (
    <VideoContainer {...restProps}>
      <video autoPlay muted loop>
        <source src={src} type="video/mp4" />
      </video>
    </VideoContainer>
  );
};
