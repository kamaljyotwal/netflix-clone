import styled from "styled-components/macro";

export const Container = styled.div`
border: 2px solid #000;
background-color: #000;
`

export const Content = styled.div`
background-color: #000;
/* border: 2px dotted blue; */
margin: 5rem 14rem 0 14rem;
color: #757575;

@media(max-width: 1000px) {
   margin: 5rem 8rem 0 8rem;
}
`

export const Title = styled.p`
margin-bottom: 1rem;
font-size: 1rem;
padding-bottom: 1.5rem;
`

export const Text = styled.p`
font-size: 1rem;
margin-bottom: 3rem;
margin-top: 2rem;
`

export const Row = styled.div`
/* border:4px solid gold; */
display:flex;
overflow: hidden;
/* min-width: 250px; */

@media(max-width: 700px) {
   flex-wrap: wrap;
}
@media(max-width: 550px) {
   flex-direction: column; 
}
`

export const Column = styled.div`
/* border: 2px solid green; */
display: flex;
width: 25%;
flex-direction: column;
/* margin-bottom: 2rem; */
@media(max-width: 700px) {
   width: 50%;
}
@media(max-width: 550px) {
   width: 100%;
   align-items: center;
}
`

export const Link = styled.a`
text-decoration: none;
font-family:  Helvetica, sans-serif;
font-size: 13px;
color: #757575;
padding-bottom: 0.9rem;
`