import React from 'react'
import styled from 'styled-components';
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay, EffectCards } from "swiper";

import img1 from '../assets/Nfts/candle1.PNG';
import img2 from '../assets/Nfts/candle2.PNG';
import img3 from '../assets/Nfts/candle3.PNG';
import img4 from '../assets/Nfts/candle4.PNG';
import img5 from '../assets/Nfts/candle5.PNG';
import img6 from '../assets/Nfts/candle6.PNG';
import img7 from '../assets/Nfts/candle7.PNG';
import img8 from '../assets/Nfts/candle8.PNG';
//import img9 from '../assets/Nfts/bighead-8.svg';
//import img10 from '../assets/Nfts/bighead-9.svg';

import Arrow from '../assets/Arrow.svg';


const Container = styled.div`
width: 25vw;
height: 70vh;

@media (max-width: 70em){
  heigth: 60vh;
}

@media (max-width: 64em){
  height: 50vh;
  width: 30vw;
}

@media (max-width: 48em){
  height: 50vh;
  width: 40vw;
}

@media (max-width: 30em){
  height: 45vh;
  width: 60vw;
}

.swiper{
    width: 100%;
    height: 100%;
}

.swiper-slide{
  background-color: ${props => props.theme.carouselColor};
  border-radius: 20px;


  justify-content: center;
  align-items: center;

}

.swiper-button-next{
  color: ${props => props.theme.text};
  right: 0;
  width: 4rem;

  background-image: url(${Arrow});
  background-position: center;
  backgrund-size: cover;

  &:after{
    display: none;
  }
  @media (max-width: 64em){
    width: 3rem;
  }
  @media (max-width: 30em){
    width: 3rem;
  }
}

.swiper-button-prev{
  color: ${props => props.theme.text};
  left: 0;
  width: 4rem;
  transform: rotate(180deg);
  background-image: url(${Arrow});
  background-position: center;
  backgrund-size: cover;

  &:after{
    display: none;
  }
}
`

const Carousel = () => {
  return (
    <Container>
        <Swiper
        autoplay={{
           delay:2000,
           disableOnInteraction:false,
        }}
        pagination={{
           type:'fraction',
        }}
        scrollbar={{
          draggable:true
        }}
        navigation={true}
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards, Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><img src={img1}/></SwiperSlide>
        <SwiperSlide><img src={img2}/></SwiperSlide>
        <SwiperSlide><img src={img3}/></SwiperSlide>
        <SwiperSlide><img src={img4}/></SwiperSlide>
        <SwiperSlide><img src={img5}/></SwiperSlide>
        <SwiperSlide><img src={img6}/></SwiperSlide>
        <SwiperSlide><img src={img7}/></SwiperSlide>
        <SwiperSlide><img src={img8}/></SwiperSlide>
       
       
      </Swiper>
    </Container>
  )
}

export default Carousel