import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const Container = styled.div`
  /* border: 2px solid blue; */
  padding: 4rem 4rem 3rem 4rem;
  width: 450px;
  height: auto;
  margin: 0 auto;
  background-color: rgba(0, 0, 0, 0.7);
  margin-top: 3rem;
  /* margin-bottom: 2rem; */
  @media (max-width: 500px) {
    width: 90%;
    height: auto;
    /* height: 400px; */
    padding: 1rem;
    margin-top: 1rem;
    /* overflow:hidden; */
  }
`;
export const Title = styled.div`
  font-size: 32px;
  color: #fff;
  font-weight: 700;
  padding-bottom: 1.5rem;
  @media (max-width: 500px) {
    font-size: 28px;
    padding-bottom: 0.7rem;
  }
`;

export const InnerTextContainer = styled.div`
  /* border: 1px solid white; */
  /* padding: 2rem 4rem; */
  border-radius: 4px;
  margin: 0 auto;
`;
export const FormDiv = styled.form`
  /* border: 2px solid yellow; */
`;

export const ErrorDiv = styled.div`
  border: 2px solid #e87c03;
  color: white;
  background-color: #e87c03;
  border-radius: 4px;
  padding: 0.8rem 1rem;
  margin-bottom: 0.8rem;

  @media (max-width: 500px) {
    padding: 0.6rem;
    font-size: 0.9rem;
  }
`;

export const RegistrationDiv = styled.div`
  border: 2px solid #1a9b27;
  color: white;
  background-color: #1a9b27;
  border-radius: 4px;
  padding: 0.8rem 1rem;
  margin-bottom: 0.8rem;
  /* border: 2px solid yellow; */
`;

export const Input = styled.input`
  color: white;
  padding: 10px 20px;
  outline: none;
  background-color: #333333;
  border-radius: 4px;
  border: none;
  font-size: 1.1rem;
  width: 100%;
  height: 50px;
  margin-bottom: 1rem;
  /* border: 2px solid red; */

  :active,
  :focus {
    border-bottom: 3px solid #e87c03;
  }
  ::placeholder {
    color: #8c8c8c;
  }

  @media (max-width: 500px) {
    font-size: 1rem;
    height: 40px;
    margin-bottom: 0.8rem;
  }
`;

export const SubmitBtn = styled.button`
  width: 100%;
  background-color: #e50914;
  color: #fff;
  font-size: 1rem;
  outline: none;
  padding: 16px 0;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
  /* border: none; */

  :active {
    outline: initial;
  }
  @media (max-width: 500px) {
    padding: 13px;
    border: none;
  }
`;

export const SecondaryContainer = styled.div`
  /* border: 2px solid gold; */
`;

export const CheckboxNLinkContainer = styled.div`
  /* border: 2px solid pink; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  padding: 0 5px;
`;

export const Checkbox = styled.input.attrs({ type: "checkbox" })``;

export const LinkStyled = styled(Link)`
  color: white;
  font-size: 13px;
  text-decoration-color: transparent;
  :hover {
    text-decoration-color: white;
  }
`;

export const CheckboxContainer = styled.div`
  padding: 5px 0;

  font-size: 5px;
  color: f7f4f4;

  label {
    font-size: 14px;
    margin-left: 5px;
  }
`;

export const Text = styled.p`
  color: #737373;
  padding-top: 3rem;
  font-size: 17px;
  @media (max-width: 500px) {
    padding-top: 1.5rem;
  }
`;

export const StyledLink2 = styled(Link)`
  color: white;
  margin-left: 5px;
`;
export const SubText = styled.p`
  margin-top: 0.7rem;
  color: #737373;
  font-size: 13px;
  /* border: 1px solid red; */
  text-align: center;

  @media (max-width: 500px) {
    padding-top: 0.8rem;
  }
`;
