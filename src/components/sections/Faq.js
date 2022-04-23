import React, {useLayoutEffect, useState, useRef} from "react";
import styled from 'styled-components';
import Accordion from "../Accordion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";




const Section = styled.section`
min-height: 100vh;
width: 100vw;
background-color: ${props => props.theme.body};
position: relative; 
color: ${(props) => props.theme.text};

display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`
const Title = styled.h2`
 font-size: ${props => props.theme.fontxxl};
 text-transform: uppercase;
 color: ${props => props.theme.text};
 

margin: 1rem auto;
border-bottom: 2px solid ${(props) => props.theme.carouselColor};
width: fit-content;
`
const Container = styled.div`
width: 75%;
margin: 2rem auto;

display: flex;
justify-content: space-between;
align-content: center;
`
const Box = styled.div`
width: 45%;


`

const Faq = () => {

const ref = useRef(null);
gsap.registerPlugin(ScrollTrigger);
useLayoutEffect(() => {
  
    let element = ref.current;

    ScrollTrigger.create({
        trigger: element,
        start: 'top top',
        end:'bottom top',
        pin: true,
        pinSpacing:false,
        scrub:true,
        //markers: true,
    })

  return () => {
    ScrollTrigger.kill();
  };
}, [])

    return (
        <Section ref={ref} id="faq">
            <Title> Faq  </Title>
                <Container> 
                
                    <Box>
                    
                        <Accordion title="WHAT ARE NFTs?">
                        A non-fungible token (NFT) is a non-interchangeable unit of data stored on a blockchain, a form of digital ledger, that can be sold and traded.
                        </Accordion>
                        <Accordion title="WHAT IS ETHEREUM?">
                        Etherum is the community-run technology powering the cryptocurrency ether (ETH) and thousands of decentralized applications. Learn more on ethereum.org.



                        </Accordion>
                        <Accordion title="WHAT WALLETS ARE SUPPORTED? ?">
                        We recommend using MetaMask, which can be downloaded from the MetaMask website. We support both the browser plugin and the mobile apps. we also integrate with WalletConnect, which supports a number of wallets. The full list can be found on the WalletConnect website.



                        </Accordion>
                        


                   </Box>
                   


                    <Box>
                    <Accordion title="HOW CAN I BUY AN NFT?">
                    You will be able to mint an NFT directly from this website. After the collection sells out, you will be able to buy on secondary markets such as Opensea and LooksRare
                        </Accordion>
                        <Accordion title="HOW MANY NFT's ARE AVAILABLE?
?">
                        Once minted or bought simply connect to your Opensea account to view your NFTs.
                        </Accordion>
                        <Accordion title="HOW CAN I JOIN THE COMMUNITY?">
                        We have a very active community and we welcome new members with open arms! Come and chat with us on discord.
                        </Accordion>




                    </Box>
                   

                    </Container>
        </Section>
    )
}

export default Faq