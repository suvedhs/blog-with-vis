import styled from 'styled-components';
import '../index.css'

const Container=styled.div`
    margin: 5%;

`;

const Head = styled.h2`
    content-align: center;
    padding: 20px;
`

const BlogBox=styled.a`
    background: #f0f0d6;
    padding: 30px;
    display:flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;

    img {
        height: 10em;
        border-radius: 5px;
    }

    p {
        text-align: center;
    }
`

const Ul = styled.ul`
    padding-left: 10%;
    padding-right: 10%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

`;

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
  -webkit-tap-highlight-color: transparent;
  align-items: center;
  display: flex;
  font-size: 18px;
  justify-content: center;
  padding: 25px 35px;
  text-decoration: none;
  white-space: nowrap;
  position: relative;
  transition: top ease 0.5s;
  top: 0;

  &:hover {
      top: -10px;
  }
  `;

const BlogList = ( props: {blogs: Array<{name: string; to: string; img: string}>} ) => {

    const {blogs} = props
    const BlogList: any = () => blogs.map((link: {name: string, to: string, img:string }) => 
        <Li key={link.name}>
            <BlogBox className='small rounded link' href={link.to}>
                <img src={require('../assets/' + link.img)} alt= {link.img + ' image'}></img>
                <p>{link.name}</p>
            </BlogBox>
        </Li>)

    return (
        <Container>
            <Head className='big'>My posts:</Head>
            <Ul>
                <BlogList />
            </Ul>
        </Container>
    )
}

export default BlogList