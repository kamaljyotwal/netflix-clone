import styled from "styled-components/macro";

export const Title = styled.p`
  font-size: 24px;
  color: #e5e5e5;
  font-weight: lighter;
  font-family: sans-serif;
  padding-left: 1.5rem;
  /* margin-right: 1rem; */
  margin-top: 1.2rem;
  margin-bottom: 0.8rem;
  width: 100%;
  /* border:1px solid red; */

  &:first-of-type {
    margin-top: 0.5rem;
  }
  @media (max-width: 500px) {
    padding-left: 10px;
  }
`;

export const Entities = styled.div`
  /* border: 5px dotted yellow; */
  /* display: flex;
  flex-direction: row; */
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  grid-template-rows: auto;
  grid-gap: 1px;
  @media (max-width: 500px) {
    width: 95%;
    margin: 0 auto;

    grid-template-columns: auto;
    grid-template-rows: auto;
    grid-gap: 10px;
  }
`;

export const Container = styled.div`
  /* border: 2px solid red; */
  width: 96%;
  margin: 0 auto;
  margin-bottom: 2rem;

  &:last-of-type {
    margin-bottom: 5rem;
  }
  @media (max-width: 500px) {
    margin-bottom: 1rem;
  }
`;

export const Group = styled.div`
  /* border: 1px dotted yellow; */
  background: #02070a;
  background: #000;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const SubTitle = styled.p`
  font-size: 12px;
  color: #fff;
  font-weight: bold;
  user-select: none;
`;

export const Text = styled.p`
  font-size: 10px;
  color: #fff;
  margin-top: 5px;
  margin-bottom: 0;
  user-select: none;
  line-height: normal;
`;

export const Image = styled.img`
  /* max-width: 305px; */
  height: auto;
  width: 100%;
`;

export const Meta = styled.div`
  position: absolute;
  bottom: 0;
  padding: 10px;
  width: 100%;
  background-color: #0000008f;
  display: none;
  overflow: hidden;
  max-height: 90%;

  @media (max-width: 500px) {
    /* border: 1px solid pink; */
    font-size: 1.3rem;
  }
`;

export const Item = styled.div`
  /* border: 1px solid pink; */
  cursor: pointer;
  position: relative;
  transition: all 0.2s;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: scale(1.2);
    z-index: 99;
  }
  &:active {
    outline: 1px solid #eee;
    transform: scale(1.2);
  }

  &:hover ${Meta} {
    display: block;
  }
  @media (max-width: 500px) {
    &:hover {
      transform: none;
    }
  }
`;

export const Feature = styled.div`
  color: white;

  background: url(${(props) => props.src});
  z-index: 100;
  border: 1px solid #111;
  background-size: contain;
  height: 400px;
  width: auto;
  background-repeat: no-repeat;
  background-position-x: right;
  position: relative;
  margin-top: 1rem;

  @media (max-width: 500px) {
    width: auto;
    height: 250px;

    background-size: cover;
    /* object-fit: fill; */
  }
`;

export const AndarWali = styled.div`
  max-width: 500px;
  line-height: normal;
  /* border: 3px dotted green; */
  z-index: 900;
  margin-top: 1.5rem;
  margin-left: 1rem;
`;

export const FeatureTitle = styled(Title)`
  padding-left: 0;
  letter-spacing: 1px;
  font-size: 2.5rem;
  @media (max-width: 500px) {
    font-size: 2rem;
  }
`;

export const FeatureText = styled.p`
  font-size: 18px;
  color: white;
  /* font-weight: bold; */
  margin: 0;
  @media (max-width: 500px) {
    font-size: 14px;
    max-width: 90%;
  }
`;

export const FeatureClose = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: 0;
  outline: none;
  position: absolute;
  top: 1.7rem;
  right: 1.7rem;

  img {
    filter: brightness(0) invert(1);
    width: 30px;
  }
  @media (max-width: 500px) {
    top: 1rem;
    right: 1rem;

    img {
      width: 25px;
    }
  }
`;

export const FeatureGroup = styled.div`
  /* border: 2px solid red; */
  display: flex;
  margin-top: 1rem;

  @media (max-width: 500px) {
    margin-top: 0.7rem;
  }
`;
export const Maturity = styled.div`
  margin: 0 1rem 0 0.5rem;
  font-weight: bold;
  border-radius: 15px;
  width: 40px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  font-size: 14px;
  background-color: ${({ rating }) => (rating >= 15 ? "#f44336" : "#2f9600")};

  @media (max-width: 500px) {
    font-size: 12px;
    height: 18px;
    width: 30px;
  }
`;
