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
import Healthcare from './components/blogs/Healthcare';

const navigation = {
  links: [
    { name: "Blogs", to: "/#blogs"},
    { name: "About Me", to: "/about"},
    { name: "Contact", to: "#contact"},
  ],
  blogs: [
    { name: "Healthcare", to: "/healthcare", img: "healthcare.png" },
    { name: "Mass Incarceration", to: "mass-incarceration", img: "mass-incarceration.jpg"}
  ]
}

const Container = styled.div`
  position: relative;
`;

ReactDOM.render(
  
  <React.StrictMode>
    <Container className='bg'>
      <Router>
        <NavbarScroller links={navigation.links} blogs={navigation.blogs}/>
        <Routes>
          <Route path="/" element={<App blogs={navigation.blogs}/>} />
          <Route path="/about" element={<About />} />
          <Route path="/healthcare" element={<Healthcare />} />
        </Routes>
        <Footer />
      </Router>
    </Container>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();