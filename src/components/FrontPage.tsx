import styled from 'styled-components';
import '../index.css'

const Bold = styled.span`
  font-size: 21px;
  font-weight: 600;
`;

const Text = styled.div`
    display:flex;
    flex-direction: column;
    padding: 30px;
    width: 60%;
    align-items: stretch;
`

const Pic = styled.img`
    display:flex;
    padding: 2%;
`

const Intro = styled.div`
  background: #f0f0d6;
  height: 40%;
  width: 90%;
  display: flex;
  font-family: 'Bitter', serif;
  margin: 0 5%;
  justify-content: center;
  align-content: center;
`

const FrontPage = (props: any) => {
    return (
        <Intro>
            <Text>
                <div className='big'>Hi. I'm Suvedh. A Leftist.</div>
                <div className='small'>I'm also a <a className='link' href='https://github.com/suvedhs'>full-stack developer</a> and <a className='link' href='https://www.twitter.com/groovysuvy'>Funny Guy™</a> with a newfound passion for <Bold>data visualization.</Bold> I blog about topics in American politics using analysis from publicly available data.</div>
            </Text>
            <Pic src={require('../assets/genericbargraph.png')} alt='generic bar graph'></Pic>
        </Intro>
    )
}

export default FrontPage