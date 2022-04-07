import React from 'react'
import styled from 'styled-components'
import '../index.css'
import FancyLink from './FancyLink'

const FooterContainer = styled.footer`
  text-align: center;
  padding-top: 10%;
  padding-bottom: 10%;
  display: block;
  `

function Footer () {
  const mailLink = { name: "let's chat", to: 'mailto:suvedhs@gmail.com' }

  return (
      <FooterContainer id='contact'>
        <div className='big'>
            I don&apos;t know everything.
        </div>
        <div className='small'>
          Have questions, advice, praise?
          <br />Send over a message, and <FancyLink link={mailLink} />.
          <br />Copyright &copy; Suvedh Srikanth 2022
        </div>
      </FooterContainer>
  )
}

export default Footer
