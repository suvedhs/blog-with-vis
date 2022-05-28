import React from 'react'
import styled from 'styled-components'
import '../index.css'
import LogoVideo from '../assets/logo_video.mp4'

const Logo = styled.div`
`

const This = styled.text`
    font-size: 32vw;
`

const Pathetic = styled.text`
    font-size: 12vw;
`

const MaskSvg = styled.svg`
    position: absolute;
    top: 17vh;
    left: 0;
    height: 72vh;
    width: 100%;

    rect {
      mask: url(#mask)
    }

  `

const Tagline = styled.div`
    color: black;
    font-size: 4vw;
    font-family: 'Bitter', serif;
    position: absolute;
    text-align: center;
    top: 90vh;
    left: 0; 
    right: 0;
    margin-left: auto; 
    margin-right: auto; 
    max-width: 700px;
    z-index: 10;
`

const Video = styled.video`
    display: block;
    position: relative;
    margin: 0 auto;
    height: 83vh;
    max-width: 100%;
    overflow: hidden;
`

const FrontPage = (props: any) => {
  return (
      <Logo>
        <Video loop muted autoPlay playsInline >
          <source src={LogoVideo} type="video/mp4" />
        </Video>
        <MaskSvg>
          <defs>
            <mask id="mask" x="0" y="0" width="100%" height="100%">
              <rect fill='white' x="0" y="0" width="100%" height="100%"/>
              <This className='logo' x='50%' y='70%' textAnchor='middle'>
                this
              </This>
              <Pathetic className='logo' x='50%' y='95%' textAnchor='middle'>
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
