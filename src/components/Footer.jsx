import React from 'react'
import logoSvg from '../assets/logoGreen.svg';
import '../scss/components/_Footer.scss'

const Footer = () => {
  return (
    <footer className='footer-container'>
        <img className='footer__logo' src={logoSvg} alt='logo sunnyside'/> 
{/*         <ul className='navigation__menu-desktop'>
            <li className='navigation__menu-desktop-item'><a href='#About'> About </a></li>
            <li className='navigation__menu-desktop-item'><a href='#Services'>  Services </a></li>
            <li className='navigation__menu-desktop-item'><a href='#Projects'>  Projects </a></li>
           
        </ul>
        <ul className='navigation__menu-desktop'>
            <li className='navigation__menu-desktop-item'> <a href='#About'> About </a></li>
            <li className='navigation__menu-desktop-item'><a href='#Services'>  Services </a></li>
            <li className='navigation__menu-desktop-item'><a href='#Projects'>  Projects </a></li>
            <li className='navigation__menu-desktop-item'><button>CONTACT</button></li>
        </ul> */}
    </footer>
  )
}

export default Footer