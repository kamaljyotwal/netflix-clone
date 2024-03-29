import styled from "styled-components/macro";
export const Container = styled.div`
  border: 2px solid #000;
  background-color: #000;
  /* border: 2px dotted blue; */
`;

export const Content = styled.div`
  background-color: #000;
  /* border: 2px dotted blue; */
  margin: 5rem 14rem 0 14rem;
  color: #757575;

  @media (max-width: 1000px) {
    margin: 5rem 8rem 0 8rem;
  }
  @media (max-width: 500px) {
    margin: 1rem;
  }
`;

export const Title = styled.p`
  margin-bottom: 1rem;
  font-size: 1rem;
  padding-bottom: 1.5rem;
`;

export const Text = styled.p`
  font-size: 1rem;
  margin-bottom: 3rem;
  margin-top: 2rem;
  /* border: 1px solid red; */
  @media (max-width: 500px) {
    margin-bottom: 1rem;
    margin-top: 1rem;
  }
`;

export const Row = styled.div`
  /* border: 4px solid gold; */
  display: flex;
  overflow: hidden;
  justify-content: space-around;
  /* min-width: 250px; */

  @media (max-width: 700px) {
    flex-wrap: wrap;
  }
  @media (max-width: 550px) {
    width: 95%;
    margin: 0 auto;
    flex-direction: row;
  }
`;

export const Column = styled.div`
  /* border: 2px solid green; */
  display: flex;
  width: 25%;
  flex-direction: column;
  justify-content: space-between;
  /* margin-bottom: 2rem; */
  @media (max-width: 700px) {
    width: 50%;
  }
  @media (max-width: 550px) {
    width: 40%;
    align-items: flex-start;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  font-family: Helvetica, sans-serif;
  font-size: 13px;
  color: #757575;
  padding-bottom: 0.9rem;
  /* border:2px solid red; */
`;
export const Note = styled.div`
  color: #d6d4d4;
  font-size: 14px;
  padding: 5px;
  border: 1px solid #777373;
  background-color: #111;
  padding-left: 1rem;
  width: 100%;
  text-align: center;
  @media (max-width: 500px) {
    font-size: 10px;
  }
`;

export const Href = styled.a`
  color: white;
  text-decoration: none;
  :hover {
    cursor: pointer;
  }
`;
