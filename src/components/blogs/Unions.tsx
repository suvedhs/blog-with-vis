import React from 'react'
import styled from 'styled-components'

const Body = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  font-family: 'Bitter', serif;
  margin: 5%;
  justify-content: center;
  align-items: center;
`

function Unions () {
  return (
          <Body>
            <h1>the pathetic state of unions</h1>
            <p className='small'>
              I&apos;m still doing research on this topic. Bear with me, there is a lot of research to be done.
            </p>
            <p>Some topics I intend to cover include:</p>
            <ul>
              <li>
                Historical accomplishments
              </li>
              <li>
                downsides
              </li>
              <li>
                the role of various policies
              </li>
              <li>
                other countries
              </li>
              <li>
                ongoing unionization efforts??
              </li>
            </ul>
          </Body>
  )
}
export default Unions
