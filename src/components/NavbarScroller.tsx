import styled from 'styled-components';
import '../index.css';

const Navbar = styled.nav`
  font-family: 'Nunito', sans-serif;
  background: #fefaf6;
  display: flex;
  position: sticky;
  top: 0;
  align-items: center;
  justify-content: space-between;
  a { color: #232320; text-decoration: none; }`;
const Ul = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  padding: 0;
  -webkit-overflow-scrolling: touch;`;

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
  white-space: nowrap;`;


const NavbarScroller = ( props: {links: Array<{name: string; to: string}>} ) => {
  
    const {links} = props;
    const NavLinks: any = () => links.map((link: {name: string, to: string }) => 
        <Li className='navbar' key={link.name}><a href={link.to}>{link.name}</a></Li>)

    return (
        <Navbar>
            <Ul>
              <NavLinks />
            </Ul>
        </Navbar>
    )
}

export default NavbarScroller