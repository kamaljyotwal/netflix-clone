import styled from "styled-components/macro";

export const Container = styled.div`
  /* border: 2px solid red; */
`;

export const OuterDiv = styled.div`
  width: 100%;
  background-color: #000;
  border-bottom: 8px solid #222;
  color: white;
  overflow: hidden;
  padding: 70px 45px;
  /* border: 2px solid yellow; */
  &:first-of-type {
    border-top: 8px solid #222;
  }
  @media (max-width: 500px) {
    padding: 1rem;
  }
`;

export const InnerDiv = styled.div`
  font-family: "Netflix Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  max-width: 1100px;
  margin: 0 auto;
  /* border: 2px solid green; */
  display: flex;
  flex-direction: ${({ direction }) => direction};
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 1000px) {
    flex-direction: column;
    /* text-align:center; */
  }
`;

export const Panel = styled.div`
  /* border: 2px dotted red; */
  width: 50%;
  position: relative !important;

  @media (max-width: 1000px) {
    width: 100%;
    overflow: hidden;
    padding: 0 45px;
    text-align: center;
    word-wrap: break-word;
    margin: 0 auto;
  }
  @media (max-width: 500px) {
    width: 100%;
    padding: 0;
  }
`;

export const Title = styled.p`
  font-size: 50px;
  margin-bottom: 8px;
  font-weight: 700;
  letter-spacing: normal;
  line-height: 55px;
  text-decoration: none solid rgb(255, 255, 255);
  text-align: start;
  text-indent: 0px;
  text-transform: none;
  vertical-align: baseline;
  white-space: normal;
  word-spacing: 0px;
  /* border: 2px solid yellow; */

  @media (max-width: 1000px) {
    font-size: 40px;
    text-align: center;
  }
  @media (max-width: 600px) {
    font-size: 35px;
  }
  @media (max-width: 500px) {
    font-size: 1.625rem;
    line-height: normal;
    text-align: center;
    width: 100%;
    padding-bottom: 10px;
    margin-top: 1.5rem;
  }
`;

export const SubTitle = styled.p`
  font-size: 26px;
  font-weight: normal;
  line-height: normal;

  @media (max-width: 1000px) {
    font-size: 18px;
  }
  @media (max-width: 500px) {
    font-size: 1.11rem;
  }
`;

// export const ImageContainer = styled.div`
//   border: 1px solid yellow;
//   z-index: 10;
//   overflow:hidden;
// `;

export const Image = styled.img`
  width: 100%;
  height: auto;
  @media (max-width: 500px) {
    margin-top: 0.5rem;
  }
`;

export const VideoContainer = styled.div`
  z-index: 2;
  width: 100%;
  margin: 0 auto;
  height: auto;
  video {
    width: 100%;
    height: 100%;
  }
  @media (max-width: 500px) {
    margin-top: 0.6rem;
  }
`;
