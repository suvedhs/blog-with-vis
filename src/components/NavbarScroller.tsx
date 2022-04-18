import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import '../index.css'

const Space = styled.div`
  @media screen and (max-width: 1000px) {
      height: 100px;
  }
`

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

  @media screen and (max-width: 1000px) {
      display: none;
  }
`

const MobileNavbar = styled.nav`
  font-family: 'Nunito', sans-serif;
  font-weight: 600;
  background: #ffd364;
  display: none;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  bottom:0;
  width: 0%;
  z-index: 10;
  opacity: 0;
  overflow: auto;
  transition: all 600ms cubic-bezier(.62,.04,.3,1.56);
  transition-delay: 100ms;

  ul {
    position: fixed;
    margin-top: 30%;
    width: 45%;
    li {
      font-family: 'Nunito', sans-serif;
      font-weight: 600;
      list-style: none;
      font-size: 24px;
      margin-top: 25px;
      letter-spacing: 1.7px;
      
      &:before {
        
      }
    }
  }

  @media screen and (max-width: 1000px) {
      display: flex;
  }

  @keyframes slideIn {
    0% {
      width: 0%;
      // transform: scale(.3);
      opacity: 0;
    }
    
    100% {
      width: 50%;
      // transform:scale(1);
      opacity: 1;
    }
  }
  
  &.show {
    width: 60%;
    opacity: 1;
  }
`

const OrangeBackground = styled.div`
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  background: #fc7a5b;
  height: 100%;
  width: 0%;
  transition: all 500ms cubic-bezier(.62,.04,.3,1.8);
  transition-delay: 50ms;
  z-index: 5;
  opacity: 1;
  @media screen and (max-width: 1000px) {
      display: flex;
  }

  &.slide {
    width: 61%;
    opacity: 1;
  }
`

const Hamburger = styled.div`
  position: absolute;
  height: 60px;
  width: 60px;
  top: 15px;
  left: 15px;
  z-index: 1001;
  cursor: pointer;
  border-radius: 50%;
  transition: all 0.2s ease-in-out;
  display: none;

  .icon-1, .icon-2, .icon-3 {
      position: absolute;
      left: 25%;
      top: 50%;
      width: 32px;
      height: 3px;
      background-color: #fc7a5b;
      transition: all 400ms cubic-bezier(.84,.06,.52,1.8);
  }

  .icon-1 {
    transform: translateY(-8px);
    animation-delay: 100ms;
  }

  .icon-3 {
    transform: translateY(8px);
    animation-delay: 250ms;
  }

  .a {
    transform: rotate(40deg);
  }
  .b {
    transform: rotate(-40deg);
  }
  .c {
    opacity: 0;
  }

  @media screen and (max-width: 1000px) {
      display: block;
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

  i.clicked {
    transform: rotate(-135deg);
    -webkit-transform: rotate(-135deg);
  }

  ul {
    display: none;
  }

  ul.shown {
    display: flex;
  }
`

const MobileLink = styled.a`
  color: #fc7a5b;
  text-decoration: none;
  font-weight: 400;
  cursor: pointer;
  line-height: 0%;
  padding-right: 30%;

  i {
    transition: transform ease 0.5s, -webkit-transform ease 0.5s;
  }

  i.clicked {
    transform: rotate(-135deg);
    -webkit-transform: rotate(-135deg);
  }

  ul {
    display: none;
  }

  @media screen and (max-width: 500px) {
    font-size: .8em;
  }

  @media screen and (max-width: 350px) {
    font-size: 15px;
  }
`

const BlogListContainer = styled.div`

  position: relative;

  ul {
    position: absolute;
    display: none;
    flex-direction: column;
    list-style: none;
    padding: 0;
    z-index: 100;
  }

  &:hover ul {
    display: flex;
  }
`

const BlogListContainerMobile = styled.div`
  position: relative;

  ul {
    position: relative;
    display: none;
    flex-direction: column;
    padding: 0;
    margin-top: 0;
    margin-left: 5%;
    z-index: 100;
    transition: all 0.2s ease-in-out;
  }

`

const NavbarScroller = (props: {links: {name: string; to: string}[], blogs: {name: string; to: string, img: string}[] }) => {
  const { links, blogs } = props
  const DropdownLinks: any = () => blogs.map((link: {name: string, to: string}) =>
      <li key={link.name}>
        <Link className='navbar shadow dropdown-item' href={link.to}>{link.name}</Link>
      </li>
  )
  const DropdownMobileLinks: any = () => blogs.map((link: {name: string, to: string}) =>
      <li key={link.name}>
        <MobileLink href={link.to}>{link.name}</MobileLink>
      </li>
  )
  const home = { name: 'Home', to: '/' }

  const hamburgerRef = useRef<HTMLDivElement>(null)
  const icon1 = useRef<HTMLDivElement>(null)
  const icon2 = useRef<HTMLDivElement>(null)
  const icon3 = useRef<HTMLDivElement>(null)
  const navslider = useRef<HTMLDivElement>(null)
  const orangeRef = useRef<HTMLDivElement>(null)

  const arrow = useRef<HTMLElement>(null)
  const bloglistref = useRef<HTMLUListElement>(null)

  let toggledMobileNav = false
  let toggleBlog = false

  function toggleBlogList () {
    toggleBlog = !toggleBlog
    if (arrow.current && bloglistref.current) {
      if (toggleBlog) {
        arrow.current.className += ' clicked'
        bloglistref.current.style.display = 'flex'
      } else {
        arrow.current.className = arrow.current.className.substring(0, arrow.current.className.length - 8)
        bloglistref.current.style.display = 'none'
      }
    }
  }

  function toggleMobileNavbar () {
    toggledMobileNav = !toggledMobileNav
    if (!toggledMobileNav) {
      toggleBlog = false
    }
    if (icon1.current && icon2.current && icon3.current && navslider.current && orangeRef.current && hamburgerRef.current) {
      if (toggledMobileNav) {
        icon1.current.className += ' a'
        icon2.current.className += ' b'
        icon3.current.className += ' c'
        hamburgerRef.current.style.position = 'fixed'
        navslider.current.className += ' show'
        orangeRef.current.className += ' slide'
      } else {
        icon1.current.className = icon1.current.className.substring(0, icon1.current.className.length - 2)
        icon2.current.className = icon2.current.className.substring(0, icon2.current.className.length - 2)
        icon3.current.className = icon3.current.className.substring(0, icon3.current.className.length - 2)
        hamburgerRef.current.style.position = 'absolute'
        navslider.current.className = navslider.current.className.substring(0, navslider.current.className.length - 5)
        orangeRef.current.className = orangeRef.current.className.substring(0, orangeRef.current.className.length - 6)
      }
    }
  }

  function makeLink (link: {name: string; to: string}, isMobile: boolean) {
    if (link.name === 'Blogs') {
      if (isMobile) {
        return (
          <BlogListContainerMobile>
            <MobileLink key={link.name} onClick={toggleBlogList}>{link.name}<i className="arrow down" ref={arrow}></i></MobileLink>
            <ul ref={bloglistref}>
              <DropdownMobileLinks />
            </ul>
          </BlogListContainerMobile>
        )
      } else {
        return (
          <BlogListContainer>
            <Link key={link.name} className='navbar shadow blog' href={link.to}>{link.name}<i className="arrow down"></i>
            </Link>
            <ul>
              <DropdownLinks />
            </ul>
          </BlogListContainer>
        )
      }
    } else {
      if (isMobile) {
        return (
          <MobileLink href={link.to}>{link.name}</MobileLink>
        )
      } else {
        return (
          <Link className='navbar shadow' href={link.to}>{link.name}</Link>
        )
      }
    }
  }

  function handleNav () {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickNav (event: { target: any }) {
        if ((navslider.current && !navslider.current.contains(event.target) && toggledMobileNav) || (hamburgerRef.current && hamburgerRef.current.contains(event.target))) {
          toggleMobileNavbar()
        }
      }
      // Bind the event listener
      document.addEventListener('mousedown', handleClickNav)
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener('mousedown', handleClickNav)
      }
    }, [navslider])
  }

  handleNav()

  const NavLinks: any = () => links.map((link: {name: string, to: string }) =>
      <Li key={link.name}>
        {makeLink(link, false)}
      </Li>
  )

  const MobileNavLinks: any = () => links.map((link: {name: string, to: string }) =>
    <li key={link.name}>
      {makeLink(link, true)}
    </li>
  )

  return (
      <div>
        <Navbar>
            <Ul className='left'>
              <Li key={home.name}>
                {makeLink(home, false)}
              </Li>
            </Ul>
            <Ul className='right'>
              <NavLinks />
            </Ul>
        </Navbar>
        <Space />
        <Hamburger ref={hamburgerRef}>
          <div className="icon-1" ref={icon1} />
          <div className="icon-2" ref={icon2} />
          <div className="icon-3" ref={icon3} />
        </Hamburger>
        <MobileNavbar ref={navslider}>
          <ul>
            <li key={home.name}>
              {makeLink(home, true)}
            </li>
            <MobileNavLinks />
          </ul>
        </MobileNavbar>
        <OrangeBackground ref={orangeRef}/>
      </div>
  )
}

export default NavbarScroller
