import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import NavbarScroller from '../NavbarScroller'

const Wrapper = styled.div`
  background-color: black;
  background-size: 40px 40px;
  background-image:
    linear-gradient(to right, rgba(241,241,241, 0.1) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(241,241,241, 0.1) 1px, transparent 1px);
  background-attachment: fixed;
  display: flex;
  flex-flow: column;
  height: 100%;
`

const Body = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Bitter', serif;
  color: red;
  align-items: center;
  width: 200vw;
  flex: 1 1 auto;
`

const LineContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 0;
  width: 100%;
  text-align: center;
  overflow: hidden;
  transform: translate(0, -50%);

  svg {
    display: inline-block;
    width: 100%;
    stroke-width: 3;

    @media screen and (max-width: 1000px) {
      stroke-width: 5;
    }
  }
`

const Title = styled.div`
  font-size: 70px;
  text-align: center;

  @media screen and (max-width: 1000px) {
    font-size: 13vw;
  }
`

const Pathetic = styled.div`
    @media screen and (max-width: 1000px) {
        font-size: 9vw;
    }
`

function Healthcare () {
  const pathRef = useRef<SVGLineElement>(null)
  const useEffectRef = useRef(false)

  useEffect(() => {
    if (useEffectRef.current) { return }
    if (pathRef.current) {
      const pathLength = pathRef.current.getTotalLength()
      pathRef.current.style.strokeDasharray = pathLength + ''
      pathRef.current.style.strokeDashoffset = '' + pathLength

      window.addEventListener('scroll', () => {
        if (pathRef.current) {
          const scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight)
          const drawLength = pathLength * scrollPercentage
          pathRef.current.style.strokeDashoffset = (pathLength - drawLength) + ''
        }
      })
    }
    useEffectRef.current = true
  })

  return (
          <Wrapper>
            <NavbarScroller page='healthcare'/>
            <LineContainer>
              <svg viewBox="0 0 798 148" fill="none" preserveAspectRatio='xMidYMax meet'>
                <path ref={pathRef} d="M0 73.5H98.5L105.5 63.5L112.5 73.5H125.5L134.5 46.5L148.5 110L168 25L179 73.5L244 74L250.5 82L260 66L269.5 93.5L283.5 54L291.5 74H327.5L335.5 93.5L344 74H355L365 102L379 36.5L397.5 112L409 74L448.5 73.5C441.167 63 429.8 37.2 443 18C459.5 -6 499.5 -4 519 26.5C529.667 11.6667 558.7 -12 589.5 12C598.667 20.3333 611.4 44.5 589 74.5C561 112 549.5 119.5 519 145.5C504.333 133.833 470 103.6 450 76C449.167 75.1667 448.5 73.5 452.5 73.5C456.5 73.5 471.833 73.5 479 73.5L485.5 53.5L499 94.5L509 66L518 82L525.5 73.5L637 75L643 89L655.5 43.5L666 75H681.5L688 62L695.5 75H798" stroke="#FF0000" />
              </svg>
            </LineContainer>
            <Body>
              <Pathetic className='big'>The Pathetic State of</Pathetic>
              <Title>American Healthcare</Title>
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
          </Wrapper>
  )
}
export default Healthcare
