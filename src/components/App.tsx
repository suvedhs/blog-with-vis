import React from 'react'
import NavbarScroller from './NavbarScroller'
import BlogList from './BlogList'
import FrontPage from './FrontPage'
import HeroSection from './HeroSection'
import WealthGraph from './WealthGraph'
import Footer from './Footer'

function App (props: {blogs: {name: string; to: string; img: string, animation: string}[]}) {
  const { blogs } = props

  return (
    <div>
      <NavbarScroller />
      <FrontPage />
      <WealthGraph />
      <HeroSection />
      <BlogList blogs = {blogs} />
      <Footer />
    </div>
  )
}

export default App
