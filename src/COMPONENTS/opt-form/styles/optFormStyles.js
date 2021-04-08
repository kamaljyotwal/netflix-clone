import styled from "styled-components/macro";

export const Container = styled.div`
  /* border: 2px solid yellow; */
  justify-content: center;
  max-width: 650px;
  margin: 3rem auto 0;
`;

export const Text = styled.div`
  /* border: 2px solid blue; */
  color: white;
  font-size: 19px;
  text-align: center;
  padding: 1rem 0 1.2rem;
  font-family: Arial, Helvetica, sans-serif;

  @media (max-width: 500px) {
    font-size: 1.1rem;
    padding: 0.8rem 1rem 0.4rem;
  }
`;
export const FieldContainer = styled.form`
  /* border: 2px solid gold; */
  display: flex;
  min-height: 60px;
  height: auto;
  @media (max-width: 500px) {
    flex-direction: column;
    height: auto;
    width: 85%;
    margin: auto;
  }
`;
export const InnerContainer = styled.div`
  /* border:2px dotted green; */
  display: flex;
  flex-direction: column;
  width: 65%;
  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const Input = styled.input`
  /* border:2px solid red; */
  outline: none;
  height: auto;
  /* width: 65%; */
  height: 60px;
  font-size: 1.25rem;
  border: none;
  padding: 1px 1rem;
  @media (max-width: 500px) {
    width: 100%;
    height: 45px;
    font-size: 1.1rem;
    margin-top: 0.4rem;
  }
`;

export const Button = styled.button`
  /* border: 2px solid gold; */
  border: none;
  background-color: #f40612;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35%;
  font-size: 1.5rem;
  letter-spacing: 0.5px;
  padding: 0.5rem;
  cursor: pointer;
  /* outline: none; */
  height: 60px;
  &:hover {
    background-color: red;
  }

  img {
    filter: brightness(0) invert(0.9);
    height: 20px;
    width: auto;
    margin-left: 10px;
  }

  @media (max-width: 500px) {
    width: 44%;
    font-size: 1rem;
    margin: 10px auto;
    height: 36px;
    img {
      height: 12px;
      width: auto;
      margin-left: 8px;
    }
  }
`;

export const Warning = styled.p`
  color: #ffa00a;
  text-decoration: none solid rgb(255, 160, 10);
  font-size: 15px;
  font-family: Helvetica, sans-serif;
  font-weight: bold;
  padding-top: 5px;
  padding-left: 5px;
  /* border: 2px solid red; */
`;
