import React from 'react'
import styled from 'styled-components'
import Button from "./Button";


import img1 from '../assets/Nfts/candle1.PNG';
import img2 from '../assets/Nfts/candle2.PNG';
//import img3 from '../../assets/Nfts/candle3.PNG';
import img4 from '../assets/Nfts/candle4.PNG';
import img5 from '../assets/Nfts/candle5.PNG';
import img6 from '../assets/Nfts/candle6.PNG';
import img7 from '../assets/Nfts/candle7.PNG';
import img8 from '../assets/Nfts/candle8.PNG';


const Section = styled.section`
width: 100vw;
height: 25rem;
position: relative;
border-top: 2px solid ${props => props.theme.text};
border-top: 2px solid ${props => props.theme.text};

background-color: ${props => `rgba(${props.theme.bodyRgba},0.9)`};

display: flex;
justify-content: center;
align-items: center;

overflow: hidden;
`
const ImgContainer = styled.div`
width: 100%;
position: absolute;
top: 50%;
left: 50%;
transform: translateY(-50%, -50%);

display: flex;
justify-content: center;
align-items: center;
opacity: 0.4;

img{
    width: 15rem;
    height: auto;
}
`

const Title = styled.h1`
font-size: ${props => props.theme.fontxxl};
color: ${props => props.theme.text};
padding: 1rem 2rem;
z-index: 10;
width: 35%;

text-shadow: 1px 1px 2px ${props => props.theme.body};
`
const BtnContainer = styled.div`
width: 35%;
display: flex;
justify-content: flex-end;
font-size: ${props => props.theme.fontxl};
`
const JoinNow = styled.button`
display: inline-block;
background-color: ${props => props.theme.text};
color: ${props => props.theme.body};
outline: none;
border: none;
font-weight: 600;
font-size: ${props => props.theme.fontsm};
padding: 0.9rem 2.3rem;
border-radius: 50px;
cursor: pointer;
transition: all 0.2s ease;
position: relative;

&:hover{
    transform: scale(0.9);
}

&::after{
    content: ' ';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    border: 2px solid ${props => props.theme.text};
    width: 100%;
    height: 100%;
    border-radius: 50px;
    transition: all 0.2s ease;
}

&:hover::after{
    transform: translate(-50%, -50%) scale(1);
    padding: 0.3rem;
}
`


const Banner = () => {
  return (
    <Section>
        <ImgContainer>
            <img src={img1}  />
            <img src={img2}  />
           
            <img src={img4}  />
            <img src={img5}  />
            <img src={img6}  />
            <img src={img7}  />
            <img src={img8}  />
            <img src={img1}  />
            <img src={img2}  />
           
            <img src={img4}  />
            <img src={img5}  />
            <img src={img6}  />
           
        </ImgContainer>
        <Title >Join the <br /> Candleheads Club </Title>
        <BtnContainer>
            <JoinNow>Join Now</JoinNow>
       
        </BtnContainer>
        
        </Section>
  )
}

export default Banner