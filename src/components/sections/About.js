import React from "react";
import styled, { ThemeProvider } from 'styled-components';
import Button from "../Button";
import Carousel from "../Carousel";
import {dark} from '../../styles/Themes';
//import {dark} from './styles/Themes';
import P from "../../assets/P.JPG";
import about from "../../assets/About.PNG"


const Section = styled.section`
min-height: 100vh;
width: 100%;
background-color: ${props => props.theme.text};

display: flex;
justify-content: center;
align-items: center
position: relative; 
background: url ("../../assets/P.JPG");
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
@media (max-width:70em){
    width: 85%;
}

@media (max-width: 64em){
    width: 100%;
    flex-direction: column;

    &>*:last-child{
        width: 80%;
    }
}

@media (max-width: 40em){
    
    &>*:last-child{
        width: 90%;
    }
}
`
const Box = styled.div`
width: 50%;
height: 100%;
min-height: 60vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center; 

@media (max-width: 40em){
    min-height: 50vh;
}
`

const Title = styled.h2`
 font-size: ${props => props.theme.fontxxl};
 text-transform: capitalize;
 color: ${props => props.theme.body};
 align-self: flex-start;
 width: 80%;
margin: 0 auto;

@media (max-width: 64em){
    width: 100%;
    text-align: center;
}
@media (max-width: 40em){
    font-size: ${(props) => props.theme.fontxl};
}
@media (max-width: 30em){
    font-size: ${(props) => props.theme.fontlg};
}
`
const SubText = styled.p`
 font-size: ${props => props.theme.fontlg};
 color: ${props => props.theme.body};
 align-self: flex-start;
 width: 80%;
margin: 1rem auto;
font-weight:400;
@media (max-width: 64em){
    width: 100%;
    text-align: center;
    font-size: ${(props) => props.theme.fontmd};
}
@media (max-width: 40em){
    font-size: ${(props) => props.theme.fontmd};
}
@media (max-width: 30em){
    font-size: ${(props) => props.theme.fontsm};
}
`
const SubTextLight = styled.p`
 font-size: ${(props) => props.theme.fontmd};
 color: ${(props) => `rgba(${props.theme.bodyRgba},0.6)`};
 align-self: flex-start;
 width: 80%;
margin: 1rem auto;
font-weight:400;

@media (max-width: 64em){
    width: 100%;
    text-align: center;
    font-size: ${(props) => props.theme.fontsm};
}
@media (max-width: 40em){
    font-size: ${(props) => props.theme.fontsm};
}
@media (max-width: 30em){
    font-size: ${(props) => props.theme.fontxs};
}

`
const ButtonContainer = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    align-self: flex-start;

    @media (max-width: 64em){
    width: 100%;
        button: 0 auto {
            margin: 0 auto;
        }

    }

`

const About = () => {
    return (
        <Section id="about">
            
            <Container>
            
         <Box> <img style={{
                        width: '20%',
                       
                        position: 'absolute',
                        top: '900px',
                        
                        opacity:'8P%' }} src={about} alt="about"/> </Box>
         <Box>
         
             <Title>
             Welcome To The <br /> candleheads Club.
             </Title>
             <SubText>
             CANDLE HEADS is a vibey collection of NFTs on the etherum blockchain that combine beautiful art with a passion for fashion, community, culture, utility & education. 

             </SubText>
             <SubTextLight>
             Aiming to educate people about the Web 3.0 space and fostering a community of likeminded people.  Candle heads by krypt aims to provide long term value combining digital & physical experiences while still introducing the KRYPT BRAND to the world.
             </SubTextLight>
             <ButtonContainer>
             <ThemeProvider theme={dark}>
             <Button text="JOIN OUR DISCORD" link="#"/>
             
             </ThemeProvider>
             </ButtonContainer>
             
               
         </Box>
         </Container>
        
        </Section>
    )
}

export default About