import React from 'react'
import styled from 'styled-components'
import ReactLoading from 'react-loading'

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    height: 100%;
    width: auto;
    background-color: '#fc7a5b';
    animation: fadeOutAnimation ease 1s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    animation-delay: 1s;

    @keyframes fadeOutAnimation {
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
`

function LoadingScreen () {
  return (
    <Container>
        <ReactLoading type='bars' color='#88f' height={300} width={300}>
        </ReactLoading>
    </Container>
  )
}

export default LoadingScreen
