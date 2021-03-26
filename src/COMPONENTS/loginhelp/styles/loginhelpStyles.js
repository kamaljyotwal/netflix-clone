import styled from "styled-components/macro";

export const Text = styled.p`
  font-size: 16px;
  color: #333;
  text-decoration: none solid rgb(51, 51, 51);
  font-family: Helvetica, sans-serif;
  padding-bottom: 1rem;
  padding-top: 1rem;
`;

export const Container = styled.div`
  /* border: 2px solid red; */
  min-width: 300px;
  max-width: 500px;
  width: auto;
  margin: 0 auto;
  background-color: #f3f3f3;
  min-height: 200px;
  padding: 3rem 2.5rem;
  height: 480px;
`;
export const Title = styled.p`
  font-size: 32px;
  color: #333;
  text-decoration: none solid rgb(51, 51, 51);
  font-family: Helvetica, sans-serif;
  padding-bottom: 1rem;
  padding-top: 1.5rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.7rem;
  outline: none;
  color: #111;
  font-family: Helvetica, sans-serif;
  font-size: 1.1rem;
  margin-bottom: 0.8rem;
  margin-top: 2.5rem;
`;
export const Button = styled.button`
  width: 100%;
  padding: 1rem;
  font-size: 20px;
  background-color: #2490fd;
  color: #fff;
  letter-spacing: 0.1px;
  border: none;
  cursor: pointer;
  bottom: 0;
  margin-top: 1rem;
`;
