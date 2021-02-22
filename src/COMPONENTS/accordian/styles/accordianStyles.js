import styled from "styled-components/macro";

export const Container = styled.div`
/* border:2px solid red; */
background-color: black;
border-bottom: 8px solid #222;
padding: 70px 45px;
@media( max-width:550px){
  padding: 70px 0;
}
`

export const Inner = styled.div`
/* border: 2px solid red; */
max-width: 800px;
margin: 0 auto;

/* align-items: center; */

@media( max-width:1000px){
  max-width: 600px;
}
@media( max-width:550px){
  max-width: 100%;
}
`

export const Title = styled.p`
font-size:50px;
font-weight: 700;
font-family: sans-serif;
color: #F9F9F9;
min-width: 350px;
text-align: center;
/* padding-top: 1rem ; */
padding-bottom: 3rem ;

@media( max-width:1000px){
    font-size: 40px;
}
@media( max-width:550px){
  font-size: 26px;
}
`
export const Item = styled.div`
/* border: 2px solid gold; */
color: #f9f9f9;
background-color: #303030;
font-size: 26px;
margin-bottom: 8px;
@media( max-width:1000px){
    font-size: 20px;
}
@media( max-width:550px){
  font-size: 18px;
}
`

export const Header = styled.div`
/* border: 2px solid green; */
display: flex;
justify-content: space-between;
align-items: center;
padding: 1.3rem 2rem;
cursor: pointer;

  img {
      filter: brightness(0) invert(0.8);
      width: auto;
      height: 24px;
      user-select: none;
      font-weight: 100;

      @media (max-width: 600px) {
      width: 16px;
      height: auto;
      }
  }
`

export const Body = styled.div`
border-top: 2px solid #000;
padding: 1.5rem 2rem;
font-size: 25px;
white-space: pre-wrap;

@media( max-width:1000px){
    font-size: 20px;
}
@media( max-width:550px){
  font-size: 18px;
}
`
