import React from 'react'
import styled from 'styled-components'
import '../index.css'

const Navbar = styled.nav`
  font-family: 'Nunito', sans-serif;
  font-weight: 600;
  background: #fff1ec;
  display: flex;
  width: 100%;
  position: sticky;
  z-index: 1000;
  top: 0;
  justify-content: space-around;
  a {
    text-decoration: none;
    color: #fc7a5b;
  }
  
  a:visited {
    color: #fc7a5b;
  }
  
`
const Ul = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  padding-top: 2%;
  padding-bottom: 2%;
  padding-left: 0;
  list-style-type: none;
  justify-content: center;
`

const Li = styled.li`
  margin-left: 5%;
  margin-right: 5%;
`

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

  i {
    transition: transform ease 0.5s, -webkit-transform ease 0.5s;
  }

  &:hover i {
    transform: rotate(-135deg);
    -webkit-transform: rotate(-135deg);
  }

  &:hover ul {
    display: flex;
  }
`

const BlogListContainer = styled.div`

  position: relative;

  ul {
    position: absolute;
    display: none;
    flex-direction: column;
    padding: 0;
    z-index: 100;
  }

  &:hover ul {
    display: flex;
  }
`

const NavbarScroller = (props: {links: {name: string; to: string}[], blogs: {name: string; to: string, img: string}[] }) => {
  const { links, blogs } = props
  const DropdownLinks: any = () => blogs.map((link: {name: string, to: string}) =>
      <Link key={link.name} className='navbar shadow dropdown-item' href={link.to}>{link.name}</Link>
  )
  const home = { name: 'Home', to: '/' }

  function makeLink (link: {name: string; to: string}) {
    if (link.name === 'Blogs') {
      return (
        <BlogListContainer>
          <Link key={link.name} className='navbar shadow blog' href={link.to}>{link.name} <i className="arrow down"></i>
          </Link>
          <ul>
            <DropdownLinks />
          </ul>
        </BlogListContainer>
      )
    } else {
      return (
        <Link className='navbar shadow' href={link.to}>{link.name}</Link>
      )
    }
  }

  const NavLinks: any = () => links.map((link: {name: string, to: string }) =>
      <Li key={link.name}>
        {makeLink(link)}
      </Li>
  )

  return (
      <Navbar>
          <Ul className='left'>
            <Li key={home.name}>
              {makeLink(home)}
            </Li>
          </Ul>
          <Ul className='right'>
            <NavLinks />
          </Ul>
      </Navbar>
  )
}

export default NavbarScroller
