import React from "react";
import styled from "styled-components";


import img1 from '../../assets/Nfts/candle1.PNG';
import img2 from '../../assets/Nfts/frank.PNG';
import img3 from '../../assets/Nfts/candle3.PNG';

import img10 from '../../assets/Nfts/candle.PNG';
import ConfettiComponent from "../Confetti";


const Section = styled.section`
min-height: 100vh;
width: 100vw;
background-color: ${props => props.theme.text};
position: relative; 

`
const Title = styled.h2`
 font-size: ${props => props.theme.fontxxl};
 text-transform: capitalize;
 color: ${props => props.theme.body};
 display: flex;
justify-center: center;
align-items: center;
margin: 1rem auto;
border-bottom: 2px solid ${(props) => props.theme.text};
width: fit-content;
`
const Container = styled.div`
width: 75%;
margin: 2rem auto;

display: flex;
justify-content: space-around;
align-items: center;
flex-wrap: wrap;
`

const Item = styled.div`
width: calc(20rem - 4vw);
padding: 1rem 0;
color: ${props => props.theme.body};
margin: 2rem 1rem;
position: relative;
z-index: 5;

border: 2px solid ${props => props.theme.text};
border-radius: 20px;
transition: all 0.3s ease;

&:hover{
    img{
        transform: translateY(-2rem) scale(1.2);
    }
}
`

const ImageContainer = styled.div`
width: 15rem;
margin: 0 1rem;
background-color: ${props => props.theme.carouselColor};

border-radius: 20px;
cursor: pointer;

img{
    width: 100%;
    height: auto;
}
`
const Name = styled.h2`
font-size: ${props => props.theme.fontlg};
display: flex;
align-items: center;
justify-content: center;
text-transform: uppercase;
color: ${props => props.theme.body};
margin-top: 1rem;
`
const Position = styled.h2`
font-size: ${props => props.theme.fontmd};
display: flex;
align-items: center;
justify-content: center;
text-transform: capitalize;
color: ${props => `rgba(${props.theme.textRgba},0.9)`};
font-weight: 400;
margin-top: 1rem;
`


const MemberComponent = ({img, name="", position=""}) => {

    return(
        <Item>
            
            <ImageContainer>
                <img src={img} alt={name} />
                </ImageContainer>
                <Name>{name}</Name>
                <Position>{position}</Position>
        </Item>
    )
}

const Team = () => {
    return (
        <Section id="team">
            <ConfettiComponent />
            <Title>Team</Title>
            <Container>
                <MemberComponent img={img10} name="Krypt" position="Founder"/>
                <MemberComponent img={img2} name="Frank diba" position="Artist"/>
                <MemberComponent img={img3} name="loony kazy" position="Artist"/>
        
                
            </Container>
        </Section>
    )
}

export default Team