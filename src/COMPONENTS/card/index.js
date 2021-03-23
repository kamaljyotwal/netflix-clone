import React, { createContext, useContext, useState } from "react";
import {
  Container,
  Group,
  Title,
  SubTitle,
  Text,
  Image,
  Entities,
  Meta,
  Item,
  Feature,
  AndarWali,
  FeatureTitle,
  FeatureText,
  FeatureClose,
  FeatureGroup,
  Maturity,
} from "./styles/CardStyles";

export const CardContext = createContext();

export default function Card({ children, ...restProps }) {
  const [showFeature, setShowFeature] = useState(false);
  const [itemFeature, setItemFeature] = useState({});
  // console.log(showFeature);

  return (
    <CardContext.Provider value={{ showFeature, setShowFeature, itemFeature, setItemFeature }}>
      <Container {...restProps}>{children}</Container>
    </CardContext.Provider>
  );
}

Card.Group = function CardGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

Card.Title = function CardTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Card.SubTitle = function CardSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Card.Text = function CardText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Card.Image = function CardImage({ ...restProps }) {
  return <Image {...restProps} />;
};

Card.Entities = function CardEntities({ children, ...restProps }) {
  return <Entities {...restProps}>{children}</Entities>;
};

Card.Meta = function CardMeta({ children, ...restProps }) {
  return <Meta {...restProps}>{children}</Meta>;
};

Card.Item = function CardItem({ item, children, ...restProps }) {
  const { setItemFeature, setShowFeature } = useContext(CardContext);

  return (
    <Item
      onClick={() => {
        setItemFeature(item);
        setShowFeature(true);
      }}
      {...restProps}
    >
      {children}
    </Item>
  );
};

Card.Feature = function CardFeature({ category, children, ...restProps }) {
  const { itemFeature, showFeature, setShowFeature } = useContext(CardContext);
  return (
    showFeature && (
      <Feature
        {...restProps}
        src={`/images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`}
      >
        <AndarWali>
          <FeatureTitle>{itemFeature.title}</FeatureTitle>
          <FeatureText>{itemFeature.description}</FeatureText>

          <FeatureGroup>
            <Maturity rating={itemFeature.maturity}>
              {itemFeature.maturity > 12 ? "PG" : "15"}
            </Maturity>
            <FeatureText fontWeight="bold">
              {itemFeature.genre.charAt(0).toUpperCase() + itemFeature.genre.slice(1)}
            </FeatureText>
          </FeatureGroup>

          <FeatureClose onClick={() => setShowFeature(false)}>
            <img src="/images/icons/close.png" alt="Close" />
          </FeatureClose>
        </AndarWali>
        {children}
      </Feature>
    )
  );
};
