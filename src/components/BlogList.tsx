import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import '../index.css'

const Container = styled.div`
    scroll-margin-top: 10em;
    height: 500vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
`

const TopicsWrapper = styled.div`
    top: 50vh;
    left: 50vw;
    transform: translate(-50%, -50%);
`

const Head = styled.h2`
    text-align: center;
    font-family: Colombo;
    font-size: 15vw;
    font-weight: 300;
    letter-spacing: 3px;
    margin: 0;
`

const SubHeader = styled.h3`
    text-align: center;
    font-weight: normal;
`

// const BlogBox = styled.a`
//     padding: 30px;
//     display:flex;
//     flex-direction: column;
//     align-content: center;
//     justify-content: center;

//     img {
//         height: 10em;
//         border-radius: 5px;
//     }

//     img.static {
//         position:absolute;
//         top: 30px;
//     }

//     :hover img.static {
//         opacity: 0;
//     }

//     p {
//         text-align: center;
//         font-size: 30px;
//         margin-bottom: 0;
//     }
// `

// const Ul = styled.ul`
//     display: flex;
//     flex-direction: row;
//     -webkit-overflow-scrolling: touch;
//     overflow: scroll;
//     max-width: 95%;
//     height: auto;
//     align-items: center;
//     justify-content: start;
// `

// const Li = styled.li`
//   -webkit-box-align: center;
//   -webkit-box-pack: center;
//   -webkit-tap-highlight-color: transparent;
//   align-items: center;
//   height: 100%;
//   justify-content: center;
//   text-decoration: none;
//   -webkit-box-align: center;
//   -webkit-box-pack: center;
//   position: relative;
//   left: 0;
//   -webkit-tap-highlight-color: transparent;
//   align-items: center;
//   display: flex;
//   justify-content: center;
//   margin: 5% 40px;
//   text-decoration: none;
//   white-space: nowrap;
//   `

const BlogList = (props: {topics: {name: string; to: string; img: string, animation: string}[] }) => {
//   const { topics } = props
//   const Blogs: any = () => topics.map((link: {name: string, to: string, img:string, animation: string }) =>
//     <Li className='shadow point' key={link.name}>
//         <BlogBox className='small rounded link' href={link.to}>
//             <img className='static' src={require('../assets/' + link.img)} alt= {link.img + ' image'}></img>
//             <img className='active' src={require('../assets/' + link.animation)} alt= {link.img + ' image'}></img>

  //             <p>{link.name}</p>
  //         </BlogBox>
  //     </Li>)

  const useEffectRef = useRef(false)
  const topicsRef = useRef<HTMLDivElement>(null)
  const headRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (useEffectRef.current) { return }
    window.addEventListener('scroll', () => {
      if (topicsRef.current) {
        const scrollPosition = topicsRef.current.getBoundingClientRect().top
        // console.log(scrollPosition)
        // console.log(window.innerHeight)
        const frozen = scrollPosition <= 0 && window.innerHeight * 4 + scrollPosition > 0
        if (headRef.current) {
          if (frozen) {
            headRef.current.style.position = 'fixed'
            headRef.current.style.width = '200%'
          } else {
            headRef.current.style.position = 'absolute'
          }
        }
      }
    })

    // useEffectRef.current = true
  })

  return (
    <>
        <Container ref={topicsRef} id='blogs'>
            <TopicsWrapper ref={headRef}>
                <Head>Topics</Head>
                <SubHeader className='small'>Hold on tight and check out my work.</SubHeader>
            </TopicsWrapper>
            {/* <Ul>
                <Blogs />
            </Ul> */}
        </Container>
    </>
  )
}

export default BlogList
