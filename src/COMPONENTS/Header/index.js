import React, { useState } from "react";
import {
  Background,
  OuterMostDiv,
  Container,
  LogoImg,
  ButtonLinkStyled,
  Feature,
  Text,
  FeatureCallOut,
  Group,
  TextLink,
  Profile,
  Picture,
  Picture2,
  Dropdown,
  Search,
  SearchIcon,
  SearchInput,
  PlayButton,
  TitleImg,
  MetaInfo,
  Textinfo,
  Lightinfo,
} from "./styles/HeaderStyles";
import { Link as RouterLink } from "react-router-dom";

export default function Header({ bg = true, children, ...restProps }) {
  return bg ? (
    <Background {...restProps}>{children}</Background>
  ) : (
    <OuterMostDiv {...restProps}> {children}</OuterMostDiv>
  );
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Header.Feature = function HeaderFeature({ children, ...restProps }) {
  return <Feature {...restProps}>{children}</Feature>;
};

Header.Logo = function HeaderLogo({ to, ...restProps }) {
  return (
    <RouterLink to={to}>
      <LogoImg {...restProps} />
    </RouterLink>
  );
};

Header.ButtonLink = function HeaderButtonLink({ children, to, ...restProps }) {
  return (
    <ButtonLinkStyled to={to} {...restProps}>
      {children}
    </ButtonLinkStyled>
  );
};

Header.Text = function HeaderText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Header.FeatureCallOut = function HeaderFeatureCallOut({ children, ...restProps }) {
  return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>;
};

Header.Group = function HeaderGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

Header.TextLink = function HeaderTextLink({ children, ...restProps }) {
  return <TextLink {...restProps}>{children}</TextLink>;
};

Header.Profile = function HeaderProfile({ children, ...restProps }) {
  return <Profile {...restProps}>{children}</Profile>;
};

Header.Picture = function HeaderPicture({ src, ...restProps }) {
  return <Picture {...restProps} src={`/images/users/${src}.png`} />;
};

Header.Picture2 = function HeaderPicture({ src, ...restProps }) {
  return <Picture2 {...restProps} src={`/images/users/${src}.png`} />;
};

Header.Dropdown = function HeaderDropdown({ children, ...restProps }) {
  return <Dropdown {...restProps}>{children}</Dropdown>;
};

Header.Search = function HeaderSearch({ searchTerm, setSearchTerm }) {
  const [searchActive, setSearchActive] = useState(false);

  return (
    <Search>
      <SearchIcon onClick={() => setSearchActive((searchActive) => !searchActive)}>
        <img src="/images/icons/search.png" alt="Search" />
      </SearchIcon>
      <SearchInput
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
        placeholder="Search films and series"
        active={searchActive}
      />
    </Search>
  );
};

Header.PlayButton = function HeaderPlayButton({ children, ...restProps }) {
  return <PlayButton {...restProps}>{children}</PlayButton>;
};

Header.Seriesimg = function HeaderSeriesimg({ src, ...restProps }) {
  return <TitleImg src="../images/misc/seriestitle.png" />;
  // return <TitleImg src={src} />;
};
Header.Textinfo = function HeaderTextinfo({ children, ...restProps }) {
  return <Textinfo>{children}</Textinfo>;
  // return <TitleImg src={src} />;
};

Header.MetaInfo = function HeaderMetaInfo({ children, ...restProps }) {
  return <MetaInfo>{children}</MetaInfo>;
  // return <TitleImg src={src} />;
};

Header.Lightinfo = function HeaderLightInfo({ children, ...restProps }) {
  return <Lightinfo>{children}</Lightinfo>;
};
