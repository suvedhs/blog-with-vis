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

function Healthcare () {
  return (
          <Body>
            <BlogpostTitle title='American Healthcare'/>
            <p className='small'>
              I&apos;m still doing research on this topic. Bear with me, there is a lot of research to be done.
            </p>
            <p>Some topics I intend to cover include:</p>
            <ul>
              <li>
                How the US compares to other countries in terms of:
                <ul>
                  <li>
                    Health care cost
                  </li>
                  <li>
                    Coverage
                  </li>
                  <li>
                    Life expectancy
                  </li>
                  <li>
                    Child Mortality
                  </li>
                  <li>
                    ... and more!
                  </li>
                </ul>
              </li>
              <li>
                What are other countries doing so well
              </li>
              <li>
                Preventitive care
              </li>
              <li>
                Medicare and Medicaid
                <br />
                Side note - apparently medicare-negotiated hospital costs are more than the same procedures in other countries?
              </li>
              <li>
                Various proposed solutions in modern history (and their consequences)
                <ul>
                  <li>
                    The Affordable Care Act (Obamacare, ACA)
                  </li>
                  <li>
                    Medicare for All
                  </li>
                  <li>
                    Medicare for All... who want it?
                  </li>
                  <li>
                    The American Health Care Act (2017 GOP plan)
                  </li>
                </ul>
                And also how they compare to the specific plans from other top tier healthcare countries
              </li>
              <li>
                a brief overview of political contributions from healthcare companies
              </li>
              <li>
                the role American hospitals play in this
              </li>
              <li>Further analytics by State, by County</li>
              <li>TEXAS healthcare</li>
              <li>correlated stats on cancer, crime, education, etc</li>
            </ul>
          </Body>
  )
}
export default Healthcare
