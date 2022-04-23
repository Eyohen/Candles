import React from 'react'
import styled from 'styled-components';
//import GIF from '../assets/Home Video.mp4';
import loadingGIF from '../assets/anime.gif';


const VideoContainer = styled.div`
width: 100%;


video{
    width: 100%;
    height: auto;
}

@media (max-width: 64em){
  min-width: 40vh;
}

img{
  width: 100%;
  height: auto;
}
`


const CoverVideo = () => {
  return (
    <VideoContainer>
        
        <img src={loadingGIF} type="image" alt="loading" />
    </VideoContainer>
  )
}

export default CoverVideo