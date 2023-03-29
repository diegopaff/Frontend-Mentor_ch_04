import React from 'react'

import '../scss/sections/_about.scss'

import serviceTransform from '../assets/mobile/image-transform.jpg'
import serviceStandOut from '../assets/mobile/image-stand-out.jpg'

const About = () => {
  return (
    <section id='About' className='about'>
        <div className="about-container">
            <div className='about__img-transform'></div>
            <div className="about__info transform">
                <h2>Transform your brand</h2>
                <p>We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.</p>
                <a className='about__info-linkYellow' href='#'>LEARN MORE</a>
            </div>
        </div>
        <div className="about-container">
            <div className='about__img-stand-out'></div>
            <div className="about__info stand-out">
                <h2>Stand out to the right audience</h2>
                <p>Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places.</p>
                <a href='#' className='about__info-linkRose'>LEARN MORE</a>
            </div>
        </div>
    </section>
  )
}

export default About