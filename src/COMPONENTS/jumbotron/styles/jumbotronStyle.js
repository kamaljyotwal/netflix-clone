import styled from "styled-components/macro";

export const Container = styled.div`
/* border: 2px solid red; */
`

export const OuterDiv = styled.div`
  width:100%;
  background-color:#000;
  border-bottom: 8px solid #222;
  color: white;
  overflow: hidden;
  padding: 70px 45px;
`

export const InnerDiv = styled.div`
font-family: "Netflix Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
max-width: 1100px;
margin:0 auto;
/* border:2px solid gold; */
display:flex;
flex-direction: ${({ direction }) => direction};
align-items:center;
justify-content:space-between;
width:100%;

@media(max-width: 1000px) {
   flex-direction:column;
   /* text-align:center; */
}
`


export const Panel = styled.div`
/* border: 2px dotted green; */
width: 50%;

@media(max-width: 1000px) {
    width: 100%;
    overflow:hidden;
    padding: 0 45px;
    text-align: center;
    word-wrap:break-word;
    margin:0 auto;
}
`

export const Title = styled.p`
font-size: 50px;
margin-bottom: 8px;
font-weight: 700;
letter-spacing: normal;
line-height: 55px;
text-decoration: none solid rgb(255, 255, 255);
text-align: start;
text-indent: 0px;
text-transform: none;
vertical-align: baseline;
white-space: normal;
word-spacing: 0px;

@media(max-width: 1000px) {
   font-size:40px;
   text-align:center;
}
@media(max-width: 600px) {
    font-size: 35px;
}`


export const SubTitle = styled.p`
font-size: 26px;
font-weight: normal;
line-height: normal;

@media(max-width: 1000px) {
   font-size:18px;
}
`

export const Image = styled.img`
max-width: 100%;
height: auto;
display:flex;
align-items:center;
/* margin:0 auto; */

@media(max-width: 1100px) {
  /* margin:0 auto; */
  
}
`
