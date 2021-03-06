import React from "react";
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/logo2.PNG';

//import img1 from '../assets/Nfts/candle1.png';

const LogoText = styled.h1`
font-family: "Akaya Telivigala", cursive;
font-size: ${props => props.theme.fontxxxl};
color: ${props => props.theme.text};
transition: all 0.2s ease;

&: hover{
    transform: scale(1.1);
}

@media (max-width: 64em) {
font-size: ${props => props.theme.fontxxl};
}

`
const Image = styled.div`

`

const Logo = () => {
    return (
        <LogoText>
            <Link to="/">
            <img style={{
                        width: '25%'}} src={logo} alt="logo"/>
            </Link>
        </LogoText>
    )
}

export default Logo