import React from 'react'
import TestimonialCard from '../components/TestimonialCard';
import dataTestimonials from '../assets/dataTestimonials.json';

import '../scss/sections/_testimonials.scss';

const Testimonials = () => {

 
  return (
    <div id='Testimonials' className='testimonials'>

      <h2>CLIENT TESTIMONIALS</h2>
      <div className='testimonialCard-container'>
        {dataTestimonials.map((el, index)=> <TestimonialCard {...el} key={index}/>)}  
      </div>
        
    </div>
  )
}

export default Testimonials