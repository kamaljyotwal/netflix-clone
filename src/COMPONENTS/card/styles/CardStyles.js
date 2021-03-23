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
`;

export const Entities = styled.div`
  /* border: 5px dotted yellow; */
  /* display: flex;
  flex-direction: row; */
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  grid-template-rows: auto;
  grid-gap: 1px;
`;

export const Container = styled.div`
  /* border: 3px solid blue; */
  width: 96%;
  margin: 0 auto;
  margin-bottom: 2rem;

  &:last-of-type {
    margin-bottom: 5rem;
  }
`;

export const Group = styled.div`
  /* border: 5px dotted blue; */
  background: #02070a;
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
    border: 2px solid #eee;
    transform: scale(1.2);
  }
  /* &:hover:first-of-type {
    margin-left: 1rem;
  }
  &:hover:last-of-type {
    margin-right: 1rem;
  } */

  &:hover ${Meta} {
    display: block;
  }
`;

export const Feature = styled.div`
  color: white;
  border: 2px solid blue;
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
`;

export const FeatureText = styled.p`
  font-size: 18px;
  color: white;
  /* font-weight: bold; */
  margin: 0;
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
`;

export const FeatureGroup = styled.div`
  /* border: 2px solid red; */
  display: flex;
  margin-top: 1rem;
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
`;
