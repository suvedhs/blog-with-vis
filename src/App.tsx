import styled from 'styled-components';
import NavbarScroller from './components/NavbarScroller';
import FrontPage from './components/FrontPage';

const Home = styled.div`
  background: #fefaf6;
  height: 100%;
`;

const navigation = {
  links: [
    { name: "Home", to: "/"},
    { name: "Blogs", to: "/healthcare"},
    { name: "About Me", to: "/about" },
    { name: "Contact", to: "/contact" },
  ]
}

function App() {

  const {links} = navigation

  return (
    <Home>
      <NavbarScroller links={links}/>
      <FrontPage />
    </Home>
  );
}

export default App;
