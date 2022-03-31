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
        font-size: 30px;
    }
`

const Ul = styled.ul`
    display: flex;
    flex-direction: row;
    -webkit-overflow-scrolling: touch;
    overflow: auto;

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
  margin: 5%;
  justify-content: center;
  padding: 25px 35px;
  text-decoration: none;
  white-space: nowrap;
  `;

const BlogList = ( props: {blogs: Array<{name: string; to: string; img: string}>} ) => {

    const {blogs} = props
    const BlogList: any = () => blogs.map((link: {name: string, to: string, img:string }) => 
        <Li className='shadow' key={link.name}>
            <BlogBox className='small rounded link' href={link.to}>
                <img src={require('../assets/' + link.img)} alt= {link.img + ' image'}></img>
                <p>{link.name}</p>
            </BlogBox>
        </Li>)

    return (
        <Container id='blogs'>
            <Head className='big'>My posts:</Head>
            <Ul>
                <BlogList />
            </Ul>
        </Container>
    )
}

export default BlogList