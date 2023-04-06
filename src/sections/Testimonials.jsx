import React from 'react'
import TestimonialCard from '../components/TestimonialCard';
import dataTestimonials from '../assets/dataTestimonials.json';

import '../scss/sections/_testimonials.scss';

const Testimonials = () => {

 
  return (
    <div id='Testimonials' className='testimonial'>
        {dataTestimonials.map((el, index)=> <TestimonialCard {...el} key={index}/>)}
        
    </div>
  )
}

export default Testimonials