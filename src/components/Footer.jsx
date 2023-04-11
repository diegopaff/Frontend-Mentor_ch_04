import React from 'react'
import logoSvg from '../assets/logoGreen.svg';
import iconFacebook from '../assets/icon-facebook.svg';
import iconTwitter from '../assets/icon-twitter.svg';
import iconPinterest from '../assets/icon-pinterest.svg';
import iconInstagram from '../assets/icon-instagram.svg';
import '../scss/components/_Footer.scss'

const Footer = () => {
  return (
    <footer className='footer-container'>
        <img className='footer__logo' src={logoSvg} alt='logo sunnyside'/> 
        <ul className='footer__navigation'>
            <li className=''><a href='#About'> About </a></li>
            <li className=''><a href='#Services'>  Services </a></li>
            <li className=''><a href='#Projects'>  Projects </a></li>
           
        </ul> 
        <ul className='footer__socialContact'>
            <li className=''> 
              <a href=''> 
                <img className='Icons' src={iconFacebook} alt='Facebook sunnyside'/> 
              </a>
            </li>
            <li className=''> 
              <a href=''> 
                <img className='Icons' src={iconInstagram} alt='Instagram sunnyside'/> 
              </a>
            </li>
            <li className=''> 
              <a href=''> 
                <img className='Icons' src={iconTwitter} alt='Twitter sunnyside'/> 
              </a>
            </li>
            <li className=''> 
              <a href=''> 
                <img className='Icons' src={iconPinterest} alt='Pinteres sunnyside'/> 
              </a>
            </li>
            
        </ul> 
    </footer>
  )
}

export default Footer