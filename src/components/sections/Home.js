import React from "react";
import styled from 'styled-components';
import CoverVideo from "../CoverVideo";
import TypeWriterText from "../TypeWriterText";
import RoundTextBlack from "../../assets/Rounded-Text-Black.png";
import { keyframes } from "styled-components";
import homeback from "../../assets/homeback.gif";




const Section = styled.section`
min-height: ${props => `calc(100vh - ${props.navHeight})` };
width: 100vw;
position: relative;

background: url ("../../assets/homeback.gif");
background: cover;
`
const Container = styled.div`
width: 75%;
min-height: 80vh;
margin: 0 auto;
/* background-color: lightgreen; */

display: flex;
justify-content: center;
align-items: center;

@media (max-width: 64em){
    width: 85%;
}
@media (max-width: 48em){
    flexx-direction: column-reverse;
    width: 100%;
    &>*:first-child{
        width: 100%;
        margin-top: 2rem;
    }
}

`
const Box = styled.div`
width: 50%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center; 
`
const rotate = keyframes`
100%{
    transform: rotate(1turn);
}
`

const Round = styled.div`
position: absolute;
bottom: 2rem;
right: 90%;
width: 6rem;
height: 10rem;
border: 1px solid ${props => props.theme.body};
border-radius: 50%;

img{
    width: 100%;
    height: auto;
    animation: ${rotate} 6s linear infinite reverse;
}
@media (max-width: 64em){
    width: 4rem;
    height: 4rem;
    left: none;
    right: 2rem;
    bottom: 100%;
}
@media (max-width: 48em){
    right: 1rem;
}
` 


const Circle = styled.span`
width: 3rem;
height: 3rem;
display: flex;
justify-content: center;
align-items: center;
border-radius: 50%;

position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);

background-color: ${props => props.theme.body};
color: ${props => props.theme.body};
font-size:${props => props.theme.fontxl};

@media (max-width: 64em){
    width: 2rem;
    height: 2rem;
    font-size:${props => props.theme.fontlg};
}
`


const Home = () => {
    return (
        <Section id="home">
            
           <Container>
          
               <Box>
                   <TypeWriterText />
               </Box>
               <Box>
                   <CoverVideo />
                   </Box>
                   <img style={{
                        width: '100%',
                        zIndex: '-10',
                        position: 'absolute',
                        top: '0px',
                        opacity:'8P%'
                   }} src={homeback} />
                   <Round>
                    
                        &#x2193;
                       <img src={RoundTextBlack} alt="NFT" />
                       
                       
                       </Round>
                   
               
               </Container> 
        </Section>
    )
}

export default Home

