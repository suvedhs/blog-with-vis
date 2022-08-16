import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import '../index.css'

const Container = styled.div`
    scroll-margin-top: 10em;
    height: 400vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
`

const TopicsWrapper = styled.div`
    top: 50vh;
    left: 50vw;
`

const Head = styled.h2`
    text-align: center;
    font-family: Colombo;
    font-size: 15em;
    font-weight: 300;
    letter-spacing: 3px;
    margin: 0;
    will-change: font-size;
`

const SubHeader = styled.h3`
    text-align: center;
    font-weight: normal;
    font-size: 2vw;
    margin: 0;
    padding: 0;
    will-change: font-size;
`

const RealList = styled.div`
    background-color: #88f;
    height: 100vh;
    width: 100vw;
    position: absolute;
    bottom: 0;
    z-index: 2;
`

const BlogBox = styled.a`
    padding: 30px;
    display:flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;

    img {
        height: 10em;
        border-radius: 5px;
    }

    img.static {
        position:absolute;
        top: 30px;
    }

    :hover img.static {
        opacity: 0;
    }

    p {
        text-align: center;
        font-size: 30px;
        margin-bottom: 0;
    }
`

const Ul = styled.ul`
    display: flex;
    flex-direction: row;
    -webkit-overflow-scrolling: touch;
    overflow: scroll;
    max-width: 95%;
    height: 100vh;
    align-items: center;
    justify-content: start;
`

const Li = styled.li`
  -webkit-box-align: center;
  -webkit-box-pack: center;
  -webkit-tap-highlight-color: transparent;
  align-items: center;
  height: 40%;
  justify-content: center;
  text-decoration: none;
  -webkit-box-align: center;
  -webkit-box-pack: center;
  position: relative;
  left: 0;
  -webkit-tap-highlight-color: transparent;
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 5% 40px;
  text-decoration: none;
  white-space: nowrap;
  `

const BlogList = (props: {topics: {name: string; to: string; img: string, animation: string}[] }) => {
  const { topics } = props
  const Blogs: any = () => topics.map((link: {name: string, to: string, img:string, animation: string }) =>
    <Li className='shadow orange point' key={link.name}>
        <BlogBox className='small rounded link' href={link.to}>
            <img className='static' src={require('../assets/' + link.img)} alt= {link.img + ' image'}></img>
            <img className='active' src={require('../assets/' + link.animation)} alt= {link.img + ' image'}></img>

              <p>{link.name}</p>
          </BlogBox>
      </Li>)

  const useEffectRef = useRef(false)
  const topicsRef = useRef<HTMLDivElement>(null)
  const topicsWrapperRef = useRef<HTMLDivElement>(null)
  const headRef = useRef<HTMLHeadingElement>(null)
  const subHeadRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (useEffectRef.current) { return }
    window.addEventListener('scroll', () => {
      if (topicsRef.current) {
        const scrollPosition = topicsRef.current.getBoundingClientRect().top
        const frozen = scrollPosition <= 0 && window.innerHeight * 3 + scrollPosition > 0
        console.log(scrollPosition + window.innerHeight * 3)
        if (topicsWrapperRef.current && headRef.current && subHeadRef.current) {
          if (frozen) {
            requestAnimationFrame(() => {
              if (topicsWrapperRef.current && headRef.current && subHeadRef.current) {
                topicsWrapperRef.current.style.position = 'fixed'
                headRef.current.style.fontSize = Math.min(Math.max((scrollPosition * -1) / 5 + 15, 15), 350) + 'em'
                subHeadRef.current.style.fontSize = Math.min(Math.max((scrollPosition * -1) / 50 + 2, 2), 6) + 'vw'

                topicsWrapperRef.current.style.transform = 'translate(' + Math.min(Math.max(scrollPosition / -90 - 50, -50), -45) + '%, ' + Math.max(Math.min(scrollPosition / 100 - 50, -50), -57) + '%)'
              }
            })
          } else {
            topicsWrapperRef.current.style.position = 'absolute'
            topicsWrapperRef.current.style.transform = 'translate(-50%, -50%)'
            headRef.current.style.fontSize = '15em'
            subHeadRef.current.style.fontSize = '2vw'
          }
        }
      }
    })

    useEffectRef.current = true
  })

  return (
    <>
        <Container ref={topicsRef} id='blogs'>
            <TopicsWrapper ref={topicsWrapperRef}>
                <Head ref={headRef}>Topics</Head>
                <SubHeader ref={subHeadRef} className='small'>Hold on tight and check out my work.</SubHeader>
            </TopicsWrapper>
            <RealList>
              <Ul>
                  <Blogs />
              </Ul>
            </RealList>
        </Container>
    </>
  )
}

export default BlogList
