import 'normalize.css'
import './index.css'
import styled from 'styled-components'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from './components/About'
import Healthcare from './components/blogs/Healthcare'
import MassIncarceration from './components/blogs/MassIncarceration'
import Unions from './components/blogs/Unions'
import Texas from './components/blogs/Texas'

const navigation = {
  links: [
    { name: 'Blogs', to: '/#blogs' },
    { name: 'About', to: '/about' },
    { name: 'Contact', to: '#contact' }
  ],
  topics: [
    { name: 'Healthcare', to: '/healthcare', img: 'healthcare.png', animation: 'Healthcare.gif' },
    { name: 'Mass Incarceration', to: 'mass-incarceration', img: 'mass-incarceration.png', animation: 'mass-incarceration.gif' },
    { name: 'Unions', to: 'unions', img: 'union.png', animation: 'union.gif' }
  ]
}

const Container = styled.div`
  position: relative;
  height: 100%;
`

ReactDOM.render(
  <React.StrictMode>
    <Container className='bg'>
      <Router>
        <Routes>
          <Route path='/' element={<App topics={navigation.topics}/>} />
          <Route path='/about' element={<About />} />
          <Route path='/healthcare' element={<Healthcare />} />
          <Route path='/mass-incarceration' element={<MassIncarceration />} />
          <Route path='/unions' element={<Unions />} />
          <Route path='/texas' element={<Texas />} />
        </Routes>
      </Router>
    </Container>
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
