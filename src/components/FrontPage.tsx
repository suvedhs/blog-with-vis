import styled from 'styled-components';
import '../index.css'

const Big = styled.div`
  font-size: 3.5em;
  padding: 5px;
`

const Small = styled.div`
  font-size: 20px;
  padding: 5px;
`

const Bold = styled.span`
  font-size: 21px;
  font-weight: 600;
`;

const Link = styled.a`
    color: black;
`

const Text = styled.div`
    display:flex;
    flex-direction: column;
    padding: 30px;
    width: 60%;
    align-items: stretch;
`

const Pic = styled.img`
    display:flex;
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
                <Big>Hi. I'm Suvedh. A Leftist.</Big>
                <Small>I'm also a <Link href='https://github.com/suvedhs'>full-stack developer</Link> and <Link href='https://www.twitter.com/groovysuvy'>Funny Guy™</Link> with a newfound passion for <Bold>data visualization.</Bold> I analyze publicly available data to explain my political stances.</Small>
            </Text>
            <Pic src={require('../assets/genericbargraph.png')} alt='generic bar graph'></Pic>
        </Intro>
    )
}

export default FrontPage