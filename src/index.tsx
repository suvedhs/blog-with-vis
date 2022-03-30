import 'normalize.css';
import './index.css';
import styled from 'styled-components';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavbarScroller from './components/NavbarScroller';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';

const navigation = {
  links: [
    { name: "Blogs", to: "/"},
    { name: "About Me", to: "/about" },
    { name: "Contact", to: "/contact" },
  ],
  bloglist: [
    { name: "Healthcare", to: "/healthcare" }
  ]
}

const Container = styled.div`
  background: #fefaf6;
  position: relative;
`;

ReactDOM.render(
  
  <React.StrictMode>
    <Container>
      <Router>
        <NavbarScroller links={navigation.links} />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </Container>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();