import React from 'react'
import FrontPage from './FrontPage'
import BlogList from './BlogList'

function App (props: {blogs: {name: string; to: string; img: string}[]}) {
  const { blogs } = props

  return (
    <div>
      <FrontPage />
      <BlogList blogs = {blogs} />
    </div>
  )
}

export default App
