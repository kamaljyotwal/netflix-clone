import styled from "styled-components/macro";

export const Container = styled.div`
  /* border: 4px solid pink; */
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const Title = styled.h1`
  padding-top: 6rem;
  font-size: 50px;
  font-weight: 700;
  text-align: center;
  box-sizing: border-box;
  /* border: 2px solid blue; */
  margin: 0;
  padding-bottom: 1rem;
  @media (max-width: 500px) {
    padding: 0 1rem 0.9rem;
    font-size: 1.75rem;
    padding-top: 0;
  }
`;

export const SubTitle = styled.h2`
  /* border: 2px solid blue; */
  text-align: center;
  font-size: 26px;
  margin-bottom: 1rem;
  font-weight: 400;
  
  @media (max-width: 500px) {
    font-size: 1.125rem;
    margin-bottom: 0.1rem;
  }
`;
