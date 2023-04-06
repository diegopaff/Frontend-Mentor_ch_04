import React, { useState } from 'react';
import logoSvg from '../assets/logo.svg';
import menuSvg from '../assets/mobile/icon-hamburger.svg'

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
        <ul className='navigation__menu-desktop'>
            <li className='navigation__menu-desktop-item'> <a href='#About'> About </a></li>
            <li className='navigation__menu-desktop-item'><a href='#Services'>  Services </a></li>
            <li className='navigation__menu-desktop-item'><a href='#Projects'>  Projects </a></li>
            <li className='navigation__menu-desktop-item'><button>CONTACT</button></li>
        </ul>

      }
      {
        openNav &&
        <div className='navigation__menu-container'>
          <div className='little-triangle'>

          </div>
          <ul className='navigation__menu'>
            <li className='navigation__menu-item'><a href='#About'> About </a></li>
            <li className='navigation__menu-item'><a href='#Services'>  Services </a></li>
            <li className='navigation__menu-item'><a href='#Projects'>  Projects </a></li>
            <li className='navigation__menu-item'><button>CONTACT</button></li>
          </ul>

        </div>
      }
    </nav>
  )
}

export default Navbar