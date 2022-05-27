import React from 'react'
import BlogList from './BlogList'
import FrontPage from './FrontPage'
import HeroSection from './HeroSection'
import WealthGraph from './WealthGraph'

function App (props: {blogs: {name: string; to: string; img: string, animation: string}[]}) {
  const { blogs } = props

  return (
    <div>
      <FrontPage />
      <WealthGraph />
      <HeroSection />
      <BlogList blogs = {blogs} />
    </div>
  )
}

export default App
