import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const Background = styled.section`
  /* border: 1px solid white; */
  background: url(${({ src }) =>src ? `../images/misc/${src}.jpg` : "../images/misc/home-bg.jpg"})
     top center / cover no-repeat;
  width: 100%;
  height: ${(props) => (props.notfull === true ? "80vh" : "100vh")};
 
  .overlay {
    width: auto;
    min-height: 100vh;
    background: rgba(333, 444, 331, 0.4);
  }

  /* @media (max-width: 1100px) {
    ${({ dontShowOnSmallViewPort }) => dontShowOnSmallViewPort && `background: none;`}
  } */
`;

export const OuterMostDiv = styled.div`
  /* border: 2px solid gold; */
  width: 100%;
  /* min-height: 100vh; */
  height: 100%;
  background-color: #222222;
`;

export const Group = styled.div`
  /* border: 2px solid saddlebrown; */
  color: white;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 5px 10px;
  margin: 0 !important;

  &:hover {
    background-color: ${(props) => (props.noHover ? "transparent" : "#2e2d2d")};
  }
`;

export const Container = styled.div`
  /* border: 1px solid green; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 30px;
  /* height: 64px; */
  height: 4rem;
  padding: 1rem 0 0;

  @media (max-width: 1000px) {
    margin: 0 30px;
  }
`;

export const LogoImg = styled.img`
  height: auto;
  width: 140px;
  margin-right: 40px;

  @media (min-width: 1449px) {
    height: 45px;
    width: 167px;
  }
`;

export const ButtonLinkStyled = styled(Link)`
  border: 2px solid red;
  text-decoration: none;
  display: block;
  background-color: #e50914;
  width: 84px;
  height: fit-content;
  color: white;
  border: 0;
  font-size: 15px;
  border-radius: 4px;
  padding: 8px 17px;
  cursor: pointer;
  text-decoration: none;
  box-sizing: border-box;

  &:hover {
    background: #f40612;
  }
`;

export const OptContainer = styled.div``;

export const Feature = styled.div`
  padding: 150px 0 0 25px;
  width: 50%;
  /* border: 2px dotted red; */
  color: white;

  @media (max-width: 1100px) {
    display: none;
  }
`;

export const FeatureCallOut = styled.h2`
  font-size: 50px;
  line-height: normal;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
`;

export const Text = styled.p`
  font-size: 20px;
  line-height: normal;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
`;

export const TextLink = styled.p`
  text-decoration: none;
  margin-right: 30px;
  cursor: pointer;
  letter-spacing: 1px;
  font-weight: ${(props) => (props.active ? "700" : "400")};

  &:hover {
    font-weight: 600;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;

export const Picture = styled.button`
  background: url(${({ src }) => src});
  background-size: contain;
  border: 0;
  width: 32px;
  height: 32px;
`;

export const Picture2 = styled.div`
  background: url(${({ src }) => src});
  background-size: contain;
  border: 0;
  width: 25px;
  height: 25px;
  border-radius: 40%;
  margin-right: 5px;
`;

export const Dropdown = styled.div`
  position: absolute;
  overflow: hidden;
  background-color: #020001;
  min-width: 120px;
  max-width: 150px;
  right: -15px;
  border-radius: 4px;
  font-size: 14px;
  height: 0;
  transition: all 150ms linear;

  ${TextLink} {
    cursor: default;
  }

  ${Group}:last-of-type {
    justify-content: center;
    padding-top: 5px;
  }
  ${Group}:last-of-type ${TextLink} {
    cursor: pointer;
  }

  ${Group}:first-of-type ${TextLink} {
    cursor: default;
  }

  ${Group} {
    margin-bottom: 8px;
    padding: 10px;

    &:last-of-type {
      margin-bottom: 0;
    }

    ${Picture} {
      cursor: default;
    }
  }

  button {
    margin-right: 10px;
  }

  p {
    font-size: 12px;
  }
`;

export const Profile = styled.div`
  position: relative;
  button {
    cursor: pointer;
  }

  &:hover > ${Dropdown} {
    height: 180px;
    max-height: auto;
  }
`;

export const Search = styled.div`
  /* border: 2px solid blue; */
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SearchIcon = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: 0;
  outline: 0;
  height: 32px;
  width: 32px;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    filter: brightness(0) invert(1);
    width: 16px;
  }
`;

export const SearchInput = styled.input`
  background-color: rgba(64, 64, 64, 0.5);
  color: white;
  border: 1px solid white;
  height: 30px;
  font-size: 14px;
  border-radius: 4px;
  padding-left: 8px;
  transition: width 250ms linear;
  width: ${(props) => (props.active ? "200px" : "0")};
  opacity: ${(props) => (props.active ? "1" : "0")};
  margin-left: ${(props) => (props.active ? "8px" : "0")};

  &:focus {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

export const PlayButton = styled.button`
  background-color: #e6e6e6;
  padding: 10px 40px;
  border-radius: 5px;
  max-width: 150px;
  font-weight: bold;
  font-size: 20px;
  margin-top: 1.5rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    border: 1px solid red;
    background-color: #ff1e1e;
    color: white;
  }
`;
