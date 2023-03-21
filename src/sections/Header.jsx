import React from 'react'
import Navbar from '../components/Navbar'
import arrowDown from '../assets/icon-arrow-down.svg'

import '../scss/sections/_header.scss'

const Header = () => {
  return (
    <header className='header'>
        <Navbar/>
        <h1>WE ARE CREATIVES</h1>
        <img src={arrowDown} alt='scroll down'/>

    </header>
  )
}

export default Header