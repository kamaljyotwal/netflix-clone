import styled from "styled-components/macro";

export const Container = styled.div`
  /* border: 3px solid red; */
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* max-height: 100vh; */
  /* overflow: hidden !important; */
  height: calc(100vh - 4rem);
  /* height: 500px; */
  background-color: #222;
  overflow: none;
`;

export const Title = styled.p`
  padding-bottom: 1rem;
  padding-top: 1rem;
  width: 100%;
  color: #808080;
  font-size: 48px;
  /* border: 2px solid yellow; */
  text-align: center;
  margin: 1rem 0;
  /* text-align: center; */
  font-weight: 500;
`;

export const List = styled.ul`
  /* border: 2px solid blue; */
  display: flex;
  flex-direction: row;
`;

export const Picture = styled.img`
  width: 100%;
  max-width: 150px;
  height: auto;
  border: 2px solid black;
  cursor: pointer;
`;

export const Name = styled.p`
  color: #808080;
  text-overflow: ellipsis;
  font-size: 19px;
  /* letter-spacing: 1px; */
  &:hover {
    font-weight: bold;
    color: #e5e5e5;
  }
  &::first-letter {
    text-transform: uppercase;
  }
`;

export const UserItem = styled.li`
  /* border: 5px solid white; */
  max-height: 200px;
  max-width: 200px;
  list-style-type: none;
  text-align: center;
  /* margin-right: 30px; */
  &:hover > ${Picture} {
    border: 2px solid white;
  }

  &:hover > ${Name} {
    color: white;
    font-weight: bold;
  }
`;
