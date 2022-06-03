import React from 'react'
import styled from 'styled-components'
import '../index.css'
import LogoVideo from '../assets/logo_video.mp4'
import LogoVideoVertical from '../assets/logo_video_vertical.mp4'

const Logo = styled.div`
`

const This = styled.text`
    font-size: 32vw;
    @media screen and (min-width: 1300px) and (max-height: 1000px) {
      font-size: 32vw;
    }
    @media screen and (max-width: 1000px) {
      font-size: 45vw;
    }
`

const Pathetic = styled.text`
    font-size: 12vw;
    @media screen and (max-width: 1000px) {
      font-size: 16.5vw;
    }
`

const MaskSvg = styled.svg`
    position: absolute;
    top: 17vh;
    left: 0;
    height: 82vh;
    width: 100%;

    rect {
      mask: url(#mask)
    }

    @media screen and (max-width: 1200px) {
      top: 16vh;
    }
    @media screen and (max-width: 1000px) {
      top: 10.5vh;
    }
    @media screen and (max-width: 900px) and (max-height: 1200px) {
      top: 8vh;
    }
    @media screen and (max-width: 950px) and (max-height: 1400px) {
      top: 7vh;
    }
    @media screen and (max-width: 500px) {
      height: 93vh;
    }

  `

const Tagline = styled.div`
    color: black;
    font-size: 4vw;
    font-family: 'Bitter', serif;
    position: absolute;
    text-align: center;
    top: 89vh;
    left: 0; 
    right: 0;
    margin-left: auto; 
    margin-right: auto; 
    max-width: 700px;
    z-index: 10;
    @media screen and (max-width: 1500px) {
      top: 85vh;
    }
    @media screen and (max-width: 1400px) {
      top: 82vh;
    }
    @media screen and (max-width: 1300px) and (max-height: 900px) {
      top: 85vh;
    }
    @media screen and (max-width: 1200px) {
      top: 75vh;
    }
    @media screen and (max-width: 1200px) and (max-height: 700px) {
      top: 85vh;
    }
    @media screen and (max-width: 1000px) {
      top: 70vh;
      font-size: 5vw;
    }
    @media screen and (max-width: 650px) {
      top: 65vh;
      font-size: 5vw;
    }
    @media screen and (max-width: 500px) {
      top: 65vh;
      font-size: 7vw;
    }
`

const Video = styled.video`
    display: block;
    position: relative;
    margin: 0 auto;
    height: 83vh;
    max-width: 100%;
    overflow: hidden;

    @media screen and (max-width: 1000px) {
      height: 60vh;
    }
    @media screen and (max-width: 900px) and (max-height: 1200px) {
      height: 70vh;
    }
    @media screen and (max-width: 950px) and (max-height: 1400px) {
      height: 80vh;
      width: 100%;
    }
    @media screen and (max-width: 800px) {
      margin-top: 5%;
    }
    @media screen and (max-width: 800px) {
      height: 73vh;
      margin-top: 10%;
    }
    @media screen and (max-width: 650px) {
      width: 100%;
      height: 65vh;
      overflow: hidden;
      margin-top: 5%;
    }
    @media screen and (max-width: 550px) {
      height: 73vh;
    }
    @media screen and (max-width: 525px) {
      height: 65vh;
    }

`

const FrontPage = (props: any) => {
  let thisHeight = '60%'
  let patheticHeight = '85%'
  let MaskVideo = LogoVideo
  if (window.innerWidth < 1500) {
    thisHeight = '50%'
    patheticHeight = '75%'
    if (window.innerHeight < 1000) {
      thisHeight = '60%'
      patheticHeight = '82%'
    }
  }
  if (window.innerWidth < 1400) {
    thisHeight = '45%'
    patheticHeight = '70%'
  }
  if (window.innerWidth < 1300) {
    thisHeight = '50%'
    patheticHeight = '75%'
  }
  if (window.innerWidth < 1200) {
    thisHeight = '50%'
    patheticHeight = '67%'
    if (window.innerHeight < 700) {
      thisHeight = '60%'
      patheticHeight = '80%'
    }
  }
  if (window.innerWidth < 1000) {
    thisHeight = '45%'
    patheticHeight = '67%'
    MaskVideo = LogoVideoVertical
    if (window.innerHeight > 1000) {
      patheticHeight = '60%'
    }
  }
  if (window.innerWidth < 860) {
    thisHeight = '51%'
    patheticHeight = '65%'
  }
  if (window.innerWidth < 650) {
    thisHeight = '49%'
    patheticHeight = '62%'
  }
  if (window.innerWidth < 650) {
    patheticHeight = '60%'
  }
  if (window.innerWidth < 550) {
    patheticHeight = '63%'
  }
  if (window.innerWidth < 480) {
    patheticHeight = '59%'
    MaskVideo = LogoVideoVertical
  }
  if (window.innerWidth < 400) {
    thisHeight = '51%'
    patheticHeight = '60%'
  }

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
              <Pathetic className='logo' x='50%' y={patheticHeight} textAnchor='middle'>
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
