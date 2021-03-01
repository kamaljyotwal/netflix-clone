import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const Background = styled.section`
  border: 1px solid #111111;
  /* display: flex;
  flex-direction: column; */
  background: url(${({ src }) => src ? `../images/misc/${src}.jpg` : "../images/misc/home-bg.jpg"})
  top left / cover no-repeat;
  min-height: 100vh;
  width: 100%;
  height: auto;
  .overlay {
    width: auto;
    min-height: 100vh;
    background: rgba(333, 444, 331, 0.4);
  }

  @media (max-width: 1100px) {
    ${({ dontShowOnSmallViewPort }) => dontShowOnSmallViewPort && `background: none;`}
  }
`;

export const Container = styled.div`
  /* border: 1px solid red; */
  display: flex;
  margin: 0 56px;
  /* height: 64px; */
  padding: 2rem 0 0;
  justify-content: space-between;
  align-items: center;

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
