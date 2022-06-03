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

function Texas () {
  return (
          <Body>
            <h1>the pathetic state of texas</h1>
            <p className='small'>
              I&apos;m still doing research on this topic. Bear with me, there is a lot of research to be done.
            </p>
            <p>Some topics I intend to cover include:</p>
            <ul>
              <li>
                Ted Cruz
              </li>
              <li>
                Ted Cruise
              </li>
              <li>
                Rafael Edward Cruz
              </li>
              <li>
                The Zodiac Killer
              </li>
              <li>
                Lucifer in the flesh
              </li>
              <li>
                How is this man an elected official
              </li>
            </ul>
          </Body>
  )
}
export default Texas
