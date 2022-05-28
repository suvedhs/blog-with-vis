import React from 'react'
import styled from 'styled-components'
import '../index.css'
import FancyLink from './FancyLink'

const Italics = styled.span`
  font-style: italic;
  font-weight: 400;
`

const Text = styled.div`
    padding: 5%;
    width: 90%;
    display:flex;
    flex-direction: column;
    align-content: center;
    justify-content: left;
    z-index: 3;

    .big {
      font-size: 500%;
    }

    @media screen and (max-width: 1000px) {
      width: 90%;

      div.big {
        font-size: 10vw;
      }

    }
`

const Intro = styled.div`
  width: 80%;
  display: flex;
  font-family: 'Bitter', serif;
  margin: 30% 5% 0 5%;
  justify-content: left;
  align-items: center;
  z-index: 2;
`

const HeroSection = (props: any) => {
  const devLink = { name: 'full-stack developer', to: 'https://github.com/suvedhs' }
  const funLink = { name: 'Funny Guy™', to: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' }
  return (
    <Intro className='rounded'>
        <Text>
            <div className='big'>Hi. I&apos;m Suvedh.</div>
            <div className='big'>A Leftist.</div>
            <div className='small'>I&apos;m also a <FancyLink link={devLink} /> and <FancyLink link={funLink}/> with a newfound passion for <Italics>data visualization</Italics>. I blog about topics in American politics using analysis from publicly available data. The green line above represents the share of US wealth that the bottom 50% have owned over time, from 1980 to 2015.</div>
        </Text>
    </Intro>
  )
}

export default HeroSection
