import React from 'react'
import NavbarScroller from './NavbarScroller'
import Footer from './Footer'

function About () {
  return (
    <div className="about">
      <NavbarScroller />
      <div>
        <div>
          <div>
            <img
              src="http://placehold.it/900x400"
              alt=""
            />
          </div>
          <div>
            <h1>About</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About
