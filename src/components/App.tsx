import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import NavbarScroller from './NavbarScroller'
import BlogList from './BlogList'
import FrontPage from './FrontPage'
import HeroSection from './HeroSection'
import WealthGraph from './WealthGraph'
import Footer from './Footer'
import LoadingScreen from './LoadingScreen'

const Main = styled.div`
  animation: fadeInAnimation ease 2s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;

  @keyframes fadeInAnimation {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
  }
`

function App (props: {blogs: {name: string; to: string; img: string, animation: string}[]}) {
  const { blogs } = props
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setLoading(false)
  }, [Main])

  document.body.style.overflowY = 'visible'

  return (
    <>
      {
        loading === false
          ? (
              <Main>
                <NavbarScroller />
                <FrontPage />
                <WealthGraph />
                <HeroSection />
                <BlogList blogs = {blogs} />
                <Footer />
              </Main>
            )
          : (
              <LoadingScreen />
            )
      }
    </>
  )
}

export default App
