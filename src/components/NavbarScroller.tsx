import styled from 'styled-components';
import '../index.css';

const Navbar = styled.nav`
  font-family: 'Nunito', sans-serif;
  font-weight: 600;
  background: #fff1ec;
  display: flex;
  position: sticky;
  z-index: 1000;
  top: 0;
  align-items: center;
  justify-content: space-between;
  a {
    text-decoration: none;
    color: #fc7a5b;
  }
  
  a:visited {
    color: #fc7a5b;
  }
  
`;
const Ul = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  padding-left: 3%;
  padding-top: 2%;
  list-style-type: none;
  padding-bottom: 2%;
  -webkit-overflow-scrolling: touch;
`;

const Li = styled.li`
  margin-left: 5%;
  margin-right: 5%;
`;

const Link = styled.a`
  -webkit-box-align: center;
  -webkit-box-pack: center;
  -webkit-tap-highlight-color: transparent;
  align-items: center;
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
`;


const NavbarScroller = ( props: {links: Array<{name: string; to: string, icon: string}>} ) => {
  
    const {links} = props;
    const NavLinks: any = () => links.map((link: {name: string, to: string, icon:string }) => 
        <Li key={link.name}>
          {makeLink(link)}
        </Li>
      )

    function makeLink(link: {name: string; to: string, icon: string}) {
      if(link.icon === "arrow down") {
        return (
          <Link className='navbar shadow' href={link.to}>{link.name} <i className="arrow down"></i></Link>
        )
      }
      else {
        return (
          <Link className='navbar shadow' href={link.to}>{link.name}</Link>
        )
      }
    }

    return (
        <Navbar>
            <Ul>
              <NavLinks />
            </Ul>
        </Navbar>
    )
}

export default NavbarScroller