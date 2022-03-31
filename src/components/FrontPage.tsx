import styled from 'styled-components';
import '../index.css'

const Italics = styled.span`
  font-style: italic;
  font-weight: 400;
`;

const Text = styled.div`
    padding: 5%;
    width: 50%;
    display:flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;

    div.big {
        font-size: 500%;
    }
`

const Pic = styled.img`
    display:flex;
    padding: 5%;
    filter: invert(57%) sepia(82%) saturate(2152%) hue-rotate(209deg) brightness(98%) contrast(106%);
    width: 30%;
    height: 100%;
`

const Intro = styled.div`
  width: 90%;
  display: flex;
  font-family: 'Bitter', serif;
  margin: 0 5%;
  justify-content: center;
  align-items: center;
`

const FrontPage = (props: any) => {
    return (
        <Intro className='rounded'>
            <Text>
                <div className='big'>Hi. I'm Suvedh.</div>
                <div className='big'>A Leftist.</div>
                <div className='small'>I'm also a <a className='link' href='https://github.com/suvedhs'>full-stack developer</a> and <a className='link' href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>Funny Guy™</a> with a newfound passion for <Italics>data visualization</Italics>. I blog about topics in American politics using analysis from publicly available data.</div>
            </Text>
            <Pic src={require('../assets/genericbargraph.png')} alt='generic bar graph'></Pic>
        </Intro>
    )
}

export default FrontPage