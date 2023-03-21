import React, { useState } from 'react';
import logoSvg from '../assets/logo.svg';
import menuSvg from '../assets/icon-hamburger.svg'

import '../scss/components/_Navbar.scss'

const Navbar = () => {

  const [openNav, setOpenNav] = useState(false);

  const toggleNav = () => {
    setOpenNav(prev => !prev)
  }

  return (
    <nav className='navigation'>
      <div>
        <img className='navigation__logo' src={logoSvg} />
        <img className='navigation__menu' onClick={toggleNav} src={menuSvg} />
      </div>
      {
        openNav && 
        <ul>
          <li>About</li>
          <li>Services</li>
          <li>Projects</li>
          <li><button>Contact</button></li>
        </ul>
      }
    </nav>
  )
}

export default Navbar