import React from 'react'
import styled from 'styled-components'
import '../index.css'
import LogoVideo from '../assets/logo_video.mp4'
import LogoVideoVertical from '../assets/logo_video_vertical.mp4'

const Logo = styled.div`
    height: 82vh;
    transition: all 0.8s ease-in-out;

    @media screen and (max-width: 1050px) {
      height: 90.2vh;
    }
`

const This = styled.text`
    font-size: 32vw;
    @media screen and (max-aspect-ratio: 11/16) {
      font-size: 45vw;
    }
    @media screen and (min-aspect-ratio: 3/2) {
      font-size: 28vw;
    }
`

const Pathetic = styled.text`
    font-size: 12vw;
    color: red;
    @media screen and (max-aspect-ratio: 11/16) {
      font-size: 16.5vw;
    }
`

const MaskSvg = styled.svg`
    position: absolute;
    top: 18vh;
    left: 0;
    height: 82vh;
    width: 100%;
    overflow: hidden;

    rect {
      mask: url(#mask)
    }
    @media screen and (max-width: 1050px) {
      top: 9.8vh;
      height: 90.9vh;
    }
`

const Tagline = styled.div`
    color: black;
    font-size: 4vw;
    font-family: 'Bitter', serif;
    position: relative;
    text-align: center;
    margin-left: auto; 
    margin-right: auto;
    margin-top: -20vh;
    z-index: 10;
    @media screen and (max-aspect-ratio: 11/16) {
      font-size: 7vw;
      margin-top: -40vh;
    }
    @media screen and (max-aspect-ratio: 1/1) and (min-aspect-ratio: 11/16) {
      margin-top: -35vh;
    }
`

const Video = styled.video`
    display: block;
    position: relative;
    margin: 0 auto;
    height: 82vh;
    width: 100%;
    object-fit: cover;
    overflow: hidden;

    @media screen and (max-width: 1050px) {
      height: 90vh;
    }
`

const FrontPage = (props: any) => {
  let thisHeight = '52%'
  let patheticDisplacement = '22%'
  let MaskVideo = LogoVideo

  function handleResize () {
    if (window.innerHeight < 300) {
      patheticDisplacement = '25%'
    } else if (window.innerHeight / window.innerWidth > 1.4) {
      MaskVideo = LogoVideoVertical
      thisHeight = '40%'
      patheticDisplacement = '12%'
      if (window.innerHeight / window.innerWidth > 1.9) {
        patheticDisplacement = '9%'
      }
    } else if (window.innerHeight / window.innerWidth < 1.4 && window.innerHeight / window.innerWidth > 0.8) {
      thisHeight = '40%'
      patheticDisplacement = '12%'
    }
  }

  handleResize()
  screen.orientation.addEventListener('change', handleResize)

  return (
      <Logo>
        <Video loop muted autoPlay playsInline >
          <source src={MaskVideo} type="video/mp4" />
        </Video>
        <MaskSvg>
          <defs>
            <mask id="mask" x="0" y="0" width="100%" height="100%">
              <rect fill='white' x="0" y="0" width="100%" height="100%"/>
              <This className='logo' x='50%' y={thisHeight} textAnchor='middle'>
                this
              </This>
              <Pathetic className='logo' x='50%' y={thisHeight} dy={patheticDisplacement} textAnchor='middle'>
                is pathetic
              </Pathetic>
            </mask>
          </defs>
          <rect fill='#fc7a5b' x="0" y="0" width="100%" height="100%"/>
        </MaskSvg>
        <Tagline>a blog about America</Tagline>
      </Logo>
  )
}

export default FrontPage
