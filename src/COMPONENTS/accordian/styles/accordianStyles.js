import styled, { keyframes } from "styled-components/macro";

export const Container = styled.div`
/* border:2px solid red; */
background-color: black;
border-bottom: 8px solid #222;
padding: 70px 45px;
`

export const Inner = styled.div`
border: 2px solid red;
`

export const Title = styled.p`
font-size:50px;
font-weight: 700;
font-family: sans-serif;
color: #F9F9F9;
min-width: 350px;
text-align: center;

@media( max-width:800px){
    font-size: 35px;
}
`
export const Item = styled.div`
border: 2px solid gold;
color: #f9f9f9;
background-color: #303030;
font-size: 26px;
margin-bottom: 10px;
`
export const Header = styled.div`
border: 2px solid green;
display: flex;
padding: 1.3rem 2rem;

`

// Creating the keyframes for accordian height animation
const heightChange = keyframes`
  from{
    transform: translateY(0);
  }

  to {
   transform: translateY(auto);
  } 
  
`;

export const Body = styled.div`
border: 1px solid blue;
padding: 1.3rem 2rem;
animation-name:${heightChange};
animation-duration: 1000ms;

`
