import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 5%;
`

const Super = styled.div`
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

const BlogpostTitle = (props: {title: string }) => {
  const { title } = props

  return (
    <Container>
        <Pathetic className='big'>The Pathetic State of</Pathetic>
        <Super>{title}</Super>
    </Container>
  )
}

export default BlogpostTitle
