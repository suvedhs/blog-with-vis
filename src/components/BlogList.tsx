import React from 'react'
import styled from 'styled-components'
import '../index.css'

const Container = styled.div`
    margin: 15%;
    scroll-margin-top: 10em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Head = styled.h2`
    padding: 20px;
    text-align: center;
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
    height: auto;
    align-items: center;
    justify-content: start;
`

const Li = styled.li`
  -webkit-box-align: center;
  -webkit-box-pack: center;
  -webkit-tap-highlight-color: transparent;
  align-items: center;
  height: 100%;
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

const BlogList = (props: {blogs: {name: string; to: string; img: string, animation: string}[] }) => {
  const { blogs } = props
  const Blogs: any = () => blogs.map((link: {name: string, to: string, img:string, animation: string }) =>
    <Li className='shadow point' key={link.name}>
        <BlogBox className='small rounded link' href={link.to}>
            <img className='static' src={require('../assets/' + link.img)} alt= {link.img + ' image'}></img>
            <img className='active' src={require('../assets/' + link.animation)} alt= {link.img + ' image'}></img>

            <p>{link.name}</p>
        </BlogBox>
    </Li>)

  return (
    <Container id='blogs'>
        <Head className='big'>My posts:</Head>
        <Ul>
            <Blogs />
        </Ul>
    </Container>
  )
}

export default BlogList
