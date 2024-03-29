import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import NavbarScroller from '../NavbarScroller'
import { DSVRowArray } from 'd3'
import * as d3 from 'd3'

type CSVData = DSVRowArray | null

const Wrapper = styled.div`
  background-color: black;
  background-size: 40px 40px;
  background-image:
    linear-gradient(to right, rgba(241,241,241, 0.1) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(241,241,241, 0.1) 1px, transparent 1px);
  background-attachment: fixed;
  overflow-y: hidden;
  width: 300vw;
`

const Body = styled.div`
  display: flex;
  flex-direction: row;
  font-family: 'Bitter', serif;
  color: red;
  flex: 1 1 auto;
  height: 82vh;

  @media screen and (max-width: 1050px) {
    height: 90vh;
  }
`

const LineContainer = styled.div`
  position: fixed;
  top: 79%;
  left: 0;
  width: 100%;
  text-align: center;
  transform: translate(0, -50%);

  svg {
    display: inline-block;
    width: 100%;
    stroke-width: 3;

    @media screen and (max-width: 1050px) {
      stroke-width: 5;
    }
  }
`

const Pathetic = styled.div`
  font-family: Colombo;
  text-align: center;
      @media screen and (max-width: 1000px) {
        font-size: 8vw;
        margin-top: 15vh;
    }
`

const Title = styled.div`
  font-size: 10vw;
  font-family: Colombo;
  text-align: center;
  line-height: 1;

  @media screen and (max-width: 1000px) {
    font-size: 13vw;
  }
`

const Page = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 100vw;
  scroll-snap-align: center;
`

const PageContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-left: 3%;
  margin-right: 3%;
  align-items: center;
  text-align: center;
`

const P = styled.p`
  font-size: 1.5em;
  margin: 0 10% 1vh 10%;
  line-height: 1.2;
`

const Statement = styled.ul`
  font-family: Colombo;
  font-size: 50px;
  text-align: center;
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  padding: 0;
  line-height: 1;
  margin: 0;
  min-height: 30vh;
  align-items: center;

  li {
    margin-left: 0;
    margin-right: 0;
    text-align: center;
    vertical-align: middle;
    align-self: center;
    min-width: 25vw;
  }
`

const Left = styled.ul`
  list-style: none;
  margin: 0;
  margin-left: 2vw;
  margin-right: 2vw;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  vertical-align: middle;

  @media screen and (max-width: 1500px) {
    margin-left: 0;
    margin-right: 2vw;
  }
`

const Huge = styled.li`
  font-size: 0;
  line-height: 0.9;
  margin-right: 2vw;

  @keyframes growHuge {
    0% {
      font-size: 0em;
    }
    100% {
      font-size: 5em;
    }
  }
`

const Mid = styled.li`
  font-size: 0;
  margin-top: 1vh;

  @keyframes growMid {
    0% {
      font-size: 0em;
    }
    100% {
      font-size: 2.4em;
    }
  }
`

const Small = styled.li`
  font-size: 0;
  margin-top: 3vh;
  @keyframes growSmall {
    0% {
      font-size: 0em;
    }
    100% {
      font-size: 1.25em;
    }
  }
`

const Arrows = styled.svg`
  margin-top: auto;
  height: 100px;
  margin-left: 35px;

  #darkGroup path {
    fill: red;
  }

  #lightGroup path {
    fill: #fc7a5b;
  }

  #dark1 {
    animation: pointDark1 3s ease infinite;
  }
  #dark2 {
    animation: pointDark2 3s ease infinite;
  }
  #light1 {
    animation: pointLight1 3s ease infinite;
  }
  @keyframes pointDark1 {
    0% {
      transform: translateX(-50%);
      opacity: 0;
    }
    50% {
      transform: translateX(-5%);
      opacity: 0.7;
    }
    100% {
      transform: translateX(-50%);
      opacity: 0;
    }
  }
  @keyframes pointDark2 {
    0% {
      transform: translateX(5%);
      opacity: 0.7;
    }
    50% {
      transform: translateX(50%);
      opacity: 0;
    }
    100% {
      transform: translateX(5%);
      opacity: 0.7;
    }
  }
  @keyframes pointLight1 {
    0% {
      transform: translateX(-10%);
    }
    50% {
      transform: translateX(20%);
    }
    100% {
      transform: translateX(-10%);
    }
  }
`

const ScrollRight = styled.p`
  font-size: 1.5em;
  font-family: 'Bitter', serif;
  text-align: center;
  margin-top: 0;
`

// const Blood = styled.svg`
//   height: 40px;
//   margin-top: -14px;
//   margin-left: 59.5vw;
// `

function Healthcare () {
  const pathRef = useRef<SVGLineElement>(null)
  const useEffectRef = useRef(false)
  const animateBigRef = useRef(false)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const bodyRef = useRef<HTMLDivElement>(null)
  const bigRef = useRef<HTMLLIElement>(null)
  const midRef = useRef<HTMLLIElement>(null)
  const smallRef = useRef<HTMLLIElement>(null)
  let perCapitaData: CSVData = null

  useEffect(() => {
    if (useEffectRef.current) { return }
    if (pathRef.current) {
      const pathLength = pathRef.current.getTotalLength()
      pathRef.current.style.strokeDasharray = pathLength + ''
      pathRef.current.style.strokeDashoffset = '' + pathLength
      window.addEventListener('scroll', () => {
        if (pathRef.current && wrapperRef.current && bodyRef.current) {
          const scrollPercentage = window.pageXOffset / (wrapperRef.current.scrollWidth - window.innerWidth)
          const drawLength = pathLength * scrollPercentage
          pathRef.current.style.strokeDashoffset = (pathLength - drawLength) + ''
          console.log(window.pageXOffset + ' ' + wrapperRef.current.scrollWidth + ' ' + window.innerWidth)
          console.log(window.pageXOffset + ' ' + bodyRef.current.scrollWidth + ' ' + window.innerWidth)
        }
        if (bigRef.current && !animateBigRef.current && smallRef.current && midRef.current && window.pageXOffset >= window.innerWidth) {
          animateBigRef.current = true
          smallRef.current.className += ' blockbuster growSmall'
          midRef.current.className += ' blockbuster growMid'
          bigRef.current.className += ' blockbuster growHuge'
        }
      })
    }
    d3.csv(`${process.env.PUBLIC_URL}/datasets/OECD-health-expenditure-and-financing.csv`).then(res => {
      perCapitaData = res
      console.log(perCapitaData)
    })
    useEffectRef.current = true
  })

  return (
    <Wrapper ref={wrapperRef}>
      <NavbarScroller blogPostPageName='healthcare'/>
      <LineContainer>
        <svg viewBox="0 0 798 148" fill="none">
          <path ref={pathRef} d="M0 73.5H98.5L105.5 63.5L112.5 73.5H125.5L134.5 46.5L148.5 110L168 25L179 73.5L244 74L250.5 82L260 66L269.5 93.5L283.5 54L291.5 74H327.5L335.5 93.5L344 74H355L365 102L379 36.5L397.5 112L409 74L448.5 73.5C441.167 63 429.8 37.2 443 18C459.5 -6 499.5 -4 519 26.5C529.667 11.6667 558.7 -12 589.5 12C598.667 20.3333 611.4 44.5 589 74.5C561 112 549.5 119.5 519 145.5C504.333 133.833 470 103.6 450 76C449.167 75.1667 448.5 73.5 452.5 73.5C456.5 73.5 471.833 73.5 479 73.5L485.5 53.5L499 94.5L509 66L518 82L525.5 73.5L637 75L643 89L655.5 43.5L666 75H681.5L688 62L695.5 75H798" stroke="#FF0000" />
        </svg>
      </LineContainer>
      <Body ref={bodyRef}>
        <Page>
          <Pathetic className='big'>The Pathetic State of</Pathetic>
          <Title>
            American Healthcare
          </Title>
          {/* <Blood viewBox="0 0 286 409" fill="none" preserveAspectRatio='xMidyMax meet'>
            <path d="M286 266C286 344.977 221.977 409 143 409C64.0233 409 0 344.977 0 266C0 187.023 143 0 143 0C143 0 286 187.023 286 266Z" fill="#D00D0D"/>
          </Blood> */}
          <Arrows viewBox="0 0 213 213" fill="none" >
            <g id="darkGroup">
              <path id="dark1" opacity="0.7" d="M130.918 107.865C133.837 109.849 133.837 114.151 130.918 116.135L64.5612 161.249C61.2416 163.506 56.75 161.128 56.75 157.114L56.75 66.8859C56.75 62.8718 61.2416 60.4941 64.5612 62.751L130.918 107.865Z"/>
              <path id="dark2" opacity="0.7" d="M104.918 107.865C107.837 109.849 107.837 114.151 104.918 116.135L38.5612 161.249C35.2416 163.506 30.75 161.128 30.75 157.114L30.75 66.8859C30.75 62.8718 35.2416 60.4941 38.5612 62.751L104.918 107.865Z"/>
            </g>
            <g id="lightGroup">
              <path id="light1" opacity="0.8" d="M104.918 107.865C107.837 109.849 107.837 114.151 104.918 116.135L38.5612 161.249C35.2416 163.506 30.75 161.128 30.75 157.114L30.75 66.8859C30.75 62.8718 35.2416 60.4941 38.5612 62.751L104.918 107.865Z"/>
            </g>
          </Arrows>

          <ScrollRight className='small'>scroll right</ScrollRight>
        </Page>
        <Page>
          <PageContent>
            <P>We have the world&apos;s best doctors, schools, and facilities. We develop cutting edge technology in the medical industry. Foreigners come to America for advanced surgeries. Yet, America has one of the worst healthcare systems in the world, especially for a developed country.</P>
            <P>The first issue:</P>
            <Statement><li><Left><Small ref={smallRef}>Americans</Small><Mid ref={midRef}>spend</Mid></Left></li><Huge ref= {bigRef}>BIG</Huge></Statement>
          </PageContent>
        </Page>
        <Page>
          <PageContent>
            <p>
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
              <li>the role of the AMA in this</li>
              <li>Further analytics by State, by County</li>
              <li>TEXAS healthcare</li>
              <li>correlated stats on cancer, crime, education, etc</li>
            </ul>
          </PageContent>
        </Page>
      </Body>
    </Wrapper>
  )
}
export default Healthcare
