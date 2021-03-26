import styled from "styled-components/macro";

export const PlayerDiv = styled.div`
  /* border: 1px solid gold; */
`;

export const Overlay = styled.div`
  /* border: 1px solid red; */
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  z-index: 200;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  video {
    width: 70%;
    height: auto;
    outline: none;
    position: relative;
  }
`;

export const Close = styled.button`
  position: absolute;
  background-color: transparent;
  border: 0;
  outline: 0;
  z-index: 300;
  top: 2rem;
  right: 2rem;

  img {
    filter: brightness(1) invert(0.7);
    width: 30px;
    height: auto;

    &:hover {
      cursor: pointer;
      filter: brightness(0) invert(1);
    }
  }
`;

export const Button = styled.button`
  background-color: #e6e6e6;
  padding: 10px 40px;
  border-radius: 5px;
  max-width: 150px;
  font-weight: bold;
  font-size: 20px;
  margin-top: 1.5rem;
  margin-left: ${(props) => (props.noMarginLeft ? "0" : "1.5rem")};
  cursor: pointer;
  /* border: none; */
  outline: none;
  border: none;
  transition: background-color 0.3s ease;

  &:hover {
    /* border: 1px solid red; */
    background-color: #ff1e1e;
    color: white;
  }
`;
