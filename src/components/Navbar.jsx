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
        <img className='navigation__menu-icon' onClick={toggleNav} src={menuSvg} />
      </div>
      {
        !openNav && 
        <ul className='navigation__menu'>
            <li className='navigation__menu-item'>About</li>
            <li className='navigation__menu-item'>Services</li>
            <li className='navigation__menu-item'>Projects</li>
            <li className='navigation__menu-item'><button>CONTACT</button></li>
        </ul>

      }
      {
        openNav &&
        <div className='navigation__menu-container'>
          <div className='little-triangle'>

          </div>
          <ul className='navigation__menu'>
            <li className='navigation__menu-item'>About</li>
            <li className='navigation__menu-item'>Services</li>
            <li className='navigation__menu-item'>Projects</li>
            <li className='navigation__menu-item'><button>CONTACT</button></li>
          </ul>

        </div>
      }
    </nav>
  )
}

export default Navbar