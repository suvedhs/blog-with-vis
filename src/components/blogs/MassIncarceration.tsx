import React from 'react'
import styled from 'styled-components'
import BlogpostTitle from './BlogpostTitle'

const Body = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  font-family: 'Bitter', serif;
  margin: 5%;
  justify-content: center;
  align-items: center;
`

function MassIncarceration () {
  return (
          <Body>
            <BlogpostTitle title='American Jails'/>
            <p className='small'>
              I&apos;m still doing research on this topic. Bear with me, there is a lot of research to be done.
            </p>
            <p>Some topics I intend to cover include:</p>
            <ul>
              <li>
                Race
              </li>
              <li>
                Prosecution
              </li>
              <li>
                Police
              </li>
              <li>
                Private prisons
              </li>
              <li>
                Republican policy
              </li>
              <li>
                Democratic policy
              </li>
              <li>
                Analysis of the impacts of various reforms
              </li>
              <li>
                Economic and other implications
              </li>
              <li>
                State, county, city specific data
              </li>
              <li>
                good systems used in other countries
              </li>
            </ul>
          </Body>
  )
}
export default MassIncarceration
